import { StoreBadges } from "./StoreBadges";

export function FinalCTA() {
  return (
    <section className="sec final" id="download">
      <img className="spark a" src="/assets/spot/sparkle.svg" alt="" />
      <img className="spark b" src="/assets/spot/sparkle.svg" alt="" />
      <div className="wrap">
        <span className="provi-wrap" data-reveal>
          <img className="provi-final" src="/assets/mascot/provi.svg" alt="Provi" />
        </span>
        <h2 data-reveal>Tu probador, en tu bolsillo </h2>
        <div className="cta-row" data-reveal>
          <StoreBadges href="#" />
        </div>
      </div>
    </section>
  );
}
