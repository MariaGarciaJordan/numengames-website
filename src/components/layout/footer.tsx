import Link from "next/link";
import Container from "@/components/layout/container";

export default function Footer() {
  return (
    <footer className="border-t border-current/10 py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Numen Games. All rights reserved.
        </p>

        <nav className="flex items-center gap-6 text-sm">
          <Link className="opacity-70 hover:opacity-100" href="/services">
            Services
          </Link>
          <Link className="opacity-70 hover:opacity-100" href="/company">
            Company
          </Link>
          <Link className="opacity-70 hover:opacity-100" href="/pricing">
            Pricing
          </Link>
          <Link className="opacity-70 hover:opacity-100" href="/numinia">
            Numinia
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
