"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl">
      <div className="relative w-[95%] max-w-6xl rounded-2xl bg-[var(--background)] p-6 md:p-10 shadow-2xl">

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-6 top-6 rounded-full border border-current/20 p-2 opacity-70 transition hover:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="grid gap-10 md:grid-cols-2">

          {/* Animated Image */}
          <motion.div
            initial={{ scale: 1, rotate: 0 }}
            animate={{
              scale: [1, 1.03, 1],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative overflow-hidden rounded-xl border border-white/10"
          >
            <Image
              src="/contact-img.png"
              alt="Contact visual"
              width={800}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
          </motion.div>

          {/* Form Side */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl font-semibold">
              Turn your vision into reality
            </h2>

            <p className="opacity-70">
              Tell us about your project and we&apos;ll help you find the right match.
            </p>

            <form className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="First name"
                  className="rounded-lg border border-white/10 bg-white/5 px-5 py-4 outline-none"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="rounded-lg border border-white/10 bg-white/5 px-5 py-4 outline-none"
                />
              </div>

              <input
                type="email"
                placeholder="Work email"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-5 py-4 outline-none"
              />

              <textarea
                placeholder="Tell us more about your project..."
                className="h-32 w-full rounded-lg border border-white/10 bg-white/5 px-5 py-4 outline-none"
              />

              <button
                type="submit"
                className="mt-4 rounded-lg bg-[var(--accent)] px-6 py-4 font-medium text-black transition hover:opacity-80"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
