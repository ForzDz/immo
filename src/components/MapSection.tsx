import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-muted/20 to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
          >
            Localisation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Nos Biens sur la{' '}
            <span className="text-gradient">Carte</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            Explorez nos propriétés disponibles dans les meilleurs quartiers de la ville.
          </motion.p>
        </div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative rounded-3xl overflow-hidden shadow-card-hover"
        >
          {/* Placeholder Map */}
          <div className="h-[450px] md:h-auto md:aspect-[21/9] bg-gradient-to-br from-primary/5 to-primary/10 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10200.123456789!2d-0.6417!3d35.6971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7f8a4a3e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2sOran%2C%20Algeria!5e0!3m2!1sen!2sus!4v1704638191456!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            
            {/* Overlay with info */}
            <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-6 md:left-6 md:right-auto md:max-w-sm">
              <div className="glass rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 w-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Notre Agence</h4>
                    <p className="text-sm text-muted-foreground">Venez nous rencontrer</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Boulevard de la Soummam, 31000 Oran, Algérie
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
                >
                  <Navigation className="w-4 h-4" />
                  Obtenir l'itinéraire
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
