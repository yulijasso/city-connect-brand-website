/**
 * Centralized marketing copy for the City Connect brand site.
 * Keeping content here keeps the section components lean.
 */

export const nav = {
  brand: "City Connect",
  links: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Use cases", href: "#use-cases" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Book a demo", href: "#demo" },
};

export const hero = {
  eyebrow: "AI-Powered Resident Engagement",
  title: "AI agents for effortless resident experiences.",
  subtitle:
    "City Connect is the complete platform for building and deploying AI agents that support your residents.",
  primaryCta: { label: "Book a demo", href: "#demo" },
  secondaryCta: { label: "See it in action", href: "#demo" },
  stats: [
    { value: "EN + ES", label: "Bilingual out of the box" },
    { value: "24/7", label: "Always-on answers" },
    { value: "1 line", label: "To embed on any site" },
  ],
};

export const logoBar = {
  label: "Built for the cities residents rely on",
  cities: [
    "City of Pharr",
    "City Hall",
    "Municipal Court",
    "Public Works",
    "Parks & Rec",
  ],
};

export const features = {
  eyebrow: "Why City Connect",
  title: "Everything a resident needs to know, in one conversation.",
  subtitle:
    "Built for the cities residents rely on — accurate, multilingual answers they can trust, live in days.",
  items: [
    {
      title: "No knowledge base to build",
      description:
        "City Connect answers straight from your city's existing web pages, in real time — nothing to upload, nothing to keep in sync.",
    },
    {
      title: "Bilingual by default",
      description:
        "Residents ask in English or Spanish and get a natural reply in the same language — so your whole community gets answers, with nothing extra to set up.",
    },
    {
      title: "Source-cited answers",
      description:
        "Every reply links back to the official city page it came from — so residents and staff can trust what they read, and verify it in a click.",
    },
    {
      title: "Built-in feedback loop",
      description:
        "A quick yes or no on each reply shows what's landing and where the gaps are — so the assistant keeps getting sharper over time.",
    },
    {
      title: "One-line embed",
      description:
        "Add one snippet and the chat widget appears, styled to match your site — no engineering project, no migration, no waiting on IT.",
    },
    {
      title: "Multi-tenant & secure",
      description:
        "Every city runs in its own isolated tenant — with per-city API keys, request quotas, and rate-limit protection built in from day one.",
    },
  ],
};

export const howItWorks = {
  eyebrow: "How it works",
  title: "Live in three steps.",
  steps: [
    {
      step: "01",
      title: "Add one embed snippet",
      description:
        "Paste a single line of code onto your city's website. The chat widget loads instantly, sandboxed and styled to fit in.",
    },
    {
      step: "02",
      title: "Residents ask in plain language",
      description:
        "Court hours, trash pickup, permits, payments — residents type a question the way they'd ask a person, in English or Spanish.",
    },
    {
      step: "03",
      title: "AI answers in real time, with sources",
      description:
        "The agent searches your live city information and replies in seconds, citing the official pages behind every answer.",
    },
  ],
};

export const useCases = {
  eyebrow: "Use cases",
  title: "Answers for every kind of city question.",
  subtitle:
    "Residents get instant answers to routine questions — hours, payments, permits, pickups — so your staff can focus on the cases that need a person.",
  items: [
    {
      title: "Courts & municipal hours",
      description:
        "Operating hours, locations, amnesty programs, and contact numbers — answered the moment a resident asks.",
    },
    {
      title: "Utilities & billing",
      description:
        "How to pay a bill, set up service, or understand a charge, without waiting on hold.",
    },
    {
      title: "Permits & licensing",
      description:
        "Walk residents and businesses through what they need to apply, submit, and follow up.",
    },
    {
      title: "Events & services",
      description:
        "Parks, programs, closures, and community events — surfaced from your existing pages.",
    },
    {
      title: "“Who do I contact for…?”",
      description:
        "The general, non-emergency questions residents would normally call the city to ask — answered instantly, day or night.",
    },
    {
      title: "After-hours support",
      description:
        "Residents get help nights and weekends, so nothing waits until Monday morning.",
    },
  ],
};

export const demo = {
  eyebrow: "See it live",
  title: "Book a demo",
  subtitle:
    "See City Connect answer real resident questions for your city. Tell us a little about your team and we'll set up a walkthrough.",
  screenshotAlt:
    "City Connect chat widget answering a resident's question about municipal court hours in Spanish, with source links and a feedback prompt.",
  bullets: [
    "A tailored walkthrough with your city's information",
    "Answers in English and Spanish, side by side",
    "Go live in days — most city software takes months",
  ],
};

export const faq = {
  eyebrow: "FAQ",
  title: "Questions, answered.",
  items: [
    {
      q: "What languages does City Connect support?",
      a: "Today, City Connect supports English and Spanish — residents can ask in either language and get a reply in the same one. We can add more languages down the road if your community needs them.",
    },
    {
      q: "Do we need to build a knowledge base?",
      a: "No. City Connect uses a live-web-search agent that answers from your city's existing public pages. There's nothing to upload and nothing to keep in sync as your site changes.",
    },
    {
      q: "How do residents access it?",
      a: "You add a single embed snippet to your website and a chat widget appears. Its branding and styling are set from your dashboard in the City Connect software, and it runs in a self-contained container that won't interfere with your existing pages.",
    },
    {
      q: "Is it secure and isolated per city?",
      a: "Yes. Every city runs in its own isolated tenant with its own API keys and built-in rate-limit protection.",
    },
    {
      q: "How accurate are the answers?",
      a: "Every answer cites the official pages it came from, and a built-in yes/no feedback loop surfaces gaps so the assistant keeps improving.",
    },
    {
      q: "How much does it cost?",
      a: "Book a demo and we'll put together a plan that fits.",
    },
  ],
};

export const finalCta = {
  title: "Give your residents a faster way to get answers.",
  subtitle:
    "See how City Connect handles your city's real questions — in English and Spanish — in a 20-minute walkthrough.",
  cta: { label: "Book a demo", href: "#demo" },
};

export const footer = {
  brand: "City Connect",
  tagline: "AI-powered resident engagement, built for cities.",
  columns: [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "How it works", href: "#how-it-works" },
        { label: "Use cases", href: "#use-cases" },
        { label: "Book a demo", href: "#demo" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#demo" },
      ],
    },
  ],
};
