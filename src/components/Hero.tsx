"use client"; // Necesario para que las animaciones y eventos funcionen

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { cvData } from '@/data/cvData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export default function Hero() {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center text-center p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="relative mb-6" variants={itemVariants}>
        <Image
          src="/images/profile.png"
          alt="Foto de perfil de Darío Gimenez"
          width={150}
          height={150}
          className="rounded-full"
          priority
        />
        <div className="absolute bottom-1 right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-gray-900" />
      </motion.div>

      <motion.h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3" variants={itemVariants}>
        Hola, soy Darío Gimenez
      </motion.h1>

      <motion.p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-8" variants={itemVariants}>
        {cvData.aboutMeSummary}
      </motion.p>

      <motion.div className="flex items-center space-x-5" variants={itemVariants}>
        <a
          href="https://www.linkedin.com/in/daseg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 transition-transform hover:text-white hover:scale-125"
          aria-label="Perfil de LinkedIn"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="https://github.com/dgimenezdeveloper"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 transition-transform hover:text-white hover:scale-125"
          aria-label="Perfil de GitHub"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="mailto:dgimenez.developer@gmail.com"
          className="text-gray-400 transition-transform hover:text-white hover:scale-125"
          aria-label="Enviar correo electrónico"
        >
          <MdEmail size={32} />
        </a>
      </motion.div>
    </motion.section>
  );
}