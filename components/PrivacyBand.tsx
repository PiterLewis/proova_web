import { Ban, Lock, Trash2 } from "lucide-react";

export function PrivacyBand() {
  return (
    <section className="sec bandx privacyx" id="privacy">
      <div className="wrap bandx-in">
        <div data-reveal>
          <span className="eyebrow">Tu privacidad, primero</span>
          <h2>Tus fotos son tuyas. Y punto.</h2>
          <p className="bl">
            Tu foto se procesa cifrada, solo para generar tus probadores. No vendemos ni cedemos tus datos, y puedes
            borrarlo todo desde la app cuando quieras.
          </p>
          <div className="plist">
            <div className="row">
              <Lock /> Se procesa cifrada
            </div>
            <div className="row">
              <Ban /> Nunca vendemos tus datos
            </div>
            <div className="row">
              <Trash2 /> Bórralo todo cuando quieras
            </div>
          </div>
        </div>
        <div className="bart">
          <span data-plx="-0.05" style={{ display: "inline-block" }}>
            <img className="bob d3" style={{ ["--r" as string]: "2deg" }} src="/assets/mascot/provi-privacy.svg" alt="Provi con un escudo de privacidad" />
          </span>
        </div>
      </div>
    </section>
  );
}
