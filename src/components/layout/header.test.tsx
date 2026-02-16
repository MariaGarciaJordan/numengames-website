import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./header";

const toggleMock = vi.fn();

vi.mock("next-intl", () => ({
  useLocale: () => "en"
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: () => {}
  })
}));

vi.mock("@/context/theme-provider", () => ({
  useTheme: () => ({
    toggle: toggleMock
  })
}));

describe("Header", () => {
  it("renders brand name", () => {
    render(<Header />);
    expect(screen.getByText("Numen Games")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Header />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Product")).toBeInTheDocument();
    expect(screen.getByText("Careers")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("calls theme toggle when button clicked", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const button = screen.getByText("Theme");
    await user.click(button);

    expect(toggleMock).toHaveBeenCalled();
  });
});
