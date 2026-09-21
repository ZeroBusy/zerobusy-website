import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — ZeroBusy | Let's Connect & Automate",
  description:
    "Get in touch with ZeroBusy to discuss your AI automation needs. Book a free consultation, send us a message, or schedule a 30-minute operational audit.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
