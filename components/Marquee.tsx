const BRANDS = [
  "Uniqlo",
  "Levi's",
  "Zara",
  "Mango",
  "H&M",
  "COS",
  "Massimo Dutti",
  "Bershka",
  "Pull&Bear",
  "Stradivarius",
  "Nike",
  "Adidas",
];

export function Marquee() {
  // Se duplica la lista para el bucle sin costura (el original lo hacía en JS).
  const loop = [...BRANDS, ...BRANDS];
  return (
    <section className="marquee-sec">
      <div className="lbl" data-reveal>
        Toda la ropa que ya tienes, en un sitio
      </div>
      <div className="marquee" data-reveal>
        <div className="mq-track" id="mqtrack">
          {loop.map((b, i) => (
            <span className="brand-chip" key={`${b}-${i}`}>
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
