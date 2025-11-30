import cvDataJson from './cv.json';

// Definir los tipos para TypeScript
export type Language = {
  name: string;
  level: string;
  proficiency?: string;
};

export type Education = {
  institution: string;
  location: string;
  degree: string;
  period: string;
  description: string;
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

export type Contact = {
  address: string;
  phone: string;
  email: string;
  portfolio: string;
  github: string;
};

export type CVData = {
  aboutMeSummary: string;
  additionalInfo: string;
  contact: Contact;
  languages: Language[];
  softSkills: string[];
  education: Education[];
  experience: Experience[];
};

// Exportar los datos tipados
export const cvData: CVData = cvDataJson as CVData;