import { BatteryFull, Bookmark, Calendar, Scan, Shirt, ShoppingBag, Wifi } from "lucide-react";
import { StoreBadges } from "./StoreBadges";

export function Hero() {
  return (
    <section className="hero" id="top">
      {/* halos cálidos que derivan por la pantalla (sin anillos de pulse) */}
      <div className="hero-glow" aria-hidden>
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 className="head">
            {/* Provi pasea por el titular (siempre recto) y termina con un guiño */}
            <span className="provi-inspect" aria-hidden>
              <span className="pi-body">
                <img className="pv-base" src="/assets/mascot/provi.svg" alt="" />
                <img className="pv-wink" src="/assets/mascot/provi-wink.svg" alt="" />
              </span>
            </span>
            Tu probador,
            <br />
            <em className="stitched">
              en tu bolsillo.
              <svg viewBox="0 0 340 26" preserveAspectRatio="none" aria-hidden>
                <path d="M4 16 Q 85 6, 170 14 T 336 12" pathLength={400} />
              </svg>
            </em>
          </h1>
          <p className="lede">Tu armario y probador virtual con IA.</p>
          <div className="cta-row">
            <StoreBadges />
          </div>
          <div className="rating">
            
          </div>
        </div>

        <div className="stage">
          {/* sprites parallax (el wrapper recibe el desplazamiento; el img mantiene su bob) */}
          <span className="plx" data-plx="0.16" data-mdepth="0.9" style={{ top: 38, left: -30 }}>
            <img className="bob d1" src="/assets/spot/hanger-garment.svg" alt="" style={{ width: 90, ["--r" as string]: "-8deg" }} />
          </span>
          <span className="plx" data-plx="-0.12" data-mdepth="0.65" style={{ top: 108, right: -22 }}>
            <img className="bob d2" src="/assets/spot/heart.svg" alt="" style={{ width: 68, ["--r" as string]: "7deg" }} />
          </span>
          <span className="plx" data-plx="0.10" data-mdepth="0.75" style={{ bottom: 80, left: -24 }}>
            <img className="bob d3" src="/assets/spot/suitcase.svg" alt="" style={{ width: 80, ["--r" as string]: "6deg" }} />
          </span>
          <span className="plx" data-plx="-0.18" data-mdepth="0.55" style={{ bottom: 158, right: -26 }}>
            <img className="bob" src="/assets/spot/weather.svg" alt="" style={{ width: 84, ["--r" as string]: "-5deg" }} />
          </span>

          {/* móvil: carrusel de prendas tras las cortinas del probador */}
          <span className="phone-plx" data-plx="0.05" data-mdepth="0.3" data-tilt="">
            <div className="phone">
              <div className="screen">
                <div className="sbar">
                  <span>20:36</span>
                  <span className="notch" />
                  <span className="r">
                    <Wifi />
                    <BatteryFull />
                  </span>
                </div>
                <div className="ptitle">Tu probador</div>
                <div className="phint">Toca una prenda para probártela</div>
                <div className="garment">
                  <div className="gstack" id="gstack">
                    <img className="on" src="/assets/photos/scuffers-hoodie.png" alt="Hoodie Scuffers" />
                    <img src="/assets/photos/tryon-scuffers.png" alt="Así te queda" />
                  </div>
                  <div className="gscrim" />
                  <span className="gchip" id="gchip">
                    <span className="hdot" /> Muy armoniosa
                  </span>
                  <div className="prail" />
                  <div className="gbrand" id="gbrand">
                    Scuffers · Hoodie
                  </div>
                  <div className="gdots" id="gdots">
                    <span className="on" />
                    <span />
                  </div>
                  <div className="pcurtains" id="pcurtains">
                    <span className="pc cl" />
                    <span className="pc cr" />
                  </div>
                </div>
                <div className="tabbar">
                  <div className="tab on">
                    <Shirt />
                    <span>Inicio</span>
                  </div>
                  <div className="tab">
                    <ShoppingBag />
                    <span>Mi armario</span>
                  </div>
                  <div className="gap" />
                  <div className="tab">
                    <Calendar />
                    <span>Hoy</span>
                  </div>
                  <div className="tab">
                    <Bookmark />
                    <span>Looks</span>
                  </div>
                  <div className="fab">
                    <Scan />
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
}
