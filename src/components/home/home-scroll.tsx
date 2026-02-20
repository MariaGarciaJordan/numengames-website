"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/layout/container";

export default function HomeScroll() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Este scroll progress se calcula SOLO respecto a este bloque
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end end"],
  });

  // HERO: se mueve muy lento (parallax suave) y hace un “cine” discreto
  const heroY = useTransform(scrollYProgress, [0, 0.6], ["0%", "18%"]);
  const heroScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.06]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Panel 1 aparece a mitad del recorrido
  const panel1Opacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  const panel1Y = useTransform(scrollYProgress, [0.25, 0.45], ["20px", "0px"]);

  // Panel 2 aparece más abajo
  const panel2Opacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const panel2Y = useTransform(scrollYProgress, [0.55, 0.75], ["20px", "0px"]);

  return (
    <div ref={rootRef} className="relative">
      {/* 220vh para que haya recorrido suficiente */}
      <section className="relative h-[220vh] overflow-hidden">
        {/* HERO sticky */}
        <div className="sticky top-0 h-screen">
          {/* Fondo “cinematográfico” simple (sin assets) */}
          <div className="absolute inset-0">
            <motion.div
              style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
              className="absolute inset-0"
            >
              {/* Capa base */}
              <div className="absolute inset-0 bg-[var(--background)]" />

              {/* Gradientes / atmósfera */}
              <div className="absolute inset-0 opacity-70 [background:radial-gradient(900px_500px_at_25%_30%,rgba(0,173,181,0.16),transparent_55%),radial-gradient(900px_500px_at_70%_40%,rgba(229,168,63,0.12),transparent_60%)]" />

              {/* Viñeteado */}
              <div className="absolute inset-0 opacity-80 [background:radial-gradient(1200px_700px_at_50%_50%,transparent_40%,rgba(0,0,0,0.35)_100%)] dark:opacity-90" />
            </motion.div>
          </div>

          <Container className="relative flex h-full items-center">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                className="text-sm tracking-[0.35em] opacity-70"
              >
                NUMEN GAMES
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                className="mt-6 text-5xl font-semibold leading-[1.02] md:text-7xl"
              >
                Transforming work into a more creative, collaborative,
                <span className="text-[var(--accent)]"> meaningful</span> adventure.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                className="mt-8 max-w-2xl text-lg opacity-70 md:text-xl"
              >
                Game systems applied to real human challenges — engagement, learning,
                and experience design.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
                className="mt-10 flex flex-wrap gap-3"
              >
                <a
                  href="/services"
                  className="rounded-full border border-current/15 px-6 py-3 text-sm transition hover:opacity-80"
                >
                  Explore services
                </a>
                <a
                  href="/pricing"
                  className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  See pricing
                </a>
              </motion.div>
            </div>
          </Container>
        </div>
      </section>

      {/* Paneles (mini-C): entran conforme bajas */}
      <section className="relative -mt-[35vh] pb-28">
        <Container>
          <motion.div
            style={{ opacity: panel1Opacity, y: panel1Y }}
            className="rounded-3xl border border-current/10 bg-[var(--background)]/75 p-8 backdrop-blur-md md:p-12"
          >
            <p className="text-sm tracking-[0.35em] opacity-70">WHY NUMEN</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Clarity, progress, motivation.
            </h2>
            <p className="mt-6 max-w-3xl text-lg opacity-70">
              We design systems that make collaboration feel natural — with structure,
              feedback, and meaning built in.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                "Gamification applied to real work",
                "Human-centered collaboration",
                "Meaningful progress tracking",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-current/10 bg-white/5 p-5"
                >
                  <p className="text-base font-medium">{t}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="relative pb-24">
        <Container>
          <motion.div
            style={{ opacity: panel2Opacity, y: panel2Y }}
            className="rounded-3xl border border-current/10 bg-[var(--background)]/75 p-8 backdrop-blur-md md:p-12"
          >
            <p className="text-sm tracking-[0.35em] opacity-70">NEXT</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Start with one service — scale later.
            </h2>
            <p className="mt-6 max-w-3xl text-lg opacity-70">
              Engagement, Training, and Experience can stand alone or combine into a
              premium ecosystem.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="/services"
                className="rounded-full border border-current/15 px-6 py-3 text-sm transition hover:opacity-80"
              >
                Services
              </a>
              <a
                href="/company"
                className="rounded-full border border-current/15 px-6 py-3 text-sm transition hover:opacity-80"
              >
                Company
              </a>
              <a
                href="/numinia"
                className="rounded-full border border-[var(--accent)] px-6 py-3 text-sm transition hover:opacity-80"
              >
                Numinia
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
