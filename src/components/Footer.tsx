import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 text-center border-t border-gray-800 bg-gray-900/80">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          © {currentYear} Daseg. Diseñado y construido por Darío Gimenez.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/daseg" target="_blank" rel="noopener noreferrer" className="text-gray-400 bg-gray-800/60 rounded-full p-2 shadow-md border border-gray-700/40 transition-all hover:bg-cyan-500/20 hover:text-cyan-300 hover:scale-110 focus:ring-2 focus:ring-cyan-400/40"><FaLinkedin size={20} /></a>
          <a href="https://github.com/dgimenezdeveloper" target="_blank" rel="noopener noreferrer" className="text-gray-400 bg-gray-800/60 rounded-full p-2 shadow-md border border-gray-700/40 transition-all hover:bg-cyan-500/20 hover:text-cyan-300 hover:scale-110 focus:ring-2 focus:ring-cyan-400/40"><FaGithub size={20} /></a>
        </div>
      </div>
    </footer>
  );
}