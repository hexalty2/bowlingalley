import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Phone, Banknote } from "lucide-react";

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
              href="tel:+15551234567"
              className="flex items-center gap-2 hover:text-primary transition-colors"
              data-testid="phone-link"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(555) 123-4567</span>
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
              <span className="text-white text-2xl font-bold font-['Chivo']">G</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-secondary font-['Chivo'] tracking-tight">
                GoldenLane
              </h1>
              <p className="text-xs text-secondary/70 -mt-1">Petites Boules</p>
            </div>
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

          {/* Cash Only Badge */}
          <div className="hidden lg:flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-bold">
            <Banknote className="w-5 h-5" />
            Comptant seulement
          </div>

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
              <div className="flex items-center gap-2 text-primary font-bold py-2">
                <Banknote className="w-5 h-5" />
                Comptant seulement
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
