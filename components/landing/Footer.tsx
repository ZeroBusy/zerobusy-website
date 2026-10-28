import Link from "next/link";
import Logo from "./Logo";
import { BOOKING_PATH } from "@/lib/booking";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/zerobusy",
    path: "M4.5 9h3v11h-3V9Zm1.5-5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM10 9h2.9v1.5c.6-1 1.8-1.8 3.4-1.8 2.6 0 3.7 1.7 3.7 4.6V20h-3v-6c0-1.6-.6-2.4-1.9-2.4-1.1 0-1.9.7-1.9 2.4v6h-3V9Z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/zerobusy.ai",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "Email",
    href: "mailto:automate@zerobusy.com",
    path: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.2 2L12 12.6 19.8 7H4.2Z",
  },
];

const linkGroups = [
  {
    title: "QUICK LINKS",
    links: [
      { label: "Home", href: "/" },
      { label: "About ZeroBusy", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
      { label: "Client Results", href: "/#proof" },
    ],
  },
  {
    title: "SERVICES",
    links: [
      // Anchors match the card ids on /services.
      { label: "Lead replies & follow-up", href: "/services#leads" },
      { label: "No more double entry", href: "/services#data" },
      { label: "Reports & dashboards", href: "/services#reports" },
      { label: "AI agents & chat", href: "/services#agents" },
    ],
  },
];

export default function Footer() {
  return (
    // ===== Start: Footer =====
    <footer className="mt-16 bg-navy text-white md:mt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 md:py-16 lg:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Logo variant="dark" />
            <p className="mt-4 max-w-xs text-body-md text-pretty text-white/60">
              Streamline. Automate. Scale. We help digital businesses save time through intelligent AI automation.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map((social) => {
                const isMailto = social.href.startsWith("mailto:");
                return (
                <a
                  key={social.label}
                  href={social.href}
                  target={isMailto ? undefined : "_blank"}
                  rel={isMailto ? undefined : "noopener noreferrer"}
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-md border border-white/10 text-white/70 transition duration-200 hover:-translate-y-0.5 hover:border-secondary/40 hover:text-white"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d={social.path} />
                  </svg>
                </a>
                );
              })}
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-label-sm text-white/50">{group.title}</h4>
              <ul className="grid gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-body-md text-white/70 transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Phones already pass a booking CTA right above the footer. */}
          <div className="max-sm:hidden">
            <h4 className="mb-4 text-label-sm text-white/50">GET STARTED</h4>
            <div className="rounded-lg border border-white/10 bg-white/5 p-5">
              <p className="mb-4 text-body-md text-white/80">Find the first hours you can win back.</p>
              <Link
                href={BOOKING_PATH}
                className="btn btn-accent w-full rounded-base"
              >
                Book a free 30-minute call
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-6 text-body-sm text-white/50">
          <span>© 2026 ZeroBusy. All rights reserved.</span>
          <a href="mailto:automate@zerobusy.com" className="transition-colors hover:text-white">
            automate@zerobusy.com
          </a>
        </div>
      </div>
    </footer>
  );
}
