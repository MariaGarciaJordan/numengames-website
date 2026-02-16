"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/theme-provider";
import LanguageSwitcher from "@/components/language-switcher";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: Props) {
  const { toggle } = useTheme();

  const links = [
    { label: "Services", href: "/services" },
    { label: "Company", href: "/company" },
    { label: "Pricing", href: "/pricing" },
    { label: "Numinia", href: "/numinia" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-[var(--background)] flex flex-col justify-between p-12"
        >
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold">
              Menu
            </div>

            <button
              onClick={onClose}
              className="text-2xl"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col gap-12 text-4xl font-semibold">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="transition-opacity hover:opacity-60"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={onClose}
              className="mt-8 text-[var(--accent)]"
            >
              Talk to us
            </Link>
          </nav>

          <div className="flex items-center justify-between">
            <LanguageSwitcher />

            <button
              onClick={toggle}
              className="border border-current px-4 py-2 text-sm"
            >
              Theme
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
