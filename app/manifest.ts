import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "proova — tu probador virtual con IA",
    short_name: "proova",
    description: "Tu armario y probador virtual con IA.",
    start_url: "/",
    display: "standalone",
    background_color: "#F3EEE4",
    theme_color: "#B12E6A",
    lang: "es",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/apple-icon.png", sizes: "1024x1024", type: "image/png", purpose: "any" },
    ],
  };
}
