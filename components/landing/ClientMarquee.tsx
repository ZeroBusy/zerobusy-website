import Image from "next/image";
import { clients } from "./clients";

/**
 * Continuous client logo marquee.
 *
 * Note: the scrolling track must be `inline-flex`, not `flex`. A block-level
 * flex container sizes itself to the parent's width even when its children
 * overflow, which would make the `translateX(-50%)` keyframe travel only a
 * fraction of the real content width and loop back early.
 */
export default function ClientMarquee({ className = "border-t border-line bg-white/70" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap ${className}`}>
      <div className="flex items-center px-6 py-5 font-display text-label-sm whitespace-nowrap text-ink-muted md:px-8">
        TRUSTED BY
      </div>
      <div className="relative flex-1 overflow-hidden border-line md:border-l">
        <div className="zb-marquee inline-flex w-max items-center">
          {[...clients, ...clients].map((client, i) => (
            <a
              key={`${client.name}-${i}`}
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden={i >= clients.length ? true : undefined}
              tabIndex={i >= clients.length ? -1 : undefined}
              className="flex shrink-0 items-center justify-center px-7 py-5 opacity-70 transition-opacity duration-200 hover:opacity-100"
            >
              <Image
                src={client.src}
                alt={client.name}
                width={client.width}
                height={client.height}
                className="h-9 w-auto object-contain"
                style={{ maxWidth: "128px" }}
              />
            </a>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-white to-transparent" />
      </div>
    </div>
  );
}
