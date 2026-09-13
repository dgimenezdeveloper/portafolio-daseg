"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const ProjectGalleryModal = dynamic(() => import("./ProjectGalleryModal"), {
  ssr: false,
  loading: () => null,
});

type ProjectProps = {
  project: {
    title: string;
    description: string;
    image?: string;
    tags: string[];
    links: {
      github: string;
      live: string;
    };
    gallery?: Record<string, string[]> | string[];
  };
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function ProjectCard({ project }: ProjectProps) {
  const [glowStyle, setGlowStyle] = useState<Record<string, string>>({});
  const [modalOpen, setModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setGlowStyle({
      "--x": `${x}px`,
      "--y": `${y}px`,
    });
  };

  const hasValidImage = typeof project.image === "string" && project.image.trim().startsWith("/");

  const hasGallery =
    project.gallery &&
    ((Array.isArray(project.gallery) && project.gallery.length > 0) ||
      (!Array.isArray(project.gallery) && Object.keys(project.gallery).length > 0));

  return (
    <>
      <Tilt
        perspective={1800}        // Perspectiva más natural
        glareEnable={true}
        glareMaxOpacity={0.08}    // Brillo sutil, no deslumbrante
        glarePosition="all"
        scale={1.01}             // Escala casi imperceptible (no salta a la cara)
        tiltMaxAngleX={4}         // Inclinación suave de 4° (en lugar de 12°)
        tiltMaxAngleY={4}
        className="rounded-3xl h-full"
      >
        <motion.div
          variants={itemVariants}
          onMouseMove={handleMouseMove}
          style={glowStyle as React.CSSProperties}
          className="project-card relative flex h-full flex-col overflow-hidden rounded-3xl border border-soft bg-surface text-primary shadow-card-soft transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--accent)]"
        >
          {/* Portada del proyecto: Imagen real o Banner de código */}
          <div className="relative w-full h-56 overflow-hidden bg-surface-muted">
            {hasValidImage ? (
              <>
                <Image
                  src={project.image!}
                  alt={`Captura de pantalla del proyecto ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </>
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[var(--surface-muted)] to-[var(--surface-strong)] p-6 text-center border-b border-soft">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)] mb-3">
                  <FaCode size={28} />
                </div>
                <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-bold">
                  Software Architecture
                </span>
                <span className="text-sm font-semibold text-muted mt-1">
                  Full-Stack Platform
                </span>
              </div>
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
                <span key={index} className="tag-chip text-[0.65rem] sm:text-xs">
                  {tag}
                </span>
              ))}
            </div>

            {/* Enlaces y galería */}
            <div className="mt-auto flex flex-wrap gap-2 sm:gap-3">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 rounded-2xl border border-soft bg-surface px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-primary transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label={`Ver ${project.title} en vivo`}
                >
                  <FaExternalLinkAlt size={12} className="sm:w-[14px] sm:h-[14px]" />
                  <span>Ver demo</span>
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 rounded-2xl border border-soft bg-surface px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-secondary transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label={`Ver código de ${project.title} en GitHub`}
                >
                  <FaGithub size={14} className="sm:w-4 sm:h-4" />
                  <span>Código</span>
                </a>
              )}
              {hasGallery && (
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-2xl border border-transparent bg-[var(--accent-soft)] px-4 py-2 text-sm font-semibold text-[var(--accent)] transition-colors duration-200 hover:border-[var(--accent)]/50 hover:bg-[var(--accent-soft)]/80"
                >
                  <span>Ver galería</span>
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </Tilt>

      {/* Modal de galería blindado */}
      {isClient && hasGallery && modalOpen && (
        <ProjectGalleryModal
          images={project.gallery}
          open={modalOpen}
          projectTitle={project.title}
          onCloseAction={() => setModalOpen(false)}
        />
      )}
    </>
  );
}