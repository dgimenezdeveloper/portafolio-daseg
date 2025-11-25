import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // 1. Importa tu componente

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dario Gimenez | Desarrollo FullStack",
  description: "Portafolio profesional de desarrollo fullstack de Darío Gimenez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="!scroll-smooth">
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}