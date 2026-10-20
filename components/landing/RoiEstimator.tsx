"use client";

import { useState } from "react";
import { ArrowRight } from "./icons";

const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1m4lcnMMoopwFkC3IOVU42sT9zC9Q5QptB8tlJp33t0a3tCYa3QAZrSHOWmYFuM5HdwjCT5egR";

const HOURS_PER_DAY = 8;

/** 6.75 -> "6.8", 7 -> "7" */
function formatDays(days: number) {
  const rounded = Math.round(days * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

/**
 * Busywork calculator.
 *
 * Deliberately does no estimating of its own: it multiplies the two numbers
 * the owner enters. No assumed hours-per-seat, no assumed hourly rate, no
 * currency figure. If we ever want to show money saved, the rate has to be
 * another input the owner fills in - not a constant we picked.
 */
export default function RoiEstimator() {
  const [people, setPeople] = useState(4);
  const [hoursEach, setHoursEach] = useState(6);
  const [ticked, setTicked] = useState<Set<string>>(new Set());

  const hoursPerWeek = people * hoursEach;
  const daysPerWeek = hoursPerWeek / HOURS_PER_DAY;
  const daysPerYear = Math.round((hoursPerWeek * 52) / HOURS_PER_DAY);

  // Under a full day a week, "0.6 working days" reads oddly - switch to hours.
  const summary =
    hoursPerWeek < HOURS_PER_DAY
      ? `That's ${hoursPerWeek * 52} hours a year.`
      : `That's ${formatDays(daysPerWeek)} full working ${daysPerWeek === 1 ? "day" : "days"} every week, about ${daysPerYear} a year.`;

  const tasks = [
    "Copying things between apps",
    "Chasing and replying to leads",
    "Building the same report every week",
  ];

  const toggle = (task: string) =>
    setTicked((prev) => {
      const next = new Set(prev);
      if (next.has(task)) next.delete(task);
      else next.add(task);
      return next;
    });

  return (
    <div id="roi" className="relative">
      <div className="relative z-2 rounded-xl border border-line bg-white p-6 shadow-hover">
        <div className="flex items-start justify-between gap-3">
          <h2 className="font-display text-headline-sm text-ink">How many hours go to busywork?</h2>
          <span className="shrink-0 rounded-full border border-primary/20 bg-ice px-2.5 py-1 font-display text-label-sm text-primary">
            YOUR NUMBERS
          </span>
        </div>

        {/* Task checklist - gets people engaged before they touch a slider. */}
        <fieldset className="mt-4">
          <legend className="text-body-sm text-ink-muted">Tick what your team does by hand.</legend>
          <div className="mt-2.5 grid gap-2">
            {tasks.map((task) => {
              const checked = ticked.has(task);
              return (
                <label
                  key={task}
                  className={`flex cursor-pointer items-center gap-3 rounded-base border px-4 py-3 text-body-md transition-colors ${
                    checked ? "border-primary/40 bg-ice text-ink" : "border-line bg-canvas text-ink-soft hover:border-primary/30"
                  }`}
                >
                  <input type="checkbox" checked={checked} onChange={() => toggle(task)} className="peer sr-only" />
                  <span
                    aria-hidden
                    className={`grid size-5 shrink-0 place-items-center rounded-md border-2 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40 ${
                      checked ? "border-primary bg-primary text-white" : "border-outline bg-white"
                    }`}
                  >
                    {checked && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 13l4.5 4.5L19 7" />
                      </svg>
                    )}
                  </span>
                  {task}
                </label>
              );
            })}
          </div>
        </fieldset>

        {/* Input 1 */}
        <div className="mt-5 flex items-center justify-between gap-3">
          <label htmlFor="roi-people" className="font-display text-label-sm text-ink-muted">
            PEOPLE DOING THIS WORK
          </label>
          <span className="rounded-base bg-canvas px-3 py-1.5 font-mono text-code-sm text-ink tabular-nums">
            {people}
          </span>
        </div>
        <input
          id="roi-people"
          type="range"
          min={1}
          max={30}
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
          className="mt-3 mb-1.5 h-[18px] w-full"
        />

        {/* Input 2 */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <label htmlFor="roi-hours" className="font-display text-label-sm text-ink-muted">
            HOURS EACH, PER WEEK
          </label>
          <span className="rounded-base bg-canvas px-3 py-1.5 font-mono text-code-sm text-ink tabular-nums">
            {hoursEach}
          </span>
        </div>
        <input
          id="roi-hours"
          type="range"
          min={1}
          max={30}
          value={hoursEach}
          onChange={(e) => setHoursEach(Number(e.target.value))}
          className="mt-3 mb-1.5 h-[18px] w-full"
        />

        {/* Result - pure arithmetic on the two inputs above */}
        <div className="mt-5 rounded-lg bg-navy bg-[radial-gradient(420px_200px_at_100%_0%,rgb(0_194_255/.25),transparent_65%)] p-5">
          <span className="font-display text-label-sm text-white/60">THAT IS</span>
          <div className="mt-2 flex items-baseline gap-2.5 text-white">
            <span className="font-display text-headline-xl font-extrabold tabular-nums">{hoursPerWeek}</span>
            <span className="text-headline-sm text-white/70">hours a week</span>
          </div>
          <p className="mt-2 text-body-sm text-white/70" aria-live="polite">
            {summary}
          </p>
        </div>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn mt-4 w-full rounded-full bg-ink text-white hover:bg-primary"
        >
          Book a free 30-minute call
          <ArrowRight />
        </a>
      </div>
    </div>
  );
}
