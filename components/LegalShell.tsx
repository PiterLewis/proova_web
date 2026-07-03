import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Nav } from "./Nav";
import { SiteFooter } from "./SiteFooter";

/** Envoltorio de las páginas legales: nav fija + contenedor .legal + footer. */
export function LegalShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="wrap legal">
        <Link href="/" className="back">
          <ArrowLeft size={16} /> Volver a proova
        </Link>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
