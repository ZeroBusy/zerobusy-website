import type { ReactNode } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { Check } from "./icons";

/**
 * Illustrative sketch of a lead flow. Intentionally carries no metrics,
 * timings or named people - it shows the shape of the work, not results we
 * cannot source.
 */
const workflowSteps = [
  {
    title: "New lead comes in",
    meta: "Website form, WhatsApp, or a call",
    iconClass: "bg-primary/10 text-primary",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M3.8 6.5 12 13l8.2-6.5" />
      </>
    ),
  },
  {
    title: "Gets answered straight away",
    meta: "Reply goes out, details filled in",
    iconClass: "bg-secondary/10 text-tertiary",
    icon: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor" stroke="none" />,
  },
  {
    title: "Lands with the right person",
    meta: "Assigned to a sales rep",
    iconClass: "bg-warning/10 text-warning",
    icon: (
      <>
        <circle cx="12" cy="8" r="3.4" />
        <path d="M5 20c1.4-3.6 4-5 7-5s5.6 1.4 7 5" />
      </>
    ),
  },
  {
    title: "They get a nudge to follow up",
    meta: "Alert and calendar invite",
    iconClass: "bg-primary/10 text-primary",
    icon: (
      <>
        <path d="M18 16V11a6 6 0 1 0-12 0v5l-1.5 2.5h15L18 16Z" />
        <path d="M10 19.5a2 2 0 0 0 4 0" />
      </>
    ),
  },
];

const dashboardRows = [
  { label: "New enquiries", note: "Who has not been called yet" },
  { label: "Deals in progress", note: "What stage each one is at" },
  { label: "Won this month", note: "And who closed it" },
];

const agentJobs = [
  "Answers common customer questions",
  "Reads documents and pulls out what matters",
  "Drafts replies for someone to approve",
];

const boringJobs = [
  "Listing products in bulk",
  "Keeping two apps in step",
  "Matching payments to orders",
];

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

function PlainList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2 rounded-lg bg-canvas p-4 md:p-5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3 rounded-base border border-line bg-white px-3.5 py-3.5 text-body-md text-ink-soft"
        >
          <Check className="shrink-0 text-success" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Solutions() {
  return (
    // ===== Start: Solutions (Core Engine) section =====
    <section id="solutions" className="mt-6 rounded-xl bg-canvas px-6 py-16 md:px-10 lg:py-24">
      <SectionHeader
        eyebrow="WHAT WE BUILD"
        title={
          <>
            What we <span className="text-primary">build</span>
          </>
        }
        description="Every business is a bit different, so we build around yours. Here are the things we build most."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <SolutionCard
          title="Systems that find and handle leads"
          description="Every lead gets a fast reply and a follow-up. Nothing sits in an inbox. Your team only steps in when a person is needed."
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
                    <span className={`block text-body-sm ${isLast ? "text-primary" : "text-ink-muted"}`}>
                      {step.meta}
                    </span>
                  </span>
                  <Check className="shrink-0 text-success" />
                </li>
              );
            })}
          </ul>
        </SolutionCard>

        <SolutionCard
          title="AI helpers that do real work"
          description="Chatbots that answer customers. Agents that research, draft and file. We build them to do the same job the same way each time, with a person checking what matters."
          iconClass="bg-primary/10 text-primary"
          icon={
            <>
              <rect x="3" y="4" width="18" height="12" rx="2.4" />
              <path d="M8 20h8M12 16v4" />
            </>
          }
        >
          <PlainList items={agentJobs} />
        </SolutionCard>

        <SolutionCard
          title="One place to see everything"
          description="Pipeline trackers and dashboards that show where every deal stands and who is working on what. Fewer tabs. Fewer screens. You can check the business from your phone."
          iconClass="bg-secondary/10 text-tertiary"
          icon={
            <>
              <circle cx="9" cy="8" r="3.2" />
              <path d="M3 19c1.2-3.2 3.4-4.6 6-4.6s4.8 1.4 6 4.6" />
              <path d="M16 5.5a3 3 0 0 1 0 5.6M18 19c-.5-1.8-1.2-3-2.2-3.9" />
            </>
          }
        >
          <div className="grid gap-2 rounded-lg bg-canvas p-4 md:p-5">
            {dashboardRows.map((row) => (
              <span
                key={row.label}
                className="flex items-center justify-between gap-3 rounded-base border border-line bg-white px-4 py-3.5"
              >
                <span className="font-display text-label-md text-ink">{row.label}</span>
                <span className="text-right text-body-sm text-ink-muted">{row.note}</span>
              </span>
            ))}
          </div>
        </SolutionCard>

        <SolutionCard
          title="Tools for the boring jobs"
          description="Bulk product listings, syncing data between your apps, matching up payments and orders, financial analysis. The work your team does by hand today."
          iconClass="bg-success/10 text-success"
          icon={
            <>
              <path d="M4 8h16l-1.4 12H5.4L4 8Z" />
              <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
            </>
          }
        >
          <PlainList items={boringJobs} />
        </SolutionCard>
      </div>
    </section>
  );
}
