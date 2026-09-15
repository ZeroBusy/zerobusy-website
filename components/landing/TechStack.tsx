"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

// TODO: swap the color swatches for real brand SVG logos (check each vendor's logo usage guidelines).
const tools = [
  { name: "OpenAI", color: "#10A37F", note: "GPT-class reasoning for classification, drafting, and summarisation inside your workflows." },
  { name: "Anthropic", color: "#D97757", note: "Claude agents handle long-context research and policy-bound customer replies." },
  { name: "Zapier", color: "#FF4F00", note: "Fast glue for the long tail of app-to-app triggers your team already relies on." },
  { name: "Make.com", color: "#6D00CC", note: "Visual multi-branch scenarios for operations that need conditional routing." },
  { name: "Python", color: "#3776AB", note: "Custom services and data transforms when off-the-shelf connectors run out." },
  { name: "Replit", color: "#F26207", note: "Sandboxed environments where every workflow is tested before it touches production." },
  { name: "Figma", color: "#F24E1E", note: "Interface specs for the internal dashboards we ship alongside the automations." },
  { name: "Slack", color: "#4A154B", note: "Where approvals, alerts, and agent handoffs land in front of a human." },
  { name: "HubSpot", color: "#FF7A59", note: "Pipeline stages, lifecycle sync, and outbound sequences kept clean automatically." },
  { name: "Airtable", color: "#FCB400", note: "Operational source of truth for catalogues, requests, and review queues." },
  { name: "Outlook", color: "#0F6CBD", note: "Inbox triage, meeting scheduling, and templated follow-ups on autopilot." },
  { name: "Supabase", color: "#3ECF8E", note: "Postgres backbone for custom internal tools and agent memory." },
  { name: "Discord", color: "#5865F2", note: "Community and support ops automation for consumer brands." },
  { name: "Proofpoint", color: "#0F172A", note: "Email security and compliance guardrails on automated outbound." },
  { name: "Stripe", color: "#635BFF", note: "Billing events wired into fulfilment, dunning, and reporting." },
  { name: "Notion", color: "#191919", note: "Documentation and SOPs generated from the systems we deploy." },
];

const rows = [
  { tools: tools.slice(0, 8), animation: "animate-marquee" },
  { tools: tools.slice(8), animation: "animate-marquee-reverse" },
];

export default function TechStack() {
  const [active, setActive] = useState(tools[2]);

  return (
    // ===== Start: Tech Stack section =====
    <section id="stack" className="mt-6 overflow-hidden py-16 lg:py-24">
      <div className="px-6">
        <SectionHeader
          eyebrow="INTEGRATION ECOSYSTEM"
          title="Our Technology Stack"
          description="Built on a foundation of best-in-class, scalable, and secure technologies to deliver a robust automation platform."
        />
      </div>

      <div className="group mt-12 grid gap-4 [mask-image:linear-gradient(90deg,transparent,#000_9%,#000_91%,transparent)]">
        {rows.map((row) => (
          <div key={row.animation} className="border-y border-line bg-canvas py-4">
            <div className={`flex w-max gap-4 px-2 group-hover:[animation-play-state:paused] ${row.animation}`}>
              {[...row.tools, ...row.tools].map((tool, i) => {
                const isDuplicate = i >= row.tools.length;
                return (
                  <button
                    key={`${tool.name}-${i}`}
                    type="button"
                    onClick={() => setActive(tool)}
                    tabIndex={isDuplicate ? -1 : undefined}
                    aria-hidden={isDuplicate}
                    className={`flex size-22 shrink-0 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border bg-white transition duration-200 hover:-translate-y-1 hover:shadow-hover ${
                      tool.name === active.name ? "border-primary ring-4 ring-secondary/25" : "border-line"
                    }`}
                  >
                    <i className="block size-8 rounded-base" style={{ background: tool.color }} />
                    <span className="font-display text-label-sm text-ink-soft">{tool.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-4 px-6">
        <div className="flex items-center gap-4 rounded-lg border border-line bg-white px-5 py-4 shadow-card">
          <span className="grid size-10 place-items-center rounded-md bg-primary/10 text-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M12 3 4 6.5v5.8c0 4.4 3.3 7.6 8 8.7 4.7-1.1 8-4.3 8-8.7V6.5L12 3Z" />
              <path d="M9 12.2l2.3 2.3L15.5 10" />
            </svg>
          </span>
          <span>
            <span className="block font-display text-label-sm text-ink-muted">SELECTED INTEGRATION</span>
            <span className="mt-0.5 block font-display text-headline-sm text-ink">{active.name}</span>
          </span>
        </div>
        <p className="max-w-md text-body-md text-pretty text-ink-soft" aria-live="polite">
          {active.note}
        </p>
      </div>
    </section>
  );
}
