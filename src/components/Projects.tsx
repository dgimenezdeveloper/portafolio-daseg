"use client";

import { motion } from 'framer-motion';
import { projectsData } from '@/data/projectsData';
import ProjectCard from './ProjectCard';
import { FaGithub } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
        <h2 id="projects-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 text-primary tracking-tight">
          Proyectos Destacados
        </h2>
        <p className="text-secondary text-base sm:text-lg mb-10 max-w-2xl mx-auto">
          Sistemas empresariales en producción, arquitecturas multi-tenant y automatizaciones de alto impacto.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        {/* Botón hacia GitHub para ver más proyectos */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/dgimenezdeveloper?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold rounded-2xl hover:scale-105 transition-transform"
          >
            <FaGithub size={18} />
            <span>Ver más proyectos y repositorios en GitHub</span>
          </a>
        </div>
      </div>

      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[320px] bg-cyan-400/15 blur-[160px] rounded-full z-0" />
    </section>
  );
}