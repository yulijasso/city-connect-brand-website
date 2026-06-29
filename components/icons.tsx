import type { SVGProps } from "react";

/**
 * Lightweight inline line-icons (stroke = currentColor) so sections can tint
 * them with Chakra color props without pulling in an icon dependency.
 */
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const SearchIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export const GlobeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
  </svg>
);

export const LinkIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M9 15l6-6" />
    <path d="M11 6l1-1a4 4 0 0 1 6 6l-2 2" />
    <path d="M13 18l-1 1a4 4 0 0 1-6-6l2-2" />
  </svg>
);

export const ThumbsIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M7 11v9H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3Z" />
    <path d="M7 11l4-7a2 2 0 0 1 2 1v4h5a2 2 0 0 1 2 2.3l-1.2 6A2 2 0 0 1 17 20H7" />
  </svg>
);

export const CodeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" />
  </svg>
);

export const ShieldIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const ChatIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M21 12a8 8 0 0 1-8 8H7l-4 3v-4.5A8 8 0 1 1 21 12Z" />
    <path d="M8.5 11h7M8.5 14h4" />
  </svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m5 12 5 5 9-11" />
  </svg>
);

export const PlusIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const SparkleIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
    <path d="M19 14l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />
  </svg>
);

export const BarChartIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </svg>
);

export const LayersIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3 3 8l9 5 9-5-9-5Z" />
    <path d="M3 13l9 5 9-5M3 16.5l9 5 9-5" />
  </svg>
);

export const GearIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 13a7.8 7.8 0 0 0 0-2l2-1.5-2-3.5-2.4 1a7.6 7.6 0 0 0-1.7-1l-.3-2.5h-4l-.3 2.5a7.6 7.6 0 0 0-1.7 1l-2.4-1-2 3.5L4.6 11a7.8 7.8 0 0 0 0 2l-2 1.5 2 3.5 2.4-1c.5.4 1.1.7 1.7 1l.3 2.5h4l.3-2.5c.6-.3 1.2-.6 1.7-1l2.4 1 2-3.5-2-1.5Z" />
  </svg>
);

export const featureIcons = {
  search: SearchIcon,
  globe: GlobeIcon,
  link: LinkIcon,
  thumbs: ThumbsIcon,
  code: CodeIcon,
  shield: ShieldIcon,
  chart: BarChartIcon,
  chat: ChatIcon,
  gear: GearIcon,
} as const;

export const showcaseIcons = {
  sparkle: SparkleIcon,
  chart: BarChartIcon,
  chat: ChatIcon,
  layers: LayersIcon,
  gear: GearIcon,
  globe: GlobeIcon,
} as const;
