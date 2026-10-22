"use client";

import { useEffect, useRef, useState, type ReactNode, type Ref } from "react";

type SwipeRowProps = {
  children: ReactNode;
  /** Desktop layout classes (grid etc.). Below md the row swipes instead. */
  className?: string;
  ref?: Ref<HTMLDivElement>;
};

/**
 * A card grid on desktop, a sideways swipe row on phones (see `.zb-swipe` in
 * globals.css). Dots under the row show position and jump to a card.
 */
export default function SwipeRow({ children, className = "", ref }: SwipeRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(0);

  // Children hidden on mobile (e.g. decorative tracks) don't get a dot.
  const items = () =>
    Array.from(rowRef.current?.children ?? []).filter(
      (c) => getComputedStyle(c).display !== "none" && getComputedStyle(c).position !== "absolute",
    ) as HTMLElement[];

  /** scrollLeft that brings a card flush with the row's left padding. */
  const targetOf = (row: HTMLElement, card: HTMLElement) =>
    card.getBoundingClientRect().left - row.getBoundingClientRect().left + row.scrollLeft - 24;

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    const measure = () => setCount(items().length);
    const onScroll = () => {
      const cards = items();
      const left = row.scrollLeft;
      let best = 0;
      cards.forEach((c, i) => {
        if (Math.abs(targetOf(row, c) - left) < Math.abs(targetOf(row, cards[best]) - left)) best = i;
      });
      // At the far end the last card can't snap to the start, so count it.
      if (left + row.clientWidth >= row.scrollWidth - 4) best = cards.length - 1;
      setActive(best);
    };
    measure();
    row.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      row.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const setRefs = (el: HTMLDivElement | null) => {
    rowRef.current = el;
    if (typeof ref === "function") ref(el);
    else if (ref) ref.current = el;
  };

  return (
    <>
      <div ref={setRefs} className={`zb-swipe ${className}`}>
        {children}
      </div>
      {count > 1 && (
        <div className="mt-4 flex justify-center gap-2 md:hidden">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show card ${i + 1} of ${count}`}
              onClick={() => {
                const row = rowRef.current;
                const card = items()[i];
                if (row && card) row.scrollTo({ left: targetOf(row, card), behavior: "smooth" });
              }}
              className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-primary" : "w-2 bg-outline/50"}`}
            />
          ))}
        </div>
      )}
    </>
  );
}
