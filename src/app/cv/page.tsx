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
    className="relative mb-8 border-l-2 border-soft pl-8"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
  >
    <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full border-4 border-[var(--surface)] bg-[var(--accent)]"></div>
    <p className="mb-1 text-sm text-muted">{item.period}</p>
    <h3 className="text-xl font-bold text-primary">{item.role || item.degree}</h3>
    <p className="mb-2 text-sm font-semibold text-[var(--accent)]">{item.company || item.institution}, {item.location}</p>

    {Array.isArray(item.description) ? (
      <ul className="list-disc list-inside space-y-1 text-secondary">
        {item.description.map((point: string, i: number) => <li key={i}>{point}</li>)}
      </ul>
    ) : (
      <p className="text-secondary">{item.description}</p>
    )}
  </motion.div>
);

export default function CVPage() {
  return (
    <div className="section-shell pt-36">
      <div className="mx-auto max-w-4xl space-y-16">
      {/* --- HEADER --- */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-start justify-between gap-4 sm:flex-row">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Darío Sebastian Gimenez</h1>
          <p className="text-lg text-muted">Perfil profesional</p>
        </div>
        <a href="/cv-dario-gimenez.pdf" download className="btn-primary">
          <FaDownload />
          Descargar
        </a>
      </motion.div>

      {/* --- SOBRE MÍ --- */}
      <section>
        <p className="text-lg leading-relaxed text-secondary">{cvData.aboutMeSummary}</p>
      </section>

      {/* --- EXPERIENCIA --- */}
      <section>
        <h2 className="mb-8 flex items-center gap-3 border-b-2 border-[var(--accent)] pb-2 text-3xl font-bold text-primary"><FaBriefcase />Experiencia</h2>
        <div>{cvData.experience.map((exp, i) => <TimelineItem key={i} item={exp} />)}</div>
      </section>

      {/* --- EDUCACIÓN --- */}
      <section>
        <h2 className="mb-8 flex items-center gap-3 border-b-2 border-[var(--accent)] pb-2 text-3xl font-bold text-primary"><FaGraduationCap />Formación</h2>
        <div>{cvData.education.map((edu, i) => <TimelineItem key={i} item={edu} />)}</div>
      </section>
      
       {/* --- APTITUDES --- */}
      <section>
        <h2 className="mb-8 border-b-2 border-[var(--accent)] pb-2 text-3xl font-bold text-primary">Aptitudes y Habilidades Blandas</h2>
        <ul className="columns-2 md:columns-3 text-secondary">
          {cvData.softSkills.map(skill => <li key={skill} className="mb-2 list-inside list-disc">{skill}</li>)}
        </ul>
      </section>
      </div>
    </div>
  );
}