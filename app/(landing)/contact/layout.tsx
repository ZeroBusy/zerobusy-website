import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import { faqs } from "./faqs";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us | ZeroBusy",
  description:
    "Book a free 30-minute call with ZeroBusy. We look at how your team works and point out the first three things worth automating.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          {
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          },
        ]}
      />
      {children}
    </>
  );
}
