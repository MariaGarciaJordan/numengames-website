import Container from "./container";

export default function PageTemplate({
  title,
  description
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="min-h-[60vh] py-32">
      <Container>
        <div className="max-w-3xl space-y-8">
          <h1 className="text-5xl font-semibold md:text-6xl">
            {title}
          </h1>

          {description && (
            <p className="text-xl opacity-70">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
