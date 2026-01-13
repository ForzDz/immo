import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PropertyCard from './PropertyCard';

import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';
import property4 from '@/assets/property-4.jpg';
import property5 from '@/assets/property-5.jpg';
import property6 from '@/assets/property-6.jpg';

export const properties = [
  {
    id: '1',
    image: property1,
    title: 'Appartement Moderne Centre-Ville',
    location: 'Quartier des Affaires, Oran',
    price: 260000,
    beds: 3,
    baths: 2,
    area: 95,
    type: 'Appartement',
    featured: true,
  },
  {
    id: '2',
    image: property2,
    title: 'Studio Cosy Rénové',
    location: 'Vieille Ville, Oran',
    price: 123000,
    beds: 1,
    baths: 1,
    area: 35,
    type: 'Studio',
  },
  {
    id: '3',
    image: property3,
    title: 'Maison Familiale avec Jardin',
    location: 'Haï El Menzeh, Oran',
    price: 360000,
    beds: 4,
    baths: 2,
    area: 180,
    type: 'Maison',
    featured: true,
  },
  {
    id: '4',
    image: property4,
    title: 'Duplex de Standing Vue Mer',
    location: 'Aïn El Turck, Oran',
    price: 465000,
    beds: 4,
    baths: 3,
    area: 200,
    type: 'Duplex',
  },
  {
    id: '5',
    image: property5,
    title: 'Bureau Moderne Open Space',
    location: 'Business District, Es Sénia',
    price: 650000,
    beds: 0,
    baths: 2,
    area: 250,
    type: 'Commercial',
  },
  {
    id: '6',
    image: property6,
    title: 'Loft Industriel Chic',
    location: 'Quartier des Artistes, Oran',
    price: 305000,
    beds: 2,
    baths: 1,
    area: 120,
    type: 'Loft',
  },
  // Nouveaux Appartements
  {
    id: '7',
    image: property1,
    title: 'Appartement F3 Lumineux',
    location: 'Plateau Oran Centre',
    price: 185000,
    beds: 2,
    baths: 1,
    area: 75,
    type: 'Appartement',
  },
  {
    id: '8',
    image: property1,
    title: 'Grand Appartement F4 Standing',
    location: 'Les Planteurs, Oran',
    price: 320000,
    beds: 3,
    baths: 2,
    area: 110,
    type: 'Appartement',
    featured: true,
  },
  {
    id: '9',
    image: property1,
    title: 'Appartement F2 Rénové Moderne',
    location: 'Saint-Eugène, Oran',
    price: 145000,
    beds: 1,
    baths: 1,
    area: 55,
    type: 'Appartement',
  },
  {
    id: '10',
    image: property1,
    title: 'Appartement Familial Spacieux',
    location: 'Bir El Djir, Oran',
    price: 220000,
    beds: 3,
    baths: 2,
    area: 90,
    type: 'Appartement',
  },
  // Nouveaux Studios
  {
    id: '11',
    image: property2,
    title: 'Studio Moderne Équipé',
    location: 'Centre-Ville, Oran',
    price: 95000,
    beds: 1,
    baths: 1,
    area: 28,
    type: 'Studio',
  },
  {
    id: '12',
    image: property2,
    title: 'Studio Standing Vue Mer',
    location: 'Front de Mer, Oran',
    price: 135000,
    beds: 1,
    baths: 1,
    area: 40,
    type: 'Studio',
  },
  {
    id: '13',
    image: property2,
    title: 'Studio Étudiant Meublé',
    location: 'Mdina Jdida, Oran',
    price: 78000,
    beds: 1,
    baths: 1,
    area: 25,
    type: 'Studio',
  },
  // Nouveaux Duplex
  {
    id: '14',
    image: property4,
    title: 'Duplex Luxueux Terrasse',
    location: 'Canastel, Oran',
    price: 520000,
    beds: 5,
    baths: 3,
    area: 220,
    type: 'Duplex',
    featured: true,
  },
  {
    id: '15',
    image: property4,
    title: 'Duplex Moderne F5',
    location: 'Haï Essabah, Oran',
    price: 380000,
    beds: 4,
    baths: 2,
    area: 170,
    type: 'Duplex',
  },
  {
    id: '16',
    image: property4,
    title: 'Duplex Familial avec Jardin',
    location: 'Belgaid, Oran',
    price: 425000,
    beds: 4,
    baths: 3,
    area: 195,
    type: 'Duplex',
  },
  // Nouvelles Maisons
  {
    id: '17',
    image: property3,
    title: 'Villa Moderne avec Piscine',
    location: 'Aïn El Turck, Oran',
    price: 680000,
    beds: 5,
    baths: 3,
    area: 280,
    type: 'Maison',
    featured: true,
  },
  {
    id: '18',
    image: property3,
    title: 'Maison R+1 Spacieuse',
    location: 'Sidi Chahmi, Oran',
    price: 450000,
    beds: 4,
    baths: 2,
    area: 200,
    type: 'Maison',
  },
  {
    id: '19',
    image: property3,
    title: 'Maison de Campagne Charmante',
    location: 'Bousfer, Oran',
    price: 395000,
    beds: 3,
    baths: 2,
    area: 150,
    type: 'Maison',
  },
  // Nouveaux Commerciaux
  {
    id: '20',
    image: property5,
    title: 'Local Commercial Prestigieux',
    location: 'Boulevard Zabana, Oran',
    price: 850000,
    beds: 0,
    baths: 2,
    area: 320,
    type: 'Commercial',
  },
  {
    id: '21',
    image: property5,
    title: 'Bureau Équipé Centre Affaires',
    location: 'Bir El Djir, Oran',
    price: 480000,
    beds: 0,
    baths: 1,
    area: 180,
    type: 'Commercial',
  },
  {
    id: '22',
    image: property5,
    title: 'Showroom Commercial',
    location: 'Es Sénia, Oran',
    price: 720000,
    beds: 0,
    baths: 2,
    area: 280,
    type: 'Commercial',
  },
];

const PropertiesSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
            >
              Nos Biens
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-foreground"
            >
              Découvrez nos{' '}
              <span className="text-gradient">Propriétés</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/biens"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Voir tous les biens
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {properties.slice(0, 6).map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
