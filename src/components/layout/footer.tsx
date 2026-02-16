import Container from "./container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-current/10 py-28">
      <Container>
        <div className="grid gap-16 md:grid-cols-4">
          {/* Brand Block */}
          <div className="space-y-6">
            <div className="text-2xl font-semibold">
              Numen Games
            </div>
            <p className="text-sm opacity-70">
              We design game systems that transform how people work,
              learn and collaborate.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4 text-sm">
            <div className="font-medium">Services</div>
            <div className="flex flex-col gap-2 opacity-70">
              <Link href="/services/engagement">Engagement</Link>
              <Link href="/services/training">Training</Link>
              <Link href="/services/experience">Experience</Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4 text-sm">
            <div className="font-medium">Company</div>
            <div className="flex flex-col gap-2 opacity-70">
              <Link href="/company/team">Team</Link>
              <Link href="/company/manifesto">Manifesto</Link>
              <Link href="/pricing">Pricing</Link>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4 text-sm">
            <div className="font-medium">Product</div>
            <div className="flex flex-col gap-2 opacity-70">
              <Link href="/numinia">Numinia</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-current/10 pt-10 text-xs opacity-60">
          © {new Date().getFullYear()} Numen Games. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
