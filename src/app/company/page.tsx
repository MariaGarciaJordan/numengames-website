import Link from "next/link";
import Container from "@/components/layout/container";

export default function CompanyPage() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="max-w-4xl space-y-6 md:space-y-10">
          <h1 className="text-4xl font-semibold md:text-6xl">
            Company
          </h1>

          <p className="text-lg opacity-70 md:text-2xl">
            We believe work should feel meaningful,
            collaborative and intrinsically motivating.
          </p>
        </div>

        {/* Mobile layout */}
        <div className="mt-16 grid gap-6 md:hidden">
          <Link
            href="/company/manifesto"
            className="space-y-3 rounded-2xl border border-current/10 p-6 transition hover:border-[var(--accent)]"
          >
            <h2 className="text-xl font-semibold">
              Manifesto
            </h2>
            <p className="text-sm opacity-70">
              Our philosophy on game systems,
              human motivation and the future of work.
            </p>
          </Link>

          <Link
            href="/company/team"
            className="space-y-3 rounded-2xl border border-current/10 p-6 transition hover:border-[var(--accent)]"
          >
            <h2 className="text-xl font-semibold">
              Team
            </h2>
            <p className="text-sm opacity-70">
              Designers, strategists and technologists
              building meaningful systems.
            </p>
          </Link>
        </div>

        {/* Desktop layout */}
        <div className="mt-24 hidden gap-12 md:grid md:grid-cols-2">
          <Link
            href="/company/manifesto"
            className="group space-y-6 border border-current/10 p-12 transition hover:border-[var(--accent)]"
          >
            <h2 className="text-3xl font-medium transition-transform group-hover:translate-x-2">
              Manifesto
            </h2>
            <p className="opacity-70">
              Our philosophy on game systems,
              human motivation and the future of work.
            </p>
          </Link>

          <Link
            href="/company/team"
            className="group space-y-6 border border-current/10 p-12 transition hover:border-[var(--accent)]"
          >
            <h2 className="text-3xl font-medium transition-transform group-hover:translate-x-2">
              Team
            </h2>
            <p className="opacity-70">
              Designers, strategists and technologists
              building meaningful systems.
            </p>
          </Link>
        </div>
      </Container>
    </section>
  );
}
