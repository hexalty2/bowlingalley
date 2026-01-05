import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { toast } from "sonner";
import axios from "axios";
import { format } from "date-fns";
import {
  ArrowLeft,
  ArrowRight,
  CalendarIcon,
  Check,
  Clock,
  Users,
  Footprints,
  PartyPopper,
  User,
  Mail,
  Phone,
  FileText,
  Loader2,
} from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Pricing
const PRICING = {
  lane_per_hour: 35.0,
  shoe_rental: 5.0,
  deposit: 20.0,
  party_packages: {
    kids: 150.0,
    adult: 200.0,
    premium: 350.0,
  },
};

// Time slots
const TIME_SLOTS = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
];

const STEPS = [
  { id: 1, title: "Date & Time", icon: CalendarIcon },
  { id: 2, title: "Lanes & Extras", icon: Users },
  { id: 3, title: "Your Info", icon: User },
  { id: 4, title: "Confirm", icon: Check },
];

export default function ReservationPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reservationComplete, setReservationComplete] = useState(false);
  const [confirmationId, setConfirmationId] = useState("");

  // Form state
  const [formData, setFormData] = useState({
    date: null,
    time: "",
    num_lanes: 1,
    shoe_rental: 0,
    party_package: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const calculateTotal = () => {
    let total = 0;

    if (formData.party_package && PRICING.party_packages[formData.party_package]) {
      total = PRICING.party_packages[formData.party_package];
      const includedShoes = { kids: 8, adult: 10, premium: 15 }[formData.party_package] || 0;
      if (formData.shoe_rental > includedShoes) {
        total += (formData.shoe_rental - includedShoes) * PRICING.shoe_rental;
      }
    } else {
      total += formData.num_lanes * PRICING.lane_per_hour;
      total += formData.shoe_rental * PRICING.shoe_rental;
    }

    return total.toFixed(2);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.date && formData.time;
      case 2:
        return formData.num_lanes >= 1;
      case 3:
        return formData.name && formData.email && formData.phone;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: format(formData.date, "yyyy-MM-dd"),
        time: formData.time,
        num_lanes: formData.num_lanes,
        shoe_rental: formData.shoe_rental,
        party_package: formData.party_package || null,
        notes: formData.notes || null,
      };

      const response = await axios.post(`${API}/reservations`, payload);

      setConfirmationId(response.data.id);
      setReservationComplete(true);
      toast.success("Reservation confirmed!");
    } catch (error) {
      console.error("Reservation error:", error);
      toast.error("Failed to create reservation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (reservationComplete) {
    return (
      <div className="min-h-screen bg-background" data-testid="reservation-page">
        <Navbar />

        <div className="max-w-2xl mx-auto px-6 py-20">
          <Card className="bg-white rounded-3xl border-2 border-secondary/10 shadow-xl overflow-hidden">
            <div className="bg-primary p-8 text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-white font-['Chivo']">
                Reservation Confirmed!
              </h1>
            </div>

            <CardContent className="p-8">
              <div className="text-center mb-8">
                <p className="text-foreground/70 mb-2">Confirmation Number</p>
                <p
                  className="text-2xl font-bold text-secondary font-mono"
                  data-testid="confirmation-id"
                >
                  {confirmationId.slice(0, 8).toUpperCase()}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-3 border-b border-secondary/10">
                  <span className="text-foreground/70">Date</span>
                  <span className="font-semibold text-secondary">
                    {format(formData.date, "MMMM d, yyyy")}
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b border-secondary/10">
                  <span className="text-foreground/70">Time</span>
                  <span className="font-semibold text-secondary">{formData.time}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-secondary/10">
                  <span className="text-foreground/70">Lanes</span>
                  <span className="font-semibold text-secondary">{formData.num_lanes}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-secondary/10">
                  <span className="text-foreground/70">Total</span>
                  <span className="font-bold text-secondary text-xl">${calculateTotal()}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-secondary/10">
                  <span className="text-foreground/70">Deposit Paid</span>
                  <span className="font-semibold text-accent">${PRICING.deposit.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-foreground/70">Balance Due at Venue</span>
                  <span className="font-bold text-primary text-xl">
                    ${(parseFloat(calculateTotal()) - PRICING.deposit).toFixed(2)}
                  </span>
                </div>
              </div>

              <p className="text-center text-foreground/70 mb-8">
                A confirmation email has been sent to {formData.email}
              </p>

              <Link to="/">
                <Button
                  className="w-full rounded-full py-6 text-lg font-bold bg-primary text-white hover:bg-primary/90"
                  data-testid="back-home-btn"
                >
                  Back to Home
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" data-testid="reservation-page">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary font-['Chivo'] mb-4">
            Book Your Lane
          </h1>
          <p className="text-lg text-foreground/70">
            Reserve in just a few steps
          </p>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2 sm:gap-4">
            {STEPS.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`step-indicator w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-lg font-bold transition-all ${
                    currentStep === step.id
                      ? "active"
                      : currentStep > step.id
                      ? "completed"
                      : "bg-secondary/10 text-secondary/50"
                  }`}
                  data-testid={`step-indicator-${step.id}`}
                >
                  {currentStep > step.id ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <step.icon className="w-6 h-6" />
                  )}
                </div>
                {index < STEPS.length - 1 && (
                  <div
                    className={`w-8 sm:w-16 h-1 mx-1 sm:mx-2 rounded-full transition-all ${
                      currentStep > step.id ? "bg-accent" : "bg-secondary/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <Card className="bg-white rounded-3xl border-2 border-secondary/10 shadow-xl">
          <CardHeader className="p-8 border-b border-secondary/10">
            <CardTitle className="text-2xl font-bold text-secondary font-['Chivo']">
              {STEPS[currentStep - 1].title}
            </CardTitle>
          </CardHeader>

          <CardContent className="p-8">
            {/* Step 1: Date & Time */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div>
                  <Label className="text-lg font-semibold text-secondary mb-4 block">
                    Select Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-14 text-lg justify-start text-left font-normal rounded-xl border-2 border-secondary/20 hover:border-primary"
                        data-testid="date-picker-trigger"
                      >
                        <CalendarIcon className="mr-3 h-5 w-5 text-accent" />
                        {formData.date ? (
                          format(formData.date, "MMMM d, yyyy")
                        ) : (
                          <span className="text-foreground/50">Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.date}
                        onSelect={(date) => updateFormData("date", date)}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        data-testid="calendar"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label className="text-lg font-semibold text-secondary mb-4 block">
                    Select Time
                  </Label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {TIME_SLOTS.map((slot) => (
                      <Button
                        key={slot}
                        variant={formData.time === slot ? "default" : "outline"}
                        className={`h-12 rounded-xl font-semibold transition-all ${
                          formData.time === slot
                            ? "bg-primary text-white"
                            : "border-2 border-secondary/20 hover:border-primary"
                        }`}
                        onClick={() => updateFormData("time", slot)}
                        data-testid={`time-slot-${slot.replace(/[: ]/g, "-")}`}
                      >
                        {slot}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Lanes & Extras */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div>
                  <Label className="text-lg font-semibold text-secondary mb-4 block">
                    Number of Lanes
                  </Label>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      className="w-14 h-14 rounded-xl border-2 border-secondary/20 text-2xl font-bold"
                      onClick={() =>
                        updateFormData("num_lanes", Math.max(1, formData.num_lanes - 1))
                      }
                      disabled={formData.num_lanes <= 1}
                      data-testid="lanes-decrease"
                    >
                      -
                    </Button>
                    <div className="flex-1 text-center">
                      <span
                        className="text-5xl font-bold text-secondary font-['Chivo']"
                        data-testid="lanes-count"
                      >
                        {formData.num_lanes}
                      </span>
                      <p className="text-foreground/60 mt-1">
                        {formData.num_lanes === 1 ? "Lane" : "Lanes"}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="w-14 h-14 rounded-xl border-2 border-secondary/20 text-2xl font-bold"
                      onClick={() =>
                        updateFormData("num_lanes", Math.min(10, formData.num_lanes + 1))
                      }
                      disabled={formData.num_lanes >= 10}
                      data-testid="lanes-increase"
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="text-lg font-semibold text-secondary mb-4 block">
                    <Footprints className="w-5 h-5 inline mr-2" />
                    Shoe Rentals
                  </Label>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      className="w-14 h-14 rounded-xl border-2 border-secondary/20 text-2xl font-bold"
                      onClick={() =>
                        updateFormData("shoe_rental", Math.max(0, formData.shoe_rental - 1))
                      }
                      disabled={formData.shoe_rental <= 0}
                      data-testid="shoes-decrease"
                    >
                      -
                    </Button>
                    <div className="flex-1 text-center">
                      <span
                        className="text-5xl font-bold text-secondary font-['Chivo']"
                        data-testid="shoes-count"
                      >
                        {formData.shoe_rental}
                      </span>
                      <p className="text-foreground/60 mt-1">Pairs @ $5 each</p>
                    </div>
                    <Button
                      variant="outline"
                      className="w-14 h-14 rounded-xl border-2 border-secondary/20 text-2xl font-bold"
                      onClick={() =>
                        updateFormData("shoe_rental", Math.min(30, formData.shoe_rental + 1))
                      }
                      disabled={formData.shoe_rental >= 30}
                      data-testid="shoes-increase"
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="text-lg font-semibold text-secondary mb-4 block">
                    <PartyPopper className="w-5 h-5 inline mr-2" />
                    Party Package (Optional)
                  </Label>
                  <Select
                    value={formData.party_package}
                    onValueChange={(value) => updateFormData("party_package", value)}
                  >
                    <SelectTrigger
                      className="h-14 text-lg rounded-xl border-2 border-secondary/20"
                      data-testid="party-package-select"
                    >
                      <SelectValue placeholder="No package selected" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No package</SelectItem>
                      <SelectItem value="kids">Kids Party - $150</SelectItem>
                      <SelectItem value="adult">Adult Party - $200</SelectItem>
                      <SelectItem value="premium">Premium Event - $350</SelectItem>
                    </SelectContent>
                  </Select>
                  {formData.party_package && formData.party_package !== "none" && (
                    <p className="text-sm text-foreground/60 mt-2">
                      {formData.party_package === "kids" &&
                        "Includes 2 hours, 1 lane, 8 shoe rentals, decorations"}
                      {formData.party_package === "adult" &&
                        "Includes 2 hours, 2 lanes, 10 shoe rentals"}
                      {formData.party_package === "premium" &&
                        "Includes 3 hours, 3 lanes, 15 shoe rentals, food & decorations"}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Contact Info */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-lg font-semibold text-secondary mb-3 block">
                    <User className="w-5 h-5 inline mr-2" />
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    className="h-14 text-lg px-4 rounded-xl border-2 border-secondary/20 focus:border-primary"
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <Label className="text-lg font-semibold text-secondary mb-3 block">
                    <Mail className="w-5 h-5 inline mr-2" />
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    className="h-14 text-lg px-4 rounded-xl border-2 border-secondary/20 focus:border-primary"
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <Label className="text-lg font-semibold text-secondary mb-3 block">
                    <Phone className="w-5 h-5 inline mr-2" />
                    Phone Number
                  </Label>
                  <Input
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    className="h-14 text-lg px-4 rounded-xl border-2 border-secondary/20 focus:border-primary"
                    data-testid="input-phone"
                  />
                </div>

                <div>
                  <Label className="text-lg font-semibold text-secondary mb-3 block">
                    <FileText className="w-5 h-5 inline mr-2" />
                    Special Requests (Optional)
                  </Label>
                  <Textarea
                    placeholder="Any special requests or notes..."
                    value={formData.notes}
                    onChange={(e) => updateFormData("notes", e.target.value)}
                    className="min-h-[100px] text-lg px-4 py-3 rounded-xl border-2 border-secondary/20 focus:border-primary resize-none"
                    data-testid="input-notes"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="bg-secondary/5 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-secondary font-['Chivo'] mb-4">
                    Reservation Summary
                  </h3>

                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-secondary/10">
                      <span className="text-foreground/70 flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" /> Date
                      </span>
                      <span className="font-semibold text-secondary">
                        {formData.date ? format(formData.date, "MMMM d, yyyy") : "-"}
                      </span>
                    </div>

                    <div className="flex justify-between py-2 border-b border-secondary/10">
                      <span className="text-foreground/70 flex items-center gap-2">
                        <Clock className="w-4 h-4" /> Time
                      </span>
                      <span className="font-semibold text-secondary">{formData.time}</span>
                    </div>

                    <div className="flex justify-between py-2 border-b border-secondary/10">
                      <span className="text-foreground/70 flex items-center gap-2">
                        <Users className="w-4 h-4" /> Lanes
                      </span>
                      <span className="font-semibold text-secondary">
                        {formData.num_lanes} {formData.num_lanes === 1 ? "lane" : "lanes"}
                      </span>
                    </div>

                    <div className="flex justify-between py-2 border-b border-secondary/10">
                      <span className="text-foreground/70 flex items-center gap-2">
                        <Footprints className="w-4 h-4" /> Shoe Rentals
                      </span>
                      <span className="font-semibold text-secondary">
                        {formData.shoe_rental} pairs
                      </span>
                    </div>

                    {formData.party_package && formData.party_package !== "none" && (
                      <div className="flex justify-between py-2 border-b border-secondary/10">
                        <span className="text-foreground/70 flex items-center gap-2">
                          <PartyPopper className="w-4 h-4" /> Package
                        </span>
                        <span className="font-semibold text-secondary capitalize">
                          {formData.party_package} Party
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-secondary/5 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-secondary font-['Chivo'] mb-4">
                    Contact Information
                  </h3>

                  <div className="space-y-2">
                    <p className="text-foreground/80">
                      <span className="font-semibold">{formData.name}</span>
                    </p>
                    <p className="text-foreground/80">{formData.email}</p>
                    <p className="text-foreground/80">{formData.phone}</p>
                    {formData.notes && (
                      <p className="text-foreground/60 text-sm mt-2">
                        Notes: {formData.notes}
                      </p>
                    )}
                  </div>
                </div>

                <div className="bg-primary/10 rounded-2xl p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-semibold text-secondary">Total</span>
                    <span className="text-2xl font-bold text-secondary font-['Chivo']">
                      ${calculateTotal()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-3 pb-3 border-b border-primary/20">
                    <span className="text-foreground/70">Required Deposit</span>
                    <span
                      className="text-xl font-bold text-primary font-['Chivo']"
                      data-testid="deposit-amount"
                    >
                      ${PRICING.deposit.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">Balance at Venue</span>
                    <span
                      className="text-xl font-bold text-accent font-['Chivo']"
                      data-testid="balance-due"
                    >
                      ${(parseFloat(calculateTotal()) - PRICING.deposit).toFixed(2)}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/60 mt-4 text-center bg-white/50 rounded-lg p-2">
                    💳 $20 deposit secures your booking • Refundable up to 24hrs before
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-10 pt-6 border-t border-secondary/10">
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-lg font-bold border-2 border-secondary/20"
                onClick={handleBack}
                disabled={currentStep === 1}
                data-testid="back-btn"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </Button>

              {currentStep < 4 ? (
                <Button
                  className="rounded-full px-8 py-6 text-lg font-bold bg-primary text-white hover:bg-primary/90"
                  onClick={handleNext}
                  disabled={!canProceed()}
                  data-testid="next-btn"
                >
                  Continue
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              ) : (
                <Button
                  className="rounded-full px-8 py-6 text-lg font-bold bg-primary text-white hover:bg-primary/90"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  data-testid="submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Booking...
                    </>
                  ) : (
                    <>
                      Confirm Booking
                      <Check className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Price Preview */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden">
          <div className="bg-secondary text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-4">
            <span className="text-white/80">Total:</span>
            <span className="text-xl font-bold font-['Chivo']">${calculateTotal()}</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
