import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { featureIcons } from "./icons";
import { features } from "@/lib/content";

const iconOrder = [
  "search",
  "globe",
  "link",
  "thumbs",
  "code",
  "shield",
  "chart",
  "chat",
  "gear",
] as const;

// A distinct vibrant hue per feature.
const iconColors = [
  { bg: "#ede9fe", fg: "#6d28d9", border: "#ddd6fe", glow: "rgba(124,58,237,0.4)" }, // violet
  { bg: "#dbeafe", fg: "#1d4ed8", border: "#bfdbfe", glow: "rgba(37,99,235,0.4)" }, // blue
  { bg: "#fce7f3", fg: "#be185d", border: "#fbcfe8", glow: "rgba(219,39,119,0.4)" }, // pink
  { bg: "#fef3c7", fg: "#b45309", border: "#fde68a", glow: "rgba(217,119,6,0.4)" }, // amber
  { bg: "#ccfbf1", fg: "#0f766e", border: "#99f6e4", glow: "rgba(13,148,136,0.4)" }, // teal
  { bg: "#ffe4e6", fg: "#be123c", border: "#fecdd3", glow: "rgba(225,29,72,0.4)" }, // rose
  { bg: "#e0e7ff", fg: "#4338ca", border: "#c7d2fe", glow: "rgba(79,70,229,0.4)" }, // indigo
  { bg: "#cffafe", fg: "#0e7490", border: "#a5f3fc", glow: "rgba(8,145,178,0.4)" }, // cyan
  { bg: "#ecfccb", fg: "#4d7c0f", border: "#d9f99d", glow: "rgba(101,163,13,0.4)" }, // lime
];

export function Features() {
  return (
    <Box as="section" id="features" py={{ base: "16", md: "24" }} bg="bg.subtle">
      <Container maxW="6xl">
        <Reveal>
          <SectionHeading
            eyebrow={features.eyebrow}
            title={features.title}
            subtitle={features.subtitle}
          />
        </Reveal>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: "5", md: "6" }}
          mt={{ base: "10", md: "14" }}
        >
          {features.items.map((f, i) => {
            const Icon = featureIcons[iconOrder[i]];
            const c = iconColors[i % iconColors.length];
            return (
              <Reveal key={f.title} delay={(i % 3) * 80} h="full">
                <Stack
                  gap="5"
                  h="full"
                  p={{ base: "6", md: "7" }}
                  bg="white"
                  rounded="l2"
                  border="1px solid"
                  borderColor="border"
                  position="relative"
                  overflow="hidden"
                  transition="all 0.18s ease"
                  _hover={{
                    borderColor: "border.emphasized",
                    shadow: "0 20px 48px -28px rgba(12,12,14,0.4)",
                    transform: "translateY(-3px)",
                  }}
                >
                  <Flex
                    w="12"
                    h="12"
                    align="center"
                    justify="center"
                    rounded="l1"
                    bg={c.bg}
                    border="1px solid"
                    borderColor={c.border}
                    color={c.fg}
                    fontSize="22px"
                    shadow={`0 6px 16px -6px ${c.glow}`}
                  >
                    <Icon />
                  </Flex>
                  <Stack gap="2">
                    <Heading as="h3" fontSize="lg" letterSpacing="-0.01em">
                      {f.title}
                    </Heading>
                    <Text fontSize="sm" color="fg.muted" lineHeight="1.65">
                      {f.description}
                    </Text>
                  </Stack>
                </Stack>
              </Reveal>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
