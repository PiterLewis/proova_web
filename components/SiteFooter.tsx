import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col" style={{ maxWidth: 260 }}>
            <a href="/#top" className="brand" style={{ fontSize: 24 }}>
              proova<b>.</b>
            </a>
            <p style={{ fontSize: 14, color: "var(--ink-500)", lineHeight: 1.5, margin: "12px 0 0" }}>
              Tu armario virtual. Pruébate looks, organiza tu día a día y haz la maleta con calma.
            </p>
          </div>
          <div className="foot-col">
            <h4>Producto</h4>
            <a href="/#features">Funciones</a>
            <a href="/#how">Cómo funciona</a>
            <a href="/#download">Descargar</a>
          </div>
          <div className="foot-col">
            <h4>Privacidad</h4>
            <Link href="/privacidad">Cómo cuidamos tus datos</Link>
            <Link href="/privacidad">Política de privacidad</Link>
            <Link href="/terminos">Términos</Link>
          </div>
          <div className="foot-col">
            <h4>Soporte</h4>
            <a href="mailto:hola@proova.co">Ayuda</a>
            <a href="mailto:hola@proova.co">Contacto</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} proova</span>
        </div>
      </div>
    </footer>
  );
}
