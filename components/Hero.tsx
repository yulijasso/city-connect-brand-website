import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Button,
  SimpleGrid,
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
      bg="white"
    >
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
                backgroundImage="url('/explore/background-carousel2.png')"
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundClip="text"
                color="transparent"
                css={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
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
                  bg="ink.900"
                  color="white"
                  rounded="l1"
                  px="7"
                  shadow="0 14px 30px -12px rgba(10,10,12,0.5)"
                  transition="all 0.18s ease"
                  _hover={{ bg: "ink.700", transform: "translateY(-1px)" }}
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

          {/* Product mockup on a vibrant cool-spectrum gradient panel */}
          <Reveal delay={120}>
            <Box
              borderRadius="2rem"
              p={{ base: "5", md: "8" }}
              backgroundImage="url('/explore/background-carousel2.png')"
              backgroundSize="cover"
              backgroundPosition="center"
              shadow="0 40px 90px -45px rgba(59,130,246,0.6)"
            >
              <HeroChat maxW="full" />
            </Box>
          </Reveal>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
