import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
  const whatsappNumber = "242050133271";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/50 transition-all group"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur opacity-0 group-hover:opacity-40 animate-pulse transition-opacity"></div>
        
        {/* WhatsApp Icon from FontAwesome */}
        <div className="relative z-10 text-3xl">
          <i className="fab fa-whatsapp"></i>
        </div>
        
        {/* Online indicator */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></span>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          Contactez-moi sur WhatsApp
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
        </div>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
