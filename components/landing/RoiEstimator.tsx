"use client";

import { useState } from "react";
import { ArrowRight } from "./icons";

const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1m4lcnMMoopwFkC3IOVU42sT9zC9Q5QptB8tlJp33t0a3tCYa3QAZrSHOWmYFuM5HdwjCT5egR";

/**
 * Time calculator.
 *
 * Deliberately does no estimating of its own: it multiplies the two numbers
 * the owner enters. No assumed hours-per-seat, no assumed hourly rate, no
 * currency figure. If we ever want to show money saved, the rate has to be
 * another input the owner fills in - not a constant we picked.
 */
export default function RoiEstimator() {
  const [people, setPeople] = useState(4);
  const [hoursEach, setHoursEach] = useState(6);

  const hoursPerWeek = people * hoursEach;
  const daysPerYear = Math.round((hoursPerWeek * 52) / 8);

  const examples = [
    "Copying things between apps",
    "Chasing and replying to leads",
    "Building the same report every week",
  ];

  return (
    <div id="roi" className="relative">
      <div className="relative z-2 rounded-xl border border-line bg-white p-6 shadow-hover">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex gap-1.5">
              <i className="block size-2 rounded-full bg-line" />
              <i className="block size-2 rounded-full bg-line" />
              <i className="block size-2 rounded-full bg-line" />
            </span>
            <span className="font-display text-label-sm text-ink">ADD UP YOUR TIME</span>
          </div>
          <span className="rounded-full border border-primary/20 bg-ice px-2.5 py-1 font-display text-label-sm text-primary">
            YOUR NUMBERS
          </span>
        </div>

        <p className="mt-4 text-body-sm text-ink-muted">
          Put in your own two numbers. We do not guess anything for you.
        </p>

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
          <p className="mt-2 text-body-sm text-white/70">
            About {daysPerYear} working days a year, spent on work a system could do.
          </p>
        </div>

        <ul className="mt-4 grid gap-2">
          {examples.map((example) => (
            <li
              key={example}
              className="flex items-center gap-2.5 rounded-base border border-line bg-canvas px-4 py-3 text-body-md text-ink-soft"
            >
              <span className="size-1.5 shrink-0 rounded-full bg-primary" />
              {example}
            </li>
          ))}
        </ul>

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
