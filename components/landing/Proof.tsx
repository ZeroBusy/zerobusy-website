import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { ArrowRight } from "./icons";

const success = "bg-success/10 text-success";
const primary = "bg-primary/10 text-primary";

const stories = [
  {
    client: "Hype Fly",
    industry: "D2C Retail",
    quote: "“Lead routing used to eat a full day a week. Now it just runs.”",
    duration: "1:42",
    result: "+38% closed",
    resultClass: success,
  },
  {
    client: "Mumbai Retina",
    industry: "Healthcare",
    quote: "“Patient intake and follow-ups are fully automated end to end.”",
    duration: "2:15",
    result: "22 hrs/wk",
    resultClass: primary,
  },
  {
    client: "Sneakinn",
    industry: "Ecommerce",
    quote: "“Stock sync across three stores stopped being a person's job.”",
    duration: "1:58",
    result: "0.8s sync",
    resultClass: success,
  },
  {
    client: "Vaayu Realty",
    industry: "Real Estate",
    quote: "“Site visit scheduling and CRM hygiene handled without a coordinator.”",
    duration: "2:30",
    result: "3x site visits",
    resultClass: primary,
  },
  {
    client: "Khatwani Group",
    industry: "Manufacturing",
    quote: "“Reporting that took two analysts now lands in the inbox every Monday.”",
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
