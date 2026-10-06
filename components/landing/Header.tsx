"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "./icons";
import Logo from "./Logo";

const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1m4lcnMMoopwFkC3IOVU42sT9zC9Q5QptB8tlJp33t0a3tCYa3QAZrSHOWmYFuM5HdwjCT5egR";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (link: (typeof navLinks)[number]) =>
    link.href === pathname || (link.label === "Home" && (pathname === "/" || pathname === ""));

  return (
    // ===== Start: Header =====
    // Single row at every width: on mobile the links collapse behind a menu
    // button so the header stays one line instead of wrapping and scrolling.
    <header className="sticky top-3 z-60 mt-4 rounded-lg border border-line/70 bg-white/85 shadow-card backdrop-blur-md backdrop-saturate-180">
      <div className="flex items-center justify-between gap-3 py-2 pr-2 pl-4">
        <Link href="/" className="flex items-center" aria-label="ZeroBusy home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-1 rounded-md bg-canvas p-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`rounded-base px-4 py-2 font-display text-label-md whitespace-nowrap transition-colors ${
                isActive(link)
                  ? "bg-white text-ink shadow-card font-semibold"
                  : "text-ink-soft hover:bg-white hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary hidden rounded-full md:inline-flex"
        >
          Book Call
          <ArrowRight />
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-11 shrink-0 place-items-center rounded-md border border-line text-ink transition-colors hover:bg-canvas md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav id="mobile-nav" className="grid gap-1 border-t border-line/70 p-3 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-base px-4 py-3 font-display text-label-md transition-colors ${
                isActive(link) ? "bg-ice font-semibold text-primary" : "text-ink-soft hover:bg-canvas hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-1 w-full rounded-full"
          >
            Book a free 30-minute call
            <ArrowRight />
          </a>
        </nav>
      )}
    </header>
  );
}
