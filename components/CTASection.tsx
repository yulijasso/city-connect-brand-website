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
    <Box as="section" py={{ base: "16", md: "24" }}>
      <Container maxW="8xl">
        <Reveal y={24}>
          <Box
            position="relative"
            overflow="hidden"
            bg="ink.900"
            color="white"
            rounded="l3"
            px={{ base: "8", md: "20" }}
            py={{ base: "16", md: "28" }}
          >
            {/* colorful glow accents */}
            <Box
              position="absolute"
              top="-50%"
              right="-8%"
              w="55%"
              h="180%"
              bg="#a855f7"
              opacity={0.45}
              filter="blur(110px)"
              rounded="full"
              pointerEvents="none"
            />
            <Box
              position="absolute"
              bottom="-50%"
              left="-6%"
              w="48%"
              h="170%"
              bg="#f472b6"
              opacity={0.32}
              filter="blur(110px)"
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
            <Stack gap="7" maxW="3xl" position="relative">
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                letterSpacing="-0.03em"
                lineHeight="1.05"
                fontWeight="800"
              >
                {finalCta.title}
              </Heading>
              <Text fontSize={{ base: "md", md: "xl" }} color="ink.300" maxW="2xl">
                {finalCta.subtitle}
              </Text>
              <HStack>
                <Button
                  asChild
                  size="lg"
                  bg="white"
                  color="ink.900"
                  rounded="l1"
                  px="8"
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
