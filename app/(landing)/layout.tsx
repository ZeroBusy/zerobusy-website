import type { ReactNode } from "react";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
