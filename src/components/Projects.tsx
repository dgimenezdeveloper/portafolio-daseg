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
      className="py-28 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800/80 relative"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-cyan-400 drop-shadow-lg tracking-tight">
          Proyectos Destacados
        </h2>
        <p className="text-gray-300 text-xl mb-14 max-w-2xl mx-auto font-light">
          Selección profesional de soluciones digitales: desde sistemas empresariales hasta experiencias interactivas.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left"
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

      {/* Glow decorativo de fondo */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-500/10 blur-3xl rounded-full z-0" />
    </section>
  );
}