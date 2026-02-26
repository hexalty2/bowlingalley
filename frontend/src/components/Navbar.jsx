import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Phone, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#tarifs", label: "Tarifs" },
    { href: "#horaires", label: "Horaires" },
    { href: "#galerie", label: "Galerie" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-secondary/10"
      data-testid="navbar"
    >
      {/* Top bar with contact info */}
      <div className="bg-secondary text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+14506921412"
              className="flex items-center gap-2 hover:text-primary transition-colors"
              data-testid="phone-link"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(450) 692-1412</span>
            </a>
            <span className="hidden md:flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              133 Boul. Maple, Châteauguay
            </span>
          </div>
          <div className="flex items-center gap-2 text-primary font-bold">
            <Banknote className="w-4 h-4" />
            <span>COMPTANT SEULEMENT</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            data-testid="logo-link"
          >
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white text-2xl font-bold font-['Chivo']">Q</span>
            </div>
            <h1 className="text-xl font-bold text-secondary font-['Chivo'] tracking-tight">
              Quillorama 2
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="nav-link text-lg font-semibold text-secondary hover:text-primary transition-colors"
                data-testid={`nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Book Now Button (Desktop) */}
          <Link to="/reserve" className="hidden lg:block" data-testid="book-now-btn">
            <Button className="rounded-full px-6 py-3 text-base font-bold bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all active:scale-95">
              Réserver
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-secondary hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            data-testid="mobile-menu-btn"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 mobile-menu-enter">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg font-semibold text-secondary hover:text-primary transition-colors py-2 border-b border-secondary/10"
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
              <Link to="/reserve" onClick={() => setIsOpen(false)} data-testid="mobile-book-now-btn">
                <Button className="w-full rounded-full py-4 text-base font-bold bg-primary text-white hover:bg-primary/90 shadow-lg transition-all active:scale-95">
                  Réserver
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
