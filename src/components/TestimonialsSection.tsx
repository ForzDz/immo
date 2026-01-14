import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Locataire Heureuse',
    content: "J'ai loué mon appartement en 2 semaines grâce à Immo Oran. Une équipe réactive et un processus très simple. Je recommande vivement !",
    rating: 5,
  },
  {
    id: 2,
    name: 'Karim B.',
    role: 'Propriétaire',
    content: "Une expertise locale impressionnante. Ils ont su estimer mon bien à sa juste valeur et trouver un acquéreur sérieux rapidement.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Amel L.',
    role: 'Investisseur',
    content: "Visite facile, contact rapide. J'ai été accompagnée de A à Z pour mon premier investissement locatif à Oran.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground mb-4"
          >
            Ce que disent nos <span className="text-primary">Clients</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            La satisfaction de nos clients est notre meilleure carte de visite.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-foreground italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                <span className="text-sm text-muted-foreground">{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
