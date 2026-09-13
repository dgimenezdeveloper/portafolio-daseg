"use client";

import { FaReact, FaPython, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiFastapi, SiTypescript, SiNextdotjs, SiPostgresql, SiRedis, SiPrisma, SiPytorch, SiN8N } from 'react-icons/si';


const skillCategories = [
  {
    title: "Backend & Base de Datos",
    skills: [
      { name: 'Python', icon: FaPython, color: 'text-blue-400' },
      { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-400' },
      { name: 'Django / DRF', icon: SiDjango, color: 'text-green-700' },
      { name: 'Node.js (Express)', icon: FaNodeJs, color: 'text-green-500' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-sky-400' },
      { name: 'Prisma ORM', icon: SiPrisma, color: 'text-slate-200' },
      { name: 'Redis', icon: SiRedis, color: 'text-red-500' },
    ]
  },
  {
    title: "Frontend & Arquitectura UI",
    skills: [
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
      { name: 'React 19', icon: FaReact, color: 'text-cyan-400' },
      { name: 'Next.js 16', icon: SiNextdotjs, color: 'text-white' },
      { name: 'Tailwind CSS v4', icon: SiTailwindcss, color: 'text-teal-400' },
    ]
  },
  {
    title: "DevOps, Automatización & IA",
    skills: [
      { name: 'Docker / DevContainers', icon: FaDocker, color: 'text-sky-500' },
      { name: 'CI/CD (GitHub Actions)', icon: FaGitAlt, color: 'text-orange-500' },
      { name: 'n8n Webhooks', icon: SiN8N, color: 'text-red-400' },
      { name: 'PyTorch (Computer Vision)', icon: SiPytorch, color: 'text-orange-600' },
    ]
  }
];

export default function Skills() {
  return (
    <section id="habilidades" className="section-shell" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto space-y-8 px-4 sm:px-6">
        <div className="text-center space-y-3">
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Ecosistema Tecnológico
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            Stack especializado en la construcción de sistemas empresariales, flujos automatizados y aplicaciones web resilientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {skillCategories.map((cat, index) => (
            <div
              key={index}
              className="rounded-3xl border border-soft bg-surface p-6 shadow-card-soft space-y-4 flex flex-col"
            >
              <h3 className="text-lg font-bold text-[var(--accent)] border-b border-soft pb-2">
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {cat.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2.5 rounded-2xl border border-soft bg-surface-muted/60 px-3 py-2.5 transition-transform hover:-translate-y-0.5"
                    >
                      <Icon size={20} className={`${skill.color} shrink-0`} />
                      <span className="text-xs font-semibold text-secondary truncate">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}