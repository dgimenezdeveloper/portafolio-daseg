# 💻 Personal Portfolio — Full-Stack Engineer & Technical Project Lead

[![Live Demo](https://img.shields.io/badge/Production-daseg.vercel.app-00C7B7?logo=vercel&logoColor=white)](https://daseg.vercel.app)
[![Framework](https://img.shields.io/badge/Framework-Next.js%2015.3%20(App%20Router)-black?logo=nextdotjs&logoColor=white)](#)
[![UI Library](https://img.shields.io/badge/UI-React%2019%20%7C%20TypeScript%205-61DAFB?logo=react&logoColor=white)](#)
[![Styling](https://img.shields.io/badge/Styling-Tailwind%20CSS%20v4-38B2AC?logo=tailwindcss&logoColor=white)](#)
[![Animations](https://img.shields.io/badge/Animations-Framer%20Motion%2012-FF0055?logo=framer&logoColor=white)](#)
[![Email API](https://img.shields.io/badge/Email-Resend%20API%20%7C%20Zod-black?logo=resend&logoColor=white)](#)
[![Theme](https://img.shields.io/badge/Theming-Dark%20%2F%20Light%20(next--themes)-orange)](#)

> Official personal web portfolio and digital curriculum vitae of **Darío Giménez (daseg)** — Full-Stack Software Engineer, Founder and Technical Project Lead at Folkode Group. Features a modern App Router architecture, responsive 3D parallax tilt interactions, high-performance image optimization (AVIF/WebP), a serverless transactional email contact pipeline via Resend, and dynamic multi-image project modal galleries.
>
> 🌐 **Quick Navigation / Navegación Rápida:** [English Documentation](#-english-documentation) | [Documentación en Español](#-documentación-en-español)

---

## 🌐 English Documentation

### 1. Executive Summary & Brand Positioning
This portfolio represents the digital identity, software engineering credentials, and commercial project showcase of **Darío Giménez**. It is engineered to provide recruiters, technical directors, and international freelance clients with an interactive, high-performance overview of delivered solutions:

- **Technical Profile:** Full-Stack developer with roots in industrial quality assurance and process optimization (ex-Roemmers chemical analyst turned software engineer), co-founder of the Argentine software factory **Folkode**.
- **Delivered Projects Showcase:** Demonstrates real-world enterprise web systems, SaaS platforms, logistics platforms, and B2B e-commerce architectures (e.g., *Congreso UNaB*, *Luminova ERP*, *ANDET S.A.C.*, *Radio Go*, *Cesar Valls Propiedades*).
- **Interactive Experience & CV:** Features a dedicated `/cv` page rendering a chronological timeline of professional experience, academic credentials, and soft skills, backed by one-click PDF downloading.
- **Serverless Contact Engine:** Direct, spam-resilient contact channel validated by Zod and delivered via the Resend API.

---

### 2. Architectural Highlights & UI Engineering

```
portafolio-daseg/
├── public/
│   ├── images/               # Logos, vector icons, profile pictures, WebP project galleries
│   ├── projects/             # Organized assets for Luminova, Congreso, Andet, etc.
│   └── cv-dario-gimenez.pdf  # Downloadable resume document
├── src/
│   ├── app/
│   │   ├── api/send/route.ts # Serverless Edge route dispatching contact emails via Resend
│   │   ├── cv/               # Dedicated CV page (Metadata, Timeline, PDF Download)
│   │   ├── globals.css       # Tailwind CSS v4 design tokens, CSS variables, theme palettes
│   │   ├── layout.tsx        # Root layout, Geist font injection, SEO metadata & OpenGraph
│   │   ├── page.tsx          # Homepage composing Hero, Skills, Projects, and Contact
│   │   ├── robots.ts         # Search engine crawler policies
│   │   └── sitemap.ts        # Automated XML sitemap generation
│   ├── components/
│   │   ├── Hero.tsx          # Presentation banner with live availability pulse indicator
│   │   ├── Skills.tsx        # 20+ categorized language and database technology badges
│   │   ├── Projects.tsx      # Projects grid orchestrator
│   │   ├── ProjectCard.tsx   # 3D interactive tilt cards with dynamic specular lighting
│   │   ├── ProjectGalleryModal.tsx # Multi-section modal gallery with thumbnail navigation
│   │   ├── Contact.tsx       # Asynchronous contact form powered by React Hook Form & Zod
│   │   ├── Header.tsx        # Floating glassmorphism navigation pill
│   │   └── ThemeToggle.tsx   # Client-side Dark/Light switch
│   └── data/
│       ├── cv.json / cvData.ts       # Structured resume data and TypeScript interfaces
│       └── projectsData.ts   # Project metadata, tags, URLs, and image galleries
```

---

### 3. Core Technical Capabilities

#### A. Interactive 3D Card Engine & Specular Reflection
Project cards leverage `react-parallax-tilt` alongside custom CSS mouse-coordinate calculations:
- Calculates relative cursor coordinates (`--x`, `--y`) on mouse movement.
- Casts dynamic radial specular highlights across card borders and surfaces with hardware-accelerated transitions.
- Dynamically loads modal galleries (`ProjectGalleryModal.tsx`) on demand using Next.js `dynamic()` imports to minimize initial bundle size.

#### B. Serverless Email Pipeline (`/api/send`)
The contact section bypasses standard client-side mailto links in favor of an automated serverless API route:
- **Validation Layer:** Enforces strict constraints using Zod schemas (`name >= 2 chars`, valid email format, `message >= 10 chars`).
- **Resend SDK Integration:** Dispatches structured HTML emails to `dgimenez.developer@gmail.com` with configured `replyTo` fields for friction-free client responses.
- **Error Handling:** Returns structured HTTP status codes (`400 Bad Request`, `500 Server Error`, `200 Success`) with contextual user notifications.

#### C. Performance, SEO & Core Web Vitals
- **Image Optimization:** Utilizes `next/image` with AVIF and WebP transcoding, device-specific breakpoints (`640px` to `3840px`), and a 31-day cache TTL.
- **Typography:** Self-hosted `Geist Sans` and `Geist Mono` font variables injected without external layout shift.
- **Accessibility & SEO:** Dynamic XML sitemaps (`sitemap.ts`), strict crawling policies (`robots.ts`), and rich OpenGraph/Twitter card metadata.

---

### 4. Technical Stack Specification

| Layer / Library | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `15.3.5` | SSR, Static Site Generation, and API Route endpoints |
| **UI Library** | React | `19.0.0` | Declarative UI, hooks, and React 19 concurrent features |
| **Language** | TypeScript | `^5.0.0` | Strict static typing across components and data layers |
| **Styling Engine** | Tailwind CSS | `^4.0.0` | Modern utility-first stylesheet engine using CSS variables |
| **Motion & Gestures**| Framer Motion | `^12.23.3` | Page load reveals, modal fades, and interactive transitions |
| **3D Card Effects** | react-parallax-tilt | `^1.7.300`| Perspective 3D tilting and glare reflection on cards |
| **Theming** | next-themes | `^0.4.6` | System-aware dark and light theme switching |
| **Form Management** | React Hook Form + Zod | `^7.60` / `^4.0` | Client-side and server-side request schema validation |
| **Email Service** | Resend API | `^4.6.0` | Serverless transactional email transmission |
| **Hosting & CDN** | Vercel Platform | Edge Network | Global CDN caching and automated CI/CD branch deployments |

---

### 5. Local Setup & Quick Start

#### Prerequisites
- Node.js 20+ installed.
- npm, pnpm, or yarn package manager.
- (Optional) A free API key from [Resend](https://resend.com) for local email testing.

#### Installation & Execution
```bash
# 1. Clone the repository
git clone https://github.com/dgimenezdeveloper/portafolio-daseg.git
cd portafolio-daseg

# 2. Install dependencies
npm install

# 3. Configure environment variables
# Create a .env.local file in the project root:
echo "RESEND_API_KEY=re_your_api_key_here" > .env.local

# 4. Start development server with Turbopack
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

---

## 🇪🇸 Documentación en Español

### 1. Resumen Ejecutivo y Perfil Profesional
Este repositorio aloja el portafolio web personal y currículum digital de **Darío Giménez**. Ha sido diseñado y programado para presentar ante empresas, reclutadores y clientes del exterior una vitrina interactiva, rápida y profesional:

- **Perfil:** Desarrollador Full-Stack con sólida base en control de procesos industriales y calidad (analista técnico químico senior en Roemmers con experiencia en SAP), cofundador de la software factory **Folkode**.
- **Vitrina de Proyectos Reales:** Demuestra la construcción de aplicaciones empresariales, sistemas ERP, plataformas para eventos masivos y tiendas electrónicas (*Congreso UNaB*, *Luminova ERP*, *ANDET S.A.C.*, *Radio Go*, *Cesar Valls Propiedades*).
- **Currículum Vitae Digital (`/cv`):** Página interactiva con línea de tiempo animada que documenta experiencia laboral, formación universitaria y aptitudes profesionales, con botón de descarga del CV en PDF.
- **Formulario de Contacto Serverless:** Canal de mensajería directo validado con Zod y transmitido mediante la API de Resend.

---

### 2. Características de Arquitectura e Interfaz
- **Efecto 3D Parallax Tilt:** Tarjetas de proyectos con inclinación tridimensional que calculan la posición del cursor en tiempo real para proyectar reflejos de luz.
- **Galería Modal por Secciones:** Visualizador interactivo de capturas de pantalla de proyectos con soporte para navegación por teclado (flechas y Escape) y miniaturas.
- **Optimización Web Extrema:** Calificación sobresaliente en Core Web Vitals gracias a la compresión nativa de imágenes (AVIF/WebP), carga diferida de modales y tipografía variable Vercel Geist.
- **Modo Oscuro / Claro:** Conmutador accesible integrado con `next-themes` que respeta la preferencia del sistema operativo.

---

### 3. Puesta en Marcha Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/dgimenezdeveloper/portafolio-daseg.git
cd portafolio-daseg

# 2. Instalar dependencias
npm install

# 3. Configurar API de Resend en .env.local
echo "RESEND_API_KEY=tu_api_key_de_resend" > .env.local

# 4. Iniciar servidor de desarrollo
npm run dev
```

---

## 👤 Developer & Contact Information

- **Darío Giménez** — *Full-Stack Software Engineer & Folkode Project Lead*  
  [Website / Portfolio](https://daseg.vercel.app) • [GitHub](https://github.com/dgimenezdeveloper) • [LinkedIn](https://www.linkedin.com/in/daseg/) • [Email](mailto:dgimenez.developer@gmail.com)

---

## 📄 License
This project is open source and available under the **MIT License**.
