"use client";

import CinematicHero from "@/components/home/cinematic-hero";
import EnisaSection from "@/components/home/enisa-section";
import EcosystemLogos from "@/components/home/ecosystem-logos";

export default function HomePage() {
  return (
    <div className="relative">
      <CinematicHero />

      {/* Extensión de scroll para recorrer más fondo */}
      <div className="h-[120vh]" />

      {/* Contenido principal (placeholder, lo refinamos luego) */}
      <section className="min-h-screen px-10 py-40 text-white">
        <h2 className="text-4xl font-semibold mb-10">Why Numen</h2>

        <div className="space-y-8 text-xl max-w-3xl text-white/90">
          <p>Gamification applied to real work</p>
          <p>Human-centered collaboration</p>
          <p>Meaningful progress tracking</p>
        </div>
      </section>

      {/* ENISA y carrusel al final, full-bleed */}
      <EnisaSection />

      <div className="h-6 sm:h-8" />

      <EcosystemLogos />
    </div>
  );
}