import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import hero3 from '@/assets/hero-3.jpg';

const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero3})` }}
      />
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 px-4"
          >
            Prêt à Trouver Votre{' '}
            <span className="text-primary">Nouveau Chez-Vous ?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-base md:text-lg mb-6 md:mb-10 px-4"
          >
            Contactez-nous dès maintenant pour une consultation gratuite avec
            l'un de nos experts immobiliers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact" className="btn-hero">
              Demander un rendez-vous
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+213556482798" className="btn-hero-outline">
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
