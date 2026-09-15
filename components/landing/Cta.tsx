import Reveal from "./Reveal";
import { ArrowRight, Check } from "./icons";

const perks = ["No obligations", "Immediate roadmap", "Fast turnaround"];

export default function Cta() {
  return (
    <Reveal className="mt-6">
      {/* ===== Start: CTA section ===== */}
      <section
        id="cta"
        className="rounded-xl bg-linear-135 from-primary-hover via-primary to-secondary px-6 py-16 text-center text-white md:px-10 lg:py-24"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 font-display text-label-sm">
          <span className="size-2 rounded-full bg-success" />
          30-MINUTE FREE OPERATIONAL AUDIT
        </span>
        <h2 className="mx-auto mt-6 max-w-3xl text-headline-xl-mobile md:text-headline-xl">
          Ready to Automate Your Business?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-body-md text-white/85 md:text-body-lg">
          Book a free consultation call and discover how ZeroBusy can transform your day-to-day operations and free
          your team to grow.
        </p>
        {/* TODO: link to the real booking page (e.g. Cal.com) instead of this anchor. */}
        <a href="#cta" className="btn btn-inverse mt-8 rounded-full">
          Book Your Free Call
          <ArrowRight size={16} />
        </a>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-6 font-display text-label-md text-white/90">
          {perks.map((perk) => (
            <li key={perk} className="inline-flex items-center gap-2">
              <Check />
              {perk}
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  );
}
