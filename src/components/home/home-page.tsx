"use client";

import BackgroundGrid from "./background-grid";
import HeroSection from "./hero-section";
import MissionSection from "./mission-section";
import ValueSection from "./value-section";
import CtaSection from "./cta-section";
import SiteLayout from "@/components/layout/site-layout";

export default function HomePage() {
  return (
    <SiteLayout>
      <main className="relative overflow-hidden">
        <BackgroundGrid />
        <HeroSection />
        <MissionSection />
        <ValueSection />
        <CtaSection />
      </main>
    </SiteLayout>
  );
}
