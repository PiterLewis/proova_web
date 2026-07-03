import { BatteryFull, Bookmark, Calendar, Scan, Shirt, ShoppingBag, Wifi } from "lucide-react";

/** Celdas del mini-calendario (1..28; 20 marcado, 6 y 13 con punto) — como en el original. */
function CalCells() {
  return (
    <div className="cg" id="calCells">
      {Array.from({ length: 28 }, (_, idx) => {
        const i = idx + 1;
        const cls = i === 20 ? "d mark" : i === 6 || i === 13 ? "d dot" : "d";
        return (
          <div className={cls} key={i}>
            {i}
          </div>
        );
      })}
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="sec" id="how">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <span className="eyebrow">Cómo funciona</span>
          <h2>En tres pasos, y a vestir.</h2>
        </div>

        <div className="scrolly">
          <div className="scrolly-phone">
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

                <div style={{ position: "relative", flex: 1 }}>
                  {/* 1 · escanea */}
                  <div className="pscr on" id="scr0">
                    <div className="ptitle">Nueva prenda</div>
                    <div className="scanview">
                      <span className="corner tl" />
                      <span className="corner tr" />
                      <span className="corner bl" />
                      <span className="corner br" />
                      <span className="scanline" />
                      <img src="/assets/photos/scuffers-hoodie.png" alt="" style={{ width: 170, borderRadius: 12 }} />
                    </div>
                    <div className="shutter" />
                  </div>
                  {/* 2 · pruébate */}
                  <div className="pscr" id="scr1">
                    <div className="ptitle">Tu probador</div>
                    <div className="tryview">
                      <img className="tryphoto" src="/assets/photos/tryon-scuffers.png" alt="Así te queda el hoodie" />
                      <span className="harmony" style={{ marginBottom: 14 }}>
                        <span className="hdot" /> Muy armoniosa
                      </span>
                    </div>
                  </div>
                  {/* 3 · planifica */}
                  <div className="pscr" id="scr2">
                    <div className="ptitle">Hoy · enero</div>
                    <div className="calview">
                      <CalCells />
                      <div className="look">
                        <div className="th">
                          <img
                            src="/assets/photos/scuffers-hoodie.png"
                            alt=""
                            style={{ borderRadius: 8, maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
                          />
                        </div>
                        <div>
                          <div className="a">Look del día</div>
                          <div className="b">Última vez · hace 9 días</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tabbar">
                  <div className="tab on" id="ptab0">
                    <Shirt />
                    <span>Inicio</span>
                  </div>
                  <div className="tab" id="ptab1">
                    <ShoppingBag />
                    <span>Mi armario</span>
                  </div>
                  <div className="gap" />
                  <div className="tab" id="ptab2">
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
          </div>

          <div className="scrolly-steps" id="steps">
            <div className="sstep on">
              <div className="card">
                <span className="num">PASO 01</span>
                <h3>Escanea tus prendas</h3>
                <p>Haz una foto a lo que ya tienes. proova lo recorta, detecta la marca y lo guarda en tu armario.</p>
              </div>
            </div>
            <div className="sstep">
              <div className="card">
                <span className="num">PASO 02</span>
                <h3>Pruébate y combina</h3>
                <p>Móntate looks en el probador y mira cómo te quedan en tu cuerpo antes de salir de casa.</p>
              </div>
            </div>
            <div className="sstep">
              <div className="card">
                <span className="num">PASO 03</span>
                <h3>Guarda y planifica</h3>
                <p>Asigna looks a tus días, recuerda cuándo llevaste cada uno y haz la maleta en segundos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
