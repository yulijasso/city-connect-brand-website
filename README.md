# City Connect — Brand Site

Marketing site for **City Connect**, an AI-powered resident engagement platform. Cities embed a
single chat widget and residents get instant, source-cited answers — in English and Spanish — with no
knowledge base to build or maintain.

Built with **Next.js (App Router)**, **TypeScript**, and **Chakra UI v3**. The design is a clean,
monochrome, chatbase-inspired layout with a forest-green accent pulled from the product. The
**Book a demo** form sends an email via [Brevo](https://www.brevo.com) (transactional email API).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

The site runs and builds without any env vars — only the **Book a demo** email send needs them.
Copy `.env.example` to `.env.local` and fill in:

| Variable          | Required | Description                                                                        |
| ----------------- | -------- | ---------------------------------------------------------------------------------- |
| `BREVO_API_KEY`   | Yes\*    | API key from [Brevo → SMTP & API → API Keys](https://app.brevo.com/settings/keys/api). |
| `DEMO_TO_EMAIL`   | Yes\*    | Inbox that should receive demo requests.                                           |
| `DEMO_FROM_EMAIL` | No       | From address. **Defaults to `DEMO_TO_EMAIL`.** Accepts `"Name <email>"`.            |

\*Without `BREVO_API_KEY` and `DEMO_TO_EMAIL`, the form still validates and submits, but returns a
clear "not configured yet" message instead of sending. The from address (whether `DEMO_FROM_EMAIL`
or the `DEMO_TO_EMAIL` it defaults to) must be a **verified sender** (or on an authenticated domain)
in your Brevo account, or Brevo will reject the send.

## Project structure

```
app/
  layout.tsx          Root layout: Inter font, SEO metadata, Chakra Providers
  providers.tsx       Chakra ChakraProvider with the custom design system
  page.tsx            Landing page composing all sections
  api/demo/route.ts   POST handler that validates + emails demo requests via Brevo
theme/system.ts       Monochrome Chakra v3 system (ink scale + green accent)
components/            Navbar, Hero, LogoBar, Features, HowItWorks, UseCases,
                      DemoSection, BookDemoForm, FAQ, CTASection, Footer, ...
lib/content.ts        All marketing copy in one place
public/demo-screenshot.png   Product screenshot used in the hero/demo mockup
```

## Build

```bash
npm run build
npm run start
```

## Deploy

Deploys to [Vercel](https://vercel.com) with zero config. Add `BREVO_API_KEY` and `DEMO_TO_EMAIL`
(and optionally `DEMO_FROM_EMAIL`) as Environment Variables in the Vercel project settings.
