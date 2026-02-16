"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/layout/container";

const services = [
  {
    title: "Engagement",
    href: "/services/engagement",
    description:
      "Designing systems that activate intrinsic motivation and long-term participation."
  },
  {
    title: "Training",
    href: "/services/training",
    description:
      "Transforming learning into immersive journeys of progress and mastery."
  },
  {
    title: "Experience",
    href: "/services/experience",
    description:
      "Crafting meaningful human interactions through applied game design."
  }
];

export default function ServicesClient() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        {/* Hero */}
        <div className="max-w-4xl space-y-6 md:space-y-10">
          <h1 className="text-4xl font-semibold md:text-6xl">
            Our Services
          </h1>
          <p className="text-lg opacity-70 md:text-2xl">
            Game systems applied to real human challenges.
          </p>
        </div>

        {/* Mobile layout → Cards */}
        <div className="mt-16 grid gap-8 md:hidden">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="space-y-4 rounded-2xl border border-current/10 p-6 transition hover:border-[var(--accent)]"
            >
              <h2 className="text-2xl font-semibold">
                {service.title}
              </h2>

              <p className="text-sm opacity-70">
                {service.description}
              </p>

              <div className="h-px w-full bg-current/10" />
            </Link>
          ))}
        </div>

        {/* Desktop layout → Editorial */}
        <div className="mt-32 hidden space-y-40 md:block">
          {services.map((service) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link
                href={service.href}
                className="group block space-y-8"
              >
                <h2 className="text-5xl font-semibold transition-transform duration-300 group-hover:translate-x-4 md:text-6xl">
                  {service.title}
                </h2>

                <p className="max-w-2xl text-xl opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                  {service.description}
                </p>

                <div className="h-px w-full bg-current/10 transition-all duration-500 group-hover:bg-[var(--accent)]" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
