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
    title: "MargenX — SaaS de Márgenes y Costeo",
    description:
      "Plataforma B2B para gastronomía y manufactura que calcula márgenes de ganancia en tiempo real ante la inflación de insumos. Cuenta con recálculo en cascada de recetas, alertas automáticas vía webhooks de n8n, aislamiento multi-tenant y arquitectura DevOps con DevContainers y VPS Linux.",
    tags: ["React 19", "Node.js", "Express 5", "PostgreSQL 16", "Prisma ORM", "n8n", "Docker", "DevOps"],
    links: {
      github: "https://github.com/dgimenezdeveloper/margenx",
      live: "https://margenx.tech",
    },
  },
  {
    title: "Allmart — E-Commerce & Retail ERP",
    description:
      "Ecosistema integral de comercio electrónico y gestión administrativa para bazar y artículos del hogar. Incluye matriz de variantes y SKUs, control de costos multi-proveedor con cálculo de márgenes y lead time, pipeline de pedidos con reserva del 50%, catálogo PDF con Puppeteer y CDN en Cloudflare R2 con Sharp.",
    tags: ["React 19", "Node.js 22", "PostgreSQL 16", "Cloudflare R2", "Puppeteer", "Prisma 7", "Docker"],
    links: {
      github: "https://github.com/dgimenezdeveloper/allmart",
      live: "https://allmartbazar.com.ar",
    },
  },
  {
    title: "Chatbot Comercial (Pymio)",
    description:
      "Motor conversacional multi-empresa para gestión de reservas y atención comercial 24/7 mediante la API oficial de WhatsApp Cloud. Integración con Google Calendar, scheduler de recordatorios en 4 niveles con Celery Beat y panel administrativo en Next.js 16 con telemetría de 50 métricas de negocio.",
    tags: ["FastAPI", "Python 3.11", "Next.js 16", "Redis 7", "Celery", "PostgreSQL", "WhatsApp API", "Playwright"],
    links: {
      github: "https://github.com/dgimenezdeveloper/chatbot-comercial",
      live: "https://github.com/dgimenezdeveloper/chatbot-comercial",
    },
  },
  {
    title: "EuroSAT AI Lab — Visión Satelital",
    description:
      "Laboratorio de Computer Vision y MLOps para clasificación de cobertura terrestre (LULC) sobre 27.000 imágenes satelitales Sentinel-2 de la Agencia Espacial Europea. Partición estratificada determinística 80/10/10, optimización orientada a Macro F1-Score y panel interactivo en React 19 y FastAPI.",
    tags: ["PyTorch", "Python 3.10", "FastAPI", "React 19", "Scikit-Learn", "Computer Vision", "MLOps"],
    links: {
      github: "https://github.com/dgimenezdeveloper/eurosat-ai-lab",
      live: "https://colab.research.google.com/github/dgimenezdeveloper/eurosat-ai-lab/blob/main/notebooks/01_etapa1_eda_baseline.ipynb",
    },
  },
  {
    title: "Congreso de Logística UNaB",
    description:
      "Plataforma integral de gestión de conferencias y acreditación in-situ para más de 500 asistentes y 30 empresas. Sistema de check-in rápido mediante QR estático dual, verificación inmediata por DNI, compilación en tiempo real de certificados en PDF vectorial y envío transaccional por correo SMTP.",
    image: "/projects/congreso/home/home-1.webp",
    gallery: {
      "Inicio": [
        "/projects/congreso/home/home-1.webp",
        "/projects/congreso/home/home-2.webp",
        "/projects/congreso/home/home-3.webp",
        "/projects/congreso/home/home-4.webp",
        "/projects/congreso/home/home-5.webp",
      ],
      "Registro": [
        "/projects/congreso/registro/registro.webp",
        "/projects/congreso/registro/registro-1.webp",
        "/projects/congreso/registro/registro-2.webp",
        "/projects/congreso/registro/registro-3.webp",
        "/projects/congreso/registro/verificacion.webp",
      ],
      "Historia": [
        "/projects/congreso/historia/historia-1.webp",
        "/projects/congreso/historia/historia-2.webp",
        "/projects/congreso/historia/historia-3.webp",
        "/projects/congreso/historia/historia-4.webp",
      ],
      "Programa": [
        "/projects/congreso/sobre-el-congreso/programa/programa-1.webp",
        "/projects/congreso/sobre-el-congreso/programa/programa-2.webp",
      ],
      "Disertantes": [
        "/projects/congreso/sobre-el-congreso/disertantes/disertantes.webp",
      ],
      "Empresas": [
        "/projects/congreso/sobre-el-congreso/empresas/empresas-1.webp",
        "/projects/congreso/sobre-el-congreso/empresas/empresas-2.webp",
        "/projects/congreso/sobre-el-congreso/empresas/empresas-3.webp",
        "/projects/congreso/sobre-el-congreso/empresas/empresas-4.webp",
      ],
    },
    tags: ["React 18", "Django 5.2", "Django REST", "Pillow (QR)", "xhtml2pdf", "Tailwind CSS"],
    links: {
      github: "https://github.com/dgimenezdeveloper/congreso-logistica",
      live: "https://congreso-logistica.vercel.app/",
    },
  },
  {
    title: "Luminova ERP — Depósitos e Inventario",
    description:
      "Sistema ERP industrial para manufactura y logística multi-depósito refactorizado desde una arquitectura heredada. Incorpora normalización de base de datos en 3 fases, multi-tenancy con esquemas PostgreSQL (django-tenants), autenticación JWT con rotación de tokens y auditoría granular de accesos de operarios.",
    image: "/projects/luminova/login/luminova-login.webp",
    gallery: {
      "Login": ["/projects/luminova/login/luminova-login.webp"],
      "Administrador": [
        "/projects/luminova/administrador/luminova-admin-01.webp",
        "/projects/luminova/administrador/luminova-admin-02.webp",
        "/projects/luminova/administrador/luminova-admin-03.webp",
        "/projects/luminova/administrador/luminova-admin-04.webp",
      ],
      "Depósito": [
        "/projects/luminova/deposito/luminova-deposito-01.webp",
        "/projects/luminova/deposito/luminova-deposito-02.webp",
        "/projects/luminova/deposito/luminova-deposito-03.webp",
        "/projects/luminova/deposito/luminova-deposito-04.webp",
      ],
      "Producción": [
        "/projects/luminova/produccion/luminova-produccion-01.webp",
        "/projects/luminova/produccion/luminova-produccion-02.webp",
      ],
      "Ventas": [
        "/projects/luminova/ventas/luminova-ventas-01.webp",
        "/projects/luminova/ventas/luminova-ventas-02.webp",
        "/projects/luminova/ventas/luminova-ventas-03.webp",
        "/projects/luminova/ventas/luminova-ventas-04.webp",
      ],
    },
    tags: ["Django 5.2", "Python 3.12", "PostgreSQL 16", "django-tenants", "DRF", "ReportLab"],
    links: {
      github: "https://github.com/dgimenezdeveloper/refactor_luminova",
      live: "https://github.com/dgimenezdeveloper/refactor_luminova",
    },
  },
  {
    title: "Demo ANDET — B2B E-Commerce & Scraping ETL",
    description:
      "Catálogo digital interactivo y sistema de cotizaciones para ANDET S.A.C. (equipos de medición eléctrica e inversores solares). Arquitectura Jamstack de carga ultrarrápida sin frameworks pesados, con tarjetas de perspectiva 3D y pipeline de ingesta de datos y web scraping en Python.",
    image: "/projects/andet/andet-01.webp",
    gallery: {
      "Principal": [
        "/projects/andet/andet-01.webp",
        "/projects/andet/andet-02.webp",
        "/projects/andet/andet-03.webp",
        "/projects/andet/andet-04.webp",
        "/projects/andet/andet-05.webp",
        "/projects/andet/andet-06.webp",
        "/projects/andet/andet-07.webp",
      ],
    },
    tags: ["Vanilla JS (ES6+)", "Python ETL", "Web Scraping", "HTML5/CSS3 3D", "Jamstack"],
    links: {
      github: "https://github.com/dgimenezdeveloper/demo-andet-ecommerce",
      live: "https://github.com/dgimenezdeveloper/demo-andet-ecommerce",
    },
  },
  {
    title: "Cesar Valls Propiedades",
    description:
      "Sitio web institucional y catálogo inmobiliario para Cesar Valls Propiedades. Gestión y visualización de inmuebles, contacto directo y experiencia optimizada para usuarios y administradores.",
    image: "/projects/cesar-valls-propiedades/cesar-valls-propiedades-01.png",
    gallery: {
      "Principal": [
        "/projects/cesar-valls-propiedades/cesar-valls-propiedades-01.png",
        "/projects/cesar-valls-propiedades/cesar-valls-propiedades-02.png",
        "/projects/cesar-valls-propiedades/cesar-valls-propiedades-03.png",
        "/projects/cesar-valls-propiedades/cesar-valls-propiedades-04.png",
        "/projects/cesar-valls-propiedades/cesar-valls-propiedades-05.png",
        "/projects/cesar-valls-propiedades/cesar-valls-propiedades-06.png",
        "/projects/cesar-valls-propiedades/cesar-valls-propiedades-07.png",
      ],
    },
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Inmobiliaria"],
    links: {
      github: "https://github.com/dgimenezdeveloper/cesarvalls-propiedades",
      live: "https://cesarvalls-propiedades.vercel.app/",
    },
  },
  {
    title: "Invergest",
    description:
      "Plataforma web para la gestión de inversiones y activos inmobiliarios, con panel de administración, visualización financiera y experiencia de usuario moderna.",
    image: "/projects/invergest/invergest-01.png",
    gallery: {
      "Principal": [
        "/projects/invergest/invergest-01.png",
        "/projects/invergest/invergest-02.png",
        "/projects/invergest/invergest-03.png",
        "/projects/invergest/invergest-04.png",
        "/projects/invergest/invergest-05.png",
        "/projects/invergest/invergest-06.png",
      ],
    },
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Inversiones"],
    links: {
      github: "https://github.com/dgimenezdeveloper/invergest",
      live: "https://invergest.vercel.app/",
    },
  },
  {
    title: "Radio Go",
    description:
      "Aplicación web para transmisión y gestión de emisora radial en vivo con streaming interactivo y panel administrativo.",
    image: "/projects/radio-go/radio-go-01.webp",
    gallery: {
      "Principal": [
        "/projects/radio-go/radio-go-01.webp",
        "/projects/radio-go/radio-go-02.webp",
        "/projects/radio-go/radio-go-03.webp",
        "/projects/radio-go/radio-go-04.webp",
      ],
    },
    tags: ["Next.js", "TypeScript", "Streaming", "TailwindCSS"],
    links: {
      github: "https://github.com/dgimenezdeveloper/radio-go",
      live: "https://www.radiogo.com.ar/",
    },
  },
  {
    title: "La Antigua Revistería",
    description:
      "E-commerce para librería y revistería histórica, con catálogo digital, gestión de pedidos y checkout optimizado.",
    image: "/projects/revisteria/revisteria-01.webp",
    gallery: {
      "Principal": [
        "/projects/revisteria/revisteria-01.webp",
        "/projects/revisteria/revisteria-02.webp",
        "/projects/revisteria/revisteria-03.webp",
        "/projects/revisteria/revisteria-04.webp",
        "/projects/revisteria/revisteria-05.webp",
        "/projects/revisteria/revisteria-06.webp",
        "/projects/revisteria/revisteria-07.webp",
        "/projects/revisteria/revisteria-08.webp",
        "/projects/revisteria/revisteria-09.webp",
      ],
    },
    tags: ["Next.js", "TypeScript", "E-commerce", "TailwindCSS"],
    links: {
      github: "https://github.com/dgimenezdeveloper/revisteria",
      live: "https://revisteria.pythonanywhere.com/",
    },
  },
];