// TODO: point the social icons at the real ZeroBusy profiles.
const socials = [
  { label: "X", path: "M3 3h5l4.2 6L17 3h4l-7 9.2L21.5 21h-5l-4.6-6.5L6.5 21H2.5l7.4-9.6L3 3Z" },
  {
    label: "LinkedIn",
    path: "M4.5 9h3v11h-3V9Zm1.5-5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM10 9h2.9v1.5c.6-1 1.8-1.8 3.4-1.8 2.6 0 3.7 1.7 3.7 4.6V20h-3v-6c0-1.6-.6-2.4-1.9-2.4-1.1 0-1.9.7-1.9 2.4v6h-3V9Z",
  },
  {
    label: "YouTube",
    path: "M21.4 7.2c-.2-1-.9-1.8-1.9-2C17.7 4.8 12 4.8 12 4.8s-5.7 0-7.5.4c-1 .2-1.7 1-1.9 2C2.2 9 2.2 12 2.2 12s0 3 .4 4.8c.2 1 .9 1.8 1.9 2 1.8.4 7.5.4 7.5.4s5.7 0 7.5-.4c1-.2 1.7-1 1.9-2 .4-1.8.4-4.8.4-4.8s0-3-.4-4.8ZM10 15.3V8.7L15.5 12 10 15.3Z",
  },
  {
    label: "Discord",
    path: "M19 6.3A15 15 0 0 0 15.4 5l-.4.8a11 11 0 0 1 3.1 1.4 11.6 11.6 0 0 0-9.6-.3l.4-1.1A15 15 0 0 0 5 6.3C2.6 10 2 13.7 2.3 17.3A15 15 0 0 0 7 19l.8-1.3c-.8-.3-1.5-.7-2.2-1.2l.5-.4c3.7 1.7 7.9 1.7 11.6 0l.5.4c-.7.5-1.4.9-2.2 1.2l.8 1.3a15 15 0 0 0 4.7-1.7c.4-4.2-.6-7.9-2.5-11ZM9 14.6c-.9 0-1.6-.8-1.6-1.8S8.1 11 9 11s1.6.8 1.6 1.8-.7 1.8-1.6 1.8Zm6 0c-.9 0-1.6-.8-1.6-1.8S14.1 11 15 11s1.6.8 1.6 1.8-.7 1.8-1.6 1.8Z",
  },
];

const linkGroups = [
  {
    title: "QUICK LINKS",
    links: [
      { label: "Home", href: "#overview" },
      { label: "About ZeroBusy", href: "#solutions" },
      { label: "Client Results", href: "#proof" },
      { label: "Integration Ecosystem", href: "#stack" },
      { label: "Founder Reviews", href: "#proof" },
    ],
  },
  {
    title: "SERVICES",
    links: [
      { label: "Workflow Architecture", href: "#solutions" },
      { label: "Lead Gen Pipeline AI", href: "#solutions" },
      { label: "Customer Ops Agents", href: "#solutions" },
      { label: "Custom LLM Fine-Tuning", href: "#solutions" },
      { label: "Internal Tools & Zapier", href: "#stack" },
    ],
  },
];

// TODO: create these pages and link to them.
const legalLinks = ["Security SOC-2 Certified", "Privacy Policy", "Terms of Service", "Security & Trust"];

export default function Footer() {
  return (
    // ===== Start: Footer =====
    <footer className="mt-24 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-base bg-linear-135 from-primary to-secondary font-display text-label-md font-extrabold">
                Z
              </span>
              <span className="font-display text-headline-sm font-extrabold">ZeroBusy</span>
            </div>
            <p className="mt-4 max-w-xs text-body-md text-pretty text-white/60">
              Streamline. Automate. Scale. We help digital businesses save time through intelligent AI automation.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#overview"
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-md border border-white/10 text-white/70 transition duration-200 hover:-translate-y-0.5 hover:border-secondary/40 hover:text-white"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
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

          <div>
            <h4 className="mb-4 text-label-sm text-white/50">GET STARTED</h4>
            <div className="rounded-lg border border-white/10 bg-white/5 p-5">
              <p className="mb-4 text-body-md text-white/80">Ready to reclaim 20+ operational hours every week?</p>
              <a href="#cta" className="btn btn-accent w-full rounded-base">
                Schedule Call
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-6 text-body-sm text-white/50">
          <span>© 2026 ZeroBusy Technologies LLC. All rights reserved.</span>
          <span className="inline-flex items-center gap-2">
            <span className="size-2 rounded-full bg-success" />
            Status: All Systems Operational
          </span>
          <span className="flex flex-wrap items-center gap-5">
            {legalLinks.map((label) => (
              <a key={label} href="#overview" className="transition-colors hover:text-white">
                {label}
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
