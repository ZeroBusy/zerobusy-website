import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import JsonLd from "@/components/JsonLd";
import { INDEXABLE, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  robots: INDEXABLE ? undefined : { index: false, follow: false },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: "ZeroBusy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${jetbrainsMono.variable}`}>
      <body>
        <JsonLd
          data={[
            {
              "@type": "ProfessionalService",
              "@id": `${SITE_URL}/#organization`,
              name: "ZeroBusy",
              url: SITE_URL,
              logo: `${SITE_URL}/icon.png`,
              image: `${SITE_URL}/opengraph-image`,
              description: SITE_DESCRIPTION,
              email: "automate@zerobusy.com",
              founder: { "@type": "Person", name: "Tanay Patwa", jobTitle: "Founder" },
              sameAs: ["https://www.linkedin.com/company/zerobusy", "https://instagram.com/zerobusy.ai"],
              knowsAbout: ["AI automation", "Workflow automation", "AI agents", "Business process automation"],
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              name: "ZeroBusy",
              url: SITE_URL,
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
          ]}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
