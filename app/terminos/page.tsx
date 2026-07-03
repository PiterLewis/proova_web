import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Términos de uso — proova",
  description: "Las condiciones para usar proova: tu armario y probador virtual con IA.",
};

const UPDATED = "2 de julio de 2026";

export default function TerminosPage() {
  return (
    <LegalShell>
      <article className="legal">
        <span className="eyebrow">Legal</span>
        <h1>Términos de uso</h1>
        <p className="updated">Última actualización: {UPDATED}</p>

        <p>
          Estos términos regulan el uso de <strong>proova</strong>, tu armario y probador virtual con IA. Al usar la
          app, aceptas lo que sigue. Están redactados para leerse sin abogado al lado.
        </p>

        <div className="toc">
          <h4>Contenido</h4>
          <a href="#servicio">El servicio</a>
          <a href="#cuenta">Tu cuenta y uso</a>
          <a href="#contenido">Tu contenido</a>
          <a href="#ia">Resultados de IA</a>
          <a href="#pagos">Cuota y pagos</a>
          <a href="#prohibido">Uso aceptable</a>
          <a href="#garantias">Garantías</a>
          <a href="#cambios">Cambios</a>
        </div>

        <h2 id="servicio">1. Qué es proova</h2>
        <p>
          proova te permite digitalizar tu ropa, probártela virtualmente sobre tu foto, guardar y planificar looks, y
          preparar una cápsula de viaje. El servicio se ofrece “tal cual” y puede evolucionar con el tiempo.
        </p>

        <h2 id="cuenta">2. Tu uso de la app</h2>
        <p>
          Te comprometes a usar proova conforme a la ley y a estos términos. Eres responsable del dispositivo desde el
          que accedes y de mantener actualizada la app para un funcionamiento correcto.
        </p>

        <h2 id="contenido">3. Tu contenido</h2>
        <p>
          Las fotos de tu ropa, tu foto de cuerpo y tus looks son <strong>tuyos</strong>. Nos concedes únicamente el permiso
          técnico imprescindible para prestarte el servicio (por ejemplo, procesar una foto para generar el probador,
          como se describe en la <a href="/privacidad">Política de privacidad</a>). No usamos tu contenido para
          entrenar modelos ni con fines publicitarios.
        </p>

        <h2 id="ia">4. Resultados generados por IA</h2>
        <p>
          Las imágenes del probador se generan con inteligencia artificial a partir de tus fotos. Son una{" "}
          <strong>aproximación</strong> de cómo te quedaría una prenda: pueden no reflejar con exactitud tallas,
          caídas, texturas o colores. Úsalas como orientación, no como garantía del resultado real.
        </p>

        <h2 id="pagos">5. Cuota y pagos</h2>
        <p>
          proova ofrece un uso gratuito con una cuota limitada de pruebas. Si en el futuro se ofrecen funciones de
          pago, se contratarán a través de la tienda de aplicaciones de tu dispositivo y se te informará del precio y
          las condiciones antes de comprar. Los reembolsos se rigen por las políticas de esa tienda.
        </p>

        <h2 id="prohibido">6. Uso aceptable</h2>
        <ul>
          <li>No subas fotos de otras personas sin su consentimiento.</li>
          <li>No uses el servicio para crear contenido ilegal, ofensivo o que infrinja derechos de terceros.</li>
          <li>No intentes vulnerar, sobrecargar o realizar ingeniería inversa del servicio.</li>
        </ul>
        <p>Podemos suspender el acceso si se incumplen estas reglas.</p>

        <h2 id="garantias">7. Garantías y responsabilidad</h2>
        <p>
          El servicio se presta sin garantías de disponibilidad ininterrumpida ni de idoneidad para un fin concreto.
          En la medida que permita la ley, proova no será responsable de daños indirectos derivados del uso o la
          imposibilidad de uso de la app. Nada en estos términos limita los derechos que la ley te reconoce como
          consumidor.
        </p>

        <h2 id="cambios">8. Cambios y contacto</h2>
        <p>
          Podemos actualizar estos términos; publicaremos la nueva fecha arriba y, si el cambio es relevante, te
          avisaremos en la app. Para cualquier cuestión, escríbenos a{" "}
          <a href="mailto:hola@proova.co">hola@proova.co</a>.
        </p>
      </article>
    </LegalShell>
  );
}
