import Container from "@/components/layout/container";

export default function TeamPage() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="max-w-4xl space-y-12 md:space-y-16">
          <h1 className="text-4xl font-semibold md:text-6xl">
            Team
          </h1>

          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="space-y-3">
              <div className="text-xl font-medium md:text-2xl">
                Founder & Game Systems Architect
              </div>
              <p className="text-sm opacity-70 md:text-base">
                Designing systemic motivation frameworks
                for organizations and institutions.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xl font-medium md:text-2xl">
                Experience Designer
              </div>
              <p className="text-sm opacity-70 md:text-base">
                Crafting collaborative journeys and
                meaningful interaction design.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
