"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function Hero() {
  return (
    <motion.section
      className="section-shell hero-section min-h-[85vh] sm:min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto w-full space-y-8 sm:space-y-12">
        
        {/* Perfil y presentación principal */}
        <motion.div className="text-center space-y-6" variants={itemVariants}>
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full blur-3xl opacity-70 bg-[radial-gradient(circle_at_top,var(--accent-glow),transparent_55%)]" aria-hidden="true" />
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-[var(--accent)] bg-surface shadow-card-soft flex items-center justify-center">
                <Image
                  src="/images/profile.png"
                  alt="Foto de perfil de Darío Gimenez, Desarrollador Full Stack"
                  width={160}
                  height={160}
                  className="rounded-full object-cover"
                  loading="eager"
                  quality={90}
                  priority
                />
                <div className="absolute -bottom-2 -right-2 flex items-center gap-2 rounded-full border border-soft bg-surface px-3 py-1.5 shadow-card">
                  <span className="inline-flex w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-muted">Disponible</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[var(--accent)] font-semibold">
              Full Stack Engineer
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
              Hola, soy <span className="text-[var(--accent)]">Darío Gimenez</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-secondary leading-relaxed px-4">
              Fundador y director de proyectos en <span className="font-semibold text-[var(--accent)]">Folkode</span>, 
              una software factory colaborativa impulsando soluciones digitales. 
            </p>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <a
              href="https://www.linkedin.com/in/daseg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              aria-label="Perfil de LinkedIn"
            >
              <FaLinkedin size={30} />
              LinkedIn
            </a>
            <a
              href="https://github.com/dgimenezdeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              aria-label="Perfil de GitHub"
            >
              <FaGithub size={30} />
              GitHub
            </a>
            <a
              href="mailto:dgimenez.developer@gmail.com"
              className="btn-ghost"
              aria-label="Enviar correo electrónico"
            >
              <MdEmail size={30} />
              Contacto
            </a>
          </div>
        </motion.div>

        {/* Cards de especialidades */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12"
          variants={containerVariants}
        >
          <motion.div
            variants={cardVariants}
            className="group relative overflow-hidden rounded-2xl border border-soft bg-surface p-6 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-[var(--accent)]/30"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] transition-transform duration-300 group-hover:scale-110">
                <FaCode size={30} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-primary mb-2">Desarrollo Full Stack</h3>
                <p className="text-sm text-secondary leading-relaxed">
                  Especialista en Node.js, React, Next.js, Python (Flask, Django) y bases de datos modernas
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="group relative overflow-hidden rounded-2xl border border-soft bg-surface p-6 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-[var(--accent)]/30"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] transition-transform duration-300 group-hover:scale-110">
                <FaRocket size={30} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-primary mb-2">Liderazgo Técnico</h3>
                <p className="text-sm text-secondary leading-relaxed">
                  Dirijo equipos multidisciplinarios aplicando Scrum, Kanban y GitFlow con CI/CD
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="group relative overflow-hidden rounded-2xl border border-soft bg-surface p-6 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-[var(--accent)]/30 sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] transition-transform duration-300 group-hover:scale-110">
                <FaLightbulb size={30} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-primary mb-2">Innovación & IA</h3>
                <p className="text-sm text-secondary leading-relaxed">
                  Integro herramientas de IA como ChatGPT, Gemini y OpenAI para automatización y mejora continua
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Estadísticas rápidas */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 pt-4 border-t border-soft/50"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[var(--accent)]">2+</div>
            <div className="text-xs sm:text-sm text-muted mt-1">Años de experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[var(--accent)]">10+</div>
            <div className="text-xs sm:text-sm text-muted mt-1">Proyectos completados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[var(--accent)]">100%</div>
            <div className="text-xs sm:text-sm text-muted mt-1">Clientes satisfechos</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}