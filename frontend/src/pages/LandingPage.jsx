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
  Star,
  Footprints,
  Timer,
  Gift,
  Candy,
  Coffee,
  Home,
  Accessibility,
} from "lucide-react";

const ChipsBag = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M9 2h6l2 4H7L9 2z" />
    <rect x="6" y="6" width="12" height="12" rx="1" />
    <path d="M7 18l2 4h6l2-4H7z" />
  </svg>
);

export default function LandingPage() {
  const services = [
    {
      icon: PartyPopper,
      title: "Fêtes d'enfants",
      description: "Célébrez l'anniversaire de votre enfant dans une ambiance festive et amusante!",
      image: `${process.env.PUBLIC_URL}/images/bowling-1.jpg`,
    },
    {
      icon: Users,
      title: "Party de bureau",
      description: "Renforcez l'esprit d'équipe avec une sortie de bureau mémorable.",
      image: `${process.env.PUBLIC_URL}/images/bowling-2.jpg`,
    },
    {
      icon: Target,
      title: "Quillauthon/Levée de fonds",
      description: "Organisez votre collecte de fonds dans un cadre ludique et convivial.",
      image: `${process.env.PUBLIC_URL}/images/bowling-3.jpg`,
    },
    {
      icon: Home,
      title: "Salle Privée",
      description: "Salle disponible à louer pour vos événements spéciaux.",
      image: `${process.env.PUBLIC_URL}/images/bowling-4.jpg`,
    },
    {
      icon: Coffee,
      title: "Snack & Bar",
      description: "Profitez de notre sélection de collations et boissons pour accompagner votre partie.",
      image: `${process.env.PUBLIC_URL}/images/bowling-5.jpg`,
    },
  ];

  const pricing = [
    {
      title: "Une Partie",
      price: "6$",
      unit: "par personne",
      duration: "15 minutes",
      features: ["Durée: 15 minutes", "Petites boules", "Tous niveaux bienvenus"],
      icon: Target,
    },
    {
      title: "Location Allée",
      price: "38$",
      unit: "par heure",
      features: ["Maximum 6 joueurs", "Souliers non-inclus", "Tableau de pointage inclus"],
      icon: Timer,
      highlight: true,
    },
    {
      title: "Location Souliers",
      price: "3$",
      unit: "par paire",
      features: ["Toutes tailles disponibles", "Désinfectés & confortables", "Requis pour jouer"],
      icon: Footprints,
    },
  ];

  const partyPackage = {
    title: "Forfait Fête",
    price: "5$",
    unit: "par personne",
    features: [
      { icon: ChipsBag, text: "1 chips" },
      { icon: Candy, text: "1 bonbon" },
      { icon: Coffee, text: "1 breuvage" },
    ],
  };

  const hours = [
    { day: "Lundi", time: "9h00 - 11h00" },
    { day: "Mardi", time: "Fermé", closed: true },
    { day: "Mercredi", time: "Fermé", closed: true },
    { day: "Jeudi", time: "9h00 - 11h00" },
    { day: "Vendredi", time: "9h00 - 11h00 & 22h00 - Minuit" },
    { day: "Samedi", time: "9h00 - Minuit" },
    { day: "Dimanche", time: "9h00 - 17h00" },
  ];

  const galleryImages = [
    {
      src: `${process.env.PUBLIC_URL}/images/bowling-1.jpg`,
      alt: "Boules de bowling colorées",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/bowling-2.jpg`,
      alt: "Petites boules de bowling",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/bowling-3.jpg`,
      alt: "Boules numérotées",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/bowling-4.jpg`,
      alt: "Allée de bowling néon",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/bowling-5.jpg`,
      alt: "Boule verte",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/bowling-6.jpg`,
      alt: "Boule bleue",
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
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/bowling-7.jpg)`,
          }}
        >
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-2xl animate-fade-in">

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-['Chivo'] leading-tight mb-6">
              Le plaisir du bowling pour tous
            </h1>

            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-lg">
              Le bowling accessible à tous avec nos petites boules. Parfait pour les familles et les amis de tous âges.
            </p>

            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                <span>6$ / partie</span>
              </div>
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5 text-primary" />
                <span>38$ / heure</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>Max 6 joueurs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 px-6" data-testid="services-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary font-['Chivo'] mb-4">
              Nos Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Tout ce qu'il vous faut pour une expérience de bowling parfaite
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
        id="tarifs"
        className="py-20 lg:py-32 px-6 bg-secondary/5"
        data-testid="pricing-section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary font-['Chivo'] mb-4">
              Nos Tarifs
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Les taxes sont incluses dans les prix.
            </p>
          </div>

          {/* Standard Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricing.map((plan, index) => (
              <Card
                key={index}
                className={`bg-white rounded-2xl border-2 ${
                  plan.highlight ? "border-primary pricing-highlight" : "border-secondary/10"
                } shadow-sm p-8`}
                data-testid={`pricing-card-${index}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <plan.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary font-['Chivo']">
                    {plan.title}
                  </h3>
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-primary font-['Chivo']">
                    {plan.price}
                  </span>
                  <span className="text-foreground/60 ml-2">{plan.unit}</span>
                </div>
                {plan.duration && (
                  <p className="text-sm text-accent font-semibold mb-4 flex items-center gap-2">
                    <Timer className="w-4 h-4" />
                    Durée: {plan.duration}
                  </p>
                )}
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

          {/* Party Package */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white rounded-3xl border-2 border-primary shadow-xl overflow-hidden">
              <div className="bg-primary p-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <PartyPopper className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-bold text-white font-['Chivo']">
                    {partyPackage.title}
                  </h3>
                  <PartyPopper className="w-8 h-8 text-white" />
                </div>
                <p className="text-white/80">Idéal pour les fêtes d'anniversaire!</p>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <span className="text-6xl font-bold text-primary font-['Chivo']">
                    {partyPackage.price}
                  </span>
                  <span className="text-foreground/60 ml-2 text-xl">{partyPackage.unit}</span>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {partyPackage.features.map((item, index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-secondary/5 rounded-2xl"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <p className="font-semibold text-secondary">{item.text}</p>
                    </div>
                  ))}
                </div>

                <p className="text-center text-foreground/60 mt-6 text-sm">
                  * En plus du tarif de bowling régulier
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section id="horaires" className="py-20 lg:py-32 px-6" data-testid="hours-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-secondary font-['Chivo'] mb-8">
                Horaires & Emplacement
              </h2>

              <div className="space-y-3 mb-10">
                {hours.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 bg-white rounded-xl border-2 ${item.closed ? 'border-primary/30 bg-primary/5' : 'border-secondary/10'}`}
                    data-testid={`hours-row-${index}`}
                  >
                    <div className="flex items-center gap-4">
                      <Clock className={`w-6 h-6 ${item.closed ? 'text-primary/50' : 'text-accent'}`} />
                      <span className={`text-lg font-semibold ${item.closed ? 'text-secondary/60' : 'text-secondary'}`}>{item.day}</span>
                    </div>
                    <span className={`text-lg ${item.closed ? 'text-primary font-semibold' : 'text-foreground/80'}`}>{item.time}</span>
                  </div>
                ))}
              </div>

              <Card className="bg-white rounded-2xl border-2 border-secondary/10 p-8 mb-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-secondary font-['Chivo'] mb-2">
                      Nous Trouver
                    </h3>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      133 Boulevard Maple<br />
                      Châteauguay, QC
                    </p>
                    <p className="text-foreground/60 mt-2">
                      Stationnement gratuit disponible
                    </p>
                  </div>
                </div>
              </Card>

              {/* Accessibility */}
              <div className="flex items-center gap-4 p-4 bg-secondary/5 rounded-xl border-2 border-secondary/10 mt-4">
                <Accessibility className="w-8 h-8 text-secondary flex-shrink-0" />
                <p className="text-foreground/80 text-sm">Cet établissement est accessible aux personnes à mobilité réduite</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Google Maps Embed */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.8!2d-73.75!3d45.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc914e6d5f07a93%3A0xac03c48d0b7e3d5e!2sQuillorama%202%20Chateauguay!5e0!3m2!1sfr!2sca!4v1700000000000!5m2!1sfr!2sca"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - Quillorama 2 Châteauguay"
                  className="w-full"
                  data-testid="google-map"
                ></iframe>
              </div>
              
              <div className="bg-primary text-white p-6 rounded-2xl shadow-xl text-center">
                <p className="text-lg font-bold font-['Chivo']">Ouvert selon l'horaire</p>
                <p className="text-white/80">Premier arrivé, premier servi!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="galerie"
        className="py-20 lg:py-32 px-6 bg-secondary/5"
        data-testid="gallery-section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary font-['Chivo'] mb-4">
              Galerie
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Découvrez l'ambiance de Quillorama 2
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
                Nous Contacter
              </h2>
              <p className="text-lg text-foreground/70 mb-10 max-w-lg">
                Des questions? Appelez-nous ou passez nous voir. Premier arrivé, premier servi!
              </p>

              <div className="space-y-6">
                <a
                  href="tel:+14506921412"
                  className="flex items-center gap-4 p-6 bg-white rounded-xl border-2 border-primary hover:bg-primary/5 transition-colors group"
                  data-testid="contact-phone"
                >
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Appelez-nous</p>
                    <p className="text-2xl font-bold text-primary">(450) 692-1412</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border-2 border-secondary/10">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Visitez-nous</p>
                    <p className="text-xl font-bold text-secondary">133 Boul. Maple, Châteauguay</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Card className="bg-white rounded-3xl border-2 border-secondary/10 p-10 text-center max-w-md shadow-xl">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary font-['Chivo'] mb-4">
                  Réservation
                </h3>
                <p className="text-foreground/70 mb-6">
                  Réservation nécessaire. Appelez-nous pour réserver votre allée.
                </p>
                <div className="bg-secondary/5 rounded-2xl p-6">
                  <div className="grid grid-cols-2 gap-4 text-left">
                    <div>
                      <p className="text-foreground/60 text-sm">Une partie</p>
                      <p className="text-xl font-bold text-primary">6$</p>
                    </div>
                    <div>
                      <p className="text-foreground/60 text-sm">Location allée</p>
                      <p className="text-xl font-bold text-primary">38$/h</p>
                    </div>
                    <div>
                      <p className="text-foreground/60 text-sm">Souliers</p>
                      <p className="text-xl font-bold text-primary">3$</p>
                    </div>
                    <div>
                      <p className="text-foreground/60 text-sm">Forfait fête</p>
                      <p className="text-xl font-bold text-primary">5$/pers</p>
                    </div>
                  </div>
                </div>
                <a
                  href="tel:+14506921412"
                  className="mt-6 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (450) 692-1412
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
