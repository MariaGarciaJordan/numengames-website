import { useTranslations } from "next-intl";

export default function MissionSection() {
  const t = useTranslations("home");

  return (
    <section className="relative min-h-[120vh] px-6 pb-40 pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-2xl leading-relaxed opacity-80 md:text-3xl">
          {t("mission")}
        </p>
      </div>
    </section>
  );
}
