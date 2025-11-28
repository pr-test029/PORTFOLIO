
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Left Column: Intro & Timeline */}
        <div className="lg:col-span-8 space-y-12">
            
            {/* Intro Card */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 shadow-lg border border-white/60"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-sky-100 text-sky-600 rounded-xl">
                        <Heart size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-800">Mon Histoire</h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Je suis <strong className="text-slate-900 bg-sky-100 px-1 rounded">NDAMBA GOSSAKI Paul Roger</strong>. 
                    Ma passion réside à l'intersection de l'humain et du numérique. 
                    Diplômé en gestion et autodidacte acharné en technologie, j'ai développé une double compétence rare.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Je ne me contente pas de coder ou de gérer ; je construis des ponts. Que ce soit pour optimiser un processus RH ou déployer une application complexe, mon objectif reste le même : <span className="font-semibold text-sky-600">L'efficacité par l'innovation.</span>
                </p>
            </motion.div>

            {/* Timeline */}
            <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
                    <Briefcase className="text-sky-500" /> Expérience
                </h3>
                <div className="relative border-l-2 border-sky-100 ml-4 space-y-12">
                    {[
                        { 
                            year: '2025 - Présent', 
                            role: 'Gestionnaire des RH', 
                            company: 'Collectif LAMUKA', 
                            desc: 'Pilotage stratégique des ressources humaines, optimisation des processus de recrutement et développement des talents.' 
                        },
                        { 
                            year: '2023 - Présent', 
                            role: 'CEO & Fondateur', 
                            company: 'Best GRAPHIC', 
                            desc: 'Direction d\'une agence digitale. Supervision de projets web, design graphique et intégration de solutions IA pour divers clients.' 
                        },
                        { 
                            year: '2022 - 2023', 
                            role: 'Stagiaire Polyvalent', 
                            company: 'ARTF Congo', 
                            desc: 'Immersion complète dans les départements Informatique et RH. Contribution à la digitalisation des dossiers du personnel.' 
                        }
                    ].map((item, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative pl-8"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-sky-500 shadow-md"></div>
                            <div className="bg-white/50 backdrop-blur-md p-6 rounded-2xl border border-white/60 hover:shadow-lg transition-shadow">
                                <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-xs font-bold rounded-full mb-2">{item.year}</span>
                                <h4 className="text-xl font-bold text-slate-800">{item.role}</h4>
                                <div className="text-sky-600 font-medium mb-3">{item.company}</div>
                                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

        {/* Right Column: Education & Stats */}
        <div className="lg:col-span-4 space-y-8">
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-slate-900 text-white rounded-[2rem] p-8 shadow-2xl relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500 rounded-full blur-[60px] opacity-20"></div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
                    <GraduationCap className="text-sky-400" /> Éducation
                </h3>
                <div className="space-y-6 relative z-10">
                     {[
                        { title: 'Dev. Logiciels', school: 'Les Chevaliers du net', year: 'En cours', color: 'text-yellow-400' },
                        { title: 'Web Master & Design', school: 'Skill Academy (MTN)', year: '2025', color: 'text-green-400' },
                        { title: 'Licence Gestion', school: 'E.S.G.A.E', year: '2022-2025', color: 'text-sky-400' },
                    ].map((edu, idx) => (
                        <div key={idx} className="pb-4 border-b border-white/10 last:border-0 last:pb-0">
                            <h4 className={`font-bold ${edu.color}`}>{edu.title}</h4>
                            <p className="text-sm text-slate-300">{edu.school}</p>
                            <p className="text-xs text-slate-500 mt-1">{edu.year}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-sky-400 to-blue-600 rounded-[2rem] p-8 text-white shadow-lg text-center"
            >
                <Award size={48} className="mx-auto mb-4 text-white/80" />
                <div className="text-5xl font-black mb-2">100%</div>
                <p className="text-sky-100 font-medium">Engagement Client</p>
                <p className="text-xs text-sky-200 mt-4 opacity-80">
                    Chaque projet est traité avec la plus haute priorité et rigueur.
                </p>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
