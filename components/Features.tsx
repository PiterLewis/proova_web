/** Ítem de percha (gancho + spot). El primero es "solo" (sin gancho). */
function RailItem({
  spot,
  title,
  body,
  solo = false,
}: {
  spot: string;
  title: string;
  body: string;
  solo?: boolean;
}) {
  return (
    <div className="ritem">
      <div className={`rhang${solo ? " solo" : ""}`}>
        {!solo && <img className="rhook" src="/assets/spot/hanger.svg" alt="" />}
        <img className="rspot" src={spot} alt="" />
      </div>
      <div className="rtext" data-reveal>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section className="sec white" id="features">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <span className="eyebrow">Todo tu armario</span>
          <h2>Menos &quot;no tengo nada que ponerme&quot;.</h2>
          <p>proova te ayuda a sacarle partido a lo que ya tienes: probar, combinar, recordar y planificar.</p>
        </div>
        {/* dos barras de perchas que caen y oscilan con física (arranca al entrar en pantalla) */}
        <div className="railx" id="railx">
          <div className="railseg">
            <div className="railbar" />
            <RailItem solo spot="/assets/spot/hanger-garment.svg" title="Probador virtual" body="Mírate con cada prenda antes de decidir." />
            <RailItem spot="/assets/spot/wardrobe.svg" title="Mi armario" body="Cada prenda con su marca y su tipo." />
            <RailItem spot="/assets/spot/heart.svg" title="Tus looks" body="Guarda y repite tus combinaciones." />
          </div>
          <div className="railseg">
            <div className="railbar" />
            <RailItem spot="/assets/spot/tag.svg" title="Última vez" body="Te recuerda cuándo llevaste cada prenda." />
            <RailItem spot="/assets/spot/suitcase.svg" title="Modo viaje" body="Una cápsula que combina, en segundos." />
            <RailItem spot="/assets/spot/lock.svg" title="Privado por diseño" body="Tu selfie nunca sale de tu móvil." />
          </div>
        </div>
      </div>
    </section>
  );
}
