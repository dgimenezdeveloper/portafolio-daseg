"use client"; // Necesario para que las animaciones y eventos funcionen

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { cvData } from '@/data/cvData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export default function Hero() {
  return (
    <motion.section
      className="section-shell hero-section min-h-[85vh] sm:min-h-[80vh] flex flex-col items-center justify-center text-center relative overflow-hidden px-4 sm:px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 w-full">
        <motion.div className="relative flex justify-center" variants={itemVariants}>
          <div className="relative">
            <div className="absolute -inset-2 rounded-full blur-3xl opacity-70 bg-[radial-gradient(circle_at_top,var(--accent-glow),transparent_55%)]" aria-hidden />
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-soft bg-surface shadow-card-soft flex items-center justify-center">
              <Image
                src="/images/profile.png"
                alt="Foto de perfil de Darío Gimenez, Desarrollador Full Stack"
                width={180}
                height={180}
                className="rounded-full object-cover"
                loading="eager"
                quality={90}
                priority
              />
              <div className="absolute bottom-2 right-2 flex items-center gap-2 rounded-full border border-soft bg-surface px-3 py-1 shadow-card-soft">
                <span className="inline-flex w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse" />
                <span className="text-xs font-semibold text-muted">Disponible</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="space-y-3 sm:space-y-4" variants={itemVariants}>
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-muted">Full Stack Engineer</p>
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight px-2" variants={itemVariants}>
            Hola, soy Darío Gimenez
          </motion.h1>
          <motion.p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-muted px-2" variants={itemVariants}>
            {cvData.aboutMeSummary}
          </motion.p>
        </motion.div>

        <motion.div className="flex flex-wrap items-center justify-center gap-5" variants={itemVariants}>
          <a
            href="https://www.linkedin.com/in/daseg"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            aria-label="Perfil de LinkedIn"
          >
            <FaLinkedin size={22} />
            LinkedIn
          </a>
          <a
            href="https://github.com/dgimenezdeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            aria-label="Perfil de GitHub"
          >
            <FaGithub size={22} />
            GitHub
          </a>
          <a
            href="mailto:dgimenez.developer@gmail.com"
            className="btn-ghost"
            aria-label="Enviar correo electrónico"
          >
            <MdEmail size={22} />
            Escríbeme
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}