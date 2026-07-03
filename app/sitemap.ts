import type { MetadataRoute } from "next";

const SITE = "https://proova.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-07-03");
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE}/terminos`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];
}
