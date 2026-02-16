import { useTranslations } from "next-intl";

export default function ValueSection() {
  const t = useTranslations("home");

  return (
    <section className="relative min-h-[80vh] px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-4xl font-semibold md:text-5xl">
          {t("valueTitle")}
        </h2>

        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4 text-center">
            <div className="text-2xl font-medium">{t("value1")}</div>
          </div>

          <div className="space-y-4 text-center">
            <div className="text-2xl font-medium">{t("value2")}</div>
          </div>

          <div className="space-y-4 text-center">
            <div className="text-2xl font-medium">{t("value3")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
