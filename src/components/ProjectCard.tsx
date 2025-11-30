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
      className="rounded-3xl h-full"
    >
      <motion.div
        variants={itemVariants}
        onMouseMove={handleMouseMove}
        style={glowStyle as React.CSSProperties}
        className="project-card relative flex h-full flex-col overflow-hidden rounded-3xl border border-soft bg-surface text-primary shadow-card-soft transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--accent)]"
      >
        {/* Imagen del proyecto */}
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={project.image}
            alt={`Captura de pantalla del proyecto ${project.title} - ${project.description.substring(0, 80)}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading={recentProjects.includes(project.title) ? "eager" : "lazy"}
            quality={75}
            priority={recentProjects.includes(project.title)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {/* Insignia de nuevo */}
          {recentProjects.includes(project.title) && (
            <span className="absolute top-3 left-3 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-white shadow-card animate-pulse">
              Nuevo
            </span>
          )}
        </div>

        {/* Contenido de la tarjeta */}
        <div className="flex flex-grow flex-col p-5 sm:p-6 md:p-7">
          <h3 className="mb-2 text-xl sm:text-2xl font-extrabold text-primary tracking-tight">
            {project.title}
          </h3>
          <p className="mb-4 sm:mb-5 flex-grow text-sm sm:text-base leading-relaxed text-secondary">
            {project.description}
          </p>

          {/* Tags/Tecnologías */}
          <div className="mb-5 sm:mb-6 md:mb-7 flex flex-wrap gap-1.5 sm:gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="tag-chip text-[0.65rem] sm:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Enlaces y galería */}
          <div className="mt-auto flex flex-wrap gap-2 sm:gap-3">
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-2xl border border-soft bg-surface px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-primary transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
              aria-label={`Ver ${project.title} en vivo`}
            >
              <FaExternalLinkAlt size={12} className="sm:w-[14px] sm:h-[14px]" />
              <span>Ver demo</span>
            </a>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-2xl border border-soft bg-surface px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-secondary transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
              aria-label={`Ver código de ${project.title} en GitHub`}
            >
              <FaGithub size={14} className="sm:w-4 sm:h-4" />
              <span>Código</span>
            </a>
            {/* Botón galería */}
            {project.gallery && (
              (Array.isArray(project.gallery) && project.gallery.length > 1) ||
              (!Array.isArray(project.gallery) && Object.keys(project.gallery).length > 0)
            ) && (
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-2xl border border-transparent bg-[var(--accent-soft)] px-4 py-2 text-sm font-semibold text-[var(--accent)] transition-colors duration-200 hover:border-[var(--accent)]/50 hover:bg-[var(--accent-soft)]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M4 7V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2M4 7v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7M4 7h16m-9 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm2 2 2.5-2.5a2 2 0 0 1 2.8 0L20 13M7 17l3-3a2 2 0 0 1 2.8 0l1.15 1.15"/></svg>
                <span>Ver galería</span>
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
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 text-primary">
        <div className="rounded-2xl border border-soft bg-surface p-8 text-center shadow-card">
          <p className="text-secondary">La galería solo está disponible en el navegador.</p>
          <button onClick={() => setModalOpen(false)} className="mt-4 btn-primary">Cerrar</button>
        </div>
      </div>
    )}
    </>
  );
}