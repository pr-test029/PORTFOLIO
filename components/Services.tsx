
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot, Code, Palette, Users, Video, Map, ArrowUpRight, Cpu } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Infographie & Design',
      desc: 'Conception graphique complète : retouche photo, montage vidéo, cartes de visite, flyers, badges, affiches, bâches, etc.',
      icon: <Palette size={28} className="text-sky-600" />,
      color: "from-orange-400 to-red-600"
    },
    {
      title: 'Développement Web & Mobile',
      desc: 'Création de sites web, applications web et mobiles (Android & iOS) sur mesure.',
      icon: <Code size={28} className="text-sky-600" />,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: 'Gestion Réseaux Sociaux',
      desc: 'Création, gestion et animation de vos réseaux sociaux pour une présence digitale forte.',
      icon: <Users size={28} className="text-sky-600" />,
      color: "from-purple-400 to-pink-600"
    },
    {
      title: 'Localisation Google Maps',
      desc: 'Service de référencement et de localisation de votre entreprise sur Google Maps pour une visibilité locale accrue.',
      icon: <Map size={28} className="text-sky-600" />,
      color: "from-green-400 to-green-600"
    },
    {
      title: 'Saisie & Mise en forme',
      desc: 'Service de saisie numérique rapide et mise en forme professionnelle de vos documents.',
      icon: <Cpu size={28} className="text-sky-600" />,
      color: "from-yellow-400 to-orange-600"
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
    show: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" }
    }
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
                        <Link to="/contact" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-sky-500 group-hover:text-white transition-all">
                            <ArrowUpRight size={20} />
                        </Link>
                    </div>
                </div>
            </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
