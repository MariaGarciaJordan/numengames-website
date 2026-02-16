"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("home");

  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
      <motion.div style={{ y, opacity }} className="max-w-4xl">
        <h1 className="text-6xl font-semibold leading-[1.05] md:text-8xl">
          {t("hero")}
        </h1>
      </motion.div>
    </section>
  );
}
