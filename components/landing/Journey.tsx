"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    title: "Discover the Operational Leaks",
    description:
      "We start by mapping your current processes to identify bottlenecks, manual touch points, and hidden inefficiencies that are costing you time and money",
    icon: (
      <>
        <circle cx="11" cy="11" r="6.6" />
        <path d="M16 16l4.5 4.5" />
      </>
    ),
  },
  {
    title: "Architect Your Automated Infrastructure",
    description:
      "Based on our findings, we design a resilient, scalable automation architecture that integrates seamlessly with your existing tools and workflows.",
    icon: (
      <>
        <path d="M4 20V9l8-5 8 5v11" />
        <path d="M9 20v-6h6v6" />
      </>
    ),
  },
  {
    title: "Deploy, Test & Document",
    description:
      "Every workflow ships through a sandbox, gets stress-tested against real data, and is handed over with documentation your team can actually read.",
    icon: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  },
  {
    title: "Own the Autonomy",
    description:
      "You keep the systems, the logic, and the hours. We stay on for monitoring and expansion as your operation grows.",
    icon: (
      <>
        <path d="M4 18 10 12l3.5 3.5L20 9" />
        <path d="M20 14V9h-5" />
      </>
    ),
  },
];

export default function Journey() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [activeSteps, setActiveSteps] = useState<boolean[]>([]);

  useEffect(() => {
    const update = () => {
      const timeline = timelineRef.current;
      if (!timeline) return;
      const rect = timeline.getBoundingClientRect();
      const vh = window.innerHeight;
      const ratio = (vh * 0.75 - rect.top) / (rect.height + vh * 0.35);
      setProgress(Math.min(1, Math.max(0, ratio)));
      setActiveSteps(stepRefs.current.map((step) => !!step && step.getBoundingClientRect().top < vh * 0.82));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    // ===== Start: Journey section =====
    <section className="mt-6 overflow-hidden rounded-xl bg-ice px-6 py-16 md:px-10 lg:py-24">
      <SectionHeader
        eyebrow="THE ZEROBUSY JOURNEY"
        title={
          <>
            We Sell Autonomy,
            <br />
            <span className="text-primary">Not Just Automations</span>
          </>
        }
        description="We empower businesses to operate independently with systems that make growth sustainable and predictable."
      />

      <div ref={timelineRef} className="relative mx-auto mt-12 max-w-4xl pl-1 lg:mt-16">
        <div className="absolute top-2 bottom-2 left-[21px] w-[3px] rounded-full bg-outline/40" />
        <div
          className="absolute top-2 left-[21px] max-h-[calc(100%-1rem)] w-[3px] rounded-full bg-linear-to-b from-secondary to-primary shadow-[0_0_16px_rgb(0_194_255/.45)] transition-[height] duration-200 ease-linear"
          style={{ height: `${progress * 100}%` }}
        />

        {steps.map((step, i) => {
          const active = activeSteps[i];
          return (
            <div
              key={step.title}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className={`relative grid grid-cols-[46px_1fr] gap-4 pb-8 transition-[opacity,translate] duration-500 last:pb-0 md:gap-6 md:pb-10 ${
                active ? "opacity-100" : "translate-y-4.5 opacity-0"
              }`}
            >
              <span
                className={`grid size-[46px] place-items-center rounded-full border-3 transition duration-400 ${
                  active ? "border-primary bg-primary text-white shadow-hover" : "border-line bg-white text-outline"
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {step.icon}
                </svg>
              </span>
              <div className="card px-6 py-5 md:px-8 md:py-6">
                <span className="inline-block rounded-full bg-ice px-3 py-1 font-display text-label-sm text-primary">
                  STEP {i + 1}
                </span>
                <h3 className="mt-4 mb-2 text-headline-md text-ink">{step.title}</h3>
                <p className="max-w-xl text-body-md text-pretty text-ink-soft">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
