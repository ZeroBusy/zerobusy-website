"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import { goodFit, notFit, type NotFitItem } from "./fitCheckContent";
import { BOOKING_PATH } from "@/lib/booking";

type Side = "good" | "not";

function TickIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 13l4.5 4.5L19 7" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

/**
 * Renders one side's list. `visible` drives the scroll-in stagger; `from`
 * sets which edge the column slides in from so the two sides meet in the
 * middle. All motion is disabled under prefers-reduced-motion.
 */
function FitList({
  items,
  tone,
  visible,
  from,
}: {
  items: (string | NotFitItem)[];
  tone: Side;
  visible: boolean;
  from: "left" | "right";
}) {
  const isGood = tone === "good";
  const hidden = from === "left" ? "-translate-x-4 opacity-0" : "translate-x-4 opacity-0";

  return (
    <ul className="grid gap-2.5">
      {items.map((item, i) => (
        <li
          key={typeof item === "string" ? item : item.lead}
          style={{ transitionDelay: visible ? `${i * 60}ms` : "0ms" }}
          className={`flex items-start gap-3 rounded-lg border p-4 transition-[opacity,translate] duration-500 motion-reduce:transition-none motion-reduce:translate-x-0 motion-reduce:opacity-100 ${
            visible ? "translate-x-0 opacity-100" : hidden
          } ${
            isGood
              ? "border-success/25 bg-success/[0.06]"
              : "border-line bg-canvas"
          }`}
        >
          <span
            className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full ${
              isGood ? "bg-success/15 text-success" : "bg-ink-muted/12 text-ink-muted"
            }`}
          >
            {isGood ? <TickIcon /> : <CrossIcon />}
          </span>
          <span className={`text-body-md text-pretty ${isGood ? "text-ink" : "text-ink-soft"}`}>
            {typeof item === "string" ? (
              item
            ) : (
              <>
                <strong className="font-semibold text-ink">{item.lead}</strong> {item.detail}
              </>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function FitCheck() {
  const [side, setSide] = useState<Side>("good");
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    // ===== Start: Fit check section =====
    <section id="fit" className="mt-6 rounded-xl bg-white px-6 py-12 md:px-10 md:py-16 lg:py-24">
      <SectionHeader
        eyebrow="BEFORE YOU BOOK"
        title={
          <>
            Are we a <span className="text-primary">good fit?</span>
          </>
        }
        description="We would rather tell you now than weeks later. Here is who we do our best work for, and who we do not."
      />

      <div ref={ref} className="mx-auto mt-12 max-w-5xl">
        {/* Mobile: segmented control. Hidden from md up, where both columns show. */}
        <div className="md:hidden">
          <div
            role="tablist"
            aria-label="Fit check"
            className="relative grid grid-cols-2 gap-1 rounded-full bg-canvas p-1"
          >
            {/* Sliding pill */}
            <span
              aria-hidden
              className={`pointer-events-none absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-white shadow-card transition-transform duration-300 ease-out motion-reduce:transition-none ${
                side === "not" ? "translate-x-[calc(100%+0.25rem)]" : "translate-x-0"
              }`}
            />
            {(
              [
                { key: "good", label: "Good fit" },
                { key: "not", label: "Not a fit" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={side === tab.key}
                aria-controls={`fit-panel-${tab.key}`}
                onClick={() => setSide(tab.key)}
                className={`relative z-1 rounded-full px-4 py-2.5 font-display text-label-md transition-colors ${
                  side === tab.key ? "text-ink" : "text-ink-muted"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-5">
            <div
              id="fit-panel-good"
              role="tabpanel"
              hidden={side !== "good"}
              className={side === "good" ? "animate-fit-in" : undefined}
            >
              <FitList items={goodFit} tone="good" visible={visible} from="left" />
            </div>
            <div
              id="fit-panel-not"
              role="tabpanel"
              hidden={side !== "not"}
              className={side === "not" ? "animate-fit-in" : undefined}
            >
              <FitList items={notFit} tone="not" visible={visible} from="right" />
            </div>
          </div>
        </div>

        {/* Desktop: both sides at once - the contrast is the point. */}
        <div className="hidden gap-6 md:grid md:grid-cols-2">
          <div>
            <h3 className="mb-4 flex items-center gap-2.5 font-display text-headline-sm text-ink">
              <span className="grid size-7 place-items-center rounded-full bg-success/15 text-success">
                <TickIcon />
              </span>
              You&apos;ll get the most from us if…
            </h3>
            <FitList items={goodFit} tone="good" visible={visible} from="left" />
          </div>
          <div>
            <h3 className="mb-4 flex items-center gap-2.5 font-display text-headline-sm text-ink">
              <span className="grid size-7 place-items-center rounded-full bg-ink-muted/12 text-ink-muted">
                <CrossIcon />
              </span>
              We&apos;re probably not right if…
            </h3>
            <FitList items={notFit} tone="not" visible={visible} from="right" />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="text-body-md text-ink-soft">
            Still not sure? That is what the call is for.
          </p>
          <Link href={BOOKING_PATH} className="btn btn-primary rounded-full">
            Book a free 30-minute call
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h13M12 5.5 18.5 12 12 18.5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
