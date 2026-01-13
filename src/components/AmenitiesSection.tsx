import { motion } from 'framer-motion';

// Import des images
import amenityClimate from '@/assets/amenity-climate.jpg';
import amenityFinishes from '@/assets/amenity-finishes.jpg';
import amenityIntercom from '@/assets/amenity-intercom.jpg';
import amenityStorage from '@/assets/amenity-storage.jpg';

const amenities = [
  {
    image: amenityClimate,
    title: 'Climatisation Centralisée',
  },
  {
    image: amenityFinishes,
    title: 'Finitions Haut de Gamme',
  },
  {
    image: amenityIntercom,
    title: 'Accès Sécurisé',
  },
  {
    image: amenityStorage,
    title: 'Cellier Privé',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const AmenitiesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 uppercase tracking-wider"
          >
            Équipements des Appartements
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground"
          >
            Confort & <span className="text-gradient">Modernité</span>
          </motion.h2>
        </div>

        {/* Amenities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl aspect-[4/3] cursor-pointer shadow-md shadow-primary/10"
            >
              {/* Background Image */}
              <img
                src={amenity.image}
                alt={amenity.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay - Only visible on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-5">
                <h3 className="text-sm md:text-base lg:text-lg font-semibold text-white leading-tight drop-shadow-lg">
                  {amenity.title}
                </h3>
                {/* Decorative line */}
                <div className="w-8 md:w-10 h-0.5 bg-primary mt-2 md:mt-3 opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Hover shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
