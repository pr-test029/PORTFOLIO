
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Bot, Palette, Users, Cpu } from 'lucide-react';
import { Skill } from '../types';

const SkillBar: React.FC<{ skill: Skill; color: string }> = ({ skill, color }) => (
  <div className="mb-5">
    <div className="flex justify-between items-center mb-2">
      <span className="font-semibold text-slate-700 text-sm">{skill.name}</span>
      <span className="text-xs font-bold text-slate-400">{skill.percentage}%</span>
    </div>
    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.percentage}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`h-full rounded-full bg-gradient-to-r ${color} shadow-[0_0_10px_rgba(0,0,0,0.1)]`}
      />
    </div>
  </div>
);

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Développement Frontend',
      icon: <Code className="text-white" size={20} />,
      color: "from-blue-500 to-cyan-400",
      skills: [
        { name: 'React & TypeScript', percentage: 90 },
        { name: 'Tailwind CSS', percentage: 95 },
        { name: 'Single Page Applications (SPA)', percentage: 85 },
      ]
    },
    {
      title: 'Intelligence Artificielle & OCR',
      icon: <Cpu className="text-white" size={20} />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: 'OCR & HTR (Vision IA)', percentage: 85 },
        { name: 'Deep Learning (Traitement Doc)', percentage: 75 },
        { name: 'Export Word & Office API', percentage: 90 },
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">
            Arsenal de <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Compétences</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
           Une expertise technique focalisée sur la performance, l'accessibilité et l'innovation par l'IA.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-xl border border-white/60"
            >
                <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg transform rotate-3`}>
                        {category.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">{category.title}</h2>
                </div>
                <div>
                    {category.skills.map((skill, idx) => (
                        <SkillBar key={idx} skill={skill} color={category.color} />
                    ))}
                </div>
            </motion.div>
        ))}
      </div>

      {/* Floating Tech Badges */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 flex flex-wrap justify-center gap-4 opacity-70"
      >
        {['React', 'TypeScript', 'Tailwind', 'Netlify', 'OCR', 'Deep Learning', 'Office API'].map((tech, i) => (
            <span key={i} className="px-4 py-2 bg-white rounded-full text-xs font-bold text-slate-400 shadow-sm border border-slate-100">
                {tech}
            </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
