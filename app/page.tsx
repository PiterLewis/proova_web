"use client";

import { Features } from "@/components/Features";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Marquee } from "@/components/Marquee";
import { Nav } from "@/components/Nav";
import { PrivacyBand } from "@/components/PrivacyBand";
import { SiteFooter } from "@/components/SiteFooter";
import { TravelBand } from "@/components/TravelBand";
import { useLandingMotion } from "@/lib/useLandingMotion";

export default function Home() {
  useLandingMotion();
  return (
    <>
      <div className="progress" id="progress" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <HowItWorks />
        <TravelBand />
        <PrivacyBand />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
