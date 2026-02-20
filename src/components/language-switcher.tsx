"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

type Locale = "en" | "es";

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();

  const nextLocale: Locale = locale === "en" ? "es" : "en";

  const handleChange = () => {
   
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  };

  return (
    <button
      onClick={handleChange}
      className="rounded-full border border-current px-5 py-2 text-sm transition-opacity hover:opacity-70"
      type="button"
      aria-label="Switch language"
    >
      {nextLocale.toUpperCase()}
    </button>
  );
}
