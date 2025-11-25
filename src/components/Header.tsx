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
      <Link href="/" className="flex items-center gap-2 group">
        <Image
          src="/images/logo/daseg-logo.png"
          alt="Daseg logo"
          width={40}
          height={40}
          className="transition-transform duration-200 group-hover:scale-110 drop-shadow-lg"
          priority
        />
        
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