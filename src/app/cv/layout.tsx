import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CV - Currículum Vitae",
  description: "Currículum Vitae detallado de Darío Gimenez, incluyendo experiencia laboral, formación académica, habilidades técnicas y aptitudes profesionales.",
  openGraph: {
    title: "CV de Darío Gimenez | Desarrollador Full Stack",
    description: "Experiencia profesional y formación académica de Darío Gimenez. Descarga el CV en PDF.",
  },
};

export default function CVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
