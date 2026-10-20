/**
 * Canonical site URL, used for link previews and the sitemap.
 *
 * VERCEL_PROJECT_PRODUCTION_URL is set by Vercel at build time to this
 * project's production domain, so previews point at the redesign today and
 * switch to zerobusy.com on their own once that domain is attached. The
 * fallback covers local builds.
 */
export const SITE_URL = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "www.zerobusy.com"}`;

export const SITE_TITLE = "ZeroBusy — Grow without hiring.";

export const SITE_DESCRIPTION =
  "We automate the busywork that slows your team down: lead replies, data entry, weekly reports, custom agents and more. You take on more work with the team you already have.";
