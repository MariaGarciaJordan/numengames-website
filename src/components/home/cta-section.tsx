import { useTranslations } from "next-intl";

export default function CtaSection() {
  const t = useTranslations("home");

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center px-6 py-32 text-center">
      <div className="space-y-10">
        <h2 className="text-4xl font-semibold md:text-5xl">
          {t("cta")}
        </h2>

        <button className="rounded-full bg-[var(--color-sky)] px-10 py-4 text-lg text-black transition-transform hover:scale-105">
          Get Early Access
        </button>
      </div>
    </section>
  );
}
