import { Apple, Play } from "lucide-react";

/** Los dos badges de descarga (App Store + Google Play), idénticos al diseño. */
export function StoreBadges({ href = "#download" }: { href?: string }) {
  return (
    <>
      <a href={href} className="store">
        <Apple />
        <span>
          <span className="s-sm">Descárgala en</span>
          <br />
          <span className="s-lg">App Store</span>
        </span>
      </a>
      <a href={href} className="store">
        <Play />
        <span>
          <span className="s-sm">Disponible en</span>
          <br />
          <span className="s-lg">Google Play</span>
        </span>
      </a>
    </>
  );
}
