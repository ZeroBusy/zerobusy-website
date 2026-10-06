"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    title: "We look at how you work",
    description:
      "We sit with you and your team and map where the time actually goes — the spreadsheets, the inbox, the handoffs, the things everyone has stopped noticing because that is just how it is done.",
    badge: "We map your day",
    icon: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="M16 16l4.5 4.5" />
        <path d="M8 11h6" />
        <path d="M11 8v6" />
      </>
    ),
  },
  {
    title: "We pick what to fix first",
    description:
      "Not everything is worth automating. We rank what we found by how much time it gives back and how fast we can ship it, then start with the one or two that matter most. You see the list before we touch anything.",
    badge: "Biggest win first",
    icon: (
      <>
        <path d="M4 6h16" />
        <path d="M7 12h10" />
        <path d="M10 18h4" />
      </>
    ),
  },
  {
    title: "We build it",
    description:
      "We build it inside the tools you already use, so nobody has to learn a new system. You get it written down in plain language too, so you are never stuck with something only we understand.",
    badge: "Built into your tools",
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
  },
  {
    title: "We test it, then switch it on",
    description:
      "It gets tested away from your live data before anyone on your team touches it. Once it is running, we watch it — so if something breaks, we usually know before you do.",
    badge: "Tested before it goes live",
    icon: (
      <>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </>
    ),
  },
  {
    title: "It runs. We keep it running.",
    description:
      "Your team stops doing the manual work. We fix what breaks, handle the odd cases that turn up once it meets the real world, and build the next thing when you are ready for it.",
    badge: "We keep it running",
    icon: (
      <>
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 16h5v5" />
      </>
    ),
  },
];

export default function Journey() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lineHeight, setLineHeight] = useState(0);
  const [progress, setProgress] = useState(0);
  const [activeSteps, setActiveSteps] = useState<boolean[]>([]);

  useEffect(() => {
    let rafId: number | null = null;

    const update = () => {
      const timeline = timelineRef.current;
      if (!timeline) return;

      const validSteps = stepRefs.current.filter(Boolean) as HTMLDivElement[];
      if (validSteps.length === 0) return;

      const firstStep = validSteps[0];
      const lastStep = validSteps[validSteps.length - 1];

      // Distance from center of first step circle to center of last step circle
      const totalTrackHeight = lastStep.offsetTop - firstStep.offsetTop;
      setLineHeight(totalTrackHeight);

      const vh = window.innerHeight;
      // Trigger threshold: 72% down viewport
      const triggerY = vh * 0.72;

      const firstCircleY = firstStep.getBoundingClientRect().top + 23;
      const lastCircleY = lastStep.getBoundingClientRect().top + 23;
      const totalDist = lastCircleY - firstCircleY;

      if (totalDist > 0) {
        const rawProgress = (triggerY - firstCircleY) / totalDist;
        setProgress(Math.min(1, Math.max(0, rawProgress)));
      }

      setActiveSteps(
        steps.map((_, i) => {
          const stepEl = stepRefs.current[i];
          if (!stepEl) return false;
          const circleCenterY = stepEl.getBoundingClientRect().top + 23;
          return circleCenterY <= triggerY;
        })
      );
    };

    const onScrollOrResize = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(update);
    };

    update();
    const timer = setTimeout(update, 80);

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && timelineRef.current) {
      resizeObserver = new ResizeObserver(() => {
        onScrollOrResize();
      });
      resizeObserver.observe(timelineRef.current);
    }

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      clearTimeout(timer);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  return (
    // ===== Start: Journey section =====
    <section className="mt-6 overflow-hidden rounded-xl bg-ice px-6 py-16 md:px-10 lg:py-24">
      <SectionHeader
        eyebrow="HOW IT WORKS"
        title={
          <>
            We start small,
            <br />
            <span className="text-primary">then build from there</span>
          </>
        }
        description="No ripping out what you already have. We find the job eating the most time, fix that one, and go from there."
      />

      <div ref={timelineRef} className="relative mx-auto mt-12 max-w-4xl lg:mt-16">
        {/* Background track connecting first circle to last circle */}
        <div
          className="absolute left-[23px] -translate-x-1/2 w-[3px] rounded-full bg-outline/35"
          style={{
            top: "23px",
            height: lineHeight > 0 ? `${lineHeight}px` : "calc(100% - 46px)",
          }}
        />

        {/* Dynamic active progress line */}
        <div
          className="absolute left-[23px] -translate-x-1/2 w-[3px] rounded-full bg-linear-to-b from-secondary to-primary shadow-[0_0_16px_rgb(0_194_255/.5)] transition-[height] duration-150 ease-out"
          style={{
            top: "23px",
            height: `${progress * lineHeight}px`,
          }}
        />

        {steps.map((step, i) => {
          const active = activeSteps[i];
          return (
            <div
              key={step.title}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className={`relative grid grid-cols-[46px_1fr] items-start gap-4 pb-8 transition-all duration-500 last:pb-0 md:gap-6 md:pb-10 ${
                active ? "translate-y-0 opacity-100" : "translate-y-2 opacity-50"
              }`}
            >
              <span
                className={`relative z-10 grid size-[46px] shrink-0 place-items-center rounded-full border-3 transition-all duration-400 ${
                  active
                    ? "border-primary bg-primary text-white shadow-hover scale-105 ring-4 ring-primary/15"
                    : "border-line bg-white text-ink-muted scale-100"
                }`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  {step.icon}
                </svg>
              </span>

              <div
                className={`card p-6 transition-all duration-500 md:p-8 ${
                  active
                    ? "border-primary/30 shadow-hover ring-1 ring-primary/10"
                    : "border-line/70"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`inline-block rounded-full px-3 py-1 font-display text-label-sm transition-colors duration-300 ${
                      active
                        ? "bg-primary/10 font-semibold text-primary"
                        : "bg-ice text-ink-muted"
                    }`}
                  >
                    STEP {i + 1}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line/60 bg-canvas px-2.5 py-1 text-label-sm text-ink-soft">
                    <span
                      className={`size-1.5 rounded-full transition-colors duration-300 ${
                        active ? "bg-primary" : "bg-outline"
                      }`}
                    />
                    {step.badge}
                  </span>
                </div>

                <h3 className="mt-4 mb-2 text-headline-md text-ink">{step.title}</h3>
                <p className="max-w-xl text-body-md text-pretty text-ink-soft">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Replaces the old "deterministic" badge - the reliability point in plain words. */}
      <div className="mx-auto mt-12 max-w-4xl rounded-xl border border-line bg-white p-6 shadow-card md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
          <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </span>
          <div>
            <h3 className="text-headline-md text-ink">Careful with AI where it counts</h3>
            <p className="mt-2 max-w-2xl text-body-md text-pretty text-ink-soft">
              For work like money or legal papers, a wrong answer costs real money. So we use AI in a controlled way
              there. It follows set rules, does the same thing every time, and a person approves what matters. Where a
              mistake is cheap, we let it move faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
