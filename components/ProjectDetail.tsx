import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowLeft, ExternalLink, CheckCircle2, Cpu, Layout, ShieldCheck, Zap } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Projet non trouvé</h2>
          <Link to="/portfolio" className="text-sky-600 hover:underline flex items-center gap-2">
            <ArrowLeft size={16} /> Retour au portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-slate-50 pt-24 pb-20"
    >
      <div className="container mx-auto px-6">
        <Link 
          to="/portfolio" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-sky-600 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Retour au Portfolio
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Image & Quick Info */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-8"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={project.icon} 
                alt={project.title} 
                className="w-full aspect-video object-cover"
              />
              <div className="absolute top-6 right-6">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-sky-600 shadow-lg">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Cpu size={20} className="text-sky-500" /> Stack Technique
              </h3>
              <div className="space-y-4">
                {project.stack.frontend && (
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Frontend</span>
                    <p className="text-slate-600 text-sm mt-1">{project.stack.frontend}</p>
                  </div>
                )}
                {project.stack.ai && (
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">IA & Vision</span>
                    <p className="text-slate-600 text-sm mt-1">{project.stack.ai}</p>
                  </div>
                )}
                {project.stack.deployment && (
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Déploiement</span>
                    <p className="text-slate-600 text-sm mt-1">{project.stack.deployment}</p>
                  </div>
                )}
                {project.stack.other && project.stack.other.length > 0 && (
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Architecture</span>
                    <ul className="list-disc list-inside text-slate-600 text-sm mt-1">
                      {project.stack.other.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-10"
          >
            <div>
              <h1 className="text-5xl font-black text-slate-800 mb-4">{project.title}</h1>
              <p className="text-2xl text-sky-600 font-medium italic mb-6">"{project.pitch}"</p>
              <p className="text-lg text-slate-600 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-sky-50 rounded-3xl p-6 border border-sky-100">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Zap size={18} className="text-sky-500" /> Points Forts
                </h3>
                <ul className="space-y-3">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={16} className="text-sky-500 mt-0.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-indigo-50 rounded-3xl p-6 border border-indigo-100">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Layout size={18} className="text-indigo-500" /> Fonctionnalités
                </h3>
                <ul className="space-y-3">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-sky-600 transition-all hover:scale-105 shadow-xl hover:shadow-sky-200"
              >
                Lancer l'Application <ExternalLink size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
