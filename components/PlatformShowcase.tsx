"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Stack,
  Heading,
  HStack,
  Image,
  Flex,
  Text,
  chakra,
} from "@chakra-ui/react";
import { showcase } from "@/lib/content";
import { showcaseIcons } from "./icons";

// A distinct gradient per dock app icon (colorful, brand-aligned).
const dockGrads = [
  "linear-gradient(135deg, #d44be0, #8b5cf6)",
  "linear-gradient(135deg, #3b82f6, #22d3ee)",
  "linear-gradient(135deg, #ec4899, #fb923c)",
  "linear-gradient(135deg, #8b5cf6, #3b82f6)",
  "linear-gradient(135deg, #fbbf24, #fb7185)",
];

export function PlatformShowcase() {
  const [active, setActive] = useState(0);
  // The screenshot actually rendered — lags `active` so we can fade the old
  // one out (revealing the full background) before swapping to the new one.
  const [displayed, setDisplayed] = useState(0);
  const [fading, setFading] = useState(false);
  const slides = showcase.slides;

  // auto-advance the slideshow
  useEffect(() => {
    if (slides.length < 2) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const t = setInterval(() => setActive((a) => (a + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  // crossfade: fade the screenshot out (background shows), swap, fade in
  useEffect(() => {
    if (active === displayed) return;
    setFading(true);
    const t = setTimeout(() => {
      setDisplayed(active);
      setFading(false);
    }, 380);
    return () => clearTimeout(t);
  }, [active, displayed]);

  return (
    <Box as="section" id="explore" bg="black" color="white" py={{ base: "16", md: "24" }}>
      <Container maxW="8xl">
        <Stack gap="4">
          <HStack
            gap="2"
            fontSize="xs"
            fontWeight="700"
            letterSpacing="0.1em"
            textTransform="uppercase"
            color="accent.300"
          >
            <Box as="span" fontSize="sm" lineHeight="1">
              ✦
            </Box>
            {showcase.eyebrow}
          </HStack>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "4xl" }}
            letterSpacing="-0.025em"
            lineHeight="1.1"
            fontWeight="800"
            maxW="2xl"
          >
            {showcase.title}
          </Heading>
        </Stack>

        {/* a mini City Connect desktop: menu bar + app window + dock */}
        <Box
          position="relative"
          mt={{ base: "10", md: "14" }}
          rounded="2rem"
          overflow="hidden"
          p={{ base: "4", md: "7" }}
          backgroundImage="url('/explore/background-carousel3.png')"
          backgroundSize="cover"
          backgroundPosition="center"
          shadow="0 40px 100px -40px rgba(0,0,0,0.8)"
        >
          {/* desktop menu bar */}
          <HStack
            justify="space-between"
            px="2"
            pb={{ base: "3", md: "4" }}
            color="whiteAlpha.900"
            fontSize="xs"
            fontWeight="600"
          >
            <HStack gap={{ base: "3", md: "5" }}>
              <HStack gap="1.5">
                <Box as="span" display="inline-flex" color="white">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.9}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 21h18" />
                    <path d="M5 21V10h5v11" />
                    <path d="M12 21V5h7v16" />
                  </svg>
                </Box>
                <Text>City Connect</Text>
              </HStack>
              <Text display={{ base: "none", md: "block" }} color="whiteAlpha.600">
                File
              </Text>
              <Text display={{ base: "none", md: "block" }} color="whiteAlpha.600">
                View
              </Text>
              <Text display={{ base: "none", md: "block" }} color="whiteAlpha.600">
                Window
              </Text>
            </HStack>
            <HStack gap="3" color="whiteAlpha.800">
              <Box as="span" display="inline-flex">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12.55a11 11 0 0 1 14 0" />
                  <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                  <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                  <path d="M12 20h.01" />
                </svg>
              </Box>
              <Box as="span" display="inline-flex">
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="7" width="16" height="10" rx="2" />
                  <path d="M22 11v2" />
                  <rect x="4" y="9" width="9" height="6" rx="1" fill="currentColor" stroke="none" />
                </svg>
              </Box>
              <Text>9:41</Text>
            </HStack>
          </HStack>

          {/* application window */}
          <Box
            w="full"
            maxW={{ base: "full", md: "6xl" }}
            mx="auto"
            rounded="l2"
            overflow="hidden"
            bg="ink.900"
            border="1px solid"
            borderColor="whiteAlpha.200"
            shadow="0 30px 70px -30px rgba(0,0,0,0.7)"
            opacity={fading ? 0 : 1}
            transform={fading ? "scale(0.98)" : "scale(1)"}
            transition="opacity 0.38s ease, transform 0.38s ease"
          >
            <HStack
              gap="1.5"
              px="4"
              py="2.5"
              bg="ink.900"
              borderBottom="1px solid"
              borderColor="whiteAlpha.100"
              align="center"
            >
              <Box w="2.5" h="2.5" rounded="full" bg="#ff5f57" />
              <Box w="2.5" h="2.5" rounded="full" bg="#febc2e" />
              <Box w="2.5" h="2.5" rounded="full" bg="#28c840" />
              <Text
                fontSize="xs"
                fontWeight="500"
                color="whiteAlpha.500"
                ml="2"
                whiteSpace="nowrap"
              >
                {slides[displayed].label}
              </Text>
            </HStack>
            <Box aspectRatio={16 / 10} overflow="hidden" bg="ink.900">
              <Image
                src={slides[displayed].src}
                alt={`${showcase.title} — ${slides[displayed].label}`}
                w="full"
                h="full"
                objectFit="cover"
                objectPosition="top"
                display="block"
              />
            </Box>
          </Box>

          {/* dock — colorful app icons navigate the slides */}
          {slides.length > 1 && (
            <Flex justify="center" mt={{ base: "4", md: "6" }}>
              <HStack
                gap={{ base: "2", md: "3" }}
                px="3"
                py="2"
                rounded="2xl"
                bg="whiteAlpha.200"
                border="1px solid"
                borderColor="whiteAlpha.300"
                align="flex-end"
                css={{ backdropFilter: "blur(10px)" }}
              >
                {slides.map((s, i) => {
                  const Icon = showcaseIcons[s.icon as keyof typeof showcaseIcons];
                  const on = i === active;
                  return (
                    <chakra.button
                      key={s.label}
                      type="button"
                      title={s.label}
                      aria-label={`Show ${s.label}`}
                      onClick={() => setActive(i)}
                      position="relative"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      w={on ? { base: "10", md: "12" } : { base: "9", md: "10" }}
                      h={on ? { base: "10", md: "12" } : { base: "9", md: "10" }}
                      rounded="xl"
                      color="white"
                      fontSize={on ? "20px" : "17px"}
                      cursor="pointer"
                      backgroundImage={dockGrads[i % dockGrads.length]}
                      opacity={on ? 1 : 0.8}
                      transition="all 0.2s ease"
                      shadow={on ? "0 12px 26px -8px rgba(0,0,0,0.6)" : "none"}
                      _hover={{ opacity: 1, transform: "translateY(-4px)" }}
                    >
                      {Icon && <Icon />}
                      {on && (
                        <Box
                          position="absolute"
                          bottom="-6px"
                          left="50%"
                          w="1"
                          h="1"
                          rounded="full"
                          bg="white"
                          transform="translateX(-50%)"
                        />
                      )}
                    </chakra.button>
                  );
                })}
              </HStack>
            </Flex>
          )}
        </Box>
      </Container>
    </Box>
  );
}
