"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(form);
    onClose();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-4 md:inset-16 bg-[var(--background)] rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="flex h-full flex-col md:flex-row">

              {/* IMAGE SIDE */}
              <div className="relative hidden md:block md:w-1/2 overflow-hidden">

                {/* Base image */}
                <Image
                  src="/contact-img.png"
                  alt="Numen visual"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Subtle floating movement */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Moving light */}
                <motion.div
                  className="pointer-events-none absolute inset-0"
                  animate={{
                    backgroundPosition: [
                      "0% 50%",
                      "100% 50%",
                      "0% 50%"
                    ]
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08), transparent 60%)",
                    backgroundSize: "200% 200%"
                  }}
                />

                {/* Grain texture */}
                <motion.div
                  className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-20"
                  animate={{ opacity: [0.15, 0.25, 0.15] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    backgroundImage:
                      "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"2\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%\" height=\"100%\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')"
                  }}
                />

              </div>

              {/* FORM SIDE */}
              <div className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-16">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-3xl font-semibold">
                      Turn your vision into reality
                    </h2>
                    <p className="mt-2 opacity-70">
                      Tell us about your project.
                    </p>
                  </div>

                  <button
                    onClick={onClose}
                    className="text-2xl opacity-60 hover:opacity-100"
                  >
                    ✕
                  </button>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-10 space-y-6"
                >
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={form.firstName}
                      onChange={handleChange}
                      className="border border-current/20 bg-transparent p-3 outline-none focus:border-[var(--accent)]"
                    />

                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={form.lastName}
                      onChange={handleChange}
                      className="border border-current/20 bg-transparent p-3 outline-none focus:border-[var(--accent)]"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Work email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-current/20 bg-transparent p-3 outline-none focus:border-[var(--accent)]"
                  />

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="What do you want to build?"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-current/20 bg-transparent p-3 outline-none focus:border-[var(--accent)]"
                  />

                  <button
                    type="submit"
                    className="rounded-full bg-[var(--accent)] px-6 py-3 text-black transition hover:scale-105"
                  >
                    Submit
                  </button>
                </form>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
