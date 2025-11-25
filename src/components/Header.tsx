"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const headerVariants = {
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    }
  }
};

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-10 bg-gray-900/50 backdrop-blur-sm"  
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <Link href="/" className="flex items-center gap-3 group">
        <span className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-gray-900 via-cyan-900 to-gray-800 shadow-2xl overflow-hidden transition-all duration-300 group-hover:scale-105">
          <Image
            src="/images/logo/daseg-logo.png"
            alt="Daseg logo"
            width={110}
            height={110}
            className="object-contain drop-shadow-[0_2px_16px_rgba(0,255,255,0.25)] transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_4px_32px_rgba(0,255,255,0.45)]"
            priority
          />
          {/* Glow cian exterior */}
          <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-cyan-400/10 group-hover:ring-4 group-hover:ring-cyan-300/30" />
          {/* Overlay para mejorar contraste del texto del logo */}
          <span className="absolute inset-0 rounded-full bg-black/20 pointer-events-none" />
        </span>
      </Link>
      <nav>
        <ul className="flex items-center space-x-6 text-lg text-gray-300 font-bold ">
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
    </motion.header>
  );
}