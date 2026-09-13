"use client";

import { useState, useEffect } from "react";
import ProjectGalleryModal from "./ProjectGalleryModal";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

type ProjectProps = {
  project: {
    title: string;
    description: string;
    image?: string;
    device?: "mobile" | "desktop";
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
  const isMobileDevice = project.device === "mobile";
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
        {/* Cabecera visual: Smartphone Mockup / Imagen Desktop / Banner de Arquitectura */}
        <div className="relative w-full h-52 overflow-hidden bg-surface-muted border-b border-soft">
          {hasValidImage ? (
            isMobileDevice ? (
              /* --- SHOWCASE MÓVIL ESTILIZADO (Para MargenX) --- */
              <div className="relative flex h-full w-full items-end justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-[#0b1329] pt-3">
                {/* Marco de Smartphone */}
                <div className="relative h-[115%] w-auto aspect-[9/18.5] overflow-hidden rounded-t-[1.6rem] border-[3px] border-b-0 border-slate-700/80 bg-black shadow-2xl transition-transform duration-500 group-hover:translate-y-[-4px]">
                  {/* Notch / Dynamic Island */}
                  <div className="absolute top-2 left-1/2 z-20 h-2.5 w-12 -translate-x-1/2 rounded-full border border-white/10 bg-black" />
                  <Image
                    src={project.image!}
                    alt={`Captura mobile de ${project.title}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    quality={75}
                  />
                </div>
                {/* Resplandor inferior */}
                <div className="pointer-events-none absolute -bottom-4 h-12 w-32 rounded-full bg-[var(--accent)]/20 blur-xl" />
              </div>
            ) : (
              /* --- SHOWCASE ESCRITORIO (Para Congreso, Luminova, etc.) --- */
              <>
                <Image
                  src={project.image!}
                  alt={`Captura del proyecto ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  loading="lazy"
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </>
            )
          ) : (
            /* --- BANNER DE CÓDIGO (Para proyectos sin imagen en disco) --- */
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[var(--surface-muted)] to-[var(--surface-strong)] p-4 text-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)] transition-transform duration-300 group-hover:scale-110">
                <FaCode size={22} />
              </div>
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                Arquitectura Full-Stack
              </span>
            </div>
          )}
        </div>

        {/* Cuerpo de la tarjeta */}
        <div className="flex flex-grow flex-col p-5 sm:p-6">
          <div className="mb-1 flex items-center justify-between">
            <h3 className="text-xl font-bold tracking-tight text-primary transition-colors group-hover:text-[var(--accent)]">
              {project.title}
            </h3>
            {isMobileDevice && (
              <span className="rounded-md border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-2 py-0.5 text-[0.65rem] font-semibold text-[var(--accent)]">
                Mobile-First
              </span>
            )}
          </div>

          <p className="mb-4 text-sm leading-relaxed text-secondary line-clamp-3">
            {project.description}
          </p>

          {/* Tags de tecnologías */}
          <div className="mt-auto mb-5 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag, index) => (
              <span key={index} className="tag-chip text-[0.7rem] px-2.5 py-0.5">
                {tag}
              </span>
            ))}
          </div>

          {/* Botones de acción con hover activo */}
          <div className="flex flex-wrap items-center gap-2 border-t border-soft/50 pt-3">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--accent)] px-3 py-1.5 text-xs font-bold text-white shadow-sm transition-all duration-200 hover:scale-105 hover:brightness-110 active:scale-95"
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
                className="inline-flex items-center gap-1.5 rounded-xl border border-soft bg-surface px-3 py-1.5 text-xs font-semibold text-secondary transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)] active:scale-95"
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
                className="ml-auto inline-flex items-center gap-1 rounded-xl border border-soft bg-[var(--surface-muted)] px-3 py-1.5 text-xs font-semibold text-primary transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-95"
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
          onClose={() => setModalOpen(false)}
          projectTitle={project.title}
        />
      )}
    </>
  );
}