"use client";
import { cvData } from '@/data/cvData';
import { motion } from 'framer-motion';

// Define a type for timeline items
type TimelineItemType = {
  period: string;
  role?: string;
  degree?: string;
  company?: string;
  institution?: string;
  description?: string;
};

// Un componente interno reutilizable para cada item de la línea de tiempo
const TimelineItem = ({ item }: { item: TimelineItemType }) => (
  <motion.div 
    className="relative pl-8 mb-8 border-l-2 border-gray-700"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="absolute -left-[11px] top-1 w-5 h-5 bg-cyan-500 rounded-full border-4 border-gray-900"></div>
    <p className="text-sm text-gray-400 mb-1">{item.period}</p>
    <h3 className="text-xl font-bold text-white">{item.role || item.degree}</h3>
    <p className="text-md text-cyan-400 font-semibold mb-2">{item.company || item.institution}</p>
    {item.description && <p className="text-gray-300">{item.description}</p>}
  </motion.div>
);

export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6 pt-32">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Currículum Vitae</h1>
        <p className="text-lg text-gray-400 mb-12">Un resumen de mi trayectoria profesional, experiencia y formación académica.</p>
      </motion.div>

      {/* Sección de Experiencia */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold border-b-2 border-cyan-500 pb-2 mb-8">Experiencia Laboral</h2>
        <div>
          {cvData.experience.map((exp, index) => <TimelineItem key={index} item={exp} />)}
        </div>
      </section>

      {/* Sección de Educación */}
      <section>
        <h2 className="text-3xl font-bold border-b-2 border-cyan-500 pb-2 mb-8">Educación</h2>
        <div>
          {cvData.education.map((edu, index) => <TimelineItem key={index} item={edu} />)}
        </div>
      </section>
    </div>
  );
}