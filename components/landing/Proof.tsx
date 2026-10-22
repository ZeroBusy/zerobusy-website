import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import SwipeRow from "./SwipeRow";
import { ArrowRight } from "./icons";

const success = "bg-success/10 text-success";
const primary = "bg-primary/10 text-primary";

/**
 * Badges must be quoted directly from what the client actually said. Where a
 * quote carries no number, the card carries no badge - we do not attach a
 * figure to someone's name that they did not give us.
 */
const stories = [
  {
    client: "Sahil Jain",
    industry: "Co-Founder, Sneakinn",
    quote: "ZeroBusy doesn't just execute. They understand the problem, take ownership, and deliver with clean execution, strong documentation, and a smooth handover. It's saving me and my team 100+ hours of effort every month.",
    result: "100+ hours saved a month",
    resultClass: primary,
  },
  {
    client: "Abbas Zaveri",
    industry: "Founder, Hypefly",
    quote: "ZB completely transformed our CRM and order flow - what used to take 40+ hours of manual chaos is now a smooth, fully automated system. They gave me back my peace of mind. No more dropped leads, missed updates, or delayed orders. Everything just works. ZB doesn't just automate - they think strategically and genuinely care about impact.",
    result: "40+ hours of manual work gone",
    resultClass: primary,
  },
  {
    client: "Javier Villa",
    industry: "CAO, Aidaddy.com",
    quote: "ZeroBusy automated our proposal creation process end-to-end, reducing manual work by 80% and eliminating documentation errors. Their proactive improvements and clean implementation transformed our workflow efficiency.",
    result: "80% less manual work on proposals",
    resultClass: success,
  },
  {
    client: "Michael T",
    industry: "Founder, Key Getaways",
    quote: "Running a multi-property vacation rental business means a thousand small things need to happen every day. Before we adopted these AI driven systems, most of that was manual and things would slip through the cracks. They automated our entire workflow — from the moment a guest reaches out to how we track maintenance and hold ourselves accountable on response times. Everything just works now. And whenever we need something new or want to improve a process, they build it fast. Honestly can't imagine going back to how we used to run things.",
    result: null,
    resultClass: "",
  },
  {
    client: "Rushi Khatwani",
    industry: "Khatwani Group",
    quote: "As a diversified offline retail company, we were struggling to scale with rigid control systems. ZeroBusy quickly understood our operations and built a custom solution that improved both accuracy and efficiency across key workflows. We're extremely satisfied with the execution and are now expanding automation with their team. Highly recommended for businesses looking to streamline and strengthen their systems.",
    result: null,
    resultClass: "",
  },
];

export default function Proof() {
  return (
    // ===== Start: Proof (Client Stories) section =====
    <section id="proof" className="mt-6 rounded-xl bg-canvas px-6 py-12 md:px-10 md:py-16 lg:py-24">
      <SectionHeader
        eyebrow="CLIENT STORIES"
        title={
          <>
            What our <span className="text-primary">clients say</span>
          </>
        }
        description="Founders & operators we have built for, in their own words."
      />

      {/* Cards keep their own height on phones so short quotes don't sit in empty boxes. */}
      <SwipeRow className="mt-8 grid gap-6 max-md:items-start md:mt-12 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <Reveal key={story.client}>
            <article className="card flex h-full flex-col p-6">
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-linear-135 from-primary to-secondary font-display text-label-md text-white">
                  {story.client[0]}
                </span>
                <span>
                  <span className="block font-display text-label-md text-ink">{story.client}</span>
                  <span className="block text-body-sm text-ink-muted">{story.industry}</span>
                </span>
              </div>

              <p className="mt-4 flex-1 text-body-md text-pretty text-ink-soft">{story.quote}</p>

              {story.result && (
                <span className={`mt-4 inline-flex w-fit rounded-full px-3 py-1 font-display text-label-sm ${story.resultClass}`}>
                  {story.result}
                </span>
              )}
            </article>
          </Reveal>
        ))}

        <Reveal>
          <div className="flex h-full flex-col justify-center rounded-lg bg-navy bg-[radial-gradient(420px_220px_at_100%_0%,rgb(0_194_255/.25),transparent_70%)] p-8 text-white">
            <h3 className="mb-3 text-headline-md">Want your week back?</h3>
            <p className="mb-6 text-body-md text-white/70">
              Tell us what eats your time. We will tell you if we can fix it.
            </p>
            <a href="#cta" className="btn btn-accent w-full rounded-base">
              Book a free 30-minute call
              <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </SwipeRow>
    </section>
  );
}
