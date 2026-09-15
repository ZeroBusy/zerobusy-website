import type { ReactNode } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { Check } from "./icons";

const workflowSteps = [
  {
    title: "New lead captured",
    meta: "form.submit · Instant",
    iconClass: "bg-primary/10 text-primary",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M3.8 6.5 12 13l8.2-6.5" />
      </>
    ),
  },
  {
    title: "AI score & enrichment",
    meta: "94 / 100 · High Intent",
    iconClass: "bg-secondary/10 text-tertiary",
    icon: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor" stroke="none" />,
  },
  {
    title: "Assign rep automatically",
    meta: "→ Sarah Jenkins (Tier 1)",
    iconClass: "bg-warning/10 text-warning",
    icon: (
      <>
        <circle cx="12" cy="8" r="3.4" />
        <path d="M5 20c1.4-3.6 4-5 7-5s5.6 1.4 7 5" />
      </>
    ),
  },
  {
    title: "Slack alert & calendar invite",
    meta: "#sales-velocity · Cal.com sent",
    iconClass: "bg-primary/10 text-primary",
    icon: (
      <>
        <path d="M18 16V11a6 6 0 1 0-12 0v5l-1.5 2.5h15L18 16Z" />
        <path d="M10 19.5a2 2 0 0 0 4 0" />
      </>
    ),
  },
];

const pipelineStages = [
  { label: "LEAD", value: 142, note: "Inbound", noteClass: "text-ink-muted" },
  { label: "PROPOSAL", value: 29, note: "Active", noteClass: "text-warning" },
  { label: "WON", value: 18, note: "Completed", noteClass: "text-primary" },
];

const storeStats = [
  {
    value: "0.8s",
    label: "Inventory Sync",
    note: "Real-time multi-store",
    noteClass: "text-success",
    iconClass: "bg-primary/10 text-primary",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.6" />
        <path d="M12 7.6V12l3.2 2" />
      </>
    ),
  },
  {
    value: "84%",
    label: "Order Returns AI",
    note: "Fully automated triage",
    noteClass: "text-primary",
    iconClass: "bg-success/10 text-success",
    icon: (
      <>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M21 7v5h-5" />
      </>
    ),
  },
  {
    value: "120+",
    label: "Hours Saved / Mo",
    note: "Per store operator",
    noteClass: "text-primary",
    iconClass: "bg-success/10 text-success",
    icon: <path d="M5 13l4.5 4.5L19 7" />,
  },
];

const keyword = "text-secondary";
const fn = "text-primary-light";

type SolutionCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  iconClass: string;
  children: ReactNode;
};

function SolutionCard({ title, description, icon, iconClass, children }: SolutionCardProps) {
  return (
    <Reveal>
      <article className="card flex h-full flex-col p-6 md:p-8">
        {children}
        <span className={`mt-8 mb-4 grid size-10 place-items-center rounded-md ${iconClass}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            {icon}
          </svg>
        </span>
        <h3 className="mb-2 text-headline-md text-ink">{title}</h3>
        <p className="text-body-md text-pretty text-ink-soft">{description}</p>
      </article>
    </Reveal>
  );
}

export default function Solutions() {
  return (
    // ===== Start: Solutions (Core Engine) section =====
    <section id="solutions" className="mt-6 rounded-xl bg-canvas px-6 py-16 md:px-10 lg:py-24">
      <SectionHeader
        eyebrow="CORE ENGINE"
        title={
          <>
            AI Solutions That Take Your Business to the <span className="text-primary">Next Level</span>
          </>
        }
        description="We design, develop, and implement automation tools that help you work smarter, not harder."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <SolutionCard
          title="Workflow Automation"
          description="Automate repetitive tasks and seamlessly orchestrate multi-app workflows. Eliminate manual copying, routing, and data entry."
          iconClass="bg-primary/10 text-primary"
          icon={<path d="M20 11a8 8 0 0 0-14-4.5M4 13a8 8 0 0 0 14 4.5M6 3v4h4M18 21v-4h-4" />}
        >
          <ul className="grid gap-2 rounded-lg bg-canvas p-4 md:p-5">
            {workflowSteps.map((step, i) => {
              const isLast = i === workflowSteps.length - 1;
              return (
                <li
                  key={step.title}
                  className={`flex items-center gap-3 rounded-base border bg-white px-3.5 py-3 ${
                    isLast ? "border-primary/30 shadow-hover" : "border-line"
                  }`}
                >
                  <span className={`grid size-8 shrink-0 place-items-center rounded-base ${step.iconClass}`}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      {step.icon}
                    </svg>
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-label-md text-ink">{step.title}</span>
                    <span className={`block font-mono text-xs ${isLast ? "text-primary" : "text-ink-muted"}`}>
                      {step.meta}
                    </span>
                  </span>
                  <Check className="text-success" />
                </li>
              );
            })}
          </ul>
        </SolutionCard>

        <SolutionCard
          title="Autonomous AI Agents"
          description="Deploy custom agents that autonomously research, draft responses, and make executive calls 24/7."
          iconClass="bg-primary/10 text-primary"
          icon={
            <>
              <rect x="3" y="4" width="18" height="12" rx="2.4" />
              <path d="M8 20h8M12 16v4" />
            </>
          }
        >
          <div className="rounded-lg bg-navy p-4">
            <div className="flex items-center justify-between gap-2.5">
              <span className="flex items-center gap-2.5">
                <span className="flex gap-1.5">
                  <i className="block size-2 rounded-full bg-white/20" />
                  <i className="block size-2 rounded-full bg-white/20" />
                  <i className="block size-2 rounded-full bg-white/20" />
                </span>
                <span className="font-mono text-xs text-white/70">agent.worker.ts</span>
              </span>
              <span className="rounded-full border border-secondary/40 px-2.5 py-0.5 font-mono text-xs text-secondary">
                EXEC 24/7
              </span>
            </div>
            <pre className="mt-4 font-mono text-code-sm whitespace-pre-wrap text-white/80">
              <span className={keyword}>export async function</span> <span className={fn}>runAgent</span>(lead) {"{\n  "}
              <span className={keyword}>const</span> research = <span className={keyword}>await</span> ai.<span className={fn}>deepResearch</span>(lead);{"\n  "}
              <span className={keyword}>const</span> draft = <span className={keyword}>await</span> ai.<span className={fn}>draftTailoredPitch</span>(research);{"\n  "}
              <span className={keyword}>return</span> dispatcher.<span className={fn}>send</span>({"{"} lead, draft, status:{"\n    "}
              <span className="text-success">{"'APPROVED'"}</span> {"});\n}"}
            </pre>
            <div className="mt-4 flex items-center justify-between gap-2.5 rounded-base bg-navy-deep px-3 py-2.5 font-mono text-xs">
              <span className="flex items-center gap-2 text-white/80">
                <span className="size-2 animate-pulse-dot rounded-full bg-success" />
                Agent status: active
              </span>
              <span className="text-secondary">1,492 tasks run</span>
            </div>
          </div>
        </SolutionCard>

        <SolutionCard
          title="CRM & Lead Systems"
          description="Keep customer stages, pipeline metrics, and outbound communications unified without dropped leads."
          iconClass="bg-secondary/10 text-tertiary"
          icon={
            <>
              <circle cx="9" cy="8" r="3.2" />
              <path d="M3 19c1.2-3.2 3.4-4.6 6-4.6s4.8 1.4 6 4.6" />
              <path d="M16 5.5a3 3 0 0 1 0 5.6M18 19c-.5-1.8-1.2-3-2.2-3.9" />
            </>
          }
        >
          <div className="rounded-lg bg-canvas p-4 md:p-5">
            <div className="flex items-center justify-between gap-3 rounded-base border border-line bg-white p-4">
              <span>
                <span className="block font-display text-label-sm text-ink-muted">CLOSED REVENUE</span>
                <span className="mt-1 block font-display text-headline-lg text-ink">$25.6k</span>
              </span>
              <span className="rounded-full bg-success/10 px-2.5 py-1 font-display text-label-sm text-success">↑ +38%</span>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {pipelineStages.map((stage, i) => {
                const isWon = i === pipelineStages.length - 1;
                return (
                  <span
                    key={stage.label}
                    className={`rounded-base border px-2 py-3 text-center ${
                      isWon ? "border-primary/30 bg-ice text-primary" : "border-line bg-white"
                    }`}
                  >
                    <span className={`block font-display text-label-sm ${isWon ? "" : "text-ink-muted"}`}>
                      {stage.label}
                    </span>
                    <span className="mt-1 block font-display text-headline-sm font-bold">{stage.value}</span>
                    <span className={`block text-body-sm ${stage.noteClass}`}>{stage.note}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </SolutionCard>

        <SolutionCard
          title="Ecommerce Automation"
          description="Synchronize stock, instantly update SKU catalog changes, auto-handle return queries, and execute omni-channel tracking."
          iconClass="bg-success/10 text-success"
          icon={
            <>
              <path d="M4 8h16l-1.4 12H5.4L4 8Z" />
              <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
            </>
          }
        >
          <div className="grid grid-cols-3 gap-2 rounded-lg bg-canvas p-4 md:p-5">
            {storeStats.map((stat) => (
              <span key={stat.label} className="rounded-base border border-line bg-white p-3">
                <span className={`grid size-7 place-items-center rounded-base ${stat.iconClass}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
                    {stat.icon}
                  </svg>
                </span>
                <span className="mt-3 block font-display text-headline-md text-ink">{stat.value}</span>
                <span className="block font-display text-label-sm text-ink-soft">{stat.label}</span>
                <span className={`mt-2 block border-t border-line pt-2 text-body-sm ${stat.noteClass}`}>{stat.note}</span>
              </span>
            ))}
          </div>
        </SolutionCard>
      </div>
    </section>
  );
}
