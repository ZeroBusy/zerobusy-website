import { ArrowRight } from "./icons";

const navLinks = [
  { label: "Home", href: "#overview" },
  { label: "About", href: "#solutions" },
  { label: "Services", href: "#solutions" },
  { label: "Projects", href: "#proof" },
  { label: "Contact", href: "#cta" },
];

export default function Header() {
  return (
    // ===== Start: Header =====
    <header className="sticky top-3 z-60 mt-4 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-line/70 bg-white/85 py-2 pr-2 pl-4 shadow-card backdrop-blur-md backdrop-saturate-180">
      <a href="#overview" className="flex items-center gap-2.5">
        <span className="grid size-8 place-items-center rounded-base bg-linear-135 from-primary to-secondary">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff" aria-hidden>
            <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
          </svg>
        </span>
        <span className="font-display text-headline-sm font-extrabold text-ink">
          ZERO<span className="text-primary">BUSY</span>
        </span>
      </a>

      {/* TODO: swap the wrapping nav for a proper mobile menu, and derive the active link from scroll position. */}
      <nav className="order-last flex w-full gap-1 overflow-x-auto rounded-md bg-canvas p-1 md:order-none md:w-auto">
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className={`rounded-base px-4 py-2 font-display text-label-md whitespace-nowrap transition-colors ${
              i === 0 ? "bg-white text-ink shadow-card" : "text-ink-soft hover:bg-white hover:text-ink"
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#cta" className="btn btn-primary rounded-full">
        Book Call
        <ArrowRight />
      </a>
    </header>
  );
}
