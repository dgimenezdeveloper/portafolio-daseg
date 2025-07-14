"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
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
  const [glowStyle, setGlowStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setGlowStyle({
      '--x': `${x}px`,
      '--y': `${y}px`,
    });
  };

  return (
    <Tilt
      perspective={1000}
      glareEnable={true}
      glareMaxOpacity={0.1}
      glarePosition="all"
      scale={1.02}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      className="rounded-lg h-full"
    >
      <motion.div 
        variants={itemVariants}
        onMouseMove={handleMouseMove}
        style={glowStyle as React.CSSProperties}
        className="
          project-card relative bg-gray-800/40 rounded-lg overflow-hidden
          flex flex-col group h-full border border-transparent
          hover:border-cyan-500/50 transition-all duration-300
        "
      >
        {/* Imagen del proyecto */}
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
        </div>

        {/* Contenido de la tarjeta */}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>

          {/* Tags/Tecnologías */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-full
                           border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Enlaces */}
          <div className="flex gap-4 mt-auto">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 text-gray-300
                         rounded-lg hover:bg-gray-600/50 hover:text-white transition-all
                         border border-gray-600/50 hover:border-gray-500"
              aria-label={`Ver código de ${project.title} en GitHub`}
            >
              <FaGithub size={16} />
              <span className="text-sm">Código</span>
            </a>
            
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-300
                         rounded-lg hover:bg-cyan-500/30 hover:text-cyan-200 transition-all
                         border border-cyan-500/30 hover:border-cyan-400/50"
              aria-label={`Ver ${project.title} en vivo`}
            >
              <FaExternalLinkAlt size={14} />
              <span className="text-sm">Ver Demo</span>
            </a>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
}