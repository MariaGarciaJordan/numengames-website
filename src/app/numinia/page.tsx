"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/container";

export default function NuminiaPage() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-[var(--color-dark)] py-40 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl space-y-10"
        >
          <h1 className="text-6xl font-semibold md:text-7xl">
            Numinia
          </h1>

          <p className="text-2xl opacity-60">
            A world in construction.
          </p>
        </motion.div>

        <div className="mt-40 max-w-3xl space-y-10 text-xl leading-relaxed opacity-80">
          <p>
            In Numinia, systems are not imposed.
            They are discovered.
          </p>

          <p>
            It is a universe shaped by missions,
            evolving worlds and collective progression.
          </p>

          <p>
            What begins as an idea becomes a world.
          </p>
        </div>

        <div className="mt-40 max-w-4xl border border-white/10 p-20 text-center opacity-60">
          Video coming soon
        </div>

        <div className="mt-32 text-sm opacity-40">
          In development · 2026
        </div>
      </Container>
    </section>
  );
}
