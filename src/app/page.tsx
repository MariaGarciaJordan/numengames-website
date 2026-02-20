"use client";

export default function HomePage() {
  return (
    <div className="relative">

      {/* HERO CONTENT */}
      <section className="min-h-[120vh] px-10 pt-40">
        <div className="max-w-5xl">
          <h1 className="text-6xl font-semibold leading-tight text-white">
            Transforming work into a more creative,
            collaborative,
            <span className="text-[var(--accent)]"> meaningful </span>
            adventure.
          </h1>

          <p className="mt-6 text-xl text-white/80 max-w-2xl">
            Game systems applied to real human challenges —
            engagement, learning, and experience design.
          </p>

          <div className="mt-10 flex gap-6">
            <button className="rounded-full border border-white px-6 py-3 text-white transition hover:opacity-70">
              Explore services
            </button>

            <button className="rounded-full bg-[var(--accent)] px-6 py-3 text-black transition hover:scale-105">
              See pricing
            </button>
          </div>
        </div>
      </section>

      {/* CONTENIDO EXTENDIDO PARA QUE LA IMAGEN SE VEA COMPLETA */}
      <section className="min-h-[200vh] px-10 py-40">
        <h2 className="text-4xl font-semibold mb-10 text-white">
          Why Numen
        </h2>

        <div className="space-y-8 text-xl max-w-3xl text-white/90">
          <p>Gamification applied to real work</p>
          <p>Human-centered collaboration</p>
          <p>Meaningful progress tracking</p>
        </div>
      </section>

    </div>
  );
}