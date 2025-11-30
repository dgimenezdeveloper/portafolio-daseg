import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ThemeProvider from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Darío Gimenez | Desarrollador Full Stack",
    template: "%s | Darío Gimenez"
  },
  description: "Portafolio profesional de Darío Gimenez, Desarrollador Full Stack especializado en React, Next.js, Node.js, Python y Django. Explora mis proyectos y experiencia en desarrollo web.",
  keywords: [
    "Darío Gimenez",
    "Desarrollador Full Stack",
    "Programador",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Django",
    "TypeScript",
    "JavaScript",
    "Desarrollo Web",
    "Frontend",
    "Backend",
    "Portfolio"
  ],
  authors: [{ name: "Darío Gimenez", url: "https://github.com/dgimenezdeveloper" }],
  creator: "Darío Gimenez",
  publisher: "Darío Gimenez",
  metadataBase: new URL('https://daseg.vercel.app'), // Actualizar con tu dominio real
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://daseg.vercel.app",
    title: "Darío Gimenez | Desarrollador Full Stack",
    description: "Portafolio profesional de Darío Gimenez. Desarrollador Full Stack especializado en crear soluciones web modernas y escalables.",
    siteName: "Darío Gimenez Portfolio",
    images: [
      {
        url: "/images/og-image.png", // Crear esta imagen
        width: 1200,
        height: 630,
        alt: "Darío Gimenez - Desarrollador Full Stack"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Darío Gimenez | Desarrollador Full Stack",
    description: "Portafolio profesional de desarrollo web y software. Explora mis proyectos y experiencia.",
    images: ["/images/og-image.png"], // Crear esta imagen
    creator: "@daseg" // Actualizar con tu usuario de Twitter si lo tienes
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: '', // Añadir código de verificación de Google Search Console
    // yandex: '', // Añadir si es necesario
    // bing: '', // Añadir si es necesario
  },
  alternates: {
    canonical: "https://daseg.vercel.app",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Favicons actualizados y rutas absolutas para máxima compatibilidad */}
        <link rel="icon" href="/images/logo/favicon_io/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/images/logo/daseg-logo.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logo/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/images/logo/favicon_io/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}