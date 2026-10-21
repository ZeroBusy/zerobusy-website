import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import Link from "next/link";
import type { ReactNode } from "react";
import Cta from "@/components/landing/Cta";
import Reveal from "@/components/landing/Reveal";

export const metadata: Metadata = pageMetadata({
  title: "AI Automation Services | ZeroBusy",
  description:
    "AI automation services for service businesses: instant lead replies, automatic data entry, weekly reports and custom AI agents, built and run for you.",
  path: "/services",
});

const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1m4lcnMMoopwFkC3IOVU42sT9zC9Q5QptB8tlJp33t0a3tCYa3QAZrSHOWmYFuM5HdwjCT5egR";

const proofStrip = [
  { big: "2–40 hrs", small: "Reclaimed in your team's week" },
  { big: "95% fewer", small: "Typos, missed fields and human mistakes" },
  { big: "1,000+ apps", small: "Connected, from your CRM to WhatsApp to Shopify" },
];

type Service = {
  /** Anchor id - the footer links to /services#<id>. */
  id: string;
  tag: string;
  /** The problem, in the owner's own words. */
  pain: string;
  build: string[];
  change: string;
  icon: ReactNode;
};

/**
 * Problem-led, not tech-led: every card opens with the pain as the reader
 * would say it, then what we build, then what is different afterwards. No
 * tool names, mockups or metrics in here on purpose.
 */
const services: Service[] = [
  {
    id: "leads",
    tag: "LEADS",
    pain: "Leads come in and nobody replies for hours.",
    build: [
      "Instant replies on WhatsApp, email and your website",
      "Every lead routed to the right person",
      "Follow-up reminders so nothing goes cold",
      "One pipeline that shows where every deal stands",
    ],
    change: "Every lead gets an answer the same hour, and you can see who is working on what.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M3.8 6.5 12 13l8.2-6.5" />
      </>
    ),
  },
  {
    id: "data",
    tag: "DATA ENTRY",
    pain: "My team types the same thing into three different places.",
    build: [
      "Your CRM, store, sheets and accounts kept in sync",
      "Forms that fill in your systems for you",
      "Payments matched to orders automatically",
      "Bulk product listings and catalogue updates",
    ],
    change: "Enter it once. It shows up everywhere it needs to, without the typos.",
    icon: <path d="M20 11a8 8 0 0 0-14-4.5M4 13a8 8 0 0 0 14 4.5M6 3v4h4M18 21v-4h-4" />,
  },
  {
    id: "reports",
    tag: "REPORTING",
    pain: "I lose Friday afternoons building the same report.",
    build: [
      "Dashboards that pull everything onto one screen",
      "Weekly reports written and sent on their own",
      "Alerts when a number you care about moves",
      "Financial summaries from the data you already have",
    ],
    change: "You check the business from your phone instead of ten tabs.",
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="M7 15l4-4 3 3 5-6" />
      </>
    ),
  },
  {
    id: "agents",
    tag: "AI AGENTS",
    pain: "Customers ask the same ten questions all day.",
    build: [
      "Chat assistants on WhatsApp and your website",
      "Custom agents that read documents and pull out what matters",
      "Drafted replies a person approves before they go out",
      "A hand-off to your team the moment a human is needed",
    ],
    change: "Routine questions get answered in minutes, at any hour, and your team only steps in when it matters.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2.4" />
        <path d="M8 20h8M12 16v4" />
      </>
    ),
  },
];

function Tick() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 13l4.5 4.5L19 7" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* ===== 1. HERO ===== */}
      <section className="bg-hero-grid relative mt-4 overflow-hidden rounded-xl border border-line px-6 py-16 text-center md:px-10 lg:py-24">
        <div className="pointer-events-none absolute top-10 left-1/2 -z-10 h-72 w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/90 px-4 py-1.5 shadow-card">
            <span className="size-2 animate-pulse rounded-full bg-primary" />
            <span className="font-display text-label-sm font-semibold tracking-wider text-primary uppercase">Services</span>
          </div>

          <h1 className="mt-6 font-display text-display-hero-mobile font-extrabold tracking-tight text-ink md:text-display-hero">
            Hand off the work your team{" "}
            <span className="bg-linear-135 from-primary to-secondary bg-clip-text text-transparent">
              shouldn&apos;t be doing.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-body-md text-pretty text-ink-soft md:text-body-lg">
            We build systems that do your repetitive work for you, so your team can focus on clients and growth.
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full rounded-base sm:w-auto">
              Book a free 30-minute call
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7.5V12l3 2" strokeLinecap="round" />
              </svg>
            </a>
            <Link href="/#proof" className="btn btn-secondary w-full rounded-base sm:w-auto">
              See client results
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h13M12 5.5 18.5 12 12 18.5" />
              </svg>
            </Link>
          </div>

          {/* Proof strip */}
          <div className="mt-12 grid w-full grid-cols-1 divide-y divide-line rounded-xl border border-line bg-white shadow-card md:grid-cols-3 md:divide-x md:divide-y-0">
            {proofStrip.map((item) => (
              <div key={item.big} className="flex flex-col items-center justify-center px-4 py-6">
                <span className="font-display text-headline-lg font-extrabold whitespace-nowrap text-primary">{item.big}</span>
                <span className="mt-1.5 max-w-[16rem] text-body-sm text-pretty text-ink-soft">{item.small}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2. PROBLEM-LED SERVICES ===== */}
      <section id="services-list" className="rounded-xl border border-line bg-canvas px-6 py-16 md:px-10 lg:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-ice px-4 py-1.5 font-display text-label-sm text-primary">
            <span className="size-1.5 rounded-full bg-secondary" />
            SOUND FAMILIAR?
          </span>
          <h2 className="mt-5 text-headline-xl-mobile text-ink md:text-headline-xl">
            Start with what is <span className="text-primary">slowing you down</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body-md text-ink-soft md:text-body-lg">
            Find the one that sounds like your week. That is usually where we start.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <Reveal key={service.id}>
              <article id={service.id} className="card flex h-full scroll-mt-28 flex-col p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      {service.icon}
                    </svg>
                  </span>
                  <span className="font-display text-label-sm tracking-wider text-ink-muted">{service.tag}</span>
                </div>

                <h3 className="mt-5 text-headline-md text-pretty text-ink">&ldquo;{service.pain}&rdquo;</h3>

                <div className="mt-6">
                  <span className="font-display text-label-sm tracking-wider text-primary">WHAT WE BUILD</span>
                  <ul className="mt-3 grid gap-2.5">
                    {service.build.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-body-md text-ink-soft">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-success/15 text-success">
                          <Tick />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex-1 rounded-lg border border-primary/20 bg-ice p-4">
                  <span className="font-display text-label-sm tracking-wider text-primary">WHAT CHANGES</span>
                  <p className="mt-1.5 text-body-md text-pretty text-ink">{service.change}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-dashed border-outline bg-white p-6 md:flex-row md:items-center md:p-8">
            <div>
              <h3 className="text-headline-sm text-ink">Not on the list?</h3>
              <p className="mt-1 text-body-md text-ink-soft">
                If your team does it by hand every week, we can probably build it. Tell us on the call.
              </p>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary shrink-0 rounded-full">
              Book a free 30-minute call
            </a>
          </div>
        </Reveal>
      </section>

      <Cta
        title="Find the first hours you can win back."
        body="In a free 30-minute call, we'll look at how your team works and point out the first three things worth automating. You keep the list either way."
        perks={[]}
      />
    </div>
  );
}
