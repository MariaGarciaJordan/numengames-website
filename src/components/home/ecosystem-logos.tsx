"use client";

const LOGOS = [
  { src: "/logos/active-inference-logo.png", alt: "Active Inference" },
  { src: "/logos/adigital-logo.png", alt: "Adigital" },
  { src: "/logos/art-unchained-logo.png", alt: "Art Unchained" },
  { src: "/logos/ath21-logo.png", alt: "ATH21" },
  { src: "/logos/github-mark.png", alt: "GitHub" },
  { src: "/logos/hyperfy-logo.png", alt: "Hyperfy" },
  { src: "/logos/reset-logo.png", alt: "Reset" },
  { src: "/logos/spacedata-logo.png", alt: "SpaceData" },
];

export default function EcosystemLogos() {
  const items = [...LOGOS, ...LOGOS];

  return (
    <section className="w-full">
      <div className="w-full bg-black/55 backdrop-blur-md border-y border-white/10 py-10 sm:py-12 overflow-hidden">
        <div className="mb-10 text-center">
          <h2 className="text-xs uppercase tracking-[0.3em] text-white/60">
            Working with ecosystem leaders
          </h2>
        </div>

        <div className="relative">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-black/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-black/80 to-transparent" />

          {/* Marquee */}
          <div className="marquee group cursor-grab active:cursor-grabbing">
            <div className="marquee__track">
              {items.map((logo, index) => (
                <div key={`${logo.src}-${index}`} className="marquee__item">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className="h-10 sm:h-12 md:h-14 w-auto opacity-90 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .marquee {
            overflow: hidden;
            width: 100%;
            user-select: none;
          }

          .marquee__track {
            display: flex;
            gap: 3.5rem;
            width: max-content;
            padding: 0 2rem;
            animation: marquee 40s linear infinite;
            will-change: transform;
          }

          /* Interacción: pausa al hover */
          .group:hover .marquee__track {
            animation-play-state: paused;
          }

          .marquee__item {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 140px;
          }

          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}