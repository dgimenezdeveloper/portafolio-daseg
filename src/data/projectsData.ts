type ProjectGallery = Record<string, string[]>;

export interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
  gallery?: ProjectGallery;
}

export const projectsData: Project[] = [
  {
    title: "MargenX",
    description:
      "SaaS B2B para gastronomía con recálculo de recetas en cascada y alertas automáticas vía n8n ante aumentos de insumos.",
    image: "/projects/margenx/margenx-01.png",
    
    tags: ["React 19", "Express 5", "PostgreSQL 16", "Docker / n8n"],
    links: {
      github: "https://github.com/dgimenezdeveloper/margenx",
      live: "https://margenx.tech",
    },
  },
  {
    title: "Allmart",
    description:
      "E-commerce y ERP minorista con matriz de variantes/SKUs, cotización multi-proveedor, reserva con seña del 50% y catálogos en PDF.",
    tags: ["React 19", "Node.js 22", "Cloudflare R2", "Prisma 7"],
    links: {
      github: "https://github.com/dgimenezdeveloper/allmart",
      live: "https://allmartbazar.com.ar",
    },
  },
  {
    title: "Chatbot Comercial (Pymio)",
    description:
      "Bot multi-empresa con WhatsApp Cloud API, sincronización con Google Calendar y scheduler de recordatorios en 4 niveles.",
    tags: ["FastAPI", "Next.js 16", "Redis 7", "Celery"],
    links: {
      github: "https://github.com/dgimenezdeveloper/chatbot-comercial",
      live: "https://github.com/dgimenezdeveloper/chatbot-comercial",
    },
  },
  {
    title: "EuroSAT AI Lab",
    description:
      "Laboratorio de Visión Artificial para clasificar imágenes satelitales Sentinel-2 (ESA) con evaluación rigurosa en Macro F1-Score.",
    tags: ["PyTorch", "Python", "FastAPI", "Computer Vision"],
    links: {
      github: "https://github.com/dgimenezdeveloper/eurosat-ai-lab",
      live: "https://colab.research.google.com/github/dgimenezdeveloper/eurosat-ai-lab/blob/main/notebooks/01_etapa1_eda_baseline.ipynb",
    },
  },
  {
    title: "Congreso de Logística UNaB",
    description:
      "Plataforma de acreditación masiva con código QR dual in-situ, verificación inmediata por DNI y despacho de certificados en PDF.",
    image: "/projects/congreso/home/home-1.webp",
    gallery: {
      "Inicio": [
        "/projects/congreso/home/home-1.webp",
        "/projects/congreso/home/home-2.webp",
        "/projects/congreso/home/home-3.webp",
      ],
      "Acreditación": [
        "/projects/congreso/registro/registro.webp",
        "/projects/congreso/registro/registro-1.webp",
        "/projects/congreso/registro/verificacion.webp",
      ],
    },
    tags: ["React 18", "Django 5.2", "DRF", "Pillow (QR)"],
    links: {
      github: "https://github.com/dgimenezdeveloper/congreso-logistica",
      live: "https://congreso-logistica.vercel.app/",
    },
  },
  {
    title: "Luminova ERP",
    description:
      "ERP industrial para logística y manufactura multi-depósito con esquemas aislados en PostgreSQL y trazabilidad de lotes.",
    image: "/projects/luminova/login/luminova-login.webp",
    gallery: {
      "Login": ["/projects/luminova/login/luminova-login.webp"],
      "Administrador": [
        "/projects/luminova/administrador/luminova-admin-01.webp",
        "/projects/luminova/administrador/luminova-admin-02.webp",
      ],
      "Depósito": [
        "/projects/luminova/deposito/luminova-deposito-01.webp",
        "/projects/luminova/deposito/luminova-deposito-02.webp",
      ],
    },
    tags: ["Django 5.2", "Python 3.12", "django-tenants", "PostgreSQL 16"],
    links: {
      github: "https://github.com/dgimenezdeveloper/refactor_luminova",
      live: "https://github.com/dgimenezdeveloper/refactor_luminova",
    },
  },
];