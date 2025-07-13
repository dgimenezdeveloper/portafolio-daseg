import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 text-center border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          © {currentYear} Daseg. Diseñado y construido por Darío Gimenez.
        </p>
        <div className="flex items-center space-x-4">
          <a href="https://www.linkedin.com/in/daseg" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white"><FaLinkedin size={22} /></a>
          <a href="https://github.com/dgimenezdeveloper" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white"><FaGithub size={22} /></a>
        </div>
      </div>
    </footer>
  );
}