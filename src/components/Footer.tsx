import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-soft bg-[var(--page-contrast)] px-4 py-8" role="contentinfo">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-muted sm:flex-row">
        <p>© {currentYear} Daseg. Diseñado y construido por Darío Gimenez.</p>
        <nav className="flex items-center gap-4 text-lg" aria-label="Redes sociales">
          <a
            href="https://www.linkedin.com/in/daseg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-[var(--accent)]"
            aria-label="Perfil de LinkedIn de Darío Gimenez"
          >
            <FaLinkedin size={22} aria-hidden="true" />
          </a>
          <a
            href="https://github.com/dgimenezdeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-[var(--accent)]"
            aria-label="Perfil de GitHub de Darío Gimenez"
          >
            <FaGithub size={22} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </footer>
  );
}