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

// Minimal line icons sweeping the brand spectrum: violet → blue → cyan → green.
const iconColors = [
  "#7c3aed", // violet (brand)
  "#6366f1", // indigo
  "#3b82f6", // blue
  "#0ea5e9", // sky
  "#06b6d4", // cyan
  "#0891b2", // deep cyan
  "#0d9488", // teal
  "#10b981", // emerald
  "#059669", // green
];

export function Features() {
  return (
    <Box as="section" id="features" py={{ base: "16", md: "24" }} bg="bg.subtle">
      <Container maxW="6xl">
        <Box position="relative">
          {/* watercolor splash behind the heading */}
          <Box
            aria-hidden="true"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            w={{ base: "130%", md: "900px" }}
            h={{ base: "240px", md: "300px" }}
            backgroundImage="url('/explore/title-splash.png')"
            backgroundSize="contain"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            zIndex={0}
            pointerEvents="none"
          />
          <Box position="relative" zIndex={1}>
            <Reveal>
              <SectionHeading
                eyebrow={features.eyebrow}
                title={features.title}
                subtitle={features.subtitle}
              />
            </Reveal>
          </Box>
        </Box>
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
                    align="center"
                    justify="flex-start"
                    color={c}
                    fontSize="28px"
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
