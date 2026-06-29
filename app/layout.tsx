import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Minimal geometric sans used for headings.
const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const siteUrl = "https://cityconnect.ai";
const description =
  "City Connect is an AI-powered resident engagement platform. Embed one widget and answer resident questions instantly — in English and Spanish — with source-cited answers and no knowledge base to maintain.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "City Connect — AI-Powered Resident Engagement",
    template: "%s · City Connect",
  },
  description,
  keywords: [
    "civic chatbot",
    "resident engagement",
    "AI for cities",
    "government chatbot",
    "311 automation",
    "bilingual city assistant",
  ],
  openGraph: {
    title: "City Connect — AI-Powered Resident Engagement",
    description,
    url: siteUrl,
    siteName: "City Connect",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "City Connect — AI-Powered Resident Engagement",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
