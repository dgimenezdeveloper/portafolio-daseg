import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "5491169695436";
  const whatsappMessage = encodeURIComponent(
    "Hola Darío, vi tu portafolio y me gustaría conversar sobre un proyecto / oportunidad de desarrollo."
  );

  return (
    <footer className="w-full border-t border-soft bg-[var(--page-contrast)] px-4 py-12" role="contentinfo">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div className="space-y-1">
          <p className="text-sm font-bold text-primary">Darío Sebastián Giménez</p>
          <p className="text-xs text-muted">
            Full-Stack Software Engineer • Buenos Aires, Argentina (Disponible Remoto)
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {/* Botón directo a WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3.5 py-1.5 text-xs font-semibold text-green-400 transition-all hover:bg-green-500 hover:text-white hover:scale-105"
            aria-label="Contactar por WhatsApp"
          >
            <FaWhatsapp size={16} />
            <span>Chatear por WhatsApp</span>
          </a>

          {/* Redes sociales */}
          <div className="flex items-center gap-3 text-lg">
            <a
              href="https://www.linkedin.com/in/daseg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-[var(--accent)]"
              aria-label="Perfil de LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/dgimenezdeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-[var(--accent)]"
              aria-label="Perfil de GitHub"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-muted border-t border-soft/40 pt-4">
        © {currentYear} Daseg. Construido con Next.js 15, React 19 y Tailwind CSS v4.
      </div>
    </footer>
  );
}