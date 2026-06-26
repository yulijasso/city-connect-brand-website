import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

/**
 * "Earthy Rose" design system for City Connect.
 * Warm cream canvas, warm-neutral ink, a rose accent (#C23C5A), with
 * forest-green / sage / terracotta / blush as supporting earthy tones.
 */
const config = defineConfig({
  globalCss: {
    "html, body": {
      bg: "#fbf7f1",
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
        // Warm neutral ink scale
        ink: {
          50: { value: "#f7f3ee" },
          100: { value: "#ebe4da" },
          200: { value: "#ddd2c4" },
          300: { value: "#c0b3a3" },
          400: { value: "#94887a" },
          500: { value: "#6e6357" },
          600: { value: "#4d4439" },
          700: { value: "#352e26" },
          800: { value: "#221d18" },
          900: { value: "#15110d" },
        },
        // Rose accent (#C23C5A)
        accent: {
          50: { value: "#fceef1" },
          100: { value: "#f7d8de" },
          200: { value: "#eeb1bf" },
          300: { value: "#e08498" },
          400: { value: "#d15c76" },
          500: { value: "#c23c5a" },
          600: { value: "#a8324d" },
          700: { value: "#8a2940" },
          800: { value: "#6a1f30" },
          900: { value: "#471521" },
        },
        // Supporting earthy tones
        forest: { value: "#425749" },
        sage: { value: "#758b7c" },
        clay: { value: "#d5a18e" },
        blush: { value: "#dec3be" },
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
          DEFAULT: { value: "#fbf7f1" },
          subtle: { value: "#f2ece2" },
          inverse: { value: "{colors.forest}" },
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
          fg: { value: "{colors.accent.700}" },
          muted: { value: "{colors.accent.100}" },
          subtle: { value: "{colors.accent.50}" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
