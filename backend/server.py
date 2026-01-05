from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str


# Reservation Models
class ReservationCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    date: str  # ISO date string YYYY-MM-DD
    time: str  # Time slot like "10:00 AM"
    num_lanes: int = Field(ge=1, le=10)
    shoe_rental: int = Field(ge=0, default=0)  # Number of shoe rentals
    party_package: Optional[str] = None  # "kids", "adult", "premium", or None
    notes: Optional[str] = None


class Reservation(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str
    date: str
    time: str
    num_lanes: int
    shoe_rental: int
    party_package: Optional[str] = None
    notes: Optional[str] = None
    deposit: float = PRICING["deposit"]
    total_price: float
    balance_due: float = 0.0  # Total minus deposit
    status: str = "confirmed"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# Pricing constants
PRICING = {
    "lane_per_hour": 35.00,
    "shoe_rental": 5.00,
    "deposit": 20.00,  # Required deposit to reduce no-shows
    "party_packages": {
        "kids": 150.00,  # 2 hours, 1 lane, 8 shoe rentals, decorations
        "adult": 200.00,  # 2 hours, 2 lanes, 10 shoe rentals
        "premium": 350.00,  # 3 hours, 3 lanes, 15 shoe rentals, food, decorations
    }
}


def calculate_total_price(reservation: ReservationCreate) -> float:
    total = 0.0
    
    # Base lane rental (1 hour per booking)
    total += reservation.num_lanes * PRICING["lane_per_hour"]
    
    # Shoe rentals
    total += reservation.shoe_rental * PRICING["shoe_rental"]
    
    # Party package (replaces base calculations if selected)
    if reservation.party_package and reservation.party_package in PRICING["party_packages"]:
        total = PRICING["party_packages"][reservation.party_package]
        # Add extra shoes if more than included
        included_shoes = {"kids": 8, "adult": 10, "premium": 15}.get(reservation.party_package, 0)
        if reservation.shoe_rental > included_shoes:
            total += (reservation.shoe_rental - included_shoes) * PRICING["shoe_rental"]
    
    return round(total, 2)


# Routes
@api_router.get("/")
async def root():
    return {"message": "GoldenLane Bowl API"}


@api_router.get("/pricing")
async def get_pricing():
    return PRICING


@api_router.post("/reservations", response_model=Reservation)
async def create_reservation(input: ReservationCreate):
    total_price = calculate_total_price(input)
    deposit = PRICING["deposit"]
    balance_due = total_price - deposit
    
    reservation_obj = Reservation(
        **input.model_dump(),
        total_price=total_price,
        deposit=deposit,
        balance_due=balance_due
    )
    
    # Convert to dict for MongoDB
    doc = reservation_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.reservations.insert_one(doc)
    
    return reservation_obj


@api_router.get("/reservations", response_model=List[Reservation])
async def get_reservations():
    reservations = await db.reservations.find({}, {"_id": 0}).to_list(1000)
    
    for res in reservations:
        if isinstance(res.get('created_at'), str):
            res['created_at'] = datetime.fromisoformat(res['created_at'])
    
    return reservations


@api_router.get("/reservations/{reservation_id}", response_model=Reservation)
async def get_reservation(reservation_id: str):
    reservation = await db.reservations.find_one({"id": reservation_id}, {"_id": 0})
    
    if not reservation:
        raise HTTPException(status_code=404, detail="Reservation not found")
    
    if isinstance(reservation.get('created_at'), str):
        reservation['created_at'] = datetime.fromisoformat(reservation['created_at'])
    
    return reservation


@api_router.delete("/reservations/{reservation_id}")
async def cancel_reservation(reservation_id: str):
    result = await db.reservations.delete_one({"id": reservation_id})
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Reservation not found")
    
    return {"message": "Reservation cancelled successfully"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
