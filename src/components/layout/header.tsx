"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "./container";
import LanguageSwitcher from "@/components/language-switcher";
import { useTheme } from "@/context/theme-provider";
import MobileMenu from "./mobile-menu";
import ContactModal from "./contact-modal";

const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" }
];

export default function Header() {
  const pathname = usePathname();
  const { toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      mobileOpen || contactOpen ? "hidden" : "";
  }, [mobileOpen, contactOpen]);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-[var(--background)]/85 backdrop-blur-md border-b border-current/10"
            : "bg-transparent"
        }`}
      >
        <Container className="flex h-24 items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            Numen Games
          </Link>

          <nav className="hidden items-center gap-14 text-base md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative transition-opacity hover:opacity-70"
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-[var(--accent)]" />
                  )}
                </Link>
              );
            })}

            <Link
              href="/numinia"
              className="rounded-full border border-[var(--accent)] px-6 py-2 text-sm transition hover:scale-105"
            >
              Numinia
            </Link>

            <button
              onClick={() => setContactOpen(true)}
              className="rounded-full bg-[var(--accent)] px-6 py-2 text-sm text-black transition hover:scale-105"
            >
              Talk to us
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            <button
              onClick={toggle}
              className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/15"
            >
              ◐
            </button>

            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-2xl"
            >
              ☰
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}
