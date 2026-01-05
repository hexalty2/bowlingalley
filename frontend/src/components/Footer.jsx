import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold font-['Chivo']">G</span>
              </div>
              <div>
                <h2 className="text-xl font-bold font-['Chivo'] tracking-tight">
                  GoldenLane
                </h2>
                <p className="text-xs text-white/70 -mt-1">Bowl</p>
              </div>
            </Link>
            <p className="text-white/80 text-base leading-relaxed">
              Where every generation comes to play. Family-friendly bowling since 1985.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold font-['Chivo'] mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors"
                  data-testid="footer-phone"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>(555) 123-4567</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@goldenlanebowl.com"
                  className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors"
                  data-testid="footer-email"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>hello@goldenlanebowl.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/80">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>123 Strike Lane<br />Bowling City, BC 12345</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-bold font-['Chivo'] mb-6">Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/80">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Mon - Thu</p>
                  <p>10:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Clock className="w-5 h-5 flex-shrink-0 opacity-0" />
                <div>
                  <p className="font-semibold">Fri - Sat</p>
                  <p>10:00 AM - 12:00 AM</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Clock className="w-5 h-5 flex-shrink-0 opacity-0" />
                <div>
                  <p className="font-semibold">Sunday</p>
                  <p>11:00 AM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-['Chivo'] mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <Link
                  to="/reserve"
                  className="text-white/80 hover:text-primary transition-colors"
                  data-testid="footer-reserve-link"
                >
                  Book a Lane
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
                data-testid="social-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
                data-testid="social-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} GoldenLane Bowl. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            Family-friendly bowling since 1985
          </p>
        </div>
      </div>
    </footer>
  );
};
