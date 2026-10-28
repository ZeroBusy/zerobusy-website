import type { Metadata } from "next";
import Link from "next/link";
import ClientMarquee from "@/components/landing/ClientMarquee";
import Cta from "@/components/landing/Cta";
import Reveal from "@/components/landing/Reveal";
import { pageMetadata } from "@/lib/site";
import { BOOKING_PATH } from "@/lib/booking";

export const metadata: Metadata = pageMetadata({
  title: "About Us | ZeroBusy",
  description:
    "ZeroBusy builds AI automation systems that take robot work off your team's plate, and stays to keep them running. Meet founder Tanay Patwa.",
  path: "/about",
});

const FOUNDER_PORTRAIT = "/founder/tanay-portrait.webp";
const FOUNDER_AVATAR = "/founder/tanay-avatar.webp";

/** Our Values + Why Choose ZeroBusy, merged into three points. */
const principles = [
  {
    title: "We judge a build by the hours it gives back",
    body: "Not by how clever it is. If a simple fix does the job, you get the simple fix.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7.5V12l3 2" />
      </>
    ),
  },
  {
    title: "We stay after launch",
    body: "Your business changes, so the system has to keep up. We watch it, fix what breaks and build the next thing when you are ready.",
    icon: (
      <>
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 16h5v5" />
      </>
    ),
  },
  {
    title: "We are careful with AI",
    body: "We use it where it earns its place, and keep a person checking anything that touches money, personal data or contracts.",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* ===== 1. HERO ===== */}
      <section className="bg-hero-grid relative mt-4 overflow-hidden rounded-xl border border-line px-6 py-16 text-center md:px-10 lg:py-24">
        <div className="pointer-events-none absolute top-10 left-1/2 -z-10 h-72 w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/90 px-4 py-1.5 shadow-card">
            <span className="size-2 animate-pulse rounded-full bg-primary" />
            <span className="font-display text-label-sm font-semibold tracking-wider text-primary uppercase">
              Our story &amp; purpose
            </span>
          </div>

          <h1 className="mt-6 font-display text-display-hero-mobile font-extrabold tracking-tight text-ink md:text-display-hero">
            About <span className="bg-linear-135 from-primary to-secondary bg-clip-text text-transparent">ZeroBusy</span>
          </h1>

          <p className="mt-6 max-w-2xl text-body-md text-pretty text-ink-soft md:text-body-lg">
            We build the systems that take busywork off your team&apos;s plate, and we stay to keep them running.
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Link href={BOOKING_PATH} className="btn btn-primary w-full rounded-base sm:w-auto">
              Book a free 30-minute call
            </Link>
            <a href="#our-story" className="btn btn-secondary w-full rounded-base sm:w-auto">
              Read our story
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </a>
          </div>

          {/* The only place 1,450+ appears on this page. */}
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

      {/* ===== 2. CLIENTS - same marquee as the homepage ===== */}
      <section className="overflow-hidden rounded-xl border border-line">
        <ClientMarquee className="bg-white" />
      </section>

      {/* ===== 3. ORIGIN STORY ===== */}
      <section id="our-story" className="scroll-mt-28 rounded-xl border border-line bg-white px-6 py-12 md:px-10 md:py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left: the story, in Tanay's voice */}
          <Reveal className="min-w-0 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-ice px-3 py-1 font-display text-label-sm font-semibold tracking-wider text-primary uppercase">
              Why ZeroBusy exists
            </span>
            <h2 className="mt-4 font-display text-headline-xl-mobile font-bold tracking-tight text-pretty text-ink md:text-headline-xl">
              I got tired of watching good people do robot work.
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-body-md leading-relaxed text-pretty text-ink-soft md:text-body-lg">
              <p>
                In 2024, I was a generalist at a well-funded startup. Even with all that access to capital, the team lost
                hours every week to work that software could do.
              </p>
              <p>
                Every business owner I met had the same problem. They were great at their work, but their week went to
                copying data, chasing leads and fixing spreadsheets.
              </p>
              <p>So I started building small systems to take that work off their plate.</p>
              <p className="font-medium text-ink">
                ZeroBusy is that work, done properly. We build it, stay to keep it running, and you get your week back.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 border-t border-line pt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={FOUNDER_AVATAR} alt="" className="size-16 rounded-full object-cover" />
              <span>
                <span className="block font-display text-label-md text-ink">Tanay Patwa</span>
                <span className="block text-body-sm text-ink-muted">Founder, ZeroBusy</span>
              </span>
            </div>
          </Reveal>

          {/* Right: founder portrait (replaces the mission card and terminal graphic) */}
          <Reveal className="min-w-0 lg:col-span-5">
            <figure className="mx-auto max-w-sm">
              <div className="aspect-4/5 overflow-hidden rounded-2xl border border-line bg-white shadow-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={FOUNDER_PORTRAIT}
                  alt="Tanay Patwa, founder of ZeroBusy"
                  className="size-full bg-white object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-body-sm text-ink-muted">Tanay Patwa, Founder</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ===== 4. WHAT TO EXPECT (Our Values + Why Choose ZeroBusy, merged) ===== */}
      <section className="rounded-xl border border-line bg-canvas px-6 py-12 md:px-10 md:py-16 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-ice px-4 py-1.5 font-display text-label-sm text-primary">
            <span className="size-1.5 rounded-full bg-secondary" />
            WHAT TO EXPECT
          </span>
          <h2 className="mt-5 text-headline-xl-mobile text-ink md:text-headline-xl">What working with us looks like</h2>
          <p className="mt-4 text-body-md text-ink-soft md:text-body-lg">Three things we hold ourselves to on every build.</p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {principles.map((p) => (
            <Reveal key={p.title}>
              <article className="card h-full p-6 md:p-8">
                <span className="grid size-11 place-items-center rounded-md bg-primary/10 text-primary">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {p.icon}
                  </svg>
                </span>
                <h3 className="mt-5 text-headline-sm text-pretty text-ink">{p.title}</h3>
                <p className="mt-2 text-body-md text-pretty text-ink-soft">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Cta />
    </div>
  );
}
