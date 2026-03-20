
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Code, Palette, Users, Video, Map, ArrowUpRight, Cpu } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Plateformes Citoyennes',
      desc: 'Conception de solutions numériques pour favoriser l\'engagement et la participation active au développement local.',
      icon: <Users size={28} className="text-sky-600" />,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: 'Systèmes d\'Information',
      desc: 'Mise en place de plateformes de diffusion de contenus et de sensibilisation optimisées pour tous les supports.',
      icon: <Bot size={28} className="text-sky-600" />,
      color: "from-green-400 to-green-600"
    },
    {
      title: 'Optimisation UX & Performance',
      desc: 'Design d\'interfaces fluides et accessibles, avec une performance accrue pour les connexions limitées.',
      icon: <Cpu size={28} className="text-sky-600" />,
      color: "from-purple-400 to-pink-600"
    },
    {
      title: 'Numérisation Intelligente',
      desc: 'Conversion de documents physiques, audio ou manuscrits en formats numériques éditables (Word, LaTeX) via OCR/HTR.',
      icon: <Video size={28} className="text-sky-600" />,
      color: "from-red-500 to-pink-600"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-6 py-12">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <span className="text-sky-600 font-bold tracking-widest uppercase text-sm">Ce que je propose</span>
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 mt-2 mb-6">
           Solutions Digitales <br/><span className="text-sky-500">Engagées</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
           Une expertise technique dédiée à l'impact social et à l'efficacité numérique.
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, index) => (
            <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="group relative bg-white/40 backdrop-blur-xl rounded-[2rem] p-8 border border-white/60 shadow-lg overflow-hidden"
            >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors">
                        {service.title}
                    </h3>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        {service.desc}
                    </p>
                    
                    <div className="flex items-center justify-between border-t border-slate-200/50 pt-4">
                        <span className="text-sm font-semibold text-slate-400">Sur devis</span>
                        <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-sky-500 group-hover:text-white transition-all">
                            <ArrowUpRight size={20} />
                        </button>
                    </div>
                </div>
            </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
