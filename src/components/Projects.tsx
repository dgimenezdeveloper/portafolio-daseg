"use client";

import { motion } from 'framer-motion';
import { projectsData } from '@/data/projectsData';
import ProjectCard from './ProjectCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="section-shell projects-section relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10 px-4 sm:px-6">

        <h2 id="projects-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 text-primary tracking-tight">
          Proyectos Destacados
        </h2>
        <p className="text-secondary text-base sm:text-lg md:text-xl mb-10 sm:mb-12 md:mb-14 max-w-2xl mx-auto px-4">
          Selección profesional de soluciones digitales: desde sistemas empresariales hasta experiencias interactivas.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>

      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[320px] bg-cyan-400/20 blur-[160px] rounded-full z-0" />
    </section>
  );
}