"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
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
  hidden: { y: 15, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
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
      <motion.div
        variants={itemVariants}
        onMouseMove={handleMouseMove}
        style={glowStyle as React.CSSProperties}
        className="project-card group relative flex h-full flex-col overflow-hidden rounded-3xl border border-soft bg-surface text-primary shadow-card-soft transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[var(--accent)] hover:shadow-xl"
      >
        {/* Cabecera visual: Imagen real o Banner de arquitectura */}
        <div className="relative w-full h-48 overflow-hidden bg-surface-muted border-b border-soft">
          {hasValidImage ? (
            <>
              <Image
                src={project.image!}
                alt={`Captura del proyecto ${project.title}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                quality={75} // 👈 Cambiar de 80 a 75
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </>
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[var(--surface-muted)] to-[var(--surface-strong)] p-4 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)] mb-2 transition-transform duration-300 group-hover:scale-110">
                <FaCode size={22} />
              </div>
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-[var(--accent)] font-bold">
                Arquitectura Full-Stack
              </span>
            </div>
          )}
        </div>

        {/* Cuerpo de la tarjeta */}
        <div className="flex flex-grow flex-col p-5 sm:p-6">
          <h3 className="mb-2 text-xl font-bold text-primary tracking-tight group-hover:text-[var(--accent)] transition-colors">
            {project.title}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-secondary line-clamp-3">
            {project.description}
          </p>

          {/* Tags de tecnologías clave (máximo 4) */}
          <div className="mb-5 flex flex-wrap gap-1.5 mt-auto">
            {project.tags.slice(0, 4).map((tag, index) => (
              <span key={index} className="tag-chip text-[0.7rem] px-2.5 py-0.5">
                {tag}
              </span>
            ))}
          </div>

          {/* Botones con Hover Activo */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-soft/50">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--accent)] px-3 py-1.5 text-xs font-bold text-white shadow-sm transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
                aria-label={`Ver demo de ${project.title}`}
              >
                <FaExternalLinkAlt size={11} />
                <span>Demo</span>
              </a>
            )}

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-soft bg-surface px-3 py-1.5 text-xs font-semibold text-secondary transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] active:scale-95"
                aria-label={`Ver código en GitHub de ${project.title}`}
              >
                <FaGithub size={13} />
                <span>Código</span>
              </a>
            )}

            {hasGallery && (
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-1 rounded-xl border border-soft bg-[var(--surface-muted)] px-3 py-1.5 text-xs font-semibold text-primary transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-95 ml-auto"
              >
                <span>Galería</span>
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal de galería */}
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