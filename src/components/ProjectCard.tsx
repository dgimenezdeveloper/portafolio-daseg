"use client";

import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

type ProjectProps = {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    links: {
      github: string;
      live: string;
    };
  }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <motion.div 
      className="bg-gray-800/40 rounded-lg overflow-hidden flex flex-col group"
      variants={itemVariants}
    >
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={`Captura de pantalla del proyecto ${project.title}`}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-gray-700/50">
          <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="Ver código en GitHub"
             className="text-gray-400 hover:text-white transition-colors"><FaGithub size={22} /></a>
          <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label="Ver demo en vivo"
             className="text-gray-400 hover:text-white transition-colors"><FaExternalLinkAlt size={20} /></a>
        </div>
      </div>
    </motion.div>
  );
}