type LogoProps = {
  /** "light" renders dark text for light backgrounds, "dark" renders white text for dark backgrounds. */
  variant?: "light" | "dark";
  /** Animate the clock hands. Respects prefers-reduced-motion regardless. */
  animated?: boolean;
  className?: string;
};

/**
 * ZeroBusy brand mark: the spinning clock + ZER0BUSY wordmark, ported from the
 * original zerobusy.com site so both properties share one identity.
 */
export default function Logo({ variant = "light", animated = true, className = "" }: LogoProps) {
  const textColor = variant === "dark" ? "text-white" : "text-ink";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        className="shrink-0"
        role="img"
        aria-label="ZeroBusy"
      >
        <circle cx="12" cy="12" r="10.2" stroke="var(--color-primary)" strokeWidth="1.8" />
        {/* Hour hand */}
        <line
          x1="12"
          y1="12"
          x2="12"
          y2="4.8"
          stroke="var(--color-primary)"
          strokeWidth="1.4"
          strokeLinecap="round"
          className={animated ? "zb-clock-hour" : undefined}
        />
        {/* Minute hand */}
        <line
          x1="12"
          y1="12"
          x2="12"
          y2="7.2"
          stroke="var(--color-secondary)"
          strokeWidth="1.4"
          strokeLinecap="round"
          className={animated ? "zb-clock-minute" : undefined}
        />
      </svg>

      <span className={`font-display text-headline-sm font-extrabold tracking-tight ${textColor}`}>
        ZER<span className="text-primary">0</span>BUSY
      </span>
    </span>
  );
}
