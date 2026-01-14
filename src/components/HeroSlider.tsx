import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';

const slides = [
  {
    image: hero1,
    title: 'Votre Futur Chez-Vous',
    subtitle: 'Appartements de standing au cœur de la ville',
    location: 'Centre-Ville',
  },
  {
    image: hero2,
    title: 'Villas d\'Exception',
    subtitle: 'Espaces de vie luxueux avec piscine privée',
    location: 'Quartier Résidentiel',
  },
  {
    image: hero3,
    title: 'Vue Panoramique',
    subtitle: 'Penthouses avec terrasses et vues imprenables',
    location: 'Hauteurs de la Ville',
  },
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Preload first hero image only
  useEffect(() => {
    const img = new Image();
    img.src = hero1;
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} !w-3 !h-3 !bg-white/50 !opacity-100 [&.swiper-pagination-bullet-active]:!bg-primary [&.swiper-pagination-bullet-active]:!scale-125"></span>`,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image - optimized loading */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  transform: activeIndex === index ? 'scale(1.1)' : 'scale(1)',
                  transitionDuration: '8000ms',
                  ...(index > 0 && { willChange: 'transform' }),
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 hero-overlay" />

              {/* Content */}
              <div className="relative h-full container-custom flex items-center px-4">
                <div className="max-w-3xl pt-20 w-full">
                  {activeIndex === index && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-2 text-white/80 mb-4"
                      >
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">{slide.location}</span>
                      </motion.div>

                      <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight"
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-base sm:text-lg md:text-xl text-white/80 mb-6 md:mb-10 max-w-xl"
                      >
                        {slide.subtitle}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4"
                      >
                        <Link to="/biens" className="btn-hero">
                          Découvrir nos biens
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link to="/contact" className="btn-hero-outline">
                          Prendre rendez-vous
                        </Link>
                      </motion.div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSlider;
