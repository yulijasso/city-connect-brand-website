import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Button,
  HStack,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { HeroChat } from "./HeroChat";
import { Reveal } from "./Reveal";
import { ArrowRightIcon } from "./icons";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <Box
      as="section"
      id="top"
      position="relative"
      overflow="hidden"
      borderBottom="1px solid"
      borderColor="border"
      bg="bg"
    >
      {/* colorful gradient orbs */}
      <Box
        position="absolute"
        top="-20%"
        left="-10%"
        w="55%"
        h="120%"
        bg="#c23c5a"
        opacity={0.18}
        filter="blur(110px)"
        rounded="full"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        top="-25%"
        right="-8%"
        w="50%"
        h="110%"
        bg="#d5a18e"
        opacity={0.32}
        filter="blur(120px)"
        rounded="full"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-30%"
        left="30%"
        w="45%"
        h="90%"
        bg="#758b7c"
        opacity={0.3}
        filter="blur(120px)"
        rounded="full"
        pointerEvents="none"
      />
      {/* subtle grid backdrop */}
      <Box
        position="absolute"
        inset="0"
        opacity={0.4}
        backgroundImage="radial-gradient(circle at 1px 1px, var(--chakra-colors-ink-100) 1px, transparent 0)"
        backgroundSize="28px 28px"
        pointerEvents="none"
        maskImage="radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)"
      />
      <Container maxW="6xl" position="relative" py={{ base: "16", md: "24" }}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ base: "12", lg: "16" }}
          alignItems="center"
        >
          <Reveal>
          <Stack gap="6" maxW="2xl">
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              lineHeight="1.05"
              letterSpacing="-0.03em"
              fontWeight="800"
            >
              {hero.title}
            </Heading>

            <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted" maxW="xl">
              {hero.subtitle}
            </Text>

            <Stack
              direction={{ base: "column", sm: "row" }}
              gap="3"
              pt="1"
              w={{ base: "full", sm: "auto" }}
            >
              <Button
                asChild
                size="lg"
                w={{ base: "full", sm: "auto" }}
                bgGradient="to-r"
                gradientFrom="#c23c5a"
                gradientTo="#a8324d"
                color="white"
                rounded="l1"
                px="7"
                shadow="0 14px 30px -10px rgba(168,50,77,0.55)"
                transition="all 0.18s ease"
                _hover={{ filter: "brightness(1.08)", transform: "translateY(-1px)" }}
                _active={{ transform: "translateY(0)" }}
              >
                <a href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                  <Box as="span" ml="2" display="inline-flex">
                    <ArrowRightIcon />
                  </Box>
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                w={{ base: "full", sm: "auto" }}
                variant="outline"
                rounded="l1"
                px="7"
                borderColor="border.emphasized"
                color="fg"
                transition="all 0.18s ease"
                _hover={{ bg: "bg.subtle", borderColor: "ink.300", transform: "translateY(-1px)" }}
                _active={{ transform: "translateY(0)" }}
              >
                <a href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
              </Button>
            </Stack>

            <SimpleGrid columns={3} gap="4" pt="6" maxW="lg">
              {hero.stats.map((s) => (
                <Stack key={s.label} gap="0.5">
                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="800"
                    letterSpacing="-0.02em"
                  >
                    {s.value}
                  </Text>
                  <Text fontSize="xs" color="fg.muted" lineHeight="1.3">
                    {s.label}
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </Stack>
          </Reveal>

          <Reveal delay={120}>
          <Flex justify="center" px={{ base: "2", md: "0" }}>
            <HeroChat />
          </Flex>
          </Reveal>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
