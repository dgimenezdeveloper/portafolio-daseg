import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2678400, // 31 días
    qualities: [50, 75, 90], // Permite diferentes calidades de imagen
  },
  // Comprimir respuestas del servidor
  compress: true,
};

export default nextConfig;
