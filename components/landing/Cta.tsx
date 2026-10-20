import Reveal from "./Reveal";
import { ArrowRight, Check } from "./icons";

const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1m4lcnMMoopwFkC3IOVU42sT9zC9Q5QptB8tlJp33t0a3tCYa3QAZrSHOWmYFuM5HdwjCT5egR";

type CtaProps = {
  title?: string;
  body?: string;
  perks?: string[];
};

/** Closing call to action. Defaults are the homepage copy; other pages pass their own. */
export default function Cta({
  title = "What is the one job you hate doing?",
  body = "Tell us. On the call we will look at how you work now and say what we would automate first. If we are not the right fit, we will tell you.",
  perks = ["No pressure to hire us", "You leave with a clear list of what to fix first"],
}: CtaProps) {
  return (
    <Reveal className="mt-6">
      {/* ===== Start: CTA section ===== */}
      <section
        id="cta"
        className="rounded-xl bg-linear-135 from-primary-hover via-primary to-secondary px-6 py-16 text-center text-white md:px-10 lg:py-24"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 font-display text-label-sm">
          <span className="size-2 rounded-full bg-success" />
          FREE 30-MINUTE CALL
        </span>
        <h2 className="mx-auto mt-6 max-w-3xl text-headline-xl-mobile md:text-headline-xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-body-md text-white/85 md:text-body-lg">{body}</p>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-inverse mt-8 rounded-full">
          Book a free 30-minute call
          <ArrowRight size={16} />
        </a>
        {perks.length > 0 && (
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-6 font-display text-label-md text-white/90">
            {perks.map((perk) => (
              <li key={perk} className="inline-flex items-center gap-2">
                <Check />
                {perk}
              </li>
            ))}
          </ul>
        )}
      </section>
    </Reveal>
  );
}
