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

const iconOrder = ["search", "globe", "link", "thumbs", "code", "shield"] as const;

// A distinct earthy hue per feature (Earthy Rose palette).
const iconColors = [
  { bg: "#fceef1", fg: "#a8324d", border: "#f4d3da", glow: "rgba(194,60,90,0.35)" }, // rose
  { bg: "#e8eee9", fg: "#425749", border: "#d2ddd4", glow: "rgba(66,87,73,0.35)" }, // forest
  { bg: "#f7ece5", fg: "#9c5f47", border: "#ecd6c9", glow: "rgba(213,161,142,0.45)" }, // terracotta
  { bg: "#eef1ee", fg: "#566f60", border: "#d7e0d9", glow: "rgba(117,139,124,0.4)" }, // sage
  { bg: "#f6ece9", fg: "#92645b", border: "#ecd8d2", glow: "rgba(222,195,190,0.5)" }, // blush
  { bg: "#fbe7eb", fg: "#8a2940", border: "#f2cdd5", glow: "rgba(168,50,77,0.35)" }, // berry
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
