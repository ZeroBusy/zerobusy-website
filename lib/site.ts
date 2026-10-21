import type { Metadata } from "next";
import { ogImageAlt } from "./og-image";

/**
 * Canonical site URL, used for canonical tags, link previews and the sitemap.
 *
 * Always the live domain (www, since zerobusy.com redirects there), so the
 * vercel.app copy never competes with it in search.
 */
export const SITE_URL = "https://www.zerobusy.com";

/**
 * Search engines may index this build only once it serves zerobusy.com.
 * VERCEL_PROJECT_PRODUCTION_URL is this project's production domain, so the
 * preview stays noindexed and flips on its own when the domain is attached.
 */
export const INDEXABLE = (process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "").endsWith("zerobusy.com");

export const SITE_TITLE = "ZeroBusy | AI Automation Agency for Service Businesses";

export const SITE_DESCRIPTION =
  "ZeroBusy is an AI automation agency for service businesses. We automate lead replies, data entry and reports, so you grow without hiring.";

/**
 * Per-page title, description, canonical and share-card URL. Setting
 * `openGraph` on a page replaces the root one wholesale, so the share image
 * from app/opengraph-image.tsx has to be listed again here.
 */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "ZeroBusy",
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: ogImageAlt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [{ url: "/twitter-image", alt: ogImageAlt }] },
  };
}
