import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Facebook, Instagram, Banknote } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-secondary text-white" data-testid="footer">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                <span className="text-white text-2xl font-bold font-['Chivo']">Q</span>
                            </div>
                            <h2 className="text-xl font-bold font-['Chivo'] tracking-tight">Quillorama 2</h2>
                        </Link>
                        <p className="text-white/80 text-base leading-relaxed">Le plaisir du bowling pour toute la famille. Petites boules, grandes joies depuis 1985.</p>
                        <div className="flex items-center gap-2 mt-4 bg-primary/20 text-primary px-4 py-2 rounded-full font-bold w-fit">
                            <Banknote className="w-5 h-5" /> Comptant seulement
                        </div>
                    </div>
                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold font-['Chivo'] mb-6">Nous Contacter</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="tel:+14506921412" className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors" data-testid="footer-phone">
                                    <Phone className="w-5 h-5 flex-shrink-0" /> <span>(450) 692-1412</span>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-3 text-white/80">
                                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" /> <span>133 Boulevard Maple<br />Châteauguay, QC</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* Hours */}
                    <div>
                        <h3 className="text-lg font-bold font-['Chivo'] mb-6">Horaires</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex justify-between text-white/80">
                                <span>Lundi</span> <span>9h - 11h</span>
                            </li>
                            <li className="flex justify-between text-white/50">
                                <span>Mardi</span> <span>Fermé</span>
                            </li>
                            <li className="flex justify-between text-white/50">
                                <span>Mercredi</span> <span>Fermé</span>
                            </li>
                            <li className="flex justify-between text-white/80">
                                <span>Jeudi</span> <span>9h - 11h</span>
                            </li>
                            <li className="flex justify-between text-white/80">
                                <span>Vendredi</span> <span>9h-11h & 22h-Minuit</span>
                            </li>
                            <li className="flex justify-between text-white/80">
                                <span>Samedi</span> <span>9h - Minuit</span>
                            </li>
                            <li className="flex justify-between text-white/80">
                                <span>Dimanche</span> <span>9h - 17h</span>
                            </li>
                        </ul>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold font-['Chivo'] mb-6">Liens Rapides</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#services" onClick={(e) => scrollToSection(e, "#services")} className="text-white/80 hover:text-primary transition-colors">Services</a>
                            </li>
                            <li>
                                <a href="#tarifs" onClick={(e) => scrollToSection(e, "#tarifs")} className="text-white/80 hover:text-primary transition-colors">Tarifs</a>
                            </li>
                            <li>
                                <a href="#galerie" onClick={(e) => scrollToSection(e, "#galerie")} className="text-white/80 hover:text-primary transition-colors">Galerie</a>
                            </li>
                            <li>
                                <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")} className="text-white/80 hover:text-primary transition-colors">Contact</a>
                            </li>
                        </ul>
                        {/* Social Links */}
                        <div className="flex gap-4 mt-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook" data-testid="social-facebook">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram" data-testid="social-instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Bottom bar */}
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/60 text-sm">© {currentYear} GoldenLane Bowl. Tous droits réservés.</p>
                    <p className="text-white/60 text-sm">Plaisir familial depuis 1985</p>
                </div>
            </div>
        </footer>
    );
};