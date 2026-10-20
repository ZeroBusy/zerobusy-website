/**
 * Copy for the "good fit / not a fit" section.
 *
 * Kept in its own file so the wording can be rewritten without touching the
 * component.
 *
 * Writing notes:
 * - Good-fit lines should describe a PAIN the reader recognises in their own
 *   week, not a feature we sell.
 * - Not-a-fit lines lead with the condition in bold, then say why. Aim them at
 *   the engagement (time, process, budget), never at the reader's size or
 *   competence.
 */

export const goodFit = [
  "Your team often types the same details into three different places",
  "New leads wait hours for a reply, with no follow-up visibility or metrics tracked",
  "You use a CRM, Shopify, sheets and WhatsApp, but none of them talk to each other",
  "You're about to hire someone just to keep up with miscellaneous tasks",
  "You want a partner who stays after launch and keeps improving things",
  "You currently spend more time running the business than growing it",
];

export type NotFitItem = { lead: string; detail: string };

export const notFit: NotFitItem[] = [
  {
    lead: "Nobody can spare a few hours early on.",
    detail: "We need one person who owns this and can show us how work gets done today.",
  },
  {
    lead: "Your processes live in people's heads.",
    detail: "We can only automate work that's written down and done the same way each time.",
  },
  {
    lead: "The task doesn't happen often.",
    detail: "Automation pays off when the same work repeats every day or week.",
  },
  {
    lead: "You want a one-time build and no one after.",
    detail: "We work best when we stay on and keep improving it.",
  },
  {
    lead: "You want it cheap and fast.",
    detail: "Systems that keep working for years take time to build right, and they aren't cheap.",
  },
];
