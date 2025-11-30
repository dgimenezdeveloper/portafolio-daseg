"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

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
      className="fixed top-4 left-1/2 z-20 w-[min(1100px,95%)] -translate-x-1/2 rounded-full border border-soft bg-surface/80 px-6 py-3 shadow-card backdrop-blur-xl"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-soft bg-surface shadow-card-soft">
            <Image
              src="/images/logo/daseg-logo.png"
              alt="Daseg logo"
              width={56}
              height={56}
              className="object-contain"
              priority
            />
          </span>
          <div className="hidden flex-col sm:flex">
            <span className="text-sm font-semibold text-primary">Darío Gimenez</span>
            <span className="text-xs uppercase tracking-[0.3em] text-muted">Full stack</span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden text-sm font-semibold text-muted sm:flex">
            <ul className="flex items-center gap-5">
              <li>
                <Link href="/#habilidades" className="transition-colors hover:text-[var(--accent)]">
                  Habilidades
                </Link>
              </li>
              <li>
                <Link href="/#proyectos" className="transition-colors hover:text-[var(--accent)]">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/cv" className="transition-colors hover:text-[var(--accent)]">
                  CV
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="transition-colors hover:text-[var(--accent)]">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}