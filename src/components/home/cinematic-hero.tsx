"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

interface Props {
  onHeroExit?: () => void;
}

export default function CinematicHero({ onHeroExit }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.15, 1],
    [0, 20, -150]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0.65, 1],
    [1, 0]
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v > 0.2 && onHeroExit) {
        onHeroExit();
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, onHeroExit]);

  return (
    <section ref={ref} className="relative h-[180vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center">

        <motion.div
          style={{ y, opacity }}
          className="text-center px-6"
        >
          <h1 className="text-6xl font-semibold leading-tight text-white">
            Transforming work into a more creative,
            collaborative,
            <span className="text-[var(--accent)]"> meaningful </span>
            adventure.
          </h1>

          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
            Game systems applied to real human challenges —
            engagement, learning, and experience design.
          </p>
        </motion.div>

      </div>
    </section>
  );
}