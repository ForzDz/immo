import { motion } from 'framer-motion';

// Import des images
import featureSecurity from '@/assets/feature-security.jpg';
import feature247 from '@/assets/feature-247.jpg';
import featureLocation from '@/assets/feature-location.jpg';
import featureSupport from '@/assets/feature-support.jpg';
import featureQuality from '@/assets/feature-quality.jpg';
import featurePremium from '@/assets/feature-premium.jpg';

const features = [
  {
    image: featureSecurity,
    title: 'Sécurité Garantie',
    description: 'Tous nos biens sont vérifiés et conformes aux normes de sécurité.',
  },
  {
    image: feature247,
    title: 'Disponibilité 24/7',
    description: 'Notre équipe est disponible à tout moment pour vous accompagner.',
  },
  {
    image: featureLocation,
    title: 'Emplacements Premium',
    description: 'Des biens situés dans les quartiers les plus recherchés.',
  },
  {
    image: featureSupport,
    title: 'Support Dédié',
    description: 'Un conseiller personnel vous accompagne tout au long de votre projet.',
  },
  {
    image: featureQuality,
    title: 'Biens de Qualité',
    description: 'Sélection rigoureuse pour garantir des standards élevés.',
  },
  {
    image: featurePremium,
    title: 'Service Premium',
    description: 'Une expérience client exceptionnelle de A à Z.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-muted/20 to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
          >
            Pourquoi Nous Choisir
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Une Expérience Immobilière{' '}
            <span className="text-gradient">d'Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            Nous mettons tout en œuvre pour vous offrir le meilleur service et vous
            accompagner dans la recherche de votre logement idéal.
          </motion.p>
        </div>

        {/* Features Grid with Images */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay - Only visible on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white drop-shadow-lg mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 drop-shadow-md">
                  {feature.description}
                </p>
                {/* Decorative line */}
                <div className="w-12 h-1 bg-primary mt-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
