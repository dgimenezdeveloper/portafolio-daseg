type ProjectGallery = Record<string, string[]>;

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
  gallery?: ProjectGallery;
}

export const projectsData: Project[] = [
  
  {
    title: "Congreso de Logística UNaB",
    description:
      "Plataforma web para la gestión y difusión del Congreso de Logística de la UNaB, con módulos de registro, información y agenda.",
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
      "Información": [
        "/projects/congreso/sobre-el-congreso/informacion-general/sobre-el-congreso.webp",
      ],
      "Contacto": [
        "/projects/congreso/contacto/contacto.webp",
      ],
    },
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Eventos"],
    links: {
      github: "https://github.com/dgimenezdeveloper/congreso-unaba",
      live: "https://www.congresologistica.unab.edu.ar/",
    },
  },
  {
    title: "Luminova ERP",
    description:
      "ERP modular para Luminova, abarcando compras, ventas, producción y administración en una sola plataforma.",
    image: "/projects/luminova/login/luminova-login.webp",
    gallery: {
      "Login": [
        "/projects/luminova/login/luminova-login.webp",
      ],
      "Administrador": [
        "/projects/luminova/administrador/luminova-admin-01.webp",
        "/projects/luminova/administrador/luminova-admin-02.webp",
        "/projects/luminova/administrador/luminova-admin-03.webp",
        "/projects/luminova/administrador/luminova-admin-04.webp",
      ],
      "Compras": [
        "/projects/luminova/compras/luminova-compras-01.webp",
        "/projects/luminova/compras/luminova-compras-02.webp",
        "/projects/luminova/compras/luminova-compras-03.webp",
        "/projects/luminova/compras/luminova-compras-04.webp",
        "/projects/luminova/compras/luminova-compras-05.webp",
      ],
      "Depósito": [
        "/projects/luminova/deposito/luminova-deposito-01.webp",
        "/projects/luminova/deposito/luminova-deposito-02.webp",
        "/projects/luminova/deposito/luminova-deposito-03.webp",
        "/projects/luminova/deposito/luminova-deposito-04.webp",
        "/projects/luminova/deposito/luminova-deposito-05.webp",
        "/projects/luminova/deposito/luminova-deposito-06.webp",
        "/projects/luminova/deposito/luminova-deposito-07.webp",
        "/projects/luminova/deposito/luminova-deposito-08.webp",
        "/projects/luminova/deposito/luminova-deposito-09.webp",
        "/projects/luminova/deposito/luminova-deposito-10.webp",
        "/projects/luminova/deposito/luminova-deposito-11.webp",
        "/projects/luminova/deposito/luminova-deposito-12.webp",
        "/projects/luminova/deposito/luminova-deposito-13.webp",
        "/projects/luminova/deposito/luminova-deposito-14.webp",
      ],
      "Producción": [
        "/projects/luminova/produccion/luminova-produccion-01.webp",
        "/projects/luminova/produccion/luminova-produccion-02.webp",
        "/projects/luminova/produccion/luminova-produccion-03.webp",
        "/projects/luminova/produccion/luminova-produccion-04.webp",
        "/projects/luminova/produccion/luminova-produccion-05.webp",
        "/projects/luminova/produccion/luminova-produccion-06.webp",
        "/projects/luminova/produccion/luminova-produccion-07.webp",
      ],
      "Ventas": [
        "/projects/luminova/ventas/luminova-ventas-01.webp",
        "/projects/luminova/ventas/luminova-ventas-02.webp",
        "/projects/luminova/ventas/luminova-ventas-03.webp",
        "/projects/luminova/ventas/luminova-ventas-04.webp",
      ],
    },
    tags: ["Next.js", "TypeScript", "ERP", "TailwindCSS"],
    links: {
      github: "https://github.com/dgimenezdeveloper/luminova-erp",
      live: "https://luminovaerp.pythonanywhere.com/login/"
    },
  },
  {
    title: "Radio Go",
    description:
      "Aplicación web para la gestión y transmisión de la radio Radio Go, con panel de administración y streaming en vivo.",
    image: "/projects/radio-go/radio-go-01.webp",
    gallery: {
      "Principal": [
        "/projects/radio-go/radio-go-01.webp",
        "/projects/radio-go/radio-go-02.webp",
        "/projects/radio-go/radio-go-03.webp",
        "/projects/radio-go/radio-go-04.webp",
      ]
    },
    tags: ["Next.js", "TypeScript", "Streaming", "TailwindCSS"],
    links: {
      github: "https://github.com/dgimenezdeveloper/radio-go",
      live: "https://www.radiogo.com.ar/", 
    },
  },
  {
    title: "Andet",
    description:
      "Sistema de gestión para Andet, optimizando procesos internos y mejorando la eficiencia operativa.",
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
      ]
    },
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Fullstack"],
    links: {
      github: "https://github.com/dgimenezdeveloper/andet",
      live: "https://demo-andet-ecommerce.onrender.com/",
    },
  },
  {
    title: "La Antigua Revistería",
    description:
      "E-commerce para La Antigua Revistería, con catálogo digital, gestión de pedidos y experiencia de usuario optimizada.",
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
      ]
    },
    tags: ["Next.js", "TypeScript", "E-commerce", "TailwindCSS"],
    links: {
      github: "https://github.com/dgimenezdeveloper/revisteria",
      live: "https://revisteria.pythonanywhere.com/", 
    },
  },
  {
    title: "Dr.J Website",
    description:
      "Una landing page para un servicio de desarrollo web, creada con tecnologías modernas de frontend.",
    image: "/projects/drj-website.png",
    tags: ["React", "Next.js", "TailwindCSS"],
    links: {
      github: "https://github.com/dgimenezdeveloper/drj",
      live: "https://drjdevelopment.netlify.app/",
    },
  },
  {
    title: "The Student's Coffee",
    description:
      "Diseño y maquetación de una web para una cafetería, enfocada en la experiencia de usuario y el ambiente.",
    image: "/projects/studentsCoffee.png",
    tags: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/dgimenezdeveloper/the-students-coffee",
      live: "https://thestudentscoffee.netlify.app/",
    },
  },
  {
    title: "Calculadora Interactiva",
    description:
      "Una calculadora funcional construida con React, enfocada en la gestión del estado y la lógica de componentes.",
    image: "/projects/calculadora-react.png",
    tags: ["React", "JavaScript", "CSS"],
    links: {
      github: "https://github.com/dgimenezdeveloper/calculadora-react",
      live: "https://calculadora-daseg-react.netlify.app/",
    },
  },
  {
    title: "Contador de Clics",
    description:
      "Una aplicación simple para demostrar el uso de hooks y el manejo de eventos en React.",
    image: "/projects/contador-de-clicks.png",
    tags: ["React", "JavaScript", "CSS"],
    links: {
      github: "https://github.com/dgimenezdeveloper/contador-de-clicks-react",
      live: "https://contador-de-clicks-react.netlify.app/",
    },
  },
  {
    title: "Simple Layout",
    description:
      "Una maquetación web clásica que demuestra los fundamentos del layout con CSS y HTML5.",
    image: "/projects/simpleLayout.png",
    tags: ["HTML", "CSS"],
    links: {
      github: "https://github.com/dgimenezdeveloper/simple-layout",
      live: "https://simplelayout2023.netlify.app/",
    },
  },
];
