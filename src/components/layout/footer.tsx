import Link from "next/link";
import Container from "@/components/layout/container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/70 backdrop-blur-md">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} Numen Games. All rights reserved.
        </p>

        <nav className="flex items-center gap-6 text-sm">
          <Link className="text-white/70 hover:text-white" href="/services">
            Services
          </Link>
          <Link className="text-white/70 hover:text-white" href="/company">
            Company
          </Link>
          <Link className="text-white/70 hover:text-white" href="/pricing">
            Pricing
          </Link>
          <Link className="text-white/70 hover:text-white" href="/numinia">
            Numinia
          </Link>
        </nav>
      </Container>
    </footer>
  );
}