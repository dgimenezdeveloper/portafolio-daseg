"use client"
import { cvData } from '@/data/cvData';
import { motion } from 'framer-motion';
import { FaDownload, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

// Define a type for Timeline items
type TimelineItemType = {
  period: string;
  role?: string;
  degree?: string;
  company?: string;
  institution?: string;
  location: string;
  description: string | string[];
};

// El componente TimelineItem se vuelve más flexible
const TimelineItem = ({ item }: { item: TimelineItemType }) => (
  <motion.div
    className="relative pl-8 mb-8 border-l-2 border-gray-700"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
  >
    <div className="absolute -left-[11px] top-1 w-5 h-5 bg-cyan-500 rounded-full border-4 border-gray-900"></div>
    <p className="text-sm text-gray-400 mb-1">{item.period}</p>
    <h3 className="text-xl font-bold text-white">{item.role || item.degree}</h3>
    <p className="text-md text-cyan-400 font-semibold mb-2">{item.company || item.institution}, {item.location}</p>
    
    {Array.isArray(item.description) ? (
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        {item.description.map((point: string, i: number) => <li key={i}>{point}</li>)}
      </ul>
    ) : (
      <p className="text-gray-300">{item.description}</p>
    )}
  </motion.div>
);

export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6 pt-32">
      {/* --- HEADER --- */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex justify-between items-start mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Darío Sebastian Gimenez</h1>
          <p className="text-lg text-gray-400">Perfil Profesional</p>
        </div>
        <a href="/cv-dario-gimenez.pdf" download
          className="flex items-center gap-2 bg-cyan-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-300 hover:bg-cyan-700 hover:scale-105"
        >
          <FaDownload />
          Descargar
        </a>
      </motion.div>

      {/* --- SOBRE MÍ --- */}
      <section className="mb-16">
         <p className="text-gray-300 text-lg leading-relaxed">{cvData.aboutMeSummary}</p>
      </section>

      {/* --- EXPERIENCIA --- */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold flex items-center gap-3 border-b-2 border-cyan-500 pb-2 mb-8"><FaBriefcase />Experiencia</h2>
        <div>{cvData.experience.map((exp, i) => <TimelineItem key={i} item={exp} />)}</div>
      </section>

      {/* --- EDUCACIÓN --- */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold flex items-center gap-3 border-b-2 border-cyan-500 pb-2 mb-8"><FaGraduationCap />Formación</h2>
        <div>{cvData.education.map((edu, i) => <TimelineItem key={i} item={edu} />)}</div>
      </section>
      
       {/* --- APTITUDES --- */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold border-b-2 border-cyan-500 pb-2 mb-8">Aptitudes y Habilidades Blandas</h2>
        <ul className="columns-2 md:columns-3 text-gray-300">
          {cvData.softSkills.map(skill => <li key={skill} className="mb-2 list-inside list-disc">{skill}</li>)}
        </ul>
      </section>
    </div>
  );
}