import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-10 bg-gray-900/50 backdrop-blur-sm">
      <Link href="/">
        <h1 className="text-xl font-bold text-white transition-colors hover:text-cyan-400">
          Daseg<span className="text-cyan-400">.</span>
        </h1>
      </Link>
      <nav>
        <ul className="flex items-center space-x-6 text-sm text-gray-300">
          <li>
            <Link href="/#habilidades" className="transition-colors hover:text-cyan-400">
              Habilidades
            </Link>
          </li>
          <li>
            <Link href="/#proyectos" className="transition-colors hover:text-cyan-400">
              Proyectos
            </Link>
          </li>
          <li>
            <Link href="/cv" className="transition-colors hover:text-cyan-400">
              CV
            </Link>
          </li>
          <li>
            <Link href="/#contacto" className="transition-colors hover:text-cyan-400">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}