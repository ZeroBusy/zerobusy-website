"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { BOOKED_PATH, CAL_LINK } from "@/lib/booking";

const CAL_ORIGIN = "https://app.cal.com";
const NAMESPACE = "audit-call";

type CalApi = ((...args: unknown[]) => void) & { q?: unknown[][] };
type CalGlobal = CalApi & { loaded?: boolean; ns: Record<string, CalApi> };

declare global {
  interface Window {
    Cal?: CalGlobal;
  }
}

/**
 * cal.com's embed loader, typed. Calls made before embed.js arrives are
 * queued on `q` and replayed by the script once it loads.
 */
function loadCal(): CalGlobal {
  if (window.Cal) return window.Cal;

  const queue = (api: CalApi, args: unknown[]) => (api.q ??= []).push(args);
  const cal = function (...args: unknown[]) {
    if (!cal.loaded) {
      cal.ns = {};
      const script = document.createElement("script");
      script.src = `${CAL_ORIGIN}/embed/embed.js`;
      script.async = true;
      document.head.appendChild(script);
      cal.loaded = true;
    }
    if (args[0] === "init" && typeof args[1] === "string") {
      const name = args[1];
      const api: CalApi = (...apiArgs: unknown[]) => queue(api, apiArgs);
      cal.ns[name] ??= api;
      queue(cal.ns[name], args);
      queue(cal, ["initNamespace", name]);
      return;
    }
    queue(cal, args);
  } as CalGlobal;

  window.Cal = cal;
  return cal;
}

type BookingSuccess = { data?: { startTime?: string } };

/**
 * Inline cal.com booker in the site's colours. After a booking it moves
 * the visitor to our own confirmation page instead of cal.com's screen.
 */
export default function CalEmbed({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const cal = loadCal();
    if (!cal.ns?.[NAMESPACE]) cal("init", NAMESPACE, { origin: CAL_ORIGIN });
    const ns = cal.ns[NAMESPACE];

    ns("inline", {
      elementOrSelector: el,
      calLink: CAL_LINK,
      config: { layout: "month_view", theme: "light" },
    });
    ns("ui", {
      theme: "light",
      layout: "month_view",
      hideEventTypeDetails: false,
      cssVarsPerTheme: { light: { "cal-brand": "#0080ff" }, dark: { "cal-brand": "#0080ff" } },
    });

    const onLoaded = () => setReady(true);
    const onBooked = (e: { detail: BookingSuccess }) => {
      const start = e.detail.data?.startTime;
      router.push(start ? `${BOOKED_PATH}?start=${encodeURIComponent(start)}` : BOOKED_PATH);
    };
    ns("on", { action: "linkReady", callback: onLoaded });
    ns("on", { action: "bookingSuccessfulV2", callback: onBooked });

    return () => {
      ns("off", { action: "linkReady", callback: onLoaded });
      ns("off", { action: "bookingSuccessfulV2", callback: onBooked });
      el.replaceChildren();
    };
  }, [router]);

  return (
    <div className={`relative min-h-[560px] ${className}`}>
      {!ready && (
        <div className="absolute inset-0 grid place-items-center text-body-sm text-ink-muted" aria-live="polite">
          <span className="inline-flex items-center gap-2">
            <span className="size-2 animate-pulse rounded-full bg-primary" />
            Loading available times…
          </span>
        </div>
      )}
      <div ref={ref} className="relative size-full overflow-auto" />
    </div>
  );
}
