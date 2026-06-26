import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "./icons";
import { Reveal } from "./Reveal";
import { finalCta } from "@/lib/content";

export function CTASection() {
  return (
    <Box as="section" py={{ base: "16", md: "20" }}>
      <Container maxW="6xl">
        <Reveal y={24}>
        <Box
          position="relative"
          overflow="hidden"
          bgGradient="to-br"
          gradientFrom="#2f4035"
          gradientVia="#425749"
          gradientTo="#5e7567"
          color="white"
          rounded="l3"
          px={{ base: "8", md: "16" }}
          py={{ base: "12", md: "20" }}
        >
          {/* glow accents */}
          <Box
            position="absolute"
            top="-40%"
            right="-10%"
            w="55%"
            h="160%"
            bg="#d5a18e"
            opacity={0.4}
            filter="blur(90px)"
            rounded="full"
            pointerEvents="none"
          />
          <Box
            position="absolute"
            inset="0"
            opacity={0.5}
            backgroundImage="radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)"
            backgroundSize="24px 24px"
            maskImage="radial-gradient(ellipse 70% 80% at 80% 20%, black, transparent)"
            pointerEvents="none"
          />
          <Stack gap="6" maxW="2xl" position="relative">
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "4xl" }}
              letterSpacing="-0.025em"
              lineHeight="1.1"
              fontWeight="800"
            >
              {finalCta.title}
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="#e6ddd0">
              {finalCta.subtitle}
            </Text>
            <HStack>
              <Button
                asChild
                size="lg"
                bg="white"
                color="ink.900"
                rounded="l1"
                px="7"
                shadow="0 12px 30px -12px rgba(0,0,0,0.6)"
                transition="all 0.18s ease"
                _hover={{ bg: "ink.100", transform: "translateY(-1px)" }}
                _active={{ transform: "translateY(0)" }}
              >
                <a href={finalCta.cta.href}>
                  {finalCta.cta.label}
                  <Box as="span" ml="2" display="inline-flex">
                    <ArrowRightIcon />
                  </Box>
                </a>
              </Button>
            </HStack>
          </Stack>
        </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
