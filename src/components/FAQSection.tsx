import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: "Quels types de biens proposez-vous ?",
    answer: "Nous proposons une large gamme de biens immobiliers : appartements (du studio au F5), villas, maisons individuelles, et locaux commerciaux. Tous nos biens sont sélectionnés pour leur qualité et leur emplacement privilégié."
  },
  {
    question: "Où sont situées vos résidences ?",
    answer: "Nos résidences sont situées dans les quartiers les plus prisés : centre-ville, zones résidentielles calmes, et emplacements proches des commodités (transports, écoles, commerces). Consultez notre carte interactive pour découvrir nos emplacements."
  },
  {
    question: "Puis-je réserver un appartement avant la livraison ?",
    answer: "Oui, nous proposons des réservations anticipées pour nos projets en cours de construction. Cela vous permet de bénéficier de tarifs préférentiels et de choisir les meilleures unités disponibles."
  },
  {
    question: "Quelles sont les modalités de paiement ?",
    answer: "Nous offrons des modalités de paiement flexibles : paiement comptant, paiement échelonné, ou financement bancaire. Notre équipe vous accompagne dans le choix de la solution la plus adaptée à votre situation."
  },
  {
    question: "Comment puis-je visiter un bien ?",
    answer: "Vous pouvez programmer une visite en nous contactant par téléphone, WhatsApp, ou via notre formulaire en ligne. Nous organisons des visites personnalisées selon vos disponibilités, y compris le week-end."
  },
  {
    question: "Quelles garanties sont offertes ?",
    answer: "Tous nos biens bénéficient de garanties complètes : garantie décennale pour la structure, garantie biennale pour les équipements, et garantie de parfait achèvement. Votre investissement est sécurisé."
  },
  {
    question: "Combien de temps prend la livraison d'un bien ?",
    answer: "Les délais varient selon le type de projet. Pour les biens disponibles immédiatement, la remise des clés peut se faire sous 48h après signature. Pour les projets neufs, comptez 12 à 24 mois selon l'avancement."
  },
  {
    question: "Puis-je personnaliser mon appartement ?",
    answer: "Absolument ! Pour les projets en VEFA (vente en l'état futur d'achèvement), vous pouvez personnaliser les finitions : choix des revêtements, agencement de la cuisine, options d'équipements, selon le stade de construction."
  },
  {
    question: "Quels sont les équipements disponibles dans vos résidences ?",
    answer: "Nos résidences proposent des équipements modernes : parking sécurisé, ascenseur, espaces verts, aires de jeux, vidéophone, et selon les projets : piscine, salle de sport, conciergerie."
  },
  {
    question: "Comment puis-je obtenir plus d'informations ?",
    answer: "Contactez-nous par téléphone, WhatsApp, email ou via notre formulaire. Notre équipe commerciale est disponible 7j/7 pour répondre à toutes vos questions et vous accompagner dans votre projet immobilier."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mt-2">
            Questions Fréquentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-border/50"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:text-primary hover:no-underline py-6 transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
