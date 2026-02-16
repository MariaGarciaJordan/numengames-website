import Container from "@/components/layout/container";
import Link from "next/link";

const tiers = [
  {
    name: "Tiers 1",
    price: "Starting at 3.895€",
    features: [
      "Navigable mini-universe",
      "Basic 2D → 3D conversion",
      "Adapted visual identity",
      "Fast delivery",
      "Ideal for testing the metaverse"
    ]
  },
  {
    name: "Tiers 2",
    price: "Starting at 7.895€",
    features: [
      "100% custom design",
      "Narrative + art + interaction",
      "Multimedia integration",
      "Full immersive experience",
      "Ideal for brands seeking differentiation"
    ],
    highlight: true
  },
  {
    name: "Tiers 3",
    price: "Starting at 14.895€",
    features: [
      "Persistent and scalable world",
      "Gamification",
      "Events, rooms and missions",
      "Custom visual identity and architecture",
      "Ideal for brands wanting their own world"
    ]
  }
];

export default function PricingPage() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        {/* Hero */}
        <div className="max-w-4xl space-y-6 md:space-y-10">
          <h1 className="text-4xl font-semibold md:text-6xl">
            Find the right plan
            <br />
            for your needs
          </h1>
        </div>

        {/* Mobile layout */}
        <div className="mt-16 grid gap-8 md:hidden">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`space-y-6 rounded-2xl border p-6 ${
                tier.highlight
                  ? "border-[var(--accent)]"
                  : "border-current/10"
              }`}
            >
              <div className="space-y-2">
                <div className="text-sm opacity-60">
                  {tier.name}
                </div>
                <div className="text-2xl font-semibold">
                  {tier.price}
                </div>
              </div>

              <ul className="space-y-3 text-sm opacity-80">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-block rounded-full border border-[var(--accent)] px-4 py-2 text-sm transition hover:bg-[var(--accent)] hover:text-black"
              >
                Contact
              </Link>
            </div>
          ))}
        </div>

        {/* Desktop layout */}
        <div className="mt-28 hidden gap-12 md:grid md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col justify-between border p-12 ${
                tier.highlight
                  ? "border-[var(--accent)]"
                  : "border-current/10"
              }`}
            >
              <div className="space-y-10">
                <div>
                  <div className="text-lg opacity-60">
                    {tier.name}
                  </div>
                  <div className="mt-4 text-3xl font-semibold">
                    {tier.price}
                  </div>
                </div>

                <ul className="space-y-4 text-base opacity-80">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="mt-16 inline-block border border-[var(--accent)] px-6 py-3 text-sm transition hover:bg-[var(--accent)] hover:text-black"
              >
                Contact →
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
