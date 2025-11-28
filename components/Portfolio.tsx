
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { ExternalLink, Tag, Folder } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: 'Bot WhatsApp E-commerce',
    description: 'Assistant virtuel intelligent gérant catalogue et commandes.',
    category: 'chatbot',
    tags: ['Python', 'WhatsApp API', 'AI'],
    icon: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Fashion Store Pro',
    description: 'Plateforme E-commerce complète avec tableau de bord admin.',
    category: 'web',
    tags: ['React', 'Node.js', 'Stripe'],
    icon: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'EcoTech Branding',
    description: 'Refonte complète de l\'identité visuelle pour une startup verte.',
    category: 'design',
    tags: ['Illustrator', 'Figma', 'Brand'],
    icon: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'HR Connect App',
    description: 'App mobile de gestion des congés et bulletins de paie.',
    category: 'app',
    tags: ['React Native', 'Firebase'],
    icon: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'GeoLocator Plus',
    description: 'Intégration Google Maps avancée pour la logistique.',
    category: 'web',
    tags: ['Maps API', 'Geolocation'],
    icon: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Finance Dashboard',
    description: 'Interface UI/UX pour une application bancaire.',
    category: 'design',
    tags: ['Figma', 'Prototyping'],
    icon: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'design' | 'chatbot' | 'app'>('all');

  const filteredProjects = projects.filter(p => filter === 'all' || p.category === filter);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
           Dernières <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Réalisations</span>
        </h1>
        
        {/* Modern Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 bg-white/50 backdrop-blur-md p-1.5 rounded-full inline-flex border border-white/60 shadow-sm mx-auto">
            {['all', 'web', 'design', 'chatbot', 'app'].map((cat) => (
            <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                filter === cat 
                    ? 'bg-sky-500 text-white shadow-md' 
                    : 'text-slate-500 hover:text-sky-600 hover:bg-white/50'
                }`}
            >
                {cat === 'all' ? 'Tout' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
            ))}
        </div>
      </div>

      {/* Masonry-style Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:shadow-sky-200/50 transition-all duration-500"
            >
              {/* Image with Overlay */}
              <div className="h-64 overflow-hidden relative">
                 <img 
                    src={project.icon} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    <button className="bg-white text-slate-900 px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-sky-500 hover:text-white transition-colors">
                        <ExternalLink size={16} /> Voir Projet
                    </button>
                 </div>
              </div>
              
              {/* Content */}
              <div className="p-6 relative">
                <div className="absolute -top-6 right-6 w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center text-white shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    <Folder size={20} />
                </div>

                <div className="flex gap-2 mb-3">
                   {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase font-bold tracking-wider bg-slate-100 text-slate-500 px-2 py-1 rounded-md">
                        {tag}
                    </span>
                   ))}
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-sky-600 transition-colors">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Portfolio;
