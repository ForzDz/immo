import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bed, Bath, Square, MapPin, ArrowRight } from 'lucide-react';

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  area: number;
  type: string;
  featured?: boolean;
}

const PropertyCard = ({
  id,
  image,
  title,
  location,
  price,
  beds,
  baths,
  area,
  type,
  featured = false,
}: PropertyCardProps) => {
  return (
    <Link to={`/biens/${id}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -8 }}
        className="property-card group cursor-pointer"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.12 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          
          {/* Gradient Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Shine Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          </div>

          {/* Tags */}
          <div className="absolute top-2 left-2 md:top-4 md:left-4 flex gap-2 flex-wrap">
            <motion.span 
              className="px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold backdrop-blur-sm shadow-md shadow-primary/20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {type}
            </motion.span>
            {featured && (
              <motion.span 
                className="px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-gradient-to-r from-secondary to-secondary/80 text-white text-xs font-semibold backdrop-blur-sm shadow-md shadow-secondary/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                ✨ Coup de cœur
              </motion.span>
            )}
          </div>

          {/* Hover Indicator */}
          <motion.div 
            className="absolute bottom-2 right-2 md:bottom-4 md:right-4"
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary text-primary-foreground text-xs md:text-sm font-semibold shadow-md shadow-primary/20">
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-5 relative">
          {/* Decorative Line */}
          <motion.div 
            className="absolute top-0 left-5 right-5 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          {/* Location */}
          <motion.div 
            className="flex items-center gap-1.5 text-muted-foreground text-sm mb-2"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span>{location}</span>
          </motion.div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-1 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          {/* Features */}
          <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
            {[
              { icon: Bed, value: beds, label: 'ch.' },
              { icon: Bath, value: baths, label: 'sdb' },
              { icon: Square, value: area, label: 'm²' },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-1.5 group/feature"
                whileHover={{ scale: 1.1, color: 'hsl(var(--primary))' }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <feature.icon className="w-4 h-4 transition-colors group-hover/feature:text-primary" />
                <span>{feature.value} {feature.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Price */}
          <motion.div 
            className="flex items-baseline gap-1"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="text-2xl font-bold text-primary">
              {price.toLocaleString('fr-FR')} دج
            </span>
            <span className="text-muted-foreground text-sm">/mois</span>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

export default PropertyCard;
