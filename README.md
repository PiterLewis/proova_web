# proova — web

Landing de marketing de Proova + páginas legales. **Next.js 16 (App Router) + React 19 + TypeScript.**

Port FIEL del diseño `Proova Design System-3/ui_kits/website/index.html`: cortinas de probador,
costura del titular, física de perchas (péndulo amortiguado), parallax 3D con profundidad al cursor,
scrollytelling, maleta que se hace sola, y reduced-motion respetado.

## Estructura
- `app/globals.css` + `app/tokens.css` — tokens del DS + CSS portado 1:1 (mismos nombres de clase
  y `@keyframes` que el diseño, para fidelidad).
- `lib/useLandingMotion.ts` — hook cliente que reproduce el `<script>` original (progreso, nav,
  reveals, física de perchas, scrollytelling, parallax + tilt 3D, carrusel de cortinas). Se limpia
  al desmontar; se apaga con `prefers-reduced-motion`.
- `components/*` — cada sección + `StoreBadges`, `LegalShell`.
- `app/page.tsx` — compone la landing y activa el hook.
- `app/privacidad/`, `app/terminos/` — páginas legales (coherentes con la app real).
- `public/assets/` — SVG/PNG del design system.

## Desarrollo
    npm install
    npm run dev     # http://localhost:3000
    npm run build   # build estático (3 rutas prerenderizan)

## Notas
- Imágenes con `<img>` a propósito (sprites absolutos + parallax/tilt sobre transform).
- Fuente Hanken Grotesk vía next/font/google.
- Verificado en Chromium headless (hero, features, how, travel, privacy, final, legal).
