import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "proova — tu probador virtual con IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagen social (OpenGraph + Twitter) de marca: se muestra al compartir el enlace. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "84px",
          background:
            "radial-gradient(1100px 700px at 78% 18%, #F6DDE8 0%, transparent 60%), radial-gradient(900px 600px at 8% 96%, #F4D0A7 0%, transparent 62%), #F3EEE4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 40, fontWeight: 800, color: "#232220", letterSpacing: -1 }}>
          proova<span style={{ color: "#B12E6A" }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 34,
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: -3,
            lineHeight: 1.02,
            color: "#232220",
          }}
        >
          <span>Tu probador,</span>
          <span style={{ color: "#B12E6A" }}>en tu bolsillo.</span>
        </div>
        <div style={{ display: "flex", marginTop: 30, fontSize: 36, color: "#4A4843", fontWeight: 500 }}>
          Tu armario y probador virtual con IA.
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 46 }}>
          <div style={{ display: "flex", background: "#232220", color: "#fff", fontSize: 24, fontWeight: 600, padding: "12px 22px", borderRadius: 12 }}>
            App Store
          </div>
          <div style={{ display: "flex", background: "#232220", color: "#fff", fontSize: 24, fontWeight: 600, padding: "12px 22px", borderRadius: 12 }}>
            Google Play
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
