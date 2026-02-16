"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const nextLocale = locale === "en" ? "es" : "en";

  const handleChange = () => {
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/`;
    router.refresh();
  };

  return (
    <button
      onClick={handleChange}
      className="rounded-full border border-current px-5 py-2 text-sm transition-opacity hover:opacity-70"
    >
      {nextLocale.toUpperCase()}
    </button>
  );
}
