import { render, screen } from "@testing-library/react";
import HeroSection from "./hero-section";

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const messages: Record<string, string> = {
      hero: "The game to work better"
    };
    return messages[key];
  }
}));

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
  },
  useScroll: () => ({
    scrollYProgress: {}
  }),
  useTransform: () => 0
}));

describe("HeroSection", () => {
  it("renders hero text", () => {
    render(<HeroSection />);
    expect(
      screen.getByText("The game to work better")
    ).toBeInTheDocument();
  });
});
