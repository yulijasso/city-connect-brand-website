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
import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <Box as="section" id="how-it-works" py={{ base: "16", md: "24" }}>
      <Container maxW="6xl">
        <Reveal>
          <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.title} />
        </Reveal>

        <Box position="relative" mt={{ base: "12", md: "16" }}>
          {/* connecting line across the steps (desktop) */}
          <Box
            display={{ base: "none", md: "block" }}
            position="absolute"
            top="6"
            left="16%"
            right="16%"
            h="2px"
            bgGradient="to-r"
            gradientFrom="accent.200"
            gradientVia="accent.300"
            gradientTo="accent.200"
            zIndex={0}
          />
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "10", md: "8" }}>
            {howItWorks.steps.map((s, i) => (
              <Reveal
                key={s.step}
                delay={i * 120}
                position="relative"
                zIndex={1}
              >
              <Stack
                gap="4"
                align={{ base: "flex-start", md: "center" }}
                textAlign={{ base: "left", md: "center" }}
              >
                <Flex
                  w="12"
                  h="12"
                  align="center"
                  justify="center"
                  rounded="full"
                  bg="accent.600"
                  color="white"
                  fontWeight="800"
                  fontSize="md"
                  shadow="0 8px 20px -8px rgba(124,58,237,0.5)"
                  ring="6px"
                  ringColor="bg"
                  flexShrink={0}
                >
                  {s.step}
                </Flex>
                <Stack gap="2" maxW="xs">
                  <Heading as="h3" fontSize="xl" letterSpacing="-0.01em">
                    {s.title}
                  </Heading>
                  <Text fontSize="sm" color="fg.muted" lineHeight="1.65">
                    {s.description}
                  </Text>
                </Stack>
              </Stack>
              </Reveal>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
