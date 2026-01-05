import requests
import sys
import json
from datetime import datetime

class BowlingAlleyAPITester:
    def __init__(self, base_url="https://lane-reservations.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}" if endpoint else self.api_url
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            elif method == 'DELETE':
                response = requests.delete(url, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                except:
                    print(f"   Response: {response.text[:100]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")

            self.test_results.append({
                "name": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": response.status_code,
                "success": success,
                "response_preview": response.text[:100] if not success else "OK"
            })

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.test_results.append({
                "name": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": "ERROR",
                "success": False,
                "response_preview": str(e)
            })
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        return self.run_test("API Root", "GET", "", 200)

    def test_pricing_endpoint(self):
        """Test pricing endpoint"""
        return self.run_test("Get Pricing", "GET", "pricing", 200)

    def test_create_reservation(self):
        """Test creating a reservation"""
        reservation_data = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "555-123-4567",
            "date": "2025-02-15",
            "time": "2:00 PM",
            "num_lanes": 2,
            "shoe_rental": 4,
            "party_package": None,
            "notes": "Test reservation"
        }
        
        success, response = self.run_test(
            "Create Reservation",
            "POST",
            "reservations",
            200,
            data=reservation_data
        )
        
        if success and 'id' in response:
            return response['id']
        return None

    def test_get_reservations(self):
        """Test getting all reservations"""
        return self.run_test("Get All Reservations", "GET", "reservations", 200)

    def test_get_reservation_by_id(self, reservation_id):
        """Test getting a specific reservation"""
        if not reservation_id:
            print("⚠️  Skipping get reservation by ID - no reservation ID available")
            return False, {}
        
        return self.run_test(
            "Get Reservation by ID",
            "GET",
            f"reservations/{reservation_id}",
            200
        )

    def test_create_reservation_with_party_package(self):
        """Test creating a reservation with party package"""
        reservation_data = {
            "name": "Party Host",
            "email": "party@example.com", 
            "phone": "555-987-6543",
            "date": "2025-02-20",
            "time": "6:00 PM",
            "num_lanes": 1,
            "shoe_rental": 8,
            "party_package": "kids",
            "notes": "Kids birthday party"
        }
        
        success, response = self.run_test(
            "Create Reservation with Party Package",
            "POST",
            "reservations",
            200,
            data=reservation_data
        )
        
        if success and 'total_price' in response:
            print(f"   Total price calculated: ${response['total_price']}")
        
        return success, response

    def test_invalid_reservation(self):
        """Test creating an invalid reservation"""
        invalid_data = {
            "name": "",  # Invalid: empty name
            "email": "invalid-email",  # Invalid email format
            "phone": "555-123-4567",
            "date": "2025-02-15",
            "time": "2:00 PM",
            "num_lanes": 0,  # Invalid: 0 lanes
            "shoe_rental": 4
        }
        
        return self.run_test(
            "Create Invalid Reservation",
            "POST",
            "reservations",
            422,  # Expecting validation error
            data=invalid_data
        )

def main():
    print("🎳 Starting GoldenLane Bowl API Tests...")
    print("=" * 50)
    
    # Setup
    tester = BowlingAlleyAPITester()
    
    # Run basic API tests
    tester.test_api_root()
    tester.test_pricing_endpoint()
    
    # Test reservation creation and retrieval
    reservation_id = tester.test_create_reservation()
    tester.test_get_reservations()
    tester.test_get_reservation_by_id(reservation_id)
    
    # Test party package functionality
    tester.test_create_reservation_with_party_package()
    
    # Test validation
    tester.test_invalid_reservation()
    
    # Print final results
    print("\n" + "=" * 50)
    print(f"📊 API Tests Summary:")
    print(f"   Tests passed: {tester.tests_passed}/{tester.tests_run}")
    print(f"   Success rate: {(tester.tests_passed/tester.tests_run)*100:.1f}%")
    
    # Print failed tests
    failed_tests = [test for test in tester.test_results if not test['success']]
    if failed_tests:
        print(f"\n❌ Failed Tests:")
        for test in failed_tests:
            print(f"   - {test['name']}: {test['actual_status']} (expected {test['expected_status']})")
            print(f"     Error: {test['response_preview']}")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())