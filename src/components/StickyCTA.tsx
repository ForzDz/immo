import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const StickyCTA = () => {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3 max-w-[calc(100vw-2rem)]">
      {/* WhatsApp Button */}
      <motion.a
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.3 }}
        href="https://wa.me/213567843609?text=Bonjour,%20je%20suis%20intéressé%20par%20vos%20biens%20immobiliers."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center md:justify-start gap-0 md:gap-3 w-12 h-12 md:w-auto md:h-auto md:px-5 md:py-3.5 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-105 transition-all duration-300"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-6 md:h-6" />
        <span className="hidden md:block font-medium text-base">WhatsApp</span>
      </motion.a>
    </div>
  );
};

export default StickyCTA;
