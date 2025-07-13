"use client"; 

import { FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaPython, FaGitAlt, FaGithub, FaSass, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss, SiMysql, SiMongodb, SiDjango, SiFlask } from 'react-icons/si';
import { motion } from 'framer-motion';

const getSkillsData = () => [
	// Lenguajes de programación
	{ name: 'JavaScript', icon: IoLogoJavascript, color: 'text-yellow-400' },
	{ name: 'TypeScript', icon: IoLogoJavascript, color: 'text-blue-600' },
	{ name: 'Python', icon: FaPython, color: 'text-blue-400' },

	// Frontend
	{ name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
	{ name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
	{ name: 'Sass', icon: FaSass, color: 'text-pink-500' },
	{ name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
	{ name: 'React', icon: FaReact, color: 'text-cyan-400' },
	{ name: 'Next.js', icon: FaReact, color: 'text-gray-800' },
	{ name: 'Vue.js', icon: FaVuejs, color: 'text-green-500' },

	// Backend
	{ name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
	{ name: 'Flask', icon: SiFlask, color: '' },
	{ name: 'Django', icon: SiDjango, color: 'text-green-800' },
	{ name: 'Django REST', icon: SiDjango, color: 'text-green-700' },

	// Bases de datos
	{ name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
	{ name: 'PostgreSQL', icon: SiMysql, color: 'text-blue-700' },
	{ name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
	{ name: 'sqlite', icon: SiMysql, color: 'text-gray-500' },

	// Control de versiones
	{ name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
	{ name: 'GitHub', icon: FaGithub, color: '' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Skills() {
  const skillsData = getSkillsData();

  return (
    <section id="habilidades" className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Mis Habilidades Técnicas</h2>
        <p className="text-gray-400 text-lg mb-12">
          Tecnologías y herramientas con las que me siento cómodo trabajando.
        </p>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center gap-2 p-4 w-32 h-32
                           bg-gray-800/50 rounded-lg shadow-md transition-all
                           hover:bg-cyan-400/20 hover:shadow-cyan-400/30 hover:shadow-lg"
                variants={itemVariants}
              >
                <IconComponent size={40} className={skill.color} />
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}