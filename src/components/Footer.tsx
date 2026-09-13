import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-soft bg-[var(--page-contrast)] px-4 py-12" role="contentinfo">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div className="space-y-1">
          <p className="text-sm font-bold text-primary">Darío Sebastián Giménez</p>
          <p className="text-xs text-muted">
            Full-Stack Engineer & Scrum Master • Buenos Aires, Argentina (Remoto a todo el mundo)
          </p>
        </div>

        <div className="flex items-center gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-surface px-3 py-1 text-xs font-medium text-secondary">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Disponible para nuevos proyectos
          </div>
          <div className="flex items-center gap-4 text-lg">
            <a
              href="https://www.linkedin.com/in/daseg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-[var(--accent)]"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/dgimenezdeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-[var(--accent)]"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-muted border-t border-soft/40 pt-4">
        © {currentYear} Daseg. Diseñado con Next.js 15, React 19 y Tailwind CSS v4.
      </div>
    </footer>
  );
}