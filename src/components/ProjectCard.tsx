"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

// Importación dinámica del modal SOLO una vez, fuera del render
const ProjectGalleryModal = dynamic(() => import('./ProjectGalleryModal'), {
  ssr: false,
  loading: () => null,
});
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
    gallery?: Record<string, string[]> | string[];
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

export default function ProjectCard({ project }: ProjectProps) {
  const [glowStyle, setGlowStyle] = useState<Record<string, string>>({});
  const [modalOpen, setModalOpen] = useState(false);

  // Importación dinámica para evitar problemas SSR
  // Estado para saber si estamos en cliente
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') setIsClient(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setGlowStyle({
      '--x': `${x}px`,
      '--y': `${y}px`,
    });
  };

  // Proyectos recientes destacados
  const recentProjects = [
    "Andet",
    "Congreso de Logística UNABA",
    "Luminova ERP",
    "Dario Go",
    "La Antigua Revistería",
  ];

  return (
    <>
    <Tilt
      perspective={1200}
      glareEnable={true}
      glareMaxOpacity={0.13}
      glarePosition="all"
      scale={1.03}
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      className="rounded-2xl h-full"
    >
      <motion.div
        variants={itemVariants}
        onMouseMove={handleMouseMove}
        style={glowStyle as React.CSSProperties}
        className="
          project-card relative bg-gray-800/60 rounded-2xl overflow-hidden
          flex flex-col group h-full border border-gray-700/40 shadow-xl
          hover:border-cyan-400/70 hover:shadow-cyan-500/10 hover:shadow-2xl
          transition-all duration-300
        "
      >
        {/* Imagen del proyecto */}
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={recentProjects.includes(project.title)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
          {/* Insignia de nuevo */}
          {recentProjects.includes(project.title) && (
            <span className="absolute top-3 left-3 bg-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md animate-pulse">
              Nuevo
            </span>
          )}
        </div>

        {/* Contenido de la tarjeta */}
        <div className="p-7 flex-grow flex flex-col">
          <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-cyan-400 transition-colors tracking-tight">
            {project.title}
          </h3>
          <p className="text-gray-200 text-base leading-relaxed mb-5 flex-grow font-light">
            {project.description}
          </p>

          {/* Tags/Tecnologías */}
          <div className="flex flex-wrap gap-2 mb-7">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-200 rounded-full
                           border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Enlaces y galería */}
          <div className="flex flex-wrap gap-4 mt-auto">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-700/60 text-gray-200
                         rounded-lg hover:bg-gray-600/80 hover:text-white transition-all
                         border border-gray-600/50 hover:border-cyan-400/60 shadow-sm"
              aria-label={`Ver código de ${project.title} en GitHub`}
            >
              <FaGithub size={16} />
              <span className="text-sm font-medium">Código</span>
            </a>
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-200
                         rounded-lg hover:bg-cyan-500/30 hover:text-cyan-100 transition-all
                         border border-cyan-500/30 hover:border-cyan-400/70 shadow-sm"
              aria-label={`Ver ${project.title} en vivo`}
            >
              <FaExternalLinkAlt size={14} />
              <span className="text-sm font-medium">Ver Demo</span>
            </a>
            {/* Botón galería */}
            {project.gallery && (
              (Array.isArray(project.gallery) && project.gallery.length > 1) ||
              (!Array.isArray(project.gallery) && Object.keys(project.gallery).length > 0)
            ) && (
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-cyan-700/20 text-cyan-200 rounded-lg
                  hover:bg-cyan-700/40 hover:text-cyan-100 transition-all border border-cyan-700/30
                  hover:border-cyan-400/70 shadow-sm font-medium"
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M4 7V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2M4 7v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7M4 7h16m-9 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm2 2 2.5-2.5a2 2 0 0 1 2.8 0L20 13M7 17l3-3a2 2 0 0 1 2.8 0l1.15 1.15"/></svg>
                <span className="text-sm font-medium">Ver galería</span>
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </Tilt>
    {/* Modal de galería: solo renderizar si está abierto */}
    {isClient && project.gallery && modalOpen && (
      <ProjectGalleryModal
        images={project.gallery}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        projectTitle={project.title}
      />
    )}
    {!isClient && project.gallery && modalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 text-white">
        <div className="bg-gray-900 p-8 rounded-xl shadow-xl">
          <p>La galería solo está disponible en el navegador.</p>
          <button onClick={() => setModalOpen(false)} className="mt-4 px-4 py-2 bg-cyan-600 rounded-lg">Cerrar</button>
        </div>
      </div>
    )}
    </>
  );
}