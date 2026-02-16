import Header from "./header";
import Footer from "./footer";

export default function SiteLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="pt-20">
        {children}
      </div>
      <Footer />
    </div>
  );
}
