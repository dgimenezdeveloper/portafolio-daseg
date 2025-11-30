"use client"; 

import { FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaPython, FaGitAlt, FaGithub, FaSass, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss, SiMysql, SiMongodb, SiDjango, SiFlask, SiTypescript, SiNextdotjs, SiPostgresql, SiSqlite } from 'react-icons/si';
import { motion } from 'framer-motion';

const getSkillsData = () => [
	// Lenguajes de programación
  { name: 'JavaScript', icon: IoLogoJavascript, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
	{ name: 'Python', icon: FaPython, color: 'text-blue-400' },

	// Frontend
	{ name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
	{ name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
	{ name: 'Sass', icon: FaSass, color: 'text-pink-500' },
	{ name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
  { name: 'React', icon: FaReact, color: 'text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-primary' },
	{ name: 'Vue.js', icon: FaVuejs, color: 'text-green-500' },

	// Backend
	{ name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
	{ name: 'Flask', icon: SiFlask, color: '' },
	{ name: 'Django', icon: SiDjango, color: 'text-green-800' },
	{ name: 'Django REST', icon: SiDjango, color: 'text-green-700' },

	// Bases de datos
	{ name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-sky-700' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'SQLite', icon: SiSqlite, color: 'text-gray-500' },

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
    <section id="habilidades" className="section-shell">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <span className="tag-chip mx-auto">Stack principal</span>
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Mis Habilidades Técnicas</h2>
        <p className="text-muted text-lg">
          Tecnologías y herramientas con las que me siento cómodo trabajando.
        </p>
      </div>

      <motion.div
        className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillsData.map((skill) => {
          const IconComponent = skill.icon;
          return (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-soft bg-surface shadow-card-soft p-5 text-primary transition-transform duration-300 hover:-translate-y-1"
              variants={itemVariants}
            >
              <IconComponent size={36} className={skill.color} />
              <span className="text-sm font-semibold text-secondary text-center">{skill.name}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}