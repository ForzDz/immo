import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { useState } from 'react';
import {
  ArrowLeft,
  Bed,
  Bath,
  Square,
  MapPin,
  Calendar,
  Check,
  Phone,
  MessageCircle,
  Share2,
  Heart,
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import { properties } from '@/components/PropertiesSection';

const amenities = [
  'Cuisine équipée',
  'Balcon / Terrasse',
  'Parking inclus',
  'Cave / Rangement',
  'Ascenseur',
  'Gardien',
  'Interphone / Digicode',
  'Double vitrage',
];

const PropertyDetailPage = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Bien non trouvé</h1>
          <Link to="/biens" className="text-primary hover:underline">
            Retour aux biens
          </Link>
        </div>
      </div>
    );
  }

  // Generate multiple images for gallery (using same image for demo)
  const galleryImages = [property.image, property.image, property.image, property.image];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-muted/30">
        <div className="container-custom">
          <Link
            to="/biens"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux biens
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 1. Left Column Part 1 - Gallery - Takes top left on Desktop */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                {/* Main Gallery */}
                <Swiper
                  modules={[Navigation, Pagination, Thumbs]}
                  navigation
                  pagination={{ clickable: true }}
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                  className="rounded-2xl overflow-hidden aspect-[4/3] bg-muted"
                >
                  {galleryImages.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        alt={`${property.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Thumbnails */}
                {/* Desktop: Show thumbnails below main image */}
                {/* Mobile: Thumbnails are hidden to save space or kept if preferred. Keeping them for now. */}
                <Swiper
                  modules={[Thumbs]}
                  onSwiper={setThumbsSwiper}
                  slidesPerView={3}
                  spaceBetween={8}
                  watchSlidesProgress
                  className="!h-16 md:!h-20"
                  breakpoints={{
                    640: {
                      slidesPerView: 4,
                      spaceBetween: 12,
                    },
                  }}
                >
                  {galleryImages.map((img, index) => (
                    <SwiperSlide key={index} className="cursor-pointer">
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            </div>

            {/* 2. Right Column - Info Card - Takes right side on Desktop (span 2 rows), appears 2nd on Mobile */}
            <div className="lg:col-span-1 lg:row-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="sticky top-28"
              >
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border shadow-card">
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary">
                        {property.price.toLocaleString('fr-FR')} €
                      </span>
                      <span className="text-muted-foreground">/mois</span>
                    </div>
                  </div>

                  {/* Title & Location */}
                  <h1 className="text-xl font-bold text-foreground mb-2">{property.title}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground mb-6">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{property.location}</span>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-muted/50">
                    {property.beds > 0 && (
                      <div className="text-center">
                        <Bed className="w-5 h-5 text-primary mx-auto mb-1" />
                        <span className="text-sm font-medium text-foreground">{property.beds} ch.</span>
                      </div>
                    )}
                    {property.baths > 0 && (
                      <div className="text-center">
                        <Bath className="w-5 h-5 text-primary mx-auto mb-1" />
                        <span className="text-sm font-medium text-foreground">{property.baths} sdb</span>
                      </div>
                    )}
                    <div className="text-center">
                      <Square className="w-5 h-5 text-primary mx-auto mb-1" />
                      <span className="text-sm font-medium text-foreground">{property.area} m²</span>
                    </div>
                  </div>

                  {/* Type & Availability */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Type</span>
                      <span className="font-medium text-foreground">{property.type}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Disponibilité</span>
                      <span className="font-medium text-primary flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Immédiate
                      </span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-2 md:space-y-3">
                    <a
                      href="tel:+213556482798"
                      className="btn-hero w-full justify-center text-sm md:text-base"
                    >
                      <Phone className="w-4 h-4 md:w-5 md:h-5" />
                      Appeler
                    </a>
                    <a
                      href="https://wa.me/213556482798"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full bg-[#25D366] text-white text-sm md:text-base font-semibold hover:bg-[#1da851] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                      WhatsApp
                    </a>
                    <Link
                      to="/contact"
                      className="w-full flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full border-2 border-border text-foreground text-sm md:text-base font-semibold hover:border-primary hover:text-primary transition-colors"
                    >
                      Demander une visite
                    </Link>
                  </div>

                  {/* Share & Save */}
                  <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-border">
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <Share2 className="w-4 h-4" />
                      <span className="text-sm">Partager</span>
                    </button>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">Sauvegarder</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 3. Left Column Part 2 - Description & Details - Takes bottom left on Desktop */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-xl font-semibold text-foreground mb-4">Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ce magnifique {property.type.toLowerCase()} de {property.area}m² offre un cadre de vie
                  exceptionnel au cœur de {property.location}. Lumineux et spacieux, il dispose de
                  {property.beds > 0 ? ` ${property.beds} chambre${property.beds > 1 ? 's' : ''}` : ''} 
                  {property.baths > 0 ? ` et ${property.baths} salle${property.baths > 1 ? 's' : ''} de bain` : ''}.
                  Entièrement rénové avec des matériaux de qualité, ce bien bénéficie d'une exposition
                  optimale et de nombreux rangements. Proche de toutes commodités (transports, commerces,
                  écoles), il représente une opportunité rare sur le marché.
                </p>
              </motion.div>

              {/* Amenities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-xl font-semibold text-foreground mb-4">Équipements</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-2 p-3 rounded-xl bg-muted/50"
                    >
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-xl font-semibold text-foreground mb-4">Localisation</h2>
                <div className="rounded-2xl overflow-hidden h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10200.123456789!2d-0.6417!3d35.6971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7f8a4a3e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2sOran%2C%20Algeria!5e0!3m2!1sen!2sus!4v1704638191456!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            </div>


          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default PropertyDetailPage;
