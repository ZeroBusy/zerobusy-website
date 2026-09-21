"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "./icons";

const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1m4lcnMMoopwFkC3IOVU42sT9zC9Q5QptB8tlJp33t0a3tCYa3QAZrSHOWmYFuM5HdwjCT5egR";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    // ===== Start: Header =====
    <header className="sticky top-3 z-60 mt-4 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-line/70 bg-white/85 py-2 pr-2 pl-4 shadow-card backdrop-blur-md backdrop-saturate-180">
      <Link href="/" className="flex items-center gap-2.5">
        <span className="grid size-8 place-items-center rounded-base bg-linear-135 from-primary to-secondary">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff" aria-hidden>
            <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
          </svg>
        </span>
        <span className="font-display text-headline-sm font-extrabold text-ink">
          ZERO<span className="text-primary">BUSY</span>
        </span>
      </Link>

      <nav className="order-last flex w-full gap-1 overflow-x-auto rounded-md bg-canvas p-1 md:order-none md:w-auto">
        {navLinks.map((link) => {
          const isActive =
            link.href === pathname ||
            (link.label === "Home" && (pathname === "/" || pathname === ""));

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`rounded-base px-4 py-2 font-display text-label-md whitespace-nowrap transition-colors ${
                isActive
                  ? "bg-white text-ink shadow-card font-semibold"
                  : "text-ink-soft hover:bg-white hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary rounded-full"
      >
        Book Call
        <ArrowRight />
      </a>
    </header>
  );
}
