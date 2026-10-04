"use client";

import Image from "next/image";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const tools = [
  { name: "n8n", logo: "/logos/n8n.svg", note: "Self-hostable workflow engine for complex, branching automations with full code-level control." },
  { name: "Make", logo: "/logos/make.svg", note: "Visual multi-branch scenarios for operations that need conditional routing." },
  { name: "Zapier", logo: "/logos/zapier.svg", note: "Fast glue for the long tail of app-to-app triggers your team already relies on." },
  { name: "Activepieces", logo: "/logos/activepieces.png", note: "Open-source automation for teams that want flows they can own and extend." },
  { name: "Pipedream", logo: "/logos/pipedream.png", note: "Code-first event workflows for developer-grade integrations and API glue." },
  { name: "Claude", logo: "/logos/claude.svg", note: "Claude agents handle long-context research and policy-bound customer replies." },
  { name: "OpenAI", logo: "/logos/openai.png", note: "GPT-class reasoning for classification, drafting, and summarisation inside your workflows." },
  { name: "GitHub Copilot", logo: "/logos/github-copilot.svg", note: "AI pair-programming that speeds up the custom services we ship alongside automations." },
  { name: "Gemini", logo: "/logos/gemini.svg", note: "Multimodal models for document, image, and Workspace-native automation." },
  { name: "Perplexity", logo: "/logos/perplexity.svg", note: "Cited, up-to-date web research fed straight into your workflows." },
  { name: "Cursor", logo: "/logos/cursor.svg", note: "AI-native editor we use to build and iterate on custom integrations quickly." },
  { name: "ElevenLabs", logo: "/logos/elevenlabs.svg", note: "Natural, low-latency voices for AI agents that talk to your customers." },
  { name: "Twilio", logo: "/logos/twilio.png", note: "Programmable voice, SMS, and phone infrastructure behind outbound and inbound agents." },
  { name: "Vapi", logo: "/logos/vapi.png", note: "Real-time voice agent orchestration for calls that sound and act human." },
  { name: "Bland AI", logo: "/logos/bland-ai.png", note: "Scalable AI phone agents for qualification, reminders, and follow-ups." },
  { name: "Retell AI", logo: "/logos/retell-ai.png", note: "Conversational voice agents with fast turn-taking and call analytics." },
  { name: "WhatsApp", logo: "/logos/whatsapp.svg", note: "Business API messaging for support, notifications, and conversational sales." },
  { name: "Slack", logo: "/logos/slack.png", note: "Where approvals, alerts, and agent handoffs land in front of a human." },
  { name: "Telegram", logo: "/logos/telegram.svg", note: "Bot-driven alerts and commands for lightweight team and customer interfaces." },
  { name: "Discord", logo: "/logos/discord.svg", note: "Community and support ops automation for consumer brands." },
  { name: "Gmail", logo: "/logos/gmail.svg", note: "Inbox triage, drafting, and templated follow-ups on autopilot." },
  { name: "Airtable", logo: "/logos/airtable.svg", note: "Operational source of truth for catalogues, requests, and review queues." },
  { name: "Supabase", logo: "/logos/supabase.svg", note: "Postgres backbone for custom internal tools and agent memory." },
  { name: "HubSpot", logo: "/logos/hubspot.svg", note: "Pipeline stages, lifecycle sync, and outbound sequences kept clean automatically." },
  { name: "Salesforce", logo: "/logos/salesforce.png", note: "Enterprise CRM sync so every agent action is logged against the right record." },
  { name: "Notion", logo: "/logos/notion.svg", note: "Documentation and SOPs generated from the systems we deploy." },
  { name: "Apollo.io", logo: "/logos/apollo-io.png", note: "Prospect data and sequencing feeding your outbound pipeline." },
  { name: "Lusha", logo: "/logos/lusha.png", note: "Verified contact enrichment so outreach reaches the right people." },
  { name: "Clay", logo: "/logos/clay.png", note: "Waterfall enrichment and personalisation across dozens of data sources." },
  { name: "Instantly", logo: "/logos/instantly.png", note: "High-volume cold email sending with inbox warm-up and rotation." },
  { name: "Smartlead", logo: "/logos/smartlead.png", note: "Multi-inbox outbound campaigns with deliverability controls." },
  { name: "Apify", logo: "/logos/apify.png", note: "Managed scrapers and actors that turn websites into structured data." },
  { name: "Phantombuster", logo: "/logos/phantombuster.png", note: "Social and web extraction automations for lead research." },
  { name: "Bright Data", logo: "/logos/bright-data.png", note: "Reliable proxy and data-collection infrastructure for scraping at scale." },
  { name: "Higgsfield", logo: "/logos/higgsfield.png", note: "AI video generation for fast, cinematic marketing content." },
  { name: "Midjourney", logo: "/logos/midjourney.png", note: "High-fidelity image generation for creative and campaign assets." },
  { name: "Runway", logo: "/logos/runway.png", note: "Generative video tooling for editing and producing branded clips." },
  { name: "Kling AI", logo: "/logos/kling-ai.png", note: "Text- and image-to-video models for short-form creative output." },
  { name: "HeyGen", logo: "/logos/heygen.png", note: "AI avatars and translated video for personalised outreach at scale." },
  { name: "Document AI", logo: "/logos/document-ai.png", note: "Google OCR and parsing that turns invoices and forms into clean data." },
  { name: "DocuSign", logo: "/logos/docusign.png", note: "Agreements and e-signatures triggered automatically from deal stages." },
  { name: "PandaDoc", logo: "/logos/pandadoc.png", note: "Proposals and quotes generated and sent straight from your CRM." },
  { name: "Shopify", logo: "/logos/shopify.svg", note: "Orders, inventory, and customer events wired into fulfilment and support." },
  { name: "WooCommerce", logo: "/logos/woocommerce.svg", note: "Store automation for WordPress-based commerce operations." },
  { name: "Calendly", logo: "/logos/calendly.svg", note: "Booking links that sync meetings into CRM and follow-up flows." },
  { name: "Typeform", logo: "/logos/typeform.svg", note: "Conversational forms that kick off qualified, structured workflows." },
  { name: "Google Sheets", logo: "/logos/google-sheets.svg", note: "Lightweight reporting and data hand-offs your team can edit directly." },
  { name: "Google Drive", logo: "/logos/google-drive.svg", note: "File storage and generated documents organised automatically." },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg", note: "Reliable relational storage for production-grade data pipelines." },
  { name: "GitHub", logo: "/logos/github.svg", note: "Version control and CI for every workflow and service we deploy." },
];

const rows = [
  { tools: tools.slice(0, 25), animation: "animate-marquee" },
  { tools: tools.slice(25), animation: "animate-marquee-reverse" },
];

export default function TechStack() {
  const [active, setActive] = useState(tools[0]);

  return (
    // ===== Start: Tech Stack section =====
    <section id="stack" className="mt-6 overflow-hidden py-16 lg:py-24">
      <div className="px-6">
        <SectionHeader
          eyebrow="INTEGRATION ECOSYSTEM"
          title="Our Technology Stack"
          description="Built on a foundation of best-in-class, scalable, and secure technologies to deliver a robust automation platform."
        />
      </div>

      <div className="group mt-12 grid gap-4 [mask-image:linear-gradient(90deg,transparent,#000_9%,#000_91%,transparent)]">
        {rows.map((row) => (
          <div key={row.animation} className="border-y border-line bg-canvas py-4">
            <div className={`flex w-max group-hover:[animation-play-state:paused] ${row.animation}`}>
              {[...row.tools, ...row.tools].map((tool, i) => {
                const isDuplicate = i >= row.tools.length;
                return (
                  <button
                    key={`${tool.name}-${i}`}
                    type="button"
                    onClick={() => setActive(tool)}
                    tabIndex={isDuplicate ? -1 : undefined}
                    aria-hidden={isDuplicate}
                    className={`mr-4 flex size-24 shrink-0 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border bg-white transition duration-200 hover:-translate-y-1 hover:shadow-hover ${
                      tool.name === active.name ? "border-primary ring-4 ring-secondary/25" : "border-line"
                    }`}
                  >
                    <Image src={tool.logo} alt="" width={32} height={32} unoptimized className="size-8 object-contain" />
                    <span className="max-w-full truncate px-1 font-display text-label-sm text-ink-soft">{tool.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-4 px-6">
        <div className="flex items-center gap-4 rounded-lg border border-line bg-white px-5 py-4 shadow-card">
          <span className="grid size-10 place-items-center rounded-md bg-primary/10 text-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M12 3 4 6.5v5.8c0 4.4 3.3 7.6 8 8.7 4.7-1.1 8-4.3 8-8.7V6.5L12 3Z" />
              <path d="M9 12.2l2.3 2.3L15.5 10" />
            </svg>
          </span>
          <span>
            <span className="block font-display text-label-sm text-ink-muted">SELECTED INTEGRATION</span>
            <span className="mt-0.5 block font-display text-headline-sm text-ink">{active.name}</span>
          </span>
        </div>
        <p className="max-w-md text-body-md text-pretty text-ink-soft" aria-live="polite">
          {active.note}
        </p>
      </div>
    </section>
  );
}
