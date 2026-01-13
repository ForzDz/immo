import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutTeam from '@/assets/about-team.jpg';
import aboutBuilding from '@/assets/about-building.jpg';

const stats = [
  { icon: Building, value: '500+', label: 'Biens Gérés' },
  { icon: Users, value: '2000+', label: 'Clients Satisfaits' },
  { icon: Award, value: '15+', label: "Années d'Expérience" },
];

const AboutPreviewSection = () => {
  return (
    <section className="section-padding bg-muted/20 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-primary/10">
              <img
                src={aboutBuilding}
                alt="Résidence moderne"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>
            
            {/* Secondary image - overlapping */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-4 md:-bottom-8 -right-2 md:-right-4 lg:-right-8 w-2/3 max-w-[calc(100%-1rem)] rounded-2xl overflow-hidden shadow-lg shadow-primary/10 border-2 md:border-4 border-background"
            >
              <img
                src={aboutTeam}
                alt="Notre équipe"
                className="w-full h-[200px] object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pl-8 mt-8 lg:mt-0"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              À Propos de Nous
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Votre Partenaire Immobilier{' '}
              <span className="text-gradient">de Confiance</span>
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Depuis plus de 15 ans, nous accompagnons nos clients dans leurs projets 
              immobiliers à Oran et ses environs. Notre expertise locale et notre 
              engagement envers l'excellence nous permettent de vous offrir un service 
              personnalisé et des biens d'exception.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/a-propos"
              className="inline-flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full bg-primary text-primary-foreground text-sm md:text-base font-semibold hover:bg-primary/90 transition-colors group"
            >
              En savoir plus
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
