import { render, screen } from "@testing-library/react";
import Header from "./header";

describe("Header", () => {
  it("renders brand name", () => {
    render(<Header />);
    const brands = screen.getAllByText(/numen/i);
    expect(brands.length).toBeGreaterThan(0);
  });

  it("renders navigation links", () => {
    render(<Header />);
    const servicesLinks = screen.getAllByText(/services/i);
    const companyLinks = screen.getAllByText(/company/i);

    expect(servicesLinks.length).toBeGreaterThan(0);
    expect(companyLinks.length).toBeGreaterThan(0);
  });
});
