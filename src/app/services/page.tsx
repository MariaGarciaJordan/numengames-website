"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/layout/container";
import { fadeIn, slideUp } from "@/lib/motion";

const services = [
  {
    title: "Engagement",
    href: "/services/engagement",
    description:
      "Designing systems that activate intrinsic motivation and long-term participation.",
  },
  {
    title: "Training",
    href: "/services/training",
    description:
      "Transforming learning into immersive journeys of progress and mastery.",
  },
  {
    title: "Experience",
    href: "/services/experience",
    description:
      "Crafting meaningful human interactions through applied game design.",
  },
];

export default function ServicesPage() {
  return (
    <motion.section
      className="relative overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
    >
      {/* Hero */}
      <Container>
        <motion.div
          className="py-32"
          variants={slideUp}
        >
          <h1 className="text-6xl font-semibold md:text-7xl">
            Our Services
          </h1>

          <p className="mt-6 max-w-2xl text-xl opacity-70">
            Game systems applied to real human challenges.
          </p>
        </motion.div>
      </Container>

      {/* Services List */}
      <div className="space-y-40 pb-40">
        {services.map((service) => (
          <motion.div
            key={service.href}
            variants={slideUp}
            viewport={{ once: true }}
            initial="initial"
            whileInView="animate"
          >
            <Container>
              <Link
                href={service.href}
                className="group block space-y-8"
              >
                <h2 className="text-5xl font-semibold transition-transform duration-500 group-hover:translate-x-4 md:text-6xl">
                  {service.title}
                </h2>

                <p className="max-w-2xl text-xl opacity-70 transition-opacity duration-500 group-hover:opacity-100">
                  {service.description}
                </p>

                <div className="h-px w-full bg-current/10 transition-all duration-700 group-hover:bg-current/40" />
              </Link>
            </Container>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
