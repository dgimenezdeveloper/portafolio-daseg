"use client";
import { cvData } from '@/data/cvData';
import { motion } from 'framer-motion';
import { FaDownload, FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa';

type TimelineItemType = {
  period: string;
  role?: string;
  degree?: string;
  company?: string;
  institution?: string;
  location: string;
  description: string | string[];
};

const TimelineItem = ({ item }: { item: TimelineItemType }) => (
  <motion.div
    className="relative mb-10 border-l-2 border-soft pl-6 sm:pl-8"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-[var(--surface)] bg-[var(--accent)] shadow-sm"></div>
    <span className="inline-block rounded-md bg-[var(--accent-soft)] px-2.5 py-0.5 text-xs font-semibold text-[var(--accent)] mb-1">
      {item.period}
    </span>
    <h3 className="text-xl font-bold text-primary mt-1">{item.role || item.degree}</h3>
    <p className="mb-3 text-sm font-semibold text-muted">
      {item.company || item.institution} • <span className="text-secondary">{item.location}</span>
    </p>

    {Array.isArray(item.description) ? (
      <ul className="space-y-2 text-sm sm:text-base text-secondary leading-relaxed">
        {item.description.map((point: string, i: number) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-[var(--accent)] mt-1.5 text-xs">◆</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-sm sm:text-base leading-relaxed text-secondary">{item.description}</p>
    )}
  </motion.div>
);

export default function CVPage() {
  return (
    <div className="section-shell pt-40 sm:pt-44 pb-24">
      <div className="mx-auto max-w-4xl space-y-16">
        
        {/* HEADER DEL CV (Despejado de la navbar) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-6 border-b border-soft pb-8 sm:flex-row sm:items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-surface px-3 py-1 text-xs font-semibold text-[var(--accent)] mb-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Disponible para proyectos internacionales
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
              Darío Sebastián Giménez
            </h1>
            <p className="text-base sm:text-lg text-muted mt-1 font-medium">
              Full-Stack Software Engineer • Scrum Master • Industrial Systems Lead
            </p>
          </div>
          <a
            href="/cv-dario-gimenez.pdf"
            download
            className="btn-primary flex items-center gap-2 whitespace-nowrap"
          >
            <FaDownload />
            <span>Descargar CV en PDF</span>
          </a>
        </motion.div>

        {/* RESUMEN EJECUTIVO (Estructurado en tarjetas) */}
        <section className="rounded-3xl border border-soft bg-surface p-6 sm:p-8 shadow-card-soft space-y-4">
          <h2 className="text-xl font-bold text-primary flex items-center gap-2">
            <FaAward className="text-[var(--accent)]" />
            Perfil Profesional & Valor Diferencial
          </h2>
          <p className="text-secondary leading-relaxed text-base">
            Ingeniero de Software Full-Stack y Scrum Master con una ventaja competitiva única: <strong>rigor analítico y trazabilidad de procesos</strong> adquiridos durante años como Analista Técnico Químico Senior en la industria farmacéutica (<strong>Roemmers SACIF</strong>), administrando sistemas corporativos <strong>SAP</strong> y normativas GMP/GLP.
          </p>
          <p className="text-secondary leading-relaxed text-base">
            Actualmente dirijo el desarrollo técnico en <strong>Folkode Group</strong>, coordinando equipos multidisciplinarios bajo metodologías ágiles y desarrollando sistemas SaaS B2B, arquitecturas multi-tenant (PostgreSQL + Prisma) y automatizaciones de procesos con webhooks y bots (FastAPI, Redis, Celery, n8n).
          </p>
        </section>

        {/* EXPERIENCIA LABORAL */}
        <section>
          <h2 className="mb-8 flex items-center gap-3 border-b border-soft pb-3 text-2xl sm:text-3xl font-bold text-primary">
            <FaBriefcase className="text-[var(--accent)]" />
            Experiencia Laboral
          </h2>
          <div>{cvData.experience.map((exp, i) => <TimelineItem key={i} item={exp} />)}</div>
        </section>

        {/* FORMACIÓN ACADÉMICA */}
        <section>
          <h2 className="mb-8 flex items-center gap-3 border-b border-soft pb-3 text-2xl sm:text-3xl font-bold text-primary">
            <FaGraduationCap className="text-[var(--accent)]" />
            Formación Académica
          </h2>
          <div>{cvData.education.map((edu, i) => <TimelineItem key={i} item={edu} />)}</div>
        </section>

        {/* APTITUDES EN CHIPS VISUALES (Adiós a las viñetas planas) */}
        <section className="rounded-3xl border border-soft bg-surface p-6 sm:p-8 shadow-card-soft">
          <h2 className="mb-6 text-xl sm:text-2xl font-bold text-primary">
            Aptitudes de Liderazgo y Metodología
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {cvData.softSkills.map((skill, index) => (
              <span
                key={index}
                className="rounded-xl border border-soft bg-[var(--surface-muted)] px-3.5 py-2 text-xs sm:text-sm font-semibold text-secondary transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                ✓ {skill}
              </span>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}