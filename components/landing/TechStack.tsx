"use client";

import Image from "next/image";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const tools = [
  { name: "n8n", logo: "/logos/n8n.svg", note: "The engine that connects your apps and runs the work in the background. We can set it up on your own servers so your data stays yours." },
  { name: "Make", logo: "/logos/make.svg", note: "Connects your apps with step-by-step flows that handle different cases differently." },
  { name: "Zapier", logo: "/logos/zapier.svg", note: "The quick way to link the apps your team already uses, so one action sets off the next." },
  { name: "Activepieces", logo: "/logos/activepieces.png", note: "Open-source automation you own outright, with nothing locked to a vendor." },
  { name: "Pipedream", logo: "/logos/pipedream.png", note: "For connections that need custom code, built and run without managing servers." },
  { name: "Claude", logo: "/logos/claude.svg", note: "Reads long documents and drafts careful replies that stick to your rules." },
  { name: "OpenAI", logo: "/logos/openai.png", note: "Sorts, drafts and summarises text inside your workflows." },
  { name: "GitHub Copilot", logo: "/logos/github-copilot.svg", note: "Helps us write the custom code behind your automations faster." },
  { name: "Gemini", logo: "/logos/gemini.svg", note: "Reads documents and images, and works natively inside Google Workspace." },
  { name: "Perplexity", logo: "/logos/perplexity.svg", note: "Looks things up on the web and brings back answers with sources." },
  { name: "Cursor", logo: "/logos/cursor.svg", note: "The editor we build in, so custom pieces get done quickly." },
  { name: "ElevenLabs", logo: "/logos/elevenlabs.svg", note: "Natural-sounding voices for AI agents that talk to your customers." },
  { name: "Twilio", logo: "/logos/twilio.png", note: "The phone lines and SMS behind agents that call and text." },
  { name: "Vapi", logo: "/logos/vapi.png", note: "Runs live phone calls with AI agents that sound natural." },
  { name: "Bland AI", logo: "/logos/bland-ai.png", note: "AI phone agents for qualifying leads, reminders and follow-ups." },
  { name: "Retell AI", logo: "/logos/retell-ai.png", note: "Voice agents that keep a conversation flowing, with a record of every call." },
  { name: "WhatsApp", logo: "/logos/whatsapp.svg", note: "Reply to customers, send updates and sell where your customers already chat." },
  { name: "Slack", logo: "/logos/slack.png", note: "Where alerts and approvals reach your team, so a person signs off on what matters." },
  { name: "Telegram", logo: "/logos/telegram.svg", note: "Simple bots for alerts and quick commands." },
  { name: "Discord", logo: "/logos/discord.svg", note: "Keeps community and support channels running without someone watching all day." },
  { name: "Gmail", logo: "/logos/gmail.svg", note: "Sorts your inbox, drafts replies and sends follow-ups on time." },
  { name: "Airtable", logo: "/logos/airtable.svg", note: "One shared table for catalogues, requests and anything that needs a review." },
  { name: "Supabase", logo: "/logos/supabase.svg", note: "The database behind custom tools we build for you." },
  { name: "HubSpot", logo: "/logos/hubspot.svg", note: "Keeps your deals, contacts and follow-up emails up to date on their own." },
  { name: "Salesforce", logo: "/logos/salesforce.png", note: "Logs every automated action against the right customer record." },
  { name: "Notion", logo: "/logos/notion.svg", note: "Where your how-to docs live, written up from the systems we build." },
  { name: "Apollo.io", logo: "/logos/apollo-io.png", note: "Finds prospects and keeps outreach sequences moving." },
  { name: "Lusha", logo: "/logos/lusha.png", note: "Checks contact details so your outreach reaches real people." },
  { name: "Clay", logo: "/logos/clay.png", note: "Fills in missing details about leads from many sources at once." },
  { name: "Instantly", logo: "/logos/instantly.png", note: "Sends cold email at volume while keeping your inboxes healthy." },
  { name: "Smartlead", logo: "/logos/smartlead.png", note: "Runs outreach across several inboxes so emails land, not bounce." },
  { name: "Apify", logo: "/logos/apify.png", note: "Turns websites into tidy data you can actually use." },
  { name: "Phantombuster", logo: "/logos/phantombuster.png", note: "Collects lead details from social sites and the web." },
  { name: "Bright Data", logo: "/logos/bright-data.png", note: "Reliable data collection when we need to gather a lot from the web." },
  { name: "Higgsfield", logo: "/logos/higgsfield.png", note: "Makes short marketing videos with AI." },
  { name: "Midjourney", logo: "/logos/midjourney.png", note: "Creates images for campaigns and creative work." },
  { name: "Runway", logo: "/logos/runway.png", note: "Edits and produces video with AI." },
  { name: "Kling AI", logo: "/logos/kling-ai.png", note: "Turns text and images into short videos." },
  { name: "HeyGen", logo: "/logos/heygen.png", note: "AI presenter videos, including translated versions, for personal outreach." },
  { name: "Document AI", logo: "/logos/document-ai.png", note: "Reads invoices and forms and turns them into clean data." },
  { name: "DocuSign", logo: "/logos/docusign.png", note: "Sends contracts for signature the moment a deal is ready." },
  { name: "PandaDoc", logo: "/logos/pandadoc.png", note: "Creates and sends proposals and quotes straight from your CRM." },
  { name: "Shopify", logo: "/logos/shopify.svg", note: "Connects orders, stock and customers to fulfilment and support." },
  { name: "WooCommerce", logo: "/logos/woocommerce.svg", note: "Automates the day-to-day of running a WordPress store." },
  { name: "Calendly", logo: "/logos/calendly.svg", note: "Booked meetings go straight into your CRM and follow-ups." },
  { name: "Typeform", logo: "/logos/typeform.svg", note: "Forms that collect the right details and start the next step." },
  { name: "Google Sheets", logo: "/logos/google-sheets.svg", note: "Simple reports your team can open and edit." },
  { name: "Google Drive", logo: "/logos/google-drive.svg", note: "Keeps generated files and documents filed in the right place." },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg", note: "A dependable database for when your data outgrows spreadsheets." },
  { name: "GitHub", logo: "/logos/github.svg", note: "Keeps a history of every change we make, so nothing gets lost." },
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
          eyebrow="OUR TOOLKIT"
          title="The tools we build with"
          description="We work alongside the software you already use."
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
