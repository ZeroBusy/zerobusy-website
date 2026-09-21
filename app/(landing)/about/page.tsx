import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — ZeroBusy | Streamline. Automate. Scale.",
  description:
    "We're on a mission to eliminate busy work and help digital businesses focus on what truly matters through intelligent AI automation.",
};

const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1m4lcnMMoopwFkC3IOVU42sT9zC9Q5QptB8tlJp33t0a3tCYa3QAZrSHOWmYFuM5HdwjCT5egR";

const clients = [
  { initials: "HF", name: "Hype Fly" },
  { initials: "MR", name: "Mumbai Retina Center" },
  { initials: "SK", name: "Sneakinn" },
  { initials: "KG", name: "Khatwani Group" },
  { initials: "VR", name: "Vaayu Realty" },
  { initials: "KY", name: "Key Getaways" },
];

const values = [
  {
    num: "01",
    tag: "OUTCOME-DRIVEN",
    title: "Results-Focused",
    description:
      "We measure success by the time and money we save our clients, not by the complexity of our solutions.",
    metricLabel: "Target Metric",
    metricValue: "10x Time ROI",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    num: "02",
    tag: "CUTTING-EDGE",
    title: "Innovation First",
    description:
      "We stay ahead of the curve, always exploring new AI technologies and LLM capabilities to benefit our clients.",
    metricLabel: "Modern Stack",
    metricValue: "Adaptive AI R&D",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-4.05 11a22.4 22.4 0 0 1-3.95 2z" />
        <path d="M9 12H4s.55-3.03 2-4.5c1.26-1.28 3.5-1.5 3.5-1.5" />
        <path d="M12 9v5s3.03-.55 4.5-2c1.28-1.26 1.5-3.5 1.5-3.5" />
      </svg>
    ),
  },
  {
    num: "03",
    tag: "LONG-TERM COALITION",
    title: "Partnership Mindset",
    description:
      "We're not just vendors — we're partners invested in your long-term success, technical resilience, and growth.",
    metricLabel: "Client Retainers",
    metricValue: "Direct Slack Access",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.6-4.6a2 2 0 0 0 0-2.8l-1.4-1.4a2 2 0 0 0-2.8 0l-1.8 1.8" />
        <path d="m13 7-2-2a1 1 0 0 0-1.4 0L5 9.6a2 2 0 0 0 0 2.8l1.4 1.4a2 2 0 0 0 2.8 0l1.8-1.8" />
      </svg>
    ),
  },
];

const pillars = [
  {
    id: "01",
    title: "Practical AI, Not Hype",
    description:
      "We cut through the AI noise and deliver solutions that solve real business problems. No buzzwords, just tangible results.",
    points: ["Proven track record", "Real ROI measurement", "Practical implementations"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7M9 21h6" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Digital Business Specialists",
    description:
      "We understand the unique challenges of modern digital operations because we've built them ourselves. We speak your language.",
    points: ["Industry expertise", "Digital-first approach", "Scalable solutions"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
        <path d="M2 7h20" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "End-to-End Support",
    description:
      "From architecture to implementation and ongoing optimization, our engineering team is with you every step of the way.",
    points: ["Complete implementation", "Ongoing optimization", "24/7 incident support"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Custom Solutions",
    description:
      "No two businesses are identical. We create tailored automations that integrate precisely into your unique workflows and tech stack.",
    points: ["Personalized approach", "Flexible integrations", "Growth-ready architecture"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* ===== 1. HERO SECTION ===== */}
      <section className="bg-hero-grid relative mt-4 overflow-hidden rounded-xl border border-line px-6 py-16 text-center md:px-10 lg:py-24">
        {/* Ambient subtle blue glow */}
        <div className="pointer-events-none absolute top-10 left-1/2 -z-10 h-72 w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="mx-auto flex max-w-3xl flex-col items-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/90 px-4 py-1.5 shadow-card">
            <span className="size-2 animate-pulse rounded-full bg-primary" />
            <span className="font-display text-label-sm font-semibold tracking-wider text-primary uppercase">
              OUR STORY &amp; PURPOSE
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-6 font-display text-display-hero-mobile font-extrabold tracking-tight text-ink md:text-display-hero">
            About <span className="bg-linear-135 from-primary to-secondary bg-clip-text text-transparent">ZeroBusy</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-body-md text-pretty text-ink-soft md:text-body-lg">
            We&apos;re on a mission to eliminate busy work and help digital businesses focus on what truly matters through
            intelligent AI automation.
          </p>

          {/* Dual Action Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full rounded-base sm:w-auto"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book a Free Call
            </a>
            <a
              href="#our-story"
              className="btn btn-secondary w-full rounded-base sm:w-auto"
            >
              Explore Our Philosophy
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </a>
          </div>

          {/* Quick Proof Metrics Micro-Bar */}
          <div className="mt-12 grid w-full max-w-xl grid-cols-2 gap-6 border-t border-line/80 pt-8 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <span className="font-display text-headline-lg font-bold text-ink">1,450+</span>
              <span className="text-body-sm text-ink-muted">Hours saved monthly</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display text-headline-lg font-bold text-primary">99.9%</span>
              <span className="text-body-sm text-ink-muted">Automation uptime</span>
            </div>
            <div className="col-span-2 flex flex-col items-center sm:col-span-1">
              <span className="font-display text-headline-lg font-bold text-ink">&lt; 14 Days</span>
              <span className="text-body-sm text-ink-muted">Deploy to ROI</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. CLIENT TRUST STRIP ===== */}
      <section className="overflow-hidden rounded-xl border border-line bg-canvas px-6 py-8">
        <p className="text-center font-display text-label-sm font-medium tracking-widest text-ink-muted uppercase">
          Trusted by rapid-growth digital enterprises &amp; visionaries
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
          {clients.map((client) => (
            <div key={client.name} className="group flex cursor-default items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-md border border-line bg-white font-display text-label-sm font-bold text-primary shadow-xs transition group-hover:scale-105">
                {client.initials}
              </span>
              <span className="font-display text-headline-sm text-sm font-bold tracking-tight text-ink-soft transition group-hover:text-primary">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 3. OUR STORY & MISSION SECTION ===== */}
      <section id="our-story" className="rounded-xl border border-line bg-white px-6 py-16 md:px-10 lg:py-24">
        <div className="grid items-stretch gap-12 lg:grid-cols-12">
          {/* Left Column: Narrative & Founder Quote */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-ice px-3 py-1 font-display text-label-sm font-semibold tracking-wider text-primary uppercase">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                Origin Narrative
              </div>
              <h2 className="mt-4 font-display text-headline-xl-mobile font-bold tracking-tight text-ink md:text-headline-xl">
                Our Story
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-body-md leading-relaxed text-ink-soft">
                <p className="text-body-lg font-medium text-ink">
                  ZeroBusy was born from a simple observation: too many talented business owners were spending countless
                  hours on repetitive tasks instead of growing their businesses.
                </p>
                <p>
                  We saw entrepreneurs drowning in manual workflows, spending late nights on data entry, and missing
                  opportunities because they were stuck in the operational weeds.
                </p>
                <p>
                  That&apos;s when we decided to build ZeroBusy — to give business owners their time back through intelligent
                  automation that actually works.
                </p>
              </div>
            </div>

            {/* Founder Quote Card */}
            <div className="card mt-8 border-line/80 bg-canvas p-6">
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                  </svg>
                </span>
                <div>
                  <p className="text-body-md italic text-ink">
                    &ldquo;Human talent should be spent on creativity, strategy, and client relationships. Everything else can
                    and should run deterministically.&rdquo;
                  </p>
                  <p className="mt-2 font-display text-label-sm font-bold text-ink">
                    The ZeroBusy Engineering Collective
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission Card + Workflow Visualizer */}
          <div className="flex flex-col gap-6 lg:col-span-6">
            {/* Elevated Mission Card */}
            <div className="card relative overflow-hidden p-6 md:p-8">
              <div className="pointer-events-none absolute -top-8 -right-8 h-36 w-36 rounded-full bg-ice blur-2xl" />
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-primary text-white shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
                  </svg>
                </span>
                <span className="rounded-full bg-canvas px-3 py-1 font-mono text-code-sm text-ink-muted">
                  SYS.INIT // CORE_MISSION
                </span>
              </div>

              <h3 className="mt-5 font-display text-headline-md font-bold text-ink">
                Our Mission
              </h3>
              <p className="mt-2 text-body-md leading-relaxed text-ink-soft">
                To transform how digital businesses operate by making AI automation accessible, practical, and genuinely
                helpful for every entrepreneur.
              </p>

              {/* Dynamic Micro-Stats Grid */}
              <div className="mt-6 grid grid-cols-1 gap-3 rounded-xl bg-canvas p-3 sm:grid-cols-3">
                <div className="rounded-lg bg-white p-3 shadow-xs">
                  <span className="flex items-center gap-1.5 font-display text-label-sm font-bold text-success">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    100%
                  </span>
                  <span className="block font-display text-label-sm font-semibold text-ink">Deterministic AI</span>
                  <span className="block text-[11px] text-ink-muted">Zero hallucinations</span>
                </div>

                <div className="rounded-lg bg-white p-3 shadow-xs">
                  <span className="flex items-center gap-1.5 font-display text-label-sm font-bold text-primary">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    1,450+
                  </span>
                  <span className="block font-display text-label-sm font-semibold text-ink">Hours Saved / Mo</span>
                  <span className="block text-[11px] text-ink-muted">Across current clients</span>
                </div>

                <div className="rounded-lg bg-white p-3 shadow-xs">
                  <span className="flex items-center gap-1.5 font-display text-label-sm font-bold text-tertiary">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                    </svg>
                    24/7
                  </span>
                  <span className="block font-display text-label-sm font-semibold text-ink">Resilient Ops</span>
                  <span className="block text-[11px] text-ink-muted">Self-healing pipelines</span>
                </div>
              </div>
            </div>

            {/* High-Craft Workflow Node Visualizer */}
            <div className="flex flex-col justify-between rounded-2xl bg-navy p-5 text-white shadow-card md:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-red-500" />
                  <span className="size-2.5 rounded-full bg-amber-400" />
                  <span className="size-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-mono text-code-sm text-white/50">pipeline_execution_live.sh</span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-0.5 font-mono text-[11px] text-emerald-400">
                  <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                  ACTIVE NODE
                </span>
              </div>

              {/* 3 Pipeline Nodes */}
              <div className="flex flex-col items-center justify-between gap-2.5 py-4 sm:flex-row">
                {/* Node 1 */}
                <div className="flex w-full flex-1 items-center gap-3 rounded-lg border border-white/5 bg-white/5 p-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-md bg-white/10 text-secondary">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] text-white/50 uppercase">INPUT STREAM</p>
                    <p className="truncate font-display text-label-sm font-medium text-white">Inquiries &amp; Orders</p>
                  </div>
                </div>

                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden text-white/30 sm:block" aria-hidden>
                  <polyline points="9 18 15 12 9 6" />
                </svg>

                {/* Node 2 */}
                <div className="flex w-full flex-1 items-center gap-3 rounded-lg border border-primary/40 bg-primary/20 p-3 shadow-[0_0_16px_rgb(0_128_255/0.2)]">
                  <span className="grid size-8 shrink-0 place-items-center rounded-md bg-primary text-white">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] text-secondary uppercase">ZEROBUSY ENGINE</p>
                    <p className="truncate font-display text-label-sm font-medium text-white">Auto-Triaged &amp; Processed</p>
                  </div>
                </div>

                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden text-white/30 sm:block" aria-hidden>
                  <polyline points="9 18 15 12 9 6" />
                </svg>

                {/* Node 3 */}
                <div className="flex w-full flex-1 items-center gap-3 rounded-lg border border-white/5 bg-white/5 p-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-md bg-emerald-500/20 text-emerald-400">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] text-white/50 uppercase">RESOLVED</p>
                    <p className="truncate font-display text-label-sm font-medium text-white">Revenue Locked</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-3 font-mono text-[11px] text-white/50">
                <span>Latency: 142ms</span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Verified Execution
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. OUR VALUES SECTION ===== */}
      <section className="overflow-hidden rounded-xl border border-line bg-canvas px-6 py-16 md:px-10 lg:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-ice px-3 py-1 font-display text-label-sm font-semibold tracking-wider text-primary uppercase">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Guiding Tenets
          </div>
          <h2 className="mt-4 font-display text-headline-xl-mobile font-bold tracking-tight text-ink md:text-headline-xl">
            Our Values
          </h2>
          <p className="mt-3 text-body-lg text-ink-soft">
            The principles that guide everything we architect, build, and support.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((val) => (
            <div
              key={val.title}
              className="card group flex flex-col justify-between p-6 transition md:p-8"
            >
              <div>
                <span className="grid size-14 place-items-center rounded-xl bg-ice text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                  {val.icon}
                </span>
                <div className="mt-6 font-display text-label-sm font-bold tracking-wider text-primary uppercase">
                  {val.num} // {val.tag}
                </div>
                <h3 className="mt-2 font-display text-headline-md font-bold text-ink">
                  {val.title}
                </h3>
                <p className="mt-3 text-body-md text-pretty text-ink-soft leading-relaxed">
                  {val.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-lg bg-canvas p-3 font-mono text-code-sm text-ink-soft">
                <span>{val.metricLabel}</span>
                <span className="font-semibold text-primary">{val.metricValue}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 5. WHY CHOOSE ZEROBUSY? ===== */}
      <section className="rounded-xl border border-line bg-white px-6 py-16 md:px-10 lg:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-ice px-3 py-1 font-display text-label-sm font-semibold tracking-wider text-primary uppercase">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            The ZeroBusy Edge
          </div>
          <h2 className="mt-4 font-display text-headline-xl-mobile font-bold tracking-tight text-ink md:text-headline-xl">
            Why Choose ZeroBusy?
          </h2>
          <p className="mt-3 text-body-lg text-ink-soft">
            Engineering autonomous digital workflows that deliver measurable ROI from week one.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="card flex flex-col justify-between p-6 transition md:p-8"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-xl bg-ice text-primary">
                    {pillar.icon}
                  </span>
                  <span className="rounded-full bg-canvas px-3 py-1 font-mono text-code-sm text-ink-muted">
                    PILLAR // {pillar.id}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-headline-md font-bold text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-body-md text-pretty text-ink-soft leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <ul className="mt-6 flex flex-col gap-2.5 rounded-xl bg-canvas p-4">
                {pillar.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2.5">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-600">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="font-display text-label-md font-medium text-ink">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 6. READY TO GET STARTED / PRE-FOOTER CTA ===== */}
      <section className="relative overflow-hidden rounded-2xl bg-linear-135 from-primary via-primary-hover to-tertiary p-8 text-center text-white shadow-xl md:p-14">
        {/* Decorative blur shapes */}
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -top-10 -left-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 backdrop-blur-md">
            <span className="size-2 animate-ping rounded-full bg-white" />
            <span className="font-display text-label-sm font-semibold tracking-wider text-white uppercase">
              30-MINUTE FREE OPERATIONAL AUDIT
            </span>
          </div>

          <h2 className="mt-6 font-display text-headline-xl-mobile font-bold tracking-tight text-white md:text-headline-xl">
            Ready to Get Started?
          </h2>

          <p className="mt-4 max-w-xl text-body-md text-pretty text-white/90 md:text-body-lg">
            Let&apos;s discuss how ZeroBusy can transform your business operations and reclaim hours of executive focus every
            week.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
              Schedule a Free Consultation
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-body-sm text-white/80">
            <div className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>No obligations</span>
            </div>
            <span className="opacity-40">•</span>
            <div className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                <line x1="8" y1="2" x2="8" y2="18" />
                <line x1="16" y1="6" x2="16" y2="22" />
              </svg>
              <span>Immediate roadmap</span>
            </div>
            <span className="opacity-40">•</span>
            <div className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <span>Fast turnaround</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
