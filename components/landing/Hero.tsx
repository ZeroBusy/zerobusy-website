import Link from "next/link";
import ClientMarquee from "./ClientMarquee";
import Reveal from "./Reveal";
import RoiEstimator from "./RoiEstimator";
import { BOOKING_PATH } from "@/lib/booking";

export default function Hero() {
  return (
    // ===== Start: Hero section =====
    <section id="overview" className="bg-hero-grid relative mt-4 overflow-hidden rounded-xl border border-line">
      <div className="grid items-center gap-12 px-6 py-16 md:px-10 lg:grid-cols-2 lg:px-14 lg:py-24">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/90 px-4 py-2 shadow-card">
            <span className="size-2 shrink-0 animate-pulse-dot rounded-full bg-secondary" />
            <span className="font-display text-label-sm text-ink">Automation systems to help your business handle scale</span>
          </div>

          <h1 className="mt-6 text-display-hero-mobile text-ink md:text-display-hero">
            Grow without{" "}
            <span className="bg-linear-135 from-primary to-secondary bg-clip-text text-transparent">hiring.</span>
          </h1>

          <p className="mt-6 max-w-xl text-body-md text-pretty text-ink-soft md:text-body-lg">
            We automate the busywork that slows your team down: lead replies, data entry, weekly reports, custom
            agents and more. You take on more work with the team you already have.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={BOOKING_PATH} className="btn btn-primary rounded-base">
              Book a free 30-minute call
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7.5V12l3 2" strokeLinecap="round" />
              </svg>
            </Link>
            <a href="#proof" className="btn btn-secondary rounded-base">
              See client results
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h13M12 5.5 18.5 12 12 18.5" />
              </svg>
            </a>
          </div>

          <p className="mt-10 max-w-xl border-t border-line pt-8 text-body-md text-pretty text-ink-soft">
            Built for teams that run on software: agencies, clinics, stores, consultants, real estate.
          </p>
        </Reveal>

        <Reveal>
          <RoiEstimator />
        </Reveal>
      </div>

      <ClientMarquee />
    </section>
  );
}
