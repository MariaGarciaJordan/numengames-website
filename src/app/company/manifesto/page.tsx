import Container from "@/components/layout/container";

export default function ManifestoPage() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-3xl space-y-8 md:space-y-12">
          <h1 className="text-4xl font-semibold md:text-6xl">
            Manifesto
          </h1>

          <p className="text-lg leading-relaxed opacity-80 md:text-xl">
            We reject the idea that work must be mechanical,
            transactional or disengaging.
          </p>

          <p className="text-lg leading-relaxed opacity-80 md:text-xl">
            Game systems are not entertainment layers.
            They are structural frameworks that shape behavior,
            collaboration and purpose.
          </p>

          <p className="text-lg leading-relaxed opacity-80 md:text-xl">
            We design systems where progress is visible,
            participation is voluntary and meaning is embedded.
          </p>
        </div>
      </Container>
    </section>
  );
}
