import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "@/components/landing/icons";
import LocalTime from "@/components/landing/LocalTime";

export const metadata: Metadata = {
  title: "You're Booked | ZeroBusy",
  robots: { index: false, follow: false },
};

/* Draft copy - Tanay to review. */
const prep = [
  "A rough list of the tools your team uses every day",
  "The two or three jobs that eat the most hours each week",
  "Anyone on your team who does that work, if they can join",
];

export default async function BookedPage({ searchParams }: { searchParams: Promise<{ start?: string | string[] }> }) {
  const { start } = await searchParams;
  const startIso = typeof start === "string" ? start : undefined;

  return (
    <section className="bg-hero-grid relative mt-4 overflow-hidden rounded-xl border border-line px-6 py-14 md:px-10 lg:py-20">
      <div className="pointer-events-none absolute top-10 left-1/2 -z-10 h-64 w-[560px] -translate-x-1/2 rounded-full bg-success/10 blur-3xl" />

      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <span className="grid size-14 place-items-center rounded-full bg-success/15 text-success">
          <CheckCircle size={30} />
        </span>
        <h1 className="mt-6 font-display text-headline-xl-mobile font-bold tracking-tight text-ink md:text-headline-xl">
          You&apos;re booked
        </h1>
        <p className="mt-4 text-body-md text-pretty text-ink-soft md:text-body-lg">
          {startIso ? (
            <>
              See you on <span className="font-semibold text-ink"><LocalTime iso={startIso} /></span>.{" "}
            </>
          ) : null}
          A calendar invite with the Google Meet link is on its way to your inbox.
        </p>

        <div className="mt-10 w-full rounded-xl border border-line bg-white p-6 text-left shadow-card md:p-8">
          <span className="font-display text-label-sm font-bold tracking-wider text-primary uppercase">
            To get the most from 30 minutes
          </span>
          <ul className="mt-4 flex flex-col gap-3">
            {prep.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-body-md text-ink-soft">
                <CheckCircle size={18} className="mt-0.5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-line pt-5 text-body-sm text-ink-muted">
            Need to move it? Use the reschedule link in your invite, or email{" "}
            <a href="mailto:automate@zerobusy.com" className="font-semibold text-primary hover:text-primary-hover">
              automate@zerobusy.com
            </a>
            .
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/services" className="btn btn-primary rounded-full">
            See what we build
            <ArrowRight />
          </Link>
          <Link href="/" className="btn btn-secondary rounded-full">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
