"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** Formats an ISO time in the visitor's own time zone. Renders nothing on the server. */
export default function LocalTime({ iso }: { iso: string }) {
  const text = useSyncExternalStore(
    subscribe,
    () => {
      const date = new Date(iso);
      if (Number.isNaN(date.getTime())) return null;
      return date.toLocaleString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short",
      });
    },
    () => null,
  );
  return text;
}
