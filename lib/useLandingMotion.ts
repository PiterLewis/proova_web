"use client";

import { useEffect } from "react";

/**
 * Port FIEL del <script> de la landing original (ui_kits/website/index.html): un único efecto que,
 * al montar, cablea todo el comportamiento — barra de progreso, nav que se oculta al bajar, reveals
 * al entrar en viewport, arranque de la física de perchas, scrollytelling que gobierna el móvil
 * sticky, parallax al scroll + profundidad al cursor + tilt 3D del móvil, y el carrusel de cortinas
 * del hero. Se limpia (listeners + rAF + intervalos) al desmontar. Se apaga con reduced-motion.
 */
export function useLandingMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const q = <T extends Element>(sel: string) => [...document.querySelectorAll<T>(sel)];
    const byId = (id: string) => document.getElementById(id);

    // ---- carrusel del hero: cortinas se cierran → cambia prenda → se abren ----
    const gimgs = q<HTMLImageElement>("#gstack img");
    const gdots = q<HTMLSpanElement>("#gdots span");
    const gbrand = byId("gbrand");
    const gnames = ["Scuffers · Hoodie", "Así te queda"];
    const curt = byId("pcurtains");
    const gchip = byId("gchip");
    let gi = 0;
    let carouselTimer: ReturnType<typeof setInterval> | null = null;
    if (!reduced && curt && gimgs.length) {
      carouselTimer = setInterval(() => {
        curt.classList.add("closed");
        window.setTimeout(() => {
          gi = (gi + 1) % gimgs.length;
          gimgs.forEach((im, k) => im.classList.toggle("on", k === gi));
          gdots.forEach((d, k) => d.classList.toggle("on", k === gi));
          if (gbrand) gbrand.textContent = gnames[gi] ?? "";
          gchip?.classList.toggle("show", gi === 1);
          curt.classList.remove("closed");
        }, 620);
      }, 4200);
    }

    // ---- reveals (delay escalonado entre hermanos) ----
    const els = q<HTMLElement>("[data-reveal]");
    els.forEach((el) => {
      const sibs = [...(el.parentElement?.querySelectorAll<HTMLElement>(":scope > [data-reveal]") ?? [])];
      el.style.animationDelay = Math.max(0, sibs.indexOf(el)) * 70 + "ms";
    });
    const show = (el: HTMLElement) => {
      el.dataset.shown = "1";
      el.classList.add("in");
    };

    // ---- refs de scroll ----
    const plxEls = q<HTMLElement>("[data-plx]");
    const railx = byId("railx");
    const hangs = q<HTMLElement>(".rhang");
    let railT0: number | null = null;
    const nav = byId("nav");
    const progress = byId("progress");
    const steps = q<HTMLElement>(".sstep");
    const scrs = [byId("scr0"), byId("scr1"), byId("scr2")];
    const ptabs = [byId("ptab0"), byId("ptab1"), byId("ptab2")];
    let lastY = 0;

    function onScroll() {
      const y = window.scrollY || 0;
      const vh = window.innerHeight || 800;
      const doc = document.documentElement.scrollHeight - vh;

      if (progress) progress.style.width = (doc > 0 ? Math.min(100, (y / doc) * 100) : 0) + "%";

      if (nav) {
        nav.classList.toggle("scrolled", y > 8);
        nav.classList.toggle("hidden", y > 320 && y > lastY + 4);
        if (y < lastY - 4 || y <= 320) nav.classList.remove("hidden");
      }
      lastY = y;

      for (const el of els) {
        if (el.dataset.shown) continue;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) show(el);
      }

      if (railT0 === null && railx) {
        const r = railx.getBoundingClientRect();
        if (r.top < vh * 0.82 && r.bottom > 0) railT0 = performance.now();
      }

      if (steps.length) {
        let active = 0;
        steps.forEach((s, i) => {
          const r = s.getBoundingClientRect();
          if (r.top < vh * 0.55) active = i;
        });
        steps.forEach((s, i) => s.classList.toggle("on", i === active));
        scrs.forEach((s, i) => s && s.classList.toggle("on", i === active));
        ptabs.forEach((t, i) => t && t.classList.toggle("on", i === active));
      }
    }

    const scrollHandler = () => requestAnimationFrame(onScroll);
    window.addEventListener("scroll", scrollHandler, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    const t1 = window.setTimeout(onScroll, 250);

    // ---- loop continuo: parallax + profundidad al cursor + tilt 3D + física de perchas ----
    const stage = document.querySelector<HTMLElement>(".stage");
    let tgx = 0,
      tgy = 0,
      hmx = 0,
      hmy = 0;
    const onMove = (e: MouseEvent) => {
      if (!stage) return;
      const r = stage.getBoundingClientRect();
      tgx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      tgy = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    const onLeave = () => {
      tgx = 0;
      tgy = 0;
    };
    stage?.addEventListener("mousemove", onMove);
    stage?.addEventListener("mouseleave", onLeave);

    let raf = 0;
    function motion(now: number) {
      if (!reduced) {
        const vh = window.innerHeight || 800;
        hmx += (tgx - hmx) * 0.07;
        hmy += (tgy - hmy) * 0.07;

        for (const el of plxEls) {
          const r = el.getBoundingClientRect();
          const mid = r.top + r.height / 2 - vh / 2;
          let t = "translateY(" + (mid * -parseFloat(el.dataset.plx || "0")).toFixed(1) + "px)";
          const md = parseFloat(el.dataset.mdepth || "0");
          if (md) t += " translate(" + (hmx * 26 * md).toFixed(1) + "px, " + (hmy * 18 * md).toFixed(1) + "px)";
          if (el.dataset.tilt !== undefined)
            t += " perspective(900px) rotateY(" + (hmx * 6).toFixed(2) + "deg) rotateX(" + (-hmy * 5).toFixed(2) + "deg)";
          el.style.transform = t;
        }

        if (railT0 !== null) {
          hangs.forEach((h, i) => {
            const t = (now - railT0!) / 1000 - i * 0.14;
            if (t < 0) {
              h.style.transform = "translateY(-220px)";
              return;
            }
            let yy = 0,
              a = 0;
            if (t < 0.5) {
              const p = t / 0.5;
              yy = -220 * (1 - p * p);
            } else {
              const tp = t - 0.5;
              a =
                22 * Math.exp(-1.05 * tp) * Math.cos(5 * tp) +
                1.7 * (1 - Math.exp(-0.4 * tp)) * Math.sin(1.1 * tp + i * 1.3);
            }
            h.style.transform = "translateY(" + yy.toFixed(1) + "px) rotate(" + a.toFixed(2) + "deg)";
          });
        }
      }
      raf = requestAnimationFrame(motion);
    }
    raf = requestAnimationFrame(motion);

    // red de seguridad para los reveals (por si el scroll no dispara en previews escaladas)
    const t2 = window.setTimeout(() => els.forEach(show), 900);
    const t3 = window.setTimeout(
      () =>
        els.forEach((el) => {
          el.style.setProperty("opacity", "1", "important");
          el.style.setProperty("transform", "none", "important");
        }),
      1300,
    );

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", onScroll);
      stage?.removeEventListener("mousemove", onMove);
      stage?.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
      if (carouselTimer) clearInterval(carouselTimer);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);
}
