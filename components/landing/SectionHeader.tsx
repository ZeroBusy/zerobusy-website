import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
};

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-ice px-4 py-1.5 font-display text-label-sm text-primary">
        <span className="size-1.5 rounded-full bg-secondary" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-headline-xl-mobile text-ink md:text-headline-xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-body-md text-ink-soft md:text-body-lg">{description}</p>
    </Reveal>
  );
}
