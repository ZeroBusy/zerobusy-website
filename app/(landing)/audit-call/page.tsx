import type { Metadata } from "next";
import CalEmbed from "@/components/landing/CalEmbed";
import { CheckCircle } from "@/components/landing/icons";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Book a Free 30-Minute Audit Call | ZeroBusy",
  description:
    "Pick a time for a free 30-minute call with ZeroBusy. We look at how your team works and point out the first three things worth automating.",
  path: "/audit-call",
});

/* Draft copy - Tanay to review. Mirrors the cal.com event description. */
const steps = [
  {
    title: "Before the call",
    body: "Pick a time and tell us your website and what eats most of your team's time. That is all the prep we need.",
  },
  {
    title: "On the call",
    body: "We walk through how work moves through your business today: leads, data entry, reports and the hand-offs in between.",
  },
  {
    title: "What you leave with",
    body: "The first three things worth automating, with a rough idea of the hours each one gives back. You keep the list either way.",
  },
];

const facts = ["30 minutes on Google Meet", "Free, no pressure to hire us", "With Tanay, our founder"];

export default function AuditCallPage() {
  return (
    <div className="flex flex-col gap-6">
      <section className="bg-hero-grid relative mt-4 overflow-hidden rounded-xl border border-line px-6 py-12 text-center md:px-10 lg:py-16">
        <div className="pointer-events-none absolute top-6 left-1/2 -z-10 h-56 w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto flex max-w-2xl flex-col items-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/90 px-4 py-1.5 shadow-card">
            <span className="size-2 animate-pulse rounded-full bg-success" />
            <span className="font-display text-label-sm font-semibold tracking-wider text-primary uppercase">
              Free 30-minute audit call
            </span>
          </span>
          <h1 className="mt-5 font-display text-headline-xl-mobile font-bold tracking-tight text-pretty text-ink md:text-headline-xl">
            Find the first hours you can win back
          </h1>
          <p className="mt-4 text-body-md text-pretty text-ink-soft md:text-body-lg">
            Pick a time below. We look at how your team works and point out the first three things worth automating.
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-12">
        <div className="overflow-hidden rounded-xl border border-line bg-white p-2 shadow-card md:p-4 lg:order-2 lg:col-span-8">
          <CalEmbed />
        </div>

        <aside className="flex flex-col gap-4 lg:order-1 lg:col-span-4">
          <div className="rounded-xl border border-line bg-white p-6 shadow-card">
            <span className="font-display text-label-sm font-bold tracking-wider text-primary uppercase">
              What to expect
            </span>
            <ol className="mt-5 flex flex-col gap-5">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ice font-display text-label-md text-primary">
                    {i + 1}
                  </span>
                  <div>
                    <h2 className="font-display text-headline-sm text-ink">{step.title}</h2>
                    <p className="mt-1 text-body-md text-ink-soft">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <ul className="flex flex-col gap-3 rounded-xl bg-ice p-6 shadow-card">
            {facts.map((fact) => (
              <li key={fact} className="flex items-center gap-2.5 font-display text-label-md text-ink">
                <CheckCircle size={18} className="shrink-0 text-primary" />
                {fact}
              </li>
            ))}
          </ul>

          <p className="px-1 text-body-sm text-ink-muted">
            None of the times work? Email{" "}
            <a href="mailto:automate@zerobusy.com" className="font-semibold text-primary hover:text-primary-hover">
              automate@zerobusy.com
            </a>{" "}
            and we will find one.
          </p>
        </aside>
      </section>
    </div>
  );
}
