import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE = "https://proova.co";
const TITLE = "proova — tu probador virtual con IA";
const DESC =
  "Digitaliza tu armario, pruébate cualquier prenda sobre tu foto con IA, guarda tus looks, planifica tu semana y haz la maleta en segundos. Descárgala gratis para iPhone y Android.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: TITLE,
    template: "%s · proova",
  },
  description: DESC,
  applicationName: "proova",
  authors: [{ name: "proova" }],
  creator: "proova",
  publisher: "proova",
  category: "lifestyle",
  keywords: [
    "probador virtual",
    "armario virtual",
    "probador virtual IA",
    "try-on virtual",
    "virtual try-on",
    "armario digital",
    "app de moda",
    "combinar ropa",
    "outfits",
    "qué me pongo",
    "planificar looks",
    "maleta de viaje ropa",
    "moda con inteligencia artificial",
    "proova",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "proova",
    locale: "es_ES",
    title: TITLE,
    description: DESC,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false, email: false, address: false },
  appleWebApp: { capable: true, title: "proova", statusBarStyle: "default" },
};

export const viewport: Viewport = {
  themeColor: "#B12E6A",
  width: "device-width",
  initialScale: 1,
};

/** Datos estructurados (JSON-LD): mejoran cómo Google entiende y muestra la marca y la app. */
function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE}/#organization`,
        name: "proova",
        url: SITE,
        logo: `${SITE}/assets/logo-wordmark.svg`,
        sameAs: ["https://instagram.com"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: "proova",
        description: DESC,
        publisher: { "@id": `${SITE}/#organization` },
        inLanguage: "es-ES",
      },
      {
        "@type": "MobileApplication",
        "@id": `${SITE}/#app`,
        name: "proova",
        operatingSystem: "iOS, Android",
        applicationCategory: "LifestyleApplication",
        description: DESC,
        url: SITE,
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
        publisher: { "@id": `${SITE}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Qué es proova?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Un armario y probador virtual con IA: digitalizas tu ropa, te la pruebas sobre tu foto, guardas tus looks, planificas tu semana y preparas la maleta de viaje en segundos.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo funciona el probador virtual?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Escaneas tus prendas con la cámara y proova las recorta y etiqueta. Después te las prueba sobre tu foto de cuerpo con inteligencia artificial para que veas cómo te quedan antes de decidir.",
            },
          },
          {
            "@type": "Question",
            name: "¿Es privada?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tu foto se procesa cifrada solo para generar tus probadores, no vendemos ni cedemos tus datos, y puedes borrarlo todo desde la app cuando quieras.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuánto cuesta?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "proova se descarga gratis para iPhone y Android, con una cuota de pruebas para empezar.",
            },
          },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      // JSON estático controlado por nosotros (sin entrada de usuario).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={hanken.variable}>
      <body>
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
