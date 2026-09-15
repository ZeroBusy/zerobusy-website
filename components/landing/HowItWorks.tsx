import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    number: "01",
    title: "Analyze",
    description:
      "We assess your current workflows, conduct thorough pipeline audits, and pinpoint high-ROI automation opportunities across your tech stack.",
    badge: "Operational audit completed in 48 hours",
    icon: (
      <>
        <circle cx="11" cy="11" r="6.6" />
        <path d="M16 16l4.5 4.5" />
      </>
    ),
  },
  {
    number: "02",
    title: "Automate",
    description:
      "Our engineering team designs, builds, and implements tailored AI agents, API webhooks, and custom business logic directly inside your tools.",
    badge: "Robust documentation & sandbox testing",
    icon: (
      <>
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6 6l1.6 1.6M16.4 16.4 18 18M18 6l-1.6 1.6M7.6 16.4 6 18" />
      </>
    ),
  },
  {
    number: "03",
    title: "Scale",
    description:
      "Watch your business grow exponentially as automation handles everyday execution while your team focuses 100% on strategy and revenue.",
    badge: "Continuous maintenance & expansion",
    icon: (
      <>
        <path d="M4 18 10 12l3.5 3.5L20 9" />
        <path d="M20 14V9h-5" />
      </>
    ),
  },
];

export default function HowItWorks() {
  return (
    // ===== Start: How It Works section =====
    <section className="mt-6 px-6 py-16 md:px-10 lg:py-24">
      <SectionHeader
        eyebrow="FRICTIONLESS ONBOARDING"
        title="How It Works"
        description="Our simple, smart, and scalable process gets you automated fast."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <Reveal key={step.number}>
            <article className="card flex h-full flex-col p-6 md:p-8">
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-md bg-primary/10 text-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {step.icon}
                  </svg>
                </span>
                <span className="rounded-full bg-ice px-3 py-1 font-display text-label-sm text-primary">{step.number}</span>
              </div>
              <h3 className="mt-6 mb-3 text-headline-md text-ink">{step.title}</h3>
              <p className="mb-6 text-body-md text-pretty text-ink-soft">{step.description}</p>
              <span className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-success/10 px-3 py-1.5 font-display text-label-sm text-success">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1 14.6-4-4 1.6-1.6 2.4 2.4 5-5L17.6 10 11 16.6Z" />
                </svg>
                {step.badge}
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
