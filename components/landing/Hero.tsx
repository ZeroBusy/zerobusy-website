import Reveal from "./Reveal";
import RoiEstimator from "./RoiEstimator";

// TODO: replace placeholder icons with the real client logos.
const operators = [
  { name: "Hype Fly", icon: <path d="M4 16l6-8 4 5 6-8" /> },
  {
    name: "Mumbai Retina",
    icon: (
      <>
        <ellipse cx="12" cy="12" rx="9.5" ry="6" />
        <circle cx="12" cy="12" r="2.2" />
      </>
    ),
  },
  { name: "Sneakinn", icon: <path d="M3 12h13M12 7l5 5-5 5" /> },
  {
    name: "Khatwani Group",
    icon: <path d="M4 21V5h9v16M13 10h7v11M7 9h3M7 13h3M7 17h3M16 14h1M16 17h1" />,
  },
  { name: "Vaayu Realty", icon: <path d="M5 21V8l7-4 7 4v13M9 21v-6h6v6" /> },
  {
    name: "Key Getaways",
    icon: (
      <>
        <circle cx="8" cy="12" r="4" />
        <path d="M12 12h9M17 12v4" />
      </>
    ),
  },
];

// TODO: replace gradient placeholders with real client avatars.
const avatarGradients = [
  "from-ink-muted to-ink",
  "from-primary-light to-primary",
  "from-outline to-ink-soft",
];

export default function Hero() {
  return (
    // ===== Start: Hero section =====
    <section id="overview" className="bg-hero-grid relative mt-4 overflow-hidden rounded-xl border border-line">
      <div className="grid items-center gap-12 px-6 py-16 md:px-10 lg:grid-cols-2 lg:px-14 lg:py-24">
        <Reveal>
          <div className="inline-flex flex-wrap items-center gap-3 rounded-full border border-line bg-white/90 px-4 py-2 shadow-card">
            <span className="inline-flex items-center gap-2 font-display text-label-sm text-ink">
              <span className="size-2 animate-pulse-dot rounded-full bg-secondary" />
              HIGH-VELOCITY OPERATIONS AGENCY
            </span>
            <span className="border-l border-line pl-3 font-display text-label-sm text-primary">Q2/Q3 Available</span>
          </div>

          <h1 className="mt-6 text-display-hero-mobile text-ink md:text-display-hero">
            Streamline.
            <br />
            <span className="bg-linear-135 from-primary to-secondary bg-clip-text text-transparent">Automate.</span>
            <br />
            Scale.
          </h1>
          <p className="mt-6 max-w-xl text-body-md text-pretty text-ink-soft md:text-body-lg">
            We architect autonomous digital workflows and deterministic AI infrastructure. Eliminate repetitive
            manual tasks and reclaim thousands of executive hours every quarter.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cta" className="btn btn-primary rounded-base">
              Book 30-Min Operational Audit
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7.5V12l3 2" strokeLinecap="round" />
              </svg>
            </a>
            {/* TODO: open the architecture demo video once it is recorded. */}
            <a href="#proof" className="btn btn-secondary rounded-base">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <circle cx="12" cy="12" r="9" />
                <path d="M10.4 8.8 15 12l-4.6 3.2V8.8Z" fill="currentColor" stroke="none" />
              </svg>
              Watch Architecture Demo
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-line pt-8">
            <div className="flex -space-x-3">
              {avatarGradients.map((gradient) => (
                <span
                  key={gradient}
                  className={`size-10 rounded-full border-2 border-white bg-linear-to-br ${gradient}`}
                />
              ))}
              <span className="grid size-10 place-items-center rounded-full border-2 border-white bg-navy font-display text-label-sm text-white">
                40+
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="tracking-[2px] text-warning">★★★★★</span>
                <span className="font-display text-label-md text-ink">4.98 / 5.0</span>
              </div>
              <p className="mt-0.5 text-body-sm text-ink-muted">Verified impact across 40+ high-growth operators</p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <RoiEstimator />
        </Reveal>
      </div>

      <div className="flex flex-wrap border-t border-line bg-white/70">
        <div className="flex items-center px-6 py-5 font-display text-label-sm text-ink-muted md:px-8">
          TRUSTED OPERATORS
        </div>
        <div className="flex flex-1 flex-wrap border-l border-line">
          {operators.map((operator) => (
            <span
              key={operator.name}
              className="flex flex-[1_1_140px] items-center justify-center gap-2 border-r border-line px-3 py-5 font-display text-label-md text-ink-soft transition-colors last:border-r-0 hover:bg-ice hover:text-primary"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary" aria-hidden>
                {operator.icon}
              </svg>
              {operator.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
