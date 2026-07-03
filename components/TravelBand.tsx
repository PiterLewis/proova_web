export function TravelBand() {
  return (
    <section className="sec bandx travelx">
      <span className="plx bg-sprite" data-plx="0.08" style={{ top: 38, right: "30%" }}>
        <img src="/assets/spot/sparkle.svg" alt="" style={{ width: 26 }} />
      </span>
      <span className="plx bg-sprite s2" data-plx="-0.10" style={{ bottom: 44, left: "38%" }}>
        <img src="/assets/spot/sparkle.svg" alt="" style={{ width: 18 }} />
      </span>
      <div className="wrap bandx-in">
        <div data-reveal>
          <span className="eyebrow">Modo viaje</span>
          <h2>Haz la maleta en segundos.</h2>
          <p className="bl">
            Elige cuándo empiezas y cuántos días. Provi te arma una cápsula de prendas que combinan entre sí, según el
            tiempo y tus planes.
          </p>
          <div className="cta-row">
            <a href="#download" className="btn btn-primary btn-lg">
              Probar Modo viaje
            </a>
          </div>
        </div>
        {/* las prendas vuelan a la maleta, que hace squash y se cierra */}
        <div className="packstage">
          <img className="pk p1" src="/assets/garments/cardigan-uniqlo.png" alt="" />
          <img className="pk p2" src="/assets/garments/shorts-levis.png" alt="" />
          <img className="pk p3" src="/assets/garments/cardigan-uniqlo.png" alt="" />
          <img className="case" src="/assets/spot/suitcase.svg" alt="" />
          <span className="ttag">Maleta lista · 5 días</span>
          <span className="tprovi">
            <img className="bob d2" style={{ ["--r" as string]: "-2deg", width: "100%" }} src="/assets/mascot/provi.svg" alt="Provi" />
          </span>
        </div>
      </div>
    </section>
  );
}
