import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enterprise AI & Workflow Automation Services — ZeroBusy",
  description:
    "Transform your business with our comprehensive AI automation solutions. From workflow automation to intelligent agents, chatbots, and ecommerce pipelines.",
};

const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1m4lcnMMoopwFkC3IOVU42sT9zC9Q5QptB8tlJp33t0a3tCYa3QAZrSHOWmYFuM5HdwjCT5egR";

const processSteps = [
  {
    num: "01",
    phase: "PHASE: AUDIT",
    title: "Discovery Call",
    description: "We discuss your business challenges, operational bottlenecks, and automation goals.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    num: "02",
    phase: "PHASE: BLUEPRINT",
    title: "Strategy Development",
    description: "We architect a custom deterministic automation roadmap tailored to your existing software stack.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
        <line x1="8" y1="2" x2="8" y2="18" />
        <line x1="16" y1="6" x2="16" y2="22" />
      </svg>
    ),
  },
  {
    num: "03",
    phase: "PHASE: DEPLOY",
    title: "Implementation",
    description: "Our engineering team builds, sandbox-tests, and deploys your robust automation solutions.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
  {
    num: "04",
    phase: "PHASE: SCALE",
    title: "Optimization",
    description: "We monitor telemetry, catch edge cases, and refine your automations continuously as you grow.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* ===== 1. HERO SECTION ===== */}
      <section className="bg-hero-grid relative mt-4 overflow-hidden rounded-xl border border-line px-6 py-16 text-center md:px-10 lg:py-24">
        <div className="pointer-events-none absolute top-10 left-1/2 -z-10 h-72 w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/90 px-4 py-1.5 shadow-card">
            <span className="size-2 animate-pulse rounded-full bg-primary" />
            <span className="font-display text-label-sm font-semibold tracking-wider text-primary uppercase">
              Enterprise Automation Solutions
            </span>
          </div>

          <h1 className="mt-6 font-display text-display-hero-mobile font-extrabold tracking-tight text-ink md:text-display-hero">
            Our <span className="bg-linear-135 from-primary to-secondary bg-clip-text text-transparent">Services</span>
          </h1>

          <p className="mt-6 max-w-2xl text-body-md text-pretty text-ink-soft md:text-body-lg">
            Transform your business with our comprehensive AI automation solutions. From workflow automation to
            intelligent agents, we&apos;ve got you covered.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="btn btn-primary w-full rounded-base sm:w-auto"
            >
              Get Your Custom Quote
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-full rounded-base sm:w-auto"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Schedule Free Consultation
            </a>
          </div>

          {/* Metric Counter Strip */}
          <div className="mt-12 grid w-full grid-cols-1 gap-4 rounded-xl border border-line bg-white p-6 shadow-card md:grid-cols-3">
            <div className="flex flex-col items-center justify-center p-3">
              <span className="font-display text-headline-xl font-extrabold text-primary">95%</span>
              <span className="mt-1 font-display text-label-sm font-bold tracking-wider text-ink uppercase">Error Reduction</span>
              <span className="mt-1 text-body-sm text-ink-muted">Across deterministic QA pipelines</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-ice p-3">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-headline-xl font-extrabold text-ink">15–30</span>
                <span className="font-display text-headline-md font-bold text-primary">hrs</span>
              </div>
              <span className="mt-1 font-display text-label-sm font-bold tracking-wider text-ink uppercase">Saved Weekly Per Team</span>
              <span className="mt-1 text-body-sm text-ink-muted">Reclaimed high-value operator focus</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3">
              <span className="font-display text-headline-xl font-extrabold text-primary">1,000+</span>
              <span className="mt-1 font-display text-label-sm font-bold tracking-wider text-ink uppercase">Integrations Supported</span>
              <span className="mt-1 text-body-sm text-ink-muted">Native APIs, ERPs &amp; custom webhooks</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. CAPABILITIES MATRIX: 4 CORE SERVICE MODULES ===== */}
      <section id="services-list" className="rounded-xl border border-line bg-white px-6 py-16 md:px-10 lg:py-24">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="font-display text-label-sm font-bold tracking-wider text-primary uppercase">
              • CAPABILITIES MATRIX
            </span>
            <h2 className="mt-2 font-display text-headline-xl-mobile font-bold tracking-tight text-ink md:text-headline-xl">
              Tailored Automation Systems
            </h2>
          </div>
          <p className="max-w-md text-body-md text-pretty text-ink-soft">
            Engineered for mission-critical reliability. Every service integrates natively with your existing software stack.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* MODULE 1: Workflow Automation */}
          <div className="card flex flex-col justify-between p-6 transition md:p-8">
            <div>
              <div className="flex items-center justify-between">
                <span className="grid size-14 place-items-center rounded-xl bg-ice text-primary shadow-xs">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
                  </svg>
                </span>
                <span className="rounded-full bg-canvas px-3 py-1 font-mono text-code-sm text-ink-muted">
                  MOD-01 // FLOW
                </span>
              </div>

              <h3 className="mt-6 font-display text-headline-lg font-bold text-ink">
                Workflow Automation
              </h3>
              <p className="mt-1 text-body-md text-ink-soft">
                Streamline your business processes and eliminate manual repetitive work.
              </p>

              {/* Blueprint Pipeline Mockup */}
              <div className="mt-6 rounded-lg border border-line/70 bg-ice p-4">
                <div className="flex items-center justify-between font-mono text-code-sm text-ink-soft">
                  <span className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-success" />
                    PIPELINE ACTIVE
                  </span>
                  <span className="font-semibold text-primary">ZERO_LATENCY</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center font-display text-label-sm">
                  <div className="rounded bg-white p-2 shadow-xs text-ink font-medium">Data Ingestion</div>
                  <div className="rounded bg-primary p-2 text-white font-bold shadow-xs">Auto Parsing</div>
                  <div className="rounded bg-white p-2 shadow-xs text-ink font-medium">CRM Sync</div>
                </div>
              </div>

              {/* Features List */}
              <div className="mt-6">
                <h4 className="font-display text-label-sm font-bold tracking-wider text-ink uppercase">
                  Features Include:
                </h4>
                <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Data entry automation",
                    "Report generation",
                    "Email workflow automation",
                    "Task scheduling & management",
                    "Integration between tools",
                    "Approval process automation",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0" aria-hidden>
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span className="text-body-sm text-ink-soft">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="mt-6 rounded-lg bg-canvas p-4">
                <span className="font-display text-label-sm font-bold tracking-wider text-primary uppercase">
                  Key Benefits
                </span>
                <div className="mt-2 grid grid-cols-2 gap-2 text-body-sm text-ink">
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary" /> Save 15-30 hrs/week
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary" /> Reduce errors by 95%
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary" /> Improve team output
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary" /> Scale without headcount
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-line/60">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-between rounded-lg bg-ice px-4 py-3 font-display text-label-md font-semibold text-primary transition hover:bg-primary/10"
              >
                <span>Explore Workflow Automation</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* MODULE 2: AI Agents */}
          <div className="card flex flex-col justify-between p-6 transition md:p-8">
            <div>
              <div className="flex items-center justify-between">
                <span className="grid size-14 place-items-center rounded-xl bg-ice text-primary shadow-xs">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <circle cx="12" cy="5" r="2" />
                    <path d="M12 7v4M8 16h0M16 16h0" />
                  </svg>
                </span>
                <span className="rounded-full bg-canvas px-3 py-1 font-mono text-code-sm text-ink-muted">
                  MOD-02 // AGENTS
                </span>
              </div>

              <h3 className="mt-6 font-display text-headline-lg font-bold text-ink">
                AI Agents
              </h3>
              <p className="mt-1 text-body-md text-ink-soft">
                Intelligent AI agents that work 24/7 to handle complex deterministic business tasks.
              </p>

              {/* Agent Terminal Preview */}
              <div className="mt-6 rounded-lg bg-navy p-4 text-white">
                <div className="flex items-center justify-between font-mono text-code-sm text-white/60">
                  <span>agent-core-cluster // node_42</span>
                  <span className="text-emerald-400 font-bold">DISPATCHED</span>
                </div>
                <p className="mt-2 font-mono text-[12px] leading-relaxed text-slate-300">
                  &gt; Autonomous Lead Ingestion: Validated inbound ticket #8942<br />
                  &gt; Scheduled strategy call via Google Cal API • 0.4s response
                </p>
              </div>

              {/* Features List */}
              <div className="mt-6">
                <h4 className="font-display text-label-sm font-bold tracking-wider text-ink uppercase">
                  Features Include:
                </h4>
                <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Customer inquiry handling",
                    "Lead qualification",
                    "Appointment scheduling",
                    "Data analysis & insights",
                    "Content creation assistance",
                    "Multi-language support",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0" aria-hidden>
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span className="text-body-sm text-ink-soft">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="mt-6 rounded-lg bg-canvas p-4">
                <span className="font-display text-label-sm font-bold tracking-wider text-primary uppercase">
                  Key Benefits
                </span>
                <div className="mt-2 grid grid-cols-2 gap-2 text-body-sm text-ink">
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary" /> 24/7 Availability
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary" /> Instant Response Times
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary" /> Deterministic Quality
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary" /> Multilingual Capability
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-line/60">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-between rounded-lg bg-ice px-4 py-3 font-display text-label-md font-semibold text-primary transition hover:bg-primary/10"
              >
                <span>Explore AI Agents</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* MODULE 3: Chatbots */}
          <div className="card flex flex-col justify-between p-6 transition md:p-8">
            <div>
              <div className="flex items-center justify-between">
                <span className="grid size-14 place-items-center rounded-xl bg-ice text-primary shadow-xs">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </span>
                <span className="rounded-full bg-canvas px-3 py-1 font-mono text-code-sm text-ink-muted">
                  MOD-03 // CONVERSATIONAL
                </span>
              </div>

              <h3 className="mt-6 font-display text-headline-lg font-bold text-ink">
                Chatbots
              </h3>
              <p className="mt-1 text-body-md text-ink-soft">
                Smart chatbots that engage customers, resolve tickets, and drive conversions.
              </p>

              {/* Visual Chat Element */}
              <div className="mt-6 flex flex-col gap-2 rounded-lg border border-line/70 bg-ice p-4 text-body-sm">
                <div className="self-end max-w-[85%] rounded-lg rounded-tr-none bg-primary px-3 py-2 text-white">
                  Can your system sync with our HubSpot deal stages?
                </div>
                <div className="self-start max-w-[85%] rounded-lg rounded-tl-none bg-white p-3 text-ink shadow-xs">
                  Yes! We offer 2-way real-time webhook sync with custom pipeline triggers.
                </div>
              </div>

              {/* Features List */}
              <div className="mt-6">
                <h4 className="font-display text-label-sm font-bold tracking-wider text-ink uppercase">
                  Features Include:
                </h4>
                <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Website integration",
                    "FAQ automation",
                    "Lead capture",
                    "Product recommendations",
                    "Order status updates",
                    "Support ticket creation",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0" aria-hidden>
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span className="text-body-sm text-ink-soft">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="mt-6 rounded-lg bg-canvas p-4">
                <span className="font-display text-label-sm font-bold tracking-wider text-primary uppercase">
                  Key Benefits
                </span>
                <div className="mt-2 grid grid-cols-2 gap-2 text-body-sm text-ink">
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary" /> Increase Conversion Rates
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary" /> Reduce Support Workload
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary" /> Capture Leads 24/7
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary" /> Boost CSAT Scores
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-line/60">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-between rounded-lg bg-ice px-4 py-3 font-display text-label-md font-semibold text-primary transition hover:bg-primary/10"
              >
                <span>Explore Chatbots</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* MODULE 4: Ecommerce Automation */}
          <div className="card flex flex-col justify-between p-6 transition md:p-8">
            <div>
              <div className="flex items-center justify-between">
                <span className="grid size-14 place-items-center rounded-xl bg-ice text-primary shadow-xs">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </span>
                <span className="rounded-full bg-canvas px-3 py-1 font-mono text-code-sm text-ink-muted">
                  MOD-04 // COMMERCE
                </span>
              </div>

              <h3 className="mt-6 font-display text-headline-lg font-bold text-ink">
                Ecommerce Automation
              </h3>
              <p className="mt-1 text-body-md text-ink-soft">
                Optimize your online store with intelligent automation and autonomous merchandising.
              </p>

              {/* Store Revenue Metric Mini Visual */}
              <div className="mt-6 flex items-center justify-between rounded-lg border border-line/70 bg-ice p-4">
                <div>
                  <span className="font-display text-label-sm text-ink-muted uppercase block">Automated Recovery</span>
                  <span className="font-display text-headline-md font-bold text-ink">+25% Revenue</span>
                </div>
                <div className="flex items-center gap-1.5 rounded bg-white px-3 py-1.5 font-mono text-code-sm text-emerald-600 shadow-xs">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                  <span>Cart Lift</span>
                </div>
              </div>

              {/* Features List */}
              <div className="mt-6">
                <h4 className="font-display text-label-sm font-bold tracking-wider text-ink uppercase">
                  Features Include:
                </h4>
                <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Inventory management",
                    "Order processing",
                    "Customer segmentation",
                    "Abandoned cart recovery",
                    "Price optimization",
                    "Review management",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0" aria-hidden>
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span className="text-body-sm text-ink-soft">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="mt-6 rounded-lg bg-canvas p-4">
                <span className="font-display text-label-sm font-bold tracking-wider text-primary uppercase">
                  Key Benefits
                </span>
                <div className="mt-2 grid grid-cols-2 gap-2 text-body-sm text-ink">
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary" /> Increase Sales by 25%
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary" /> Reduce Operational Costs
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary" /> Improve Customer Experience
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary" /> Scale Without Hiring
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-line/60">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-between rounded-lg bg-ice px-4 py-3 font-display text-label-md font-semibold text-primary transition hover:bg-primary/10"
              >
                <span>Explore Ecommerce Automation</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. OUR PROCESS SECTION ===== */}
      <section className="overflow-hidden rounded-xl border border-line bg-canvas px-6 py-16 md:px-10 lg:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-ice px-3 py-1 font-display text-label-sm font-semibold tracking-wider text-primary uppercase">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Proven Methodology
          </div>
          <h2 className="mt-4 font-display text-headline-xl-mobile font-bold tracking-tight text-ink md:text-headline-xl">
            Our Process
          </h2>
          <p className="mt-3 text-body-lg text-ink-soft">
            A proven methodology that delivers measurable ROI from day one.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.num}
              className="card flex flex-col justify-between p-6 transition hover:bg-ice/50 md:p-8"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-headline-xl font-extrabold text-primary">
                    {step.num}
                  </span>
                  <span className="grid size-9 place-items-center rounded-lg bg-ice text-primary shadow-xs">
                    {step.icon}
                  </span>
                </div>
                <h3 className="font-display text-headline-sm font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-body-sm text-ink-soft leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-line/60 font-mono text-code-sm text-ink-muted">
                {step.phase}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 4. OPERATIONAL UPGRADE CALLOUT ===== */}
      <section className="rounded-xl border border-line bg-white p-8 md:p-12 lg:p-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <span className="font-display text-label-sm font-bold tracking-wider text-primary uppercase">
              RADICAL EFFICIENCY
            </span>
            <h2 className="mt-2 font-display text-headline-xl-mobile font-bold tracking-tight text-ink md:text-headline-xl leading-tight">
              It&apos;s Time to Upgrade Your Operations
            </h2>
            <p className="mt-4 text-body-lg text-ink-soft leading-relaxed">
              Manual, repetitive tasks are silently costing your business more than just money—they&apos;re costing you
              time, growth opportunities, and competitive edge. AI-powered automation is no longer a luxury for large
              corporations; it&apos;s a vital tool for agile businesses ready to scale.
            </p>
            <div className="mt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-display text-label-md font-semibold text-primary transition hover:text-primary-hover"
              >
                <span>Learn more about our mission</span>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Diagnostic Spec Box */}
          <div className="w-full lg:w-96 rounded-xl border border-line/70 bg-ice p-6 shadow-card">
            <div className="flex items-center justify-between">
              <span className="font-display text-label-md font-bold text-ink">System Diagnostic</span>
              <span className="rounded bg-white px-2.5 py-1 font-mono text-[11px] font-bold text-primary shadow-xs">
                AUDIT READY
              </span>
            </div>

            <div className="mt-5 flex flex-col gap-1.5">
              <div className="flex justify-between text-body-sm text-ink-soft">
                <span>Friction Score</span>
                <span className="font-semibold text-red-600">High (Manual Ops)</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-line">
                <div className="h-full w-4/5 rounded-full bg-red-500" />
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-1.5">
              <div className="flex justify-between text-body-sm text-ink-soft">
                <span>Automated Yield Potential</span>
                <span className="font-semibold text-emerald-600">+92.4%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-line">
                <div className="h-full w-11/12 rounded-full bg-emerald-500" />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-lg bg-white p-3 shadow-xs">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </span>
              <div>
                <span className="block font-display text-label-sm font-bold text-ink">Deterministic Architecture</span>
                <span className="block text-[11px] text-ink-muted">Guaranteed SLA response times</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. PRE-FOOTER CTA BANNER ===== */}
      <section className="relative overflow-hidden rounded-2xl bg-linear-135 from-primary via-primary-hover to-tertiary p-8 text-center text-white shadow-xl md:p-14">
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -top-10 -left-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 backdrop-blur-md">
            <span className="size-2 animate-ping rounded-full bg-white" />
            <span className="font-display text-label-sm font-semibold tracking-wider text-white uppercase">
              NEXT-QUARTER ROI GUARANTEE
            </span>
          </div>

          <h2 className="mt-6 font-display text-headline-xl-mobile font-bold tracking-tight text-white md:text-headline-xl">
            Ready to Get Started?
          </h2>

          <p className="mt-4 max-w-xl text-body-md text-pretty text-white/90 md:text-body-lg">
            Book a 30-minute free operational audit. We&apos;ll inspect your tech stack and pinpoint at least 3 automations
            you can deploy this month to eliminate busywork.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-inverse rounded-full font-bold shadow-lg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book a 30-Minute Free Operational Audit
            </a>
            <Link
              href="/contact"
              className="btn bg-white/15 hover:bg-white/25 text-white rounded-full font-semibold transition"
            >
              Contact Solution Architect
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-body-sm text-white/80">
            <div className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Immediate availability</span>
            </div>
            <span className="opacity-40">•</span>
            <div className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Real 30-60-90 Automation Roadmap</span>
            </div>
            <span className="opacity-40">•</span>
            <div className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Zero IT disruption guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
