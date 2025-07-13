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
    <section id="proyectos" className="py-24 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos que He Construido</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Aquí tienes una selección de mis trabajos, desde landing pages hasta aplicaciones interactivas.
        </p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
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
    </section>
  );
}