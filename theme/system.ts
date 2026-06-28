import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

/**
 * Chatbase-inspired design system for City Connect.
 * Clean white canvas, neutral black/grey ink, black primary buttons, with a
 * vibrant violet accent and multi-color pops in decorative elements.
 */
const config = defineConfig({
  globalCss: {
    "html, body": {
      bg: "white",
      color: "ink.900",
      fontFeatureSettings: '"cv11", "ss01"',
    },
    "*::selection": {
      bg: "accent.100",
    },
    "*": {
      borderColor: "ink.100",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-heading), var(--font-inter), system-ui, sans-serif" },
        body: { value: "var(--font-inter), system-ui, sans-serif" },
      },
      colors: {
        // Neutral ink scale (cool grey → near-black)
        ink: {
          50: { value: "#f7f7f8" },
          100: { value: "#ececee" },
          200: { value: "#d9d9de" },
          300: { value: "#b8b8c0" },
          400: { value: "#8a8a95" },
          500: { value: "#5f5f6b" },
          600: { value: "#414149" },
          700: { value: "#2a2a30" },
          800: { value: "#15151a" },
          900: { value: "#0a0a0c" },
        },
        // Royal violet accent (anchored on #7c3aed)
        accent: {
          50: { value: "#f5f3ff" },
          100: { value: "#ede9fe" },
          200: { value: "#ddd6fe" },
          300: { value: "#c4b5fd" },
          400: { value: "#a78bfa" },
          500: { value: "#8b5cf6" },
          600: { value: "#7c3aed" },
          700: { value: "#6d28d9" },
          800: { value: "#5b21b6" },
          900: { value: "#4c1d95" },
        },
      },
      radii: {
        l1: { value: "0.625rem" },
        l2: { value: "1rem" },
        l3: { value: "1.5rem" },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: { value: "white" },
          subtle: { value: "{colors.ink.50}" },
          inverse: { value: "{colors.ink.900}" },
        },
        fg: {
          DEFAULT: { value: "{colors.ink.900}" },
          muted: { value: "{colors.ink.500}" },
          subtle: { value: "{colors.ink.400}" },
          inverse: { value: "white" },
        },
        border: {
          DEFAULT: { value: "{colors.ink.100}" },
          emphasized: { value: "{colors.ink.200}" },
        },
        accent: {
          solid: { value: "{colors.accent.600}" },
          contrast: { value: "white" },
          fg: { value: "{colors.accent.600}" },
          muted: { value: "{colors.accent.100}" },
          subtle: { value: "{colors.accent.50}" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
