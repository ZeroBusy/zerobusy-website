"use client";

import { useState } from "react";
import Link from "next/link";

const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1m4lcnMMoopwFkC3IOVU42sT9zC9Q5QptB8tlJp33t0a3tCYa3QAZrSHOWmYFuM5HdwjCT5egR";

/* ===== FAQ Data ===== */
const faqs = [
  {
    question: "How long does implementation take?",
    answer:
      "Most automation projects are completed within 2–6 weeks, depending on complexity. We'll provide a detailed timeline during our free consultation.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes! We offer 24/7 monitoring and support to ensure your automations run smoothly. We also provide training for your team to handle day-to-day operations.",
  },
  {
    question: "What's included in the free consultation?",
    answer:
      "We'll analyze your current workflows, identify automation opportunities, and provide a custom roadmap with ROI projections — all at no cost.",
  },
  {
    question: "Can you integrate with our existing tools?",
    answer:
      "Absolutely! We work with 1,000+ tools and platforms. If a native connector doesn't exist, we'll build a custom integration via API or webhook.",
  },
];

/* ===== Metrics Data ===== */
const metrics = [
  { value: "24h", label: "Guaranteed Response", sub: "Direct senior engineering reply", accent: true },
  { value: "2–6w", label: "Deployment Time", sub: "Rapid production execution", accent: false },
  { value: "1,000+", label: "Tool Integrations", sub: "APIs, Webhooks & SDKs", accent: true },
  { value: "99.9%", label: "Pipeline Reliability", sub: "Deterministic AI workflows", accent: false },
];

/* ===== Icons ===== */
const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-primary" aria-hidden>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const CheckCircle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success shrink-0" aria-hidden>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const PersonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink-muted shrink-0" aria-hidden>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const AtIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink-muted shrink-0" aria-hidden>
    <circle cx="12" cy="12" r="4" />
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
  </svg>
);

const BuildingIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink-muted shrink-0" aria-hidden>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18ZM6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2M10 6h4M10 10h4M10 14h4M10 18h4" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink-muted shrink-0" aria-hidden>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const HubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink-muted shrink-0" aria-hidden>
    <circle cx="12" cy="12" r="3" />
    <circle cx="12" cy="3" r="1.5" />
    <circle cx="21" cy="12" r="1.5" />
    <circle cx="12" cy="21" r="1.5" />
    <circle cx="3" cy="12" r="1.5" />
    <line x1="12" y1="6" x2="12" y2="9" />
    <line x1="15" y1="12" x2="19.5" y2="12" />
    <line x1="12" y1="15" x2="12" y2="19.5" />
    <line x1="9" y1="12" x2="4.5" y2="12" />
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const BoltIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="opacity-10" aria-hidden>
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
  </svg>
);

/* ===== Page Component ===== */
export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [copied, setCopied] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("sending");
    // Simulate network call
    setTimeout(() => {
      setFormStatus("sent");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormStatus("idle"), 4000);
    }, 800);
  }

  function handleCopyEmail() {
    navigator.clipboard.writeText("automate@zerobusy.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="flex flex-col gap-6">
      {/* ===== HERO ===== */}
      <section className="bg-hero-grid relative mt-4 overflow-hidden rounded-xl border border-line px-6 py-16 text-center md:px-10 lg:py-20">
        <div className="pointer-events-none absolute top-10 left-1/2 -z-10 h-72 w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/90 px-4 py-1.5 shadow-card">
            <span className="size-2 animate-pulse rounded-full bg-primary" />
            <span className="font-display text-label-sm font-semibold tracking-wider text-primary uppercase">
              Get In Touch
            </span>
          </div>

          <h1 className="mt-6 font-display text-display-hero-mobile font-extrabold tracking-tight text-ink md:text-display-hero">
            Let&apos;s Connect &amp;{" "}
            <span className="bg-linear-135 from-primary to-secondary bg-clip-text text-transparent">Automate</span>
          </h1>

          <p className="mt-6 max-w-2xl text-body-md text-pretty text-ink-soft md:text-body-lg">
            Ready to transform your business with AI automation? Let&apos;s discuss how we can help you streamline, automate, and scale.
          </p>
        </div>
      </section>

      {/* ===== CONTACT GRID ===== */}
      <section className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
        {/* ─── Left: Form ─── */}
        <div className="lg:col-span-7 rounded-xl border border-line bg-white p-6 shadow-card md:p-8">
          <div className="mb-6 flex items-center justify-between pb-2">
            <div>
              <span className="font-display text-label-sm font-bold tracking-wider text-primary uppercase">
                Direct Dispatch
              </span>
              <h2 className="mt-1 font-display text-headline-md font-bold text-ink">Send us a message</h2>
            </div>
            <div className="hidden items-center gap-1.5 rounded-lg bg-canvas px-3 py-1.5 sm:flex">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success" aria-hidden>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="font-display text-label-sm text-ink-muted">SLA Active</span>
            </div>
          </div>

          <form className="flex flex-col gap-4" id="contact-form" onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fullName" className="font-display text-label-md font-semibold text-ink">
                  Full Name <span className="font-bold text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2"><PersonIcon /></span>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="e.g. Michael Thorne"
                    className="w-full rounded-lg bg-canvas py-3 pl-11 pr-3.5 text-body-md text-ink outline-none placeholder:text-ink-muted transition-all focus:bg-white focus:shadow-[0_0_0_2px_rgba(0,128,255,0.25)]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-display text-label-md font-semibold text-ink">
                  Email Address <span className="font-bold text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2"><AtIcon /></span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="michael@company.com"
                    className="w-full rounded-lg bg-canvas py-3 pl-11 pr-3.5 text-body-md text-ink outline-none placeholder:text-ink-muted transition-all focus:bg-white focus:shadow-[0_0_0_2px_rgba(0,128,255,0.25)]"
                  />
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="company" className="font-display text-label-md font-semibold text-ink">Company Name</label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2"><BuildingIcon /></span>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="e.g. Acme Corp"
                    className="w-full rounded-lg bg-canvas py-3 pl-11 pr-3.5 text-body-md text-ink outline-none placeholder:text-ink-muted transition-all focus:bg-white focus:shadow-[0_0_0_2px_rgba(0,128,255,0.25)]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="font-display text-label-md font-semibold text-ink">Phone Number</label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2"><PhoneIcon /></span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 019-2834"
                    className="w-full rounded-lg bg-canvas py-3 pl-11 pr-3.5 text-body-md text-ink outline-none placeholder:text-ink-muted transition-all focus:bg-white focus:shadow-[0_0_0_2px_rgba(0,128,255,0.25)]"
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Service Select */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="service" className="font-display text-label-md font-semibold text-ink">Service Interested In</label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2"><HubIcon /></span>
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className="w-full appearance-none rounded-lg bg-canvas py-3 pl-11 pr-10 text-body-md text-ink outline-none transition-all focus:bg-white focus:shadow-[0_0_0_2px_rgba(0,128,255,0.25)] cursor-pointer"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Workflow Automation">Workflow Automation</option>
                  <option value="AI Agents">AI Agents</option>
                  <option value="Chatbots">Chatbots</option>
                  <option value="Ecommerce Automation">Ecommerce Automation</option>
                  <option value="Custom Solution">Custom Solution</option>
                  <option value="Free Consultation">Free Consultation</option>
                </select>
                <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-muted">
                  <ChevronDown />
                </span>
              </div>
            </div>

            {/* Row 4: Message */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-display text-label-md font-semibold text-ink">
                Message <span className="font-bold text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell us about your operational bottlenecks and automation goals..."
                className="w-full resize-none rounded-lg bg-canvas p-3.5 text-body-md text-ink outline-none placeholder:text-ink-muted transition-all focus:bg-white focus:shadow-[0_0_0_2px_rgba(0,128,255,0.25)]"
              />
            </div>

            {/* Submit + Trust */}
            <div className="flex flex-col justify-between gap-3 pt-1 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={formStatus !== "idle"}
                className="btn btn-primary rounded-lg shadow-[0_4px_16px_rgba(0,128,255,0.28)] hover:shadow-[0_6px_20px_rgba(0,128,255,0.36)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === "sending" ? (
                  <>
                    <span className="inline-block size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending…
                  </>
                ) : formStatus === "sent" ? (
                  <>
                    <CheckCircle />
                    Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <SendIcon />
                  </>
                )}
              </button>
              <div className="flex items-center gap-1.5 text-body-sm text-ink-muted">
                <LockIcon />
                <span>24-hour response guarantee · Strictly confidential</span>
              </div>
            </div>

            {/* Success Feedback */}
            {formStatus === "sent" && (
              <div className="mt-1 flex items-center gap-2 rounded-lg bg-ice p-3 text-body-sm text-primary">
                <CheckCircle />
                <span>Message recorded! Our senior automation architect will review and respond within 24 hours.</span>
              </div>
            )}
          </form>
        </div>

        {/* ─── Right: Info Sidebar ─── */}
        <div className="flex flex-col gap-4 lg:col-span-5">
          {/* Intro Card */}
          <div className="rounded-xl border border-line bg-white p-6 shadow-card">
            <span className="font-display text-label-sm font-bold tracking-wider text-primary uppercase">
              Operational Mastery
            </span>
            <h2 className="mt-1 font-display text-headline-md font-bold text-ink">
              Let&apos;s talk about your automation needs
            </h2>
            <p className="mt-2 text-body-md text-ink-soft">
              Ready to eliminate busy work and focus on growing your business? We&apos;re here to help you discover the
              perfect automation solutions for your unique needs.
            </p>
          </div>

          {/* Contact Cards Stack */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {/* Email Card */}
            <div className="flex items-start justify-between gap-3 rounded-xl border border-line bg-white p-4 shadow-card transition hover:shadow-hover">
              <div className="flex items-start gap-3">
                <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-ice text-primary">
                  <MailIcon />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-label-sm font-semibold tracking-wider text-ink-muted uppercase">Email Us</span>
                  <a href="mailto:automate@zerobusy.com" className="mt-0.5 font-display text-headline-sm font-bold text-ink transition-colors hover:text-primary">
                    tanay@zerobusy.com
                  </a>
                  <span className="mt-0.5 text-body-sm text-ink-muted">We&apos;ll respond within 24 hours</span>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                title="Copy email"
                className="flex shrink-0 items-center gap-1 rounded-lg bg-canvas px-2.5 py-1.5 text-label-sm text-ink-muted transition-colors hover:bg-ice hover:text-primary"
              >
                <CopyIcon />
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            {/* Schedule a Call Card */}
            <div className="flex items-start justify-between gap-3 rounded-xl border border-line bg-white p-4 shadow-card transition hover:shadow-hover">
              <div className="flex items-start gap-3">
                <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-ice text-primary">
                  <CalendarIcon />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-label-sm font-semibold tracking-wider text-ink-muted uppercase">Schedule a Call</span>
                  <span className="mt-0.5 font-display text-headline-sm font-bold text-ink">Book a free 30-min consultation</span>
                  <span className="mt-0.5 text-body-sm text-ink-muted">Live architecture roadmap review</span>
                </div>
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center gap-1 rounded-lg bg-primary px-3.5 py-2 font-display text-label-md font-semibold text-white transition-all hover:bg-primary-hover"
              >
                Let&apos;s connect
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>
            </div>

            {/* Location Card */}
            <div className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 shadow-card">
              <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-ice text-primary">
                <GlobeIcon />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-label-sm font-semibold tracking-wider text-ink-muted uppercase">Location</span>
                <span className="mt-0.5 font-display text-headline-sm font-bold text-ink">Remote-first company</span>
                <span className="mt-0.5 text-body-sm text-ink-muted">Serving clients worldwide across all primary time zones</span>
              </div>
            </div>

            {/* Quick Response Card */}
            <div className="flex flex-col gap-2 rounded-xl bg-ice p-4 shadow-card">
              <div className="flex items-center gap-2">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-success" />
                </span>
                <span className="font-display text-label-md font-bold text-ink">Quick Response Guaranteed</span>
              </div>
              <p className="text-body-sm text-ink-soft">
                We typically respond to all inquiries within 24 hours. For urgent matters, mention it in your message
                and we&apos;ll prioritize your request.
              </p>
              <Link href="/services" className="mt-1 inline-flex items-center gap-1 font-display text-label-md font-semibold text-primary transition-colors hover:text-primary-hover">
                View Our Services
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== METRICS STRIP ===== */}
      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="flex flex-col items-center rounded-xl border border-line bg-white p-6 text-center shadow-card">
            <span className={`font-display text-headline-xl font-extrabold ${m.accent ? "text-primary" : "text-ink"}`}>
              {m.value}
            </span>
            <span className="mt-1 font-display text-label-md font-bold text-ink">{m.label}</span>
            <span className="mt-0.5 text-body-sm text-ink-muted">{m.sub}</span>
          </div>
        ))}
      </section>

      {/* ===== FAQ ACCORDION ===== */}
      <section className="rounded-xl border border-line bg-white px-6 py-16 md:px-10">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-4 py-1.5 shadow-card">
            <span className="size-2 rounded-full bg-primary" />
            <span className="font-display text-label-sm font-semibold tracking-wider text-primary uppercase">
              Got Questions?
            </span>
          </div>
          <h2 className="mt-4 font-display text-headline-xl-mobile font-bold tracking-tight text-ink md:text-headline-xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-body-md text-ink-soft">
            Everything you need to know about our AI automation workflows, timelines, and systems integration.
          </p>
        </div>

        <div className="mx-auto flex max-w-3xl flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className="overflow-hidden rounded-xl border border-line bg-canvas shadow-card transition-all">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none"
                >
                  <span className="font-display text-headline-sm font-semibold text-ink">{faq.question}</span>
                  <div className={`grid size-8 shrink-0 place-items-center rounded-full bg-white text-ink-muted transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown />
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-200 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-body-md text-ink-soft">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== PRE-FOOTER CTA ===== */}
      <section className="relative overflow-hidden rounded-xl bg-primary px-6 py-12 text-white shadow-[0_12px_36px_rgba(0,128,255,0.22)] md:px-10 lg:py-16">
        <div className="pointer-events-none absolute -right-10 -bottom-10 h-72 w-72 rounded-full bg-white/10 blur-xl" />
        <div className="pointer-events-none absolute top-8 right-20">
          <BoltIcon />
        </div>

        <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="flex max-w-xl flex-col">
            <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 font-display text-label-sm font-semibold">
              <ClockIcon />
              Zero Commitment Required
            </div>
            <h2 className="mt-4 font-display text-headline-xl-mobile font-bold tracking-tight md:text-headline-xl">
              Ready to Get Started?
            </h2>
            <p className="mt-2 text-body-lg text-white/90">
              Book a 30-minute free operational audit with our AI engineers. We&apos;ll map your automations and build a
              deterministic roadmap to eliminate busywork.
            </p>
          </div>

          <div className="flex w-full shrink-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:w-auto">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn rounded-lg bg-white font-bold text-primary shadow-lg transition-all hover:bg-canvas hover:shadow-xl"
            >
              <CalendarIcon />
              Book a Free Call
            </a>
            <a
              href="#contact-form"
              className="btn rounded-lg bg-white/10 font-semibold text-white transition-all hover:bg-white/20"
            >
              Send Message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
