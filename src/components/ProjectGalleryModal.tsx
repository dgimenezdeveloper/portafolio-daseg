"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export type ProjectGalleryModalProps = {
  images?: Record<string, string[]> | string[];
  open: boolean;
  onClose: () => void;
  projectTitle?: string;
};

export default function ProjectGalleryModal({
  images,
  open,
  onClose,
  projectTitle = "Galería del Proyecto",
}: ProjectGalleryModalProps) {
  // Sanitizar y agrupar imágenes por sección
  const sections = useMemo(() => {
    if (!images) return {};
    if (Array.isArray(images)) {
      const valid = images.filter((img): img is string => typeof img === "string" && img.trim().length > 0);
      return valid.length > 0 ? { Principal: valid } : {};
    }
    const sanitized: Record<string, string[]> = {};
    for (const [key, list] of Object.entries(images)) {
      if (Array.isArray(list)) {
        const valid = list.filter((img): img is string => typeof img === "string" && img.trim().length > 0);
        if (valid.length > 0) sanitized[key] = valid;
      }
    }
    return sanitized;
  }, [images]);

  const sectionNames = useMemo(() => Object.keys(sections), [sections]);
  const [currentSection, setCurrentSection] = useState<string>(sectionNames[0] || "");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (open && sectionNames.length > 0) {
      setCurrentSection(sectionNames[0]);
      setCurrentIndex(0);
    }
  }, [open, sectionNames]);

  // Cerrar con Escape y navegar con flechas
  useEffect(() => {
    if (!open || sectionNames.length === 0) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      const currentImages = sections[currentSection] || [];
      if (currentImages.length > 0) {
        if (e.key === "ArrowRight") setCurrentIndex((c) => (c + 1) % currentImages.length);
        if (e.key === "ArrowLeft") setCurrentIndex((c) => (c - 1 + currentImages.length) % currentImages.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, currentSection, sections, sectionNames, onClose]);

  if (!open || sectionNames.length === 0) return null;

  const currentImages = sections[currentSection] || [];
  const currentImage = currentImages[currentIndex];

  if (!currentImage) return null;

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
    setCurrentIndex(0);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        onClick={onClose}
      >
        <motion.div
          className="relative flex h-[90vh] w-full max-w-7xl flex-col rounded-3xl border border-soft bg-surface shadow-card"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-soft p-6">
            <h2 className="text-2xl font-bold text-primary">{projectTitle}</h2>
            <button
              onClick={onClose}
              className="text-muted transition-colors hover:text-[var(--accent)]"
              aria-label="Cerrar galería"
            >
              <span className="text-3xl font-bold leading-none">×</span>
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-1 overflow-hidden">
            {sectionNames.length > 1 && (
              <div className="w-48 border-r border-soft bg-surface-muted/70 overflow-y-auto">
                <div className="space-y-2 p-4">
                  {sectionNames.map((section) => (
                    <button
                      key={section}
                      onClick={() => handleSectionChange(section)}
                      className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all ${
                        currentSection === section
                          ? "border border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                          : "text-muted hover:bg-surface"
                      }`}
                    >
                      {section}
                      <span className="mt-1 block text-xs text-muted">
                        {sections[section].length} {sections[section].length === 1 ? "imagen" : "imágenes"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Área principal */}
            <div className="flex flex-1 flex-col p-6">
              <div className="relative mb-4 flex flex-1 items-center justify-center overflow-hidden rounded-2xl border border-soft bg-surface-muted">
                <Image
                  src={currentImage}
                  alt={`${currentSection} - Imagen ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1920px) 100vw"
                />

                {currentImages.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentIndex((c) => (c - 1 + currentImages.length) % currentImages.length)}
                      className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-soft bg-surface text-2xl font-bold text-[var(--accent)] transition hover:border-[var(--accent)]"
                      aria-label="Anterior"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => setCurrentIndex((c) => (c + 1) % currentImages.length)}
                      className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-soft bg-surface text-2xl font-bold text-[var(--accent)] transition hover:border-[var(--accent)]"
                      aria-label="Siguiente"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {/* Miniaturas */}
              <div className="space-y-4">
                <div className="text-center">
                  <span className="text-sm font-medium text-secondary">
                    {currentIndex + 1} / {currentImages.length}
                    {sectionNames.length > 1 && <span className="ml-2 text-[var(--accent)]">• {currentSection}</span>}
                  </span>
                </div>

                {currentImages.length > 1 && (
                  <div className="flex max-w-full justify-center gap-2 overflow-x-auto pb-2">
                    {currentImages.map((img, idx) => (
                      <button
                        key={img}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-16 w-20 rounded-xl border-2 ${
                          idx === currentIndex
                            ? "border-[var(--accent)] ring-2 ring-[var(--accent)] ring-opacity-30"
                            : "border-transparent hover:border-[var(--accent)] hover:border-opacity-40"
                        } flex-shrink-0 overflow-hidden bg-surface transition-all`}
                        aria-label={`Ver imagen ${idx + 1}`}
                      >
                        <Image
                          src={img}
                          alt={`Miniatura ${idx + 1}`}
                          width={80}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}