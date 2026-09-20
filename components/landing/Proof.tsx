import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { ArrowRight } from "./icons";

const success = "bg-success/10 text-success";
const primary = "bg-primary/10 text-primary";

const stories = [
  {
    client: "Michael T",
    industry: "Founder, Key Gateways",
    quote: "Running a multi-property vacation rental business means a thousand small things need to happen every day. Before we adopted these AI driven systems, most of that was manual and things would slip through the cracks. They automated our entire workflow — from the moment a guest reaches out to how we track maintenance and hold ourselves accountable on response times. Everything just works now. And whenever we need something new or want to improve a process, they build it fast. Honestly can't imagine going back to how we used to run things.",
    duration: "1:42",
    result: "+38% closed",
    resultClass: success,
  },
  {
    client: "Sahil Jain",
    industry: "Co-Founder, Sneakinn",
    quote: "ZeroBusy doesn't just execute. They understand the problem, take ownership, and deliver with clean execution, strong documentation, and a smooth handover. It's saving me and my team 100+ hours of effort every month.",
    duration: "2:15",
    result: "22 hrs/wk",
    resultClass: primary,
  },
  {
    client: "Javier Villa",
    industry: "CAO, Aidaddy.com",
    quote: "ZeroBusy automated our proposal creation process end-to-end, reducing manual work by 80% and eliminating documentation errors. Their proactive improvements and clean implementation transformed our workflow efficiency.",
    duration: "1:58",
    result: "0.8s sync",
    resultClass: success,
  },
  {
    client: "Abbas Zaveri",
    industry: "Founder, Hypefly",
    quote: "ZB completely transformed our CRM and order flow - what used to take 40+ hours of manual chaos is now a smooth, fully automated system. They gave me back my peace of mind. No more dropped leads, missed updates, or delayed orders. Everything just works. ZB doesn't just automate - they think strategically and genuinely care about impact.",
    duration: "2:30",
    result: "3x site visits",
    resultClass: primary,
  },
  {
    client: "Rushi Khatwani",
    industry: "Khatwani Group",
    quote: "As a diversified offline retail company, we were struggling to scale with rigid control systems. ZeroBusy quickly understood our operations and built a custom solution that improved both accuracy and efficiency across key workflows. We're extremely satisfied with the execution and are now expanding automation with their team. Highly recommended for businesses looking to streamline and strengthen their systems.",
    duration: "1:24",
    result: "120+ hrs/mo",
    resultClass: success,
  },
];

export default function Proof() {
  return (
    // ===== Start: Proof (Client Stories) section =====
    <section id="proof" className="mt-6 rounded-xl bg-canvas px-6 py-16 md:px-10 lg:py-24">
      <SectionHeader
        eyebrow="CLIENT STORIES • REAL RESULTS"
        title="Trusted By The Most Brands"
        description="Our clients have remarkable improvements, lead generation, and overall growth by leveraging our automation expertise."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <Reveal key={story.client}>
            <article className="card h-full overflow-hidden">
              {/* TODO: replace the placeholder frame and initial avatar with the founder's video and company logo, and wire up playback. */}
              <div className="group relative grid aspect-video place-items-center bg-linear-to-br from-navy to-navy-deep">
                <span className="absolute top-3 right-3 rounded-full bg-navy-deep/75 px-2.5 py-1 font-display text-label-sm text-white">
                  {story.duration}
                </span>
                <span className="grid size-14 place-items-center rounded-full bg-white/90 text-primary shadow-hover transition-transform duration-200 group-hover:scale-110">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M8 5.5 19 12 8 18.5V5.5Z" />
                  </svg>
                </span>
                <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-linear-to-t from-navy-deep/90 to-transparent px-4 pt-10 pb-4">
                  <span className="grid size-9 place-items-center rounded-full bg-white/15 font-display text-label-md text-white">
                    {story.client[0]}
                  </span>
                  <span>
                    <span className="block font-display text-label-md text-white">{story.client}</span>
                    <span className="block text-body-sm text-white/60">{story.industry}</span>
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-body-md text-pretty text-ink-soft">{story.quote}</p>
                <span className={`mt-4 inline-flex rounded-full px-3 py-1 font-display text-label-sm ${story.resultClass}`}>
                  {story.result}
                </span>
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal>
          <div className="flex h-full flex-col justify-center rounded-lg bg-navy bg-[radial-gradient(420px_220px_at_100%_0%,rgb(0_194_255/.25),transparent_70%)] p-8 text-white">
            <span className="w-fit rounded-full bg-white/10 px-3 py-1 font-display text-label-sm text-secondary">
              YOUR TURN
            </span>
            <h3 className="mt-5 mb-3 text-headline-md">Become the next success story.</h3>
            <p className="mb-6 text-body-md text-white/70">
              Reclaim 20+ operational hours every week with custom AI automation built for your business.
            </p>
            <a href="#cta" className="btn btn-accent w-full rounded-base">
              Let&apos;s Build Your Engine
              <ArrowRight size={16} />
            </a>
            <span className="mt-4 text-center text-body-sm text-white/50">No long commitments · Turnkey delivery</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
