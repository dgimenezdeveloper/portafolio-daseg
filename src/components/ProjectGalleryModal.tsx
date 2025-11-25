"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type ProjectGalleryModalProps = {
  images: Record<string, string[]> | string[];
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
  // Convertir array simple a objeto con una sola sección si es necesario (memoizado)
  const sections = useMemo(() => 
    Array.isArray(images) 
      ? { "Principal": images } 
      : images,
    [images]
  );
  
  const sectionNames = useMemo(() => Object.keys(sections), [sections]);
  const [currentSection, setCurrentSection] = useState(sectionNames[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (open && sectionNames.length > 0) {
      setCurrentSection(sectionNames[0]);
      setCurrentIndex(0);
    }
  }, [open, sectionNames]);

  // Cerrar con Escape y navegar con flechas
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      const currentImages = sections[currentSection];
      if (e.key === "ArrowRight") setCurrentIndex((c) => (c + 1) % currentImages.length);
      if (e.key === "ArrowLeft") setCurrentIndex((c) => (c - 1 + currentImages.length) % currentImages.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, currentSection, sections, onClose]);

  if (!open) return null;

  const currentImages = sections[currentSection];
  const currentImage = currentImages[currentIndex];

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
    setCurrentIndex(0);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Modal content */}
        <motion.div
          className="relative bg-gray-900 rounded-2xl shadow-2xl w-full max-w-7xl h-[90vh] flex flex-col border border-gray-700/50"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
            <h2 className="text-2xl font-bold text-white">{projectTitle}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-cyan-400 text-3xl font-bold focus:outline-none transition-colors"
              aria-label="Cerrar galería"
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar de secciones (solo si hay más de una sección) */}
            {sectionNames.length > 1 && (
              <div className="w-48 bg-gray-800/50 border-r border-gray-700/50 overflow-y-auto">
                <div className="p-4 space-y-2">
                  {sectionNames.map((section) => (
                    <button
                      key={section}
                      onClick={() => handleSectionChange(section)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all font-medium text-sm ${
                        currentSection === section
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                          : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                      }`}
                    >
                      {section}
                      <span className="text-xs block text-gray-400 mt-1">
                        {sections[section].length} {sections[section].length === 1 ? "imagen" : "imágenes"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Área principal */}
            <div className="flex-1 flex flex-col p-6">
              {/* Imagen principal */}
              <div className="flex-1 relative flex items-center justify-center mb-4 bg-gray-800/30 rounded-xl overflow-hidden">
                <Image
                  src={currentImage}
                  alt={`${currentSection} - Imagen ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1920px) 100vw"
                />
                
                {/* Botones de navegación */}
                {currentImages.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentIndex((c) => (c - 1 + currentImages.length) % currentImages.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-900/80 text-cyan-300 hover:bg-cyan-900/60 transition flex items-center justify-center text-2xl font-bold border border-cyan-500/30"
                      aria-label="Anterior"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => setCurrentIndex((c) => (c + 1) % currentImages.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-900/80 text-cyan-300 hover:bg-cyan-900/60 transition flex items-center justify-center text-2xl font-bold border border-cyan-500/30"
                      aria-label="Siguiente"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {/* Info y miniaturas */}
              <div className="space-y-4">
                {/* Contador */}
                <div className="text-center">
                  <span className="text-gray-300 text-sm font-medium">
                    {currentIndex + 1} / {currentImages.length} 
                    {sectionNames.length > 1 && <span className="text-cyan-400 ml-2">• {currentSection}</span>}
                  </span>
                </div>

                {/* Miniaturas */}
                {currentImages.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto max-w-full pb-2 justify-center">
                    {currentImages.map((img, idx) => (
                      <button
                        key={img}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-20 h-16 rounded-lg border-2 ${
                          idx === currentIndex
                            ? "border-cyan-400 ring-2 ring-cyan-400/30"
                            : "border-transparent hover:border-cyan-300/50"
                        } overflow-hidden bg-gray-800 flex-shrink-0 transition-all`}
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
