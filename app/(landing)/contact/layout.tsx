import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — ZeroBusy",
  description:
    "Book a free 30-minute call or send us a message. We look at how your team works and point out the first three things worth automating.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
