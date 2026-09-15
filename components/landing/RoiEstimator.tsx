"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "./icons";

// TODO: calibrate the 2.7 hrs/seat and $47/hr assumptions against real audit data.
function estimate(seats: number) {
  const hours = Math.round(seats * 2.7);
  const crm = Math.max(2, Math.round(hours * 0.31));
  const lead = Math.max(2, Math.round(hours * 0.44));
  const invoicing = Math.max(1, hours - crm - lead);
  const payroll = Math.round((hours * 52 * 47) / 500) * 500;
  return { hours, crm, lead, invoicing, payroll };
}

export default function RoiEstimator() {
  const [seats, setSeats] = useState(12);
  const { hours, crm, lead, invoicing, payroll } = estimate(seats);

  const tasks = [
    { label: "CRM & Pipeline Sync", hours: crm, icon: <path d="M4 8h13l-3-3M20 16H7l3 3" /> },
    {
      label: "AI Lead Qualification & Triage",
      hours: lead,
      icon: (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.5 12h17M12 3.5c3 3 3 14 0 17" />
        </>
      ),
    },
    {
      label: "Invoicing & Ops Reporting",
      hours: invoicing,
      icon: (
        <>
          <path d="M6 3h9l4 4v14H6z" />
          <path d="M9 12h7M9 16h5" />
        </>
      ),
    },
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
            <span className="font-display text-label-sm text-ink">OPERATIONAL ROI ESTIMATOR</span>
          </div>
          <span className="rounded-full border border-primary/20 bg-ice px-2.5 py-1 font-display text-label-sm text-primary">
            LIVE MODEL
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <span className="font-display text-label-sm text-ink-muted">SELECT TEAM SIZE</span>
          <span className="rounded-base bg-canvas px-3 py-1.5 font-mono text-code-sm text-ink">
            {seats} Knowledge Workers
          </span>
        </div>
        <input
          type="range"
          min={2}
          max={60}
          value={seats}
          onChange={(e) => setSeats(Number(e.target.value))}
          aria-label="Team size"
          className="mt-4 mb-1.5 h-[18px] w-full"
        />
        <div className="flex justify-between font-mono text-xs text-ink-muted">
          <span>2 seats</span>
          <span>25 seats</span>
          <span>50+ seats</span>
        </div>

        <div className="mt-4 rounded-lg bg-navy bg-[radial-gradient(420px_200px_at_100%_0%,rgb(0_194_255/.25),transparent_65%)] p-5">
          <div className="flex items-start justify-between">
            <span className="font-display text-label-sm text-white/60">ESTIMATED RECOVERY</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary" aria-hidden>
              <path d="M3 17l6-6 4 4 8-8" />
              <path d="M21 7v5h-5" />
            </svg>
          </div>
          <div className="mt-2 flex items-baseline gap-2.5 text-white">
            <span className="font-display text-headline-xl font-extrabold tabular-nums">{hours}</span>
            <span className="text-headline-sm text-white/70">hours / week</span>
          </div>
          <div className="mt-2 flex items-center gap-2 font-mono text-code-sm text-success">
            <CheckCircle size={14} />≈ ${payroll.toLocaleString("en-US")} annual payroll recaptured
          </div>
        </div>

        <ul className="mt-4 grid gap-2">
          {tasks.map((task) => (
            <li
              key={task.label}
              className="flex items-center justify-between gap-2.5 rounded-base border border-line bg-canvas px-4 py-3 transition duration-200 hover:translate-x-1 hover:border-primary/30"
            >
              <span className="flex items-center gap-2.5 font-display text-label-md text-ink">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-primary" aria-hidden>
                  {task.icon}
                </svg>
                {task.label}
              </span>
              <span className="font-mono text-xs whitespace-nowrap text-ink-soft">{task.hours} hrs/wk auto</span>
            </li>
          ))}
        </ul>

        <a href="#cta" className="btn mt-4 w-full rounded-full bg-ink text-white hover:bg-primary">
          Deploy Automation Sprint
          <ArrowRight />
        </a>
      </div>

      <div className="absolute -bottom-6 -left-2 z-3 flex animate-float items-center gap-3 rounded-lg border border-line bg-white px-4 py-3 shadow-hover">
        <span className="grid size-8 place-items-center rounded-full bg-success/10 text-success">
          <CheckCircle />
        </span>
        <span>
          <span className="block font-display text-label-md text-ink">100% Deterministic AI</span>
          <span className="block text-body-sm text-ink-muted">Zero hallucinations guarantee</span>
        </span>
      </div>
    </div>
  );
}
