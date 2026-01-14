import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Award, Users } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Confiance & Transparence',
    description: 'Aucuns frais cachés, un accompagnement juridique complet pour sécuriser vos transactions.',
  },
  {
    icon: Clock,
    title: 'Réactivité Maximale',
    description: 'Nous répondons à vos demandes en moins de 24h. Visites organisées selon votre emploi du temps.',
  },
  {
    icon: Award,
    title: 'Expertise Locale',
    description: 'Une connaissance parfaite du marché oranais pour vous garantir les meilleurs prix (vente ou achat).',
  },
  {
    icon: Users,
    title: 'Accompagnement Personnalisé',
    description: 'Un agent dédié suit votre dossier du premier contact jusqu\'à la remise des clés.',
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground mb-4"
          >
            Pourquoi choisir <span className="text-primary">Immo Oran</span> ?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <reason.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
