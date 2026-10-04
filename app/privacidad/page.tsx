import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Política de privacidad — proova",
  description:
    "Cómo proova trata tus datos: tu foto de cuerpo entero se procesa cifrada solo para generar tus probadores, no vendemos ni cedemos tus datos, y puedes borrarlos todos desde la app cuando quieras.",
};

const UPDATED = "2 de julio de 2026";

export default function PrivacidadPage() {
  return (
    <LegalShell>
      <article className="legal">
        <span className="eyebrow">Legal</span>
        <h1>Política de privacidad</h1>
        <p className="updated">Última actualización: {UPDATED}</p>

        <p>
          En <strong>proova</strong> tu privacidad es el punto de partida, no una nota al pie. Esta política explica
          qué datos tratamos, para qué, con quién los compartimos y qué control tienes sobre ellos. Está escrita para
          que se entienda; si algo no queda claro, escríbenos a{" "}
          <a href="mailto:dev.proova@gmail.com">dev.proova@gmail.com</a>.
        </p>

        <div className="callout">
          <strong>En una frase:</strong> tu foto de cuerpo entero es la base del probador; se procesa cifrada con
          Google Cloud solo para generar tus resultados, y tú mandas: puedes borrar tu cuenta —y todos tus datos— desde la
          app en cualquier momento. No vendemos ni cedemos tus datos.
        </div>

        <div className="toc">
          <h4>Contenido</h4>
          <a href="#responsable">Responsable</a>
          <a href="#datos">Qué datos tratamos</a>
          <a href="#fines">Para qué</a>
          <a href="#terceros">Con quién</a>
          <a href="#conservacion">Cuánto tiempo</a>
          <a href="#derechos">Tus derechos</a>
          <a href="#seguridad">Seguridad</a>
          <a href="#menores">Menores</a>
          <a href="#cambios">Cambios</a>
        </div>

        <h2 id="responsable">1. Quién es el responsable</h2>
        <p>
          El responsable del tratamiento de tus datos es <strong>proova</strong> (el equipo detrás de la aplicación).
          Para cualquier asunto de privacidad puedes contactarnos en{" "}
          <a href="mailto:dev.proova@gmail.com">dev.proova@gmail.com</a>.
        </p>

        <h2 id="datos">2. Qué datos tratamos</h2>
        <h3>Fotos: qué pasa con cada una</h3>
        <ul>
          <li>
            <strong>Tu foto de cuerpo entero</strong> es la base sobre la que te vestimos: es la foto en la que el
            probador prueba la ropa. Se guarda en tu dispositivo y se procesa —cifrada— para generar tus probadores. La
            conservamos mientras uses la app para poder mostrarte tus resultados, y la borras cuando quieras (ver{" "}
            <a href="#conservacion">§5</a> y <a href="#derechos">§6</a>).
          </li>
          <li>
            <strong>Las fotos de tus prendas</strong> se recortan en tu propio móvil y se guardan en local, en tu
            armario. No las necesitamos en el servidor para nada más.
          </li>
        </ul>
        <h3>Otros datos</h3>
        <ul>
          <li>
            <strong>Tu armario</strong> (marcas, tipos, tus looks y tu calendario) se guarda de forma local en tu
            dispositivo.
          </li>
          <li>
            Cuando pides un probador, tu <strong>foto de cuerpo entero</strong> y las prendas seleccionadas viajan
            cifradas a nuestro proveedor de IA para generar la imagen del resultado (ver{" "}
            <a href="#terceros">§4</a>).
          </li>
          <li>
            <strong>Las fotos de tus prendas</strong> se envían al mismo proveedor para reconocer de qué prenda se
            trata (tipo, color, tejido) y poder combinarla. No se usan para nada más.
          </li>
          <li>
            <strong>Un identificador anónimo</strong> de tu instalación y datos técnicos mínimos (control de cuota de
            uso y prevención de abuso). No incluye tu nombre, email ni contactos.
          </li>
          <li>
            <strong>Imágenes de resultado (renders)</strong> del probador: se cachean por <em>hash de contenido</em>
            (no enumerables ni servidas por identificador) para no re-generar —y no volver a cobrar— el mismo look.
          </li>
        </ul>
        <p>
          No pedimos tu agenda ni tu galería salvo que tú actives esas funciones, y los permisos se te piden en el
          momento con una explicación de para qué. Sobre la <strong>ubicación</strong>: si concedes el permiso, usamos
          tus coordenadas aproximadas para darte el tiempo de hoy; si lo deniegas, deducimos solo la{" "}
          <strong>ciudad</strong> a partir de tu dirección IP para el mismo fin. En ningún caso guardamos un historial
          de tus ubicaciones.
        </p>

        <h2 id="fines">3. Para qué usamos tus datos</h2>
        <ul>
          <li>Generar tu probador virtual y tus recomendaciones de looks.</li>
          <li>Guardar y organizar tu armario, tus looks y tu calendario.</li>
          <li>Controlar la cuota de uso gratuito y prevenir el abuso del servicio.</li>
          <li>Mantener el servicio seguro y funcionando.</li>
        </ul>
        <p>
          No vendemos tus datos. No hacemos publicidad con ellos ni creamos perfiles para terceros.
        </p>

        <h2 id="terceros">4. Con quién los compartimos</h2>
        <p>
          Tus imágenes —tu foto de cuerpo entero y las fotos de tus prendas— se procesan en{" "}
          <strong>Google Cloud</strong> (Google Ireland Limited / Google LLC), que actúa como encargado del tratamiento
          por nuestra cuenta y bajo contrato, <strong>únicamente</strong> para generar tu resultado. Google no las usa
          para entrenar sus modelos ni para ningún fin propio.
        </p>
        <p>
          Si ese servicio sufre una incidencia, podemos recurrir puntualmente a otro proveedor de IA equivalente,
          siempre bajo el mismo contrato de tratamiento y para el mismo fin. Añadimos también proveedores de{" "}
          <strong>alojamiento</strong> (nuestro servidor), <strong>autenticación</strong> y{" "}
          <strong>diagnóstico de errores</strong>, que no reciben tus fotos.
        </p>
        <p>
          Algunos de estos proveedores pueden tratar datos <strong>fuera del Espacio Económico Europeo</strong>; en ese
          caso la transferencia se ampara en las cláusulas contractuales tipo de la Comisión Europea. No vendemos ni
          cedemos tus datos con fines comerciales, ni creamos perfiles para terceros.
        </p>

        <h2 id="conservacion">5. Cuánto tiempo los conservamos</h2>
        <ul>
          <li>
            <strong>Tu foto de cuerpo entero y tus resultados:</strong> los conservamos el tiempo necesario para
            prestarte el servicio —poder generar tus probadores y volver a mostrártelos sin repetir el proceso—. Los
            borras cuando quieras desde la app y se eliminan. Tu foto de cuerpo, además, solo vive en memoria del
            servidor mientras la usas y se descarta sola a las pocas horas de inactividad: nunca se guarda en disco.
          </li>
          <li>
            <strong>Datos locales (armario, looks, calendario):</strong> viven en tu dispositivo hasta que los borras o
            desinstalas la app.
          </li>
        </ul>

        <h2 id="derechos">6. Tus derechos</h2>
        <p>
          Tienes derecho a acceder, rectificar, borrar y portar tus datos, y a oponerte o limitar su tratamiento
          (RGPD). Lo hemos hecho fácil:
        </p>
        <ul>
          <li>
            <strong>Borrar tu cuenta y todos tus datos:</strong> desde la propia app, con el botón{" "}
            <em>“Borrar mi cuenta y mis datos”</em> (en tu perfil). Elimina tu cuenta, tus datos del servidor —incluida
            tu foto de cuerpo— y también los locales del dispositivo. Es inmediato e irreversible, y no hace falta que
            nos escribas.
          </li>
          <li>
            <strong>Acceso y portabilidad:</strong> escríbenos a <a href="mailto:dev.proova@gmail.com">dev.proova@gmail.com</a> y
            te facilitamos la información asociada a tu instalación.
          </li>
        </ul>
        <p>
          También puedes reclamar ante la autoridad de protección de datos de tu país (en España, la AEPD) si
          consideras que no hemos respetado tus derechos.
        </p>

        <h2 id="seguridad">7. Seguridad</h2>
        <p>
          Las comunicaciones con nuestros servidores van cifradas (HTTPS/TLS). El acceso a los datos está restringido y
          aislado por usuario. Aun así, ningún sistema es infalible: por eso el diseño minimiza lo que sale de tu
          dispositivo desde el principio.
        </p>

        <h2 id="menores">8. Menores</h2>
        <p>
          proova no está dirigida a menores de 13 años (o la edad mínima que exija tu país). Si crees que un menor nos
          ha facilitado datos, contáctanos y los eliminaremos.
        </p>

        <h2 id="cambios">9. Cambios en esta política</h2>
        <p>
          Si actualizamos esta política, cambiaremos la fecha de arriba y, si el cambio es relevante, te avisaremos en
          la app. El uso continuado del servicio implica la aceptación de la versión vigente.
        </p>

        <p style={{ marginTop: 34, color: "var(--ink-500)" }}>
          ¿Dudas sobre tus datos? <a href="mailto:dev.proova@gmail.com">dev.proova@gmail.com</a>.
        </p>
      </article>
    </LegalShell>
  );
}
