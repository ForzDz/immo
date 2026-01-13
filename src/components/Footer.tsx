import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#0A1929] via-[#1e3a52] to-[#0f1f2e] text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>
      
      <div className="relative container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="Immo Oran" 
                  className="h-14 w-auto brightness-0 invert transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">Immo Oran</span>
            </Link>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Twitter, href: '#', label: 'Twitter' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group relative w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
                >
                  <social.Icon className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-base mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-4">
              <li className="group">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/70 hover:text-primary transition-all duration-300 group-hover:translate-x-1"
                >
                  <div className="mt-0.5 p-1.5 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm leading-relaxed">
                    Boulevard de la Soummam<br />
                    31000 Oran, Algérie
                  </span>
                </a>
              </li>
              <li className="group">
                <a
                  href="tel:+213567843609"
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-all duration-300 group-hover:translate-x-1"
                >
                  <div className="p-1.5 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">+213 6 56 78 43 609</span>
                </a>
              </li>
              <li className="group">
                <a
                  href="mailto:contact@immo-oran.dz"
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-all duration-300 group-hover:translate-x-1"
                >
                  <div className="p-1.5 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">promotion.immo@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 bg-primary/10 backdrop-blur-sm">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-white/50 text-sm">
              © 2026 <span className="text-primary font-semibold">Immo Oran</span>. Tous droits réservés.
            </p>
            <span className="hidden sm:inline text-white/30">•</span>
            <p className="text-white/50 text-sm">
              Conçu avec ❤️ avec Yacine
            </p>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a 
              href="#" 
              className="text-white/50 hover:text-primary text-sm transition-all duration-300 hover:underline"
            >
              Mentions légales
            </a>
            <span className="text-white/30">•</span>
            <a 
              href="#" 
              className="text-white/50 hover:text-primary text-sm transition-all duration-300 hover:underline"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
