import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      // El enlace de privacidad de la APP apunta a /privacy: lo redirigimos a la página real.
      { source: "/privacy", destination: "/privacidad", permanent: true },
      { source: "/privacy-policy", destination: "/privacidad", permanent: true },
      { source: "/terms", destination: "/terminos", permanent: true },
      { source: "/legal", destination: "/privacidad", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        // Cabeceras de seguridad básicas (confianza + SEO técnico).
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
