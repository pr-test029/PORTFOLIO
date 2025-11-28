import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Map as MapIcon } from 'lucide-react';

const CrystalMap3D = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <div className="w-full h-80 perspective-[1000px] mt-8 group">
      <motion.div
        style={{ x, y, rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            // Calculate distance from center
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            // Set slight movement based on mouse position
            x.set((e.clientX - centerX) / 10);
            y.set((e.clientY - centerY) / 10);
        }}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        className="relative w-full h-full rounded-[2rem] border-4 border-white/40 shadow-[0_20px_50px_rgba(14,165,233,0.3)] bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm overflow-hidden cursor-pointer transition-all duration-300"
      >
        {/* Glossy Reflection Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-transparent opacity-50 pointer-events-none z-30 mix-blend-overlay" />
        
        {/* Map Iframe */}
        <div className="w-full h-full transform scale-110 group-hover:scale-100 transition-transform duration-700">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63630.56976695276!2d15.207849186676366!3d-4.269418641490237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33c109786a37%3A0x6331904e57143e1!2sMfilou%2C%20Brazzaville%2C%20Congo-Brazzaville!5e0!3m2!1sfr!2s!4v1716300000000!5m2!1sfr!2s"
                className="w-full h-full border-0 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                title="Google Maps Mfilou"
            ></iframe>
        </div>

        {/* 3D Floating Pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none transform translate-z-12">
             <div className="relative">
                <span className="absolute -inset-4 bg-sky-500/30 rounded-full animate-ping"></span>
                <MapPin size={48} className="text-red-500 drop-shadow-2xl relative z-10" fill="currentColor" />
             </div>
        </div>

        {/* Glass Label Card */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/70 backdrop-blur-xl p-3 rounded-xl border border-white/50 shadow-lg z-20 transition-all duration-300 transform group-hover:translate-y-0 translate-y-1">
            <div className="flex items-center justify-between">
                <div>
                    <h4 className="font-bold text-slate-800 text-sm flex items-center gap-1">
                        QG Opérationnel
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    </h4>
                    <p className="text-xs text-sky-600 font-medium">Mfilou, NGAMABA</p>
                </div>
                <div className="bg-sky-500 text-white p-2 rounded-lg shadow-md">
                    <MapIcon size={16} />
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
}

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-sky-900 mb-4">Contactez-moi</h1>
        <p className="text-xl text-sky-600 max-w-2xl mx-auto">
           Discutons de votre projet et concrétisons vos idées
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info & Crystal Map */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-6"
        >
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/50">
                <h2 className="text-2xl font-bold text-sky-800 mb-8">Informations</h2>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                        <div className="p-3 bg-sky-100 rounded-full text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors"><Phone size={20} /></div>
                        <div>
                            <h3 className="font-bold text-sky-900">Téléphone</h3>
                            <p className="text-slate-600">+242 06 769 6157</p>
                            <p className="text-slate-600">+242 05 013 3271</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                        <div className="p-3 bg-sky-100 rounded-full text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors"><Mail size={20} /></div>
                        <div>
                            <h3 className="font-bold text-sky-900">Email</h3>
                            <p className="text-slate-600">paulndamba2@gmail.com</p>
                        </div>
                    </div>
                    
                     <div className="flex items-start gap-4 group">
                        <div className="p-3 bg-sky-100 rounded-full text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors"><Clock size={20} /></div>
                        <div>
                            <h3 className="font-bold text-sky-900">Disponibilité</h3>
                            <p className="text-slate-600">Lun - Ven: 8h00 - 18h00</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* The 3D Crystal Map Component */}
            <CrystalMap3D />

        </motion.div>

        {/* Contact Form */}
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/60 h-fit"
        >
            <h2 className="text-2xl font-bold text-sky-800 mb-6">Envoyer un message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="group">
                    <label className="block text-sm font-medium text-sky-700 mb-1 group-focus-within:text-sky-500 transition-colors">Nom Complet</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-sky-50 border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" required />
                </div>
                <div className="group">
                    <label className="block text-sm font-medium text-sky-700 mb-1 group-focus-within:text-sky-500 transition-colors">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg bg-sky-50 border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" required />
                </div>
                <div className="group">
                    <label className="block text-sm font-medium text-sky-700 mb-1 group-focus-within:text-sky-500 transition-colors">Message</label>
                    <textarea rows={6} className="w-full px-4 py-3 rounded-lg bg-sky-50 border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-none" required></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-sky-300 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
                    <Send size={18} /> Envoyer le message
                </button>
            </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;