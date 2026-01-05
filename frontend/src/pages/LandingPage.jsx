import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Target,
  Users,
  PartyPopper,
  Clock,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Star,
  Footprints,
  Utensils,
  Music,
} from "lucide-react";

export default function LandingPage() {
  const services = [
    {
      icon: Target,
      title: "Open Bowling",
      description: "Drop in anytime for casual fun. Perfect for families and friends.",
      image: "https://images.pexels.com/photos/7429729/pexels-photo-7429729.jpeg",
    },
    {
      icon: Users,
      title: "League Play",
      description: "Join our weekly leagues for all skill levels. Meet new friends!",
      image: "https://images.pexels.com/photos/6928669/pexels-photo-6928669.jpeg",
    },
    {
      icon: PartyPopper,
      title: "Private Events",
      description: "Birthday parties, corporate events, and celebrations.",
      image: "https://images.unsplash.com/photo-1570472456794-8578e4bf1fab",
    },
    {
      icon: Footprints,
      title: "Shoe Rental",
      description: "Quality bowling shoes in all sizes, sanitized after each use.",
      image: "https://images.pexels.com/photos/5952896/pexels-photo-5952896.jpeg",
    },
  ];

  const pricing = [
    {
      title: "Per Game",
      price: "$6",
      unit: "per person",
      features: ["Unlimited time per game", "All skill levels welcome", "Bumpers available"],
    },
    {
      title: "Lane Rental",
      price: "$35",
      unit: "per hour",
      features: ["Up to 6 players", "Shoes not included", "Score tracking included"],
      highlight: true,
    },
    {
      title: "Shoe Rental",
      price: "$5",
      unit: "per pair",
      features: ["All sizes available", "Sanitized & comfortable", "Required for play"],
    },
  ];

  const partyPackages = [
    {
      title: "Kids Party",
      price: "$150",
      features: ["2 hours of bowling", "1 lane reserved", "8 shoe rentals", "Party decorations"],
    },
    {
      title: "Adult Party",
      price: "$200",
      features: ["2 hours of bowling", "2 lanes reserved", "10 shoe rentals", "Music selection"],
    },
    {
      title: "Premium Event",
      price: "$350",
      features: ["3 hours of bowling", "3 lanes reserved", "15 shoe rentals", "Food & decorations"],
      highlight: true,
    },
  ];

  const hours = [
    { day: "Monday - Thursday", time: "10:00 AM - 10:00 PM" },
    { day: "Friday - Saturday", time: "10:00 AM - 12:00 AM" },
    { day: "Sunday", time: "11:00 AM - 9:00 PM" },
  ];

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/7429729/pexels-photo-7429729.jpeg",
      alt: "Modern bowling lanes",
    },
    {
      src: "https://images.unsplash.com/photo-1671427478429-3cfa4f905769",
      alt: "Bowling action shot",
    },
    {
      src: "https://images.pexels.com/photos/5781274/pexels-photo-5781274.jpeg",
      alt: "Family bowling together",
    },
    {
      src: "https://images.unsplash.com/photo-1680479610966-622607249a73",
      alt: "Bowling ball close-up",
    },
    {
      src: "https://images.pexels.com/photos/6928669/pexels-photo-6928669.jpeg",
      alt: "Friends celebrating",
    },
    {
      src: "https://images.pexels.com/photos/5952896/pexels-photo-5952896.jpeg",
      alt: "Bowling shoes and equipment",
    },
  ];

  return (
    <div className="min-h-screen bg-background" data-testid="landing-page">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center" data-testid="hero-section">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/7429729/pexels-photo-7429729.jpeg)`,
          }}
        >
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-white font-medium">Family-Friendly Since 1985</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-['Chivo'] leading-tight mb-6">
              Strike Up
              <br />
              <span className="text-primary">Good Times</span>
            </h1>

            <p className="text-xl text-white/90 leading-relaxed mb-10 max-w-lg">
              Where every generation comes to play. Modern lanes, classic fun, and memories that last a lifetime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/reserve">
                <Button
                  className="rounded-full px-10 py-7 text-xl font-bold shadow-lg hover:shadow-xl transition-all active:scale-95 bg-primary text-white hover:bg-primary/90 w-full sm:w-auto"
                  data-testid="hero-book-btn"
                >
                  Book Your Lane
                  <ChevronRight className="w-6 h-6 ml-2" />
                </Button>
              </Link>
              <a href="#pricing">
                <Button
                  variant="outline"
                  className="rounded-full px-10 py-7 text-xl font-bold border-2 border-white text-white hover:bg-white hover:text-secondary transition-all w-full sm:w-auto"
                  data-testid="hero-pricing-btn"
                >
                  View Pricing
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 px-6" data-testid="services-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary font-['Chivo'] mb-4">
              Our Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Everything you need for a perfect bowling experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
            {services.map((service, index) => (
              <Card
                key={index}
                className="service-card bg-white rounded-2xl border-2 border-secondary/10 shadow-sm overflow-hidden group"
                data-testid={`service-card-${index}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover gallery-image"
                  />
                  <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/10 transition-colors" />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary font-['Chivo']">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 lg:py-32 px-6 bg-secondary/5"
        data-testid="pricing-section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary font-['Chivo'] mb-4">
              Simple Pricing
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              No hidden fees. Just great bowling at fair prices.
            </p>
          </div>

          {/* Standard Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {pricing.map((plan, index) => (
              <Card
                key={index}
                className={`bg-white rounded-2xl border-2 ${
                  plan.highlight ? "border-primary pricing-highlight" : "border-secondary/10"
                } shadow-sm p-8`}
                data-testid={`pricing-card-${index}`}
              >
                <h3 className="text-xl font-bold text-secondary font-['Chivo'] mb-2">
                  {plan.title}
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-primary font-['Chivo']">
                    {plan.price}
                  </span>
                  <span className="text-foreground/60 ml-2">{plan.unit}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-foreground/80">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Party Packages */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary font-['Chivo'] mb-4">
              Party Packages
            </h3>
            <p className="text-lg text-foreground/70">
              All-inclusive packages for your special celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partyPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`bg-white rounded-2xl border-2 ${
                  pkg.highlight ? "border-primary pricing-highlight" : "border-secondary/10"
                } shadow-sm p-8`}
                data-testid={`party-card-${index}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <PartyPopper className="w-6 h-6 text-primary" />
                  <h4 className="text-xl font-bold text-secondary font-['Chivo']">
                    {pkg.title}
                  </h4>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary font-['Chivo']">
                    {pkg.price}
                  </span>
                </div>
                <ul className="space-y-3">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-foreground/80">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/reserve" className="block mt-6">
                  <Button
                    variant={pkg.highlight ? "default" : "outline"}
                    className="w-full rounded-full py-6 font-bold"
                    data-testid={`party-book-btn-${index}`}
                  >
                    Book This Package
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section id="hours" className="py-20 lg:py-32 px-6" data-testid="hours-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-secondary font-['Chivo'] mb-8">
                Hours & Location
              </h2>

              <div className="space-y-6 mb-10">
                {hours.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white rounded-xl border-2 border-secondary/10"
                    data-testid={`hours-row-${index}`}
                  >
                    <div className="flex items-center gap-4">
                      <Clock className="w-6 h-6 text-accent" />
                      <span className="text-lg font-semibold text-secondary">{item.day}</span>
                    </div>
                    <span className="text-lg text-foreground/80">{item.time}</span>
                  </div>
                ))}
              </div>

              <Card className="bg-white rounded-2xl border-2 border-secondary/10 p-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-secondary font-['Chivo'] mb-2">
                      Find Us
                    </h3>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      123 Strike Lane<br />
                      Bowling City, BC 12345
                    </p>
                    <p className="text-foreground/60 mt-2">
                      Free parking available
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6928669/pexels-photo-6928669.jpeg"
                  alt="Happy customers bowling"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
                <p className="text-lg font-bold font-['Chivo']">Open 7 Days</p>
                <p className="text-white/80">Rain or shine!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="py-20 lg:py-32 px-6 bg-secondary/5"
        data-testid="gallery-section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary font-['Chivo'] mb-4">
              Gallery
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Take a look inside GoldenLane Bowl
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden shadow-lg ${
                  index === 0 ? "col-span-2 row-span-2" : ""
                }`}
                data-testid={`gallery-image-${index}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover gallery-image aspect-square"
                />
                <div className="absolute inset-0 bg-secondary/0 hover:bg-secondary/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 px-6" data-testid="contact-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-secondary font-['Chivo'] mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-foreground/70 mb-10 max-w-lg">
                Have questions? Want to book a large event? We'd love to hear from you.
              </p>

              <div className="space-y-6">
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border-2 border-secondary/10 hover:border-primary transition-colors group"
                  data-testid="contact-phone"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Call Us</p>
                    <p className="text-xl font-bold text-secondary">(555) 123-4567</p>
                  </div>
                </a>

                <a
                  href="mailto:hello@goldenlanebowl.com"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border-2 border-secondary/10 hover:border-primary transition-colors group"
                  data-testid="contact-email"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Email Us</p>
                    <p className="text-xl font-bold text-secondary">hello@goldenlanebowl.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border-2 border-secondary/10">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Visit Us</p>
                    <p className="text-xl font-bold text-secondary">123 Strike Lane, Bowling City</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Card className="bg-white rounded-3xl border-2 border-secondary/10 p-10 text-center max-w-md shadow-xl">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <PartyPopper className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary font-['Chivo'] mb-4">
                  Ready to Bowl?
                </h3>
                <p className="text-foreground/70 mb-8">
                  Book your lane online in just a few clicks. No waiting, no hassle.
                </p>
                <Link to="/reserve">
                  <Button
                    className="rounded-full px-10 py-7 text-xl font-bold shadow-lg hover:shadow-xl transition-all active:scale-95 bg-primary text-white hover:bg-primary/90 w-full"
                    data-testid="contact-book-btn"
                  >
                    Book Now
                    <ChevronRight className="w-6 h-6 ml-2" />
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
