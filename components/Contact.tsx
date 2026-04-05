import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Map as MapIcon } from 'lucide-react';

const CrystalMap3D = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  return (
    <div className="w-full h-80 perspective-[1000px] mt-8 group">
      <motion.div
        style={{ x, y, rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={(e) => {
            if (isTouch) return;
            const rect = e.currentTarget.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            x.set((e.clientX - centerX) / 10);
            y.set((e.clientY - centerY) / 10);
        }}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        className="relative w-full h-full rounded-[2.5rem] border-4 border-white/60 shadow-2xl bg-white/20 backdrop-blur-md overflow-hidden cursor-pointer transition-all duration-300"
      >
        {/* Glossy Reflection Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-30 pointer-events-none z-30 mix-blend-overlay" />
        
        {/* Map Iframe */}
        <div className="w-full h-full transform scale-110 group-hover:scale-100 transition-transform duration-700">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63630.56976695276!2d15.207849186676366!3d-4.269418641490237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33c109786a37%3A0x6331904e57143e1!2sMfilou%2C%20Brazzaville%2C%20Congo-Brazzaville!5e0!3m2!1sfr!2s!4v1716300000000!5m2!1sfr!2s"
                className="w-full h-full border-0 grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                title="Google Maps Mfilou"
            ></iframe>
        </div>

        {/* 3D Floating Pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none transform translate-z-12">
             <div className="relative">
                <span className="absolute -inset-4 bg-sky-500/40 rounded-full animate-ping"></span>
                <MapPin size={48} className="text-red-500 drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] relative z-10" fill="currentColor" />
             </div>
        </div>

        {/* Glass Label Card */}
        <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-xl p-4 rounded-2xl border border-white/50 shadow-xl z-20 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2">
            <div className="flex items-center justify-between">
                <div>
                    <h4 className="font-black text-slate-800 text-sm flex items-center gap-2">
                        QG Opérationnel
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    </h4>
                    <p className="text-xs text-sky-600 font-bold uppercase tracking-wider mt-0.5">Mfilou, Brazzaville</p>
                </div>
                <div className="bg-gradient-to-br from-sky-400 to-blue-600 text-white p-2.5 rounded-xl shadow-lg">
                    <MapIcon size={18} />
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
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
            Entrons en <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Contact</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
           Une idée ? Un projet ? Ou simplement envie de discuter technologies ? Je suis à votre écoute.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* Contact Info & Crystal Map */}
        <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-xl border border-white/60"
            >
                <h2 className="text-2xl font-black text-slate-800 mb-10 flex items-center gap-3">
                    <div className="w-1 h-8 bg-sky-500 rounded-full"></div>
                    Coordonnées
                </h2>
                
                <div className="space-y-8">
                    {[
                        { icon: <Phone size={20} />, label: 'WhatsApp Direct', value: '+242 06 769 61 57', color: 'text-sky-600', bg: 'bg-sky-50' },
                        { icon: <Phone size={20} />, label: 'Numéro Agence', value: '+242 05 013 32 71', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                        { icon: <Mail size={20} />, label: 'Email', value: 'paulndamba2@gmail.com', color: 'text-indigo-600', bg: 'bg-indigo-50' }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-5 group">
                            <div className={`p-4 ${item.bg} ${item.color} rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</h3>
                                <p className="text-slate-700 font-bold">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* The 3D Crystal Map Component */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                <CrystalMap3D />
            </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white/80 backdrop-blur-2xl rounded-[2.5rem] p-10 md:p-12 shadow-2xl border border-white/80 h-fit"
        >
            <h2 className="text-3xl font-black text-slate-800 mb-8">Envoyer un message</h2>
            <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Nom Complet</label>
                    <input 
                        type="text" 
                        placeholder="Jean Dupont"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all font-medium text-slate-700" 
                        required 
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Professionnel</label>
                    <input 
                        type="email" 
                        placeholder="jean@exemple.com"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all font-medium text-slate-700" 
                        required 
                    />
                </div>
                <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Votre Message</label>
                    <textarea 
                        rows={5} 
                        placeholder="Décrivez votre projet ou votre question..."
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all font-medium text-slate-700 resize-none" 
                        required
                    ></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                    <button className="w-full group relative bg-slate-900 text-white font-black py-5 rounded-2xl shadow-xl hover:shadow-sky-200 transition-all overflow-hidden active:scale-95">
                        <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative z-10 flex items-center justify-center gap-3 text-sm uppercase tracking-widest">
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                            Propulser le message
                        </span>
                    </button>
                </div>
            </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;