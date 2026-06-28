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
  chakra,
} from "@chakra-ui/react";
import { showcase } from "@/lib/content";
import { showcaseIcons } from "./icons";

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
      <Container maxW="6xl">
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

        {/* slide tabs */}
        {slides.length > 1 && (
          <HStack gap={{ base: "5", md: "7" }} mt={{ base: "8", md: "10" }} flexWrap="wrap">
            {slides.map((s, i) => {
              const Icon = showcaseIcons[s.icon as keyof typeof showcaseIcons];
              return (
                <chakra.button
                  key={s.label}
                  type="button"
                  onClick={() => setActive(i)}
                  display="inline-flex"
                  alignItems="center"
                  gap="2"
                  fontSize="sm"
                  fontWeight="500"
                  cursor="pointer"
                  transition="color 0.18s ease, opacity 0.18s ease"
                  color="white"
                  opacity={i === active ? 1 : 0.45}
                  _hover={i === active ? {} : { opacity: 0.75 }}
                >
                  {Icon && (
                    <Box
                      as="span"
                      fontSize="15px"
                      display="inline-flex"
                      color={i === active ? "accent.400" : "inherit"}
                    >
                      <Icon />
                    </Box>
                  )}
                  {s.label}
                </chakra.button>
              );
            })}
          </HStack>
        )}

        {/* slide image inside a colorful gradient frame + app window */}
        <Box position="relative" mt={{ base: "10", md: "12" }}>
          <Box
            position="relative"
            rounded="2rem"
            p={{ base: "8", md: "16" }}
            backgroundImage="url('/explore/background-carousel.png')"
            backgroundSize="cover"
            backgroundPosition="center"
            shadow="0 40px 100px -40px rgba(0,0,0,0.8)"
          >
            {/* desktop application window */}
            <Box
              rounded="l2"
              overflow="hidden"
              bg="ink.900"
              border="1px solid"
              borderColor="whiteAlpha.200"
              opacity={fading ? 0 : 1}
              transform={fading ? "scale(0.97)" : "scale(1)"}
              transition="opacity 0.38s ease, transform 0.38s ease"
            >
              <HStack
                gap="2"
                px="4"
                py="3"
                bg="ink.800"
                borderBottom="1px solid"
                borderColor="whiteAlpha.100"
              >
                <Box w="3" h="3" rounded="full" bg="#ff5f57" />
                <Box w="3" h="3" rounded="full" bg="#febc2e" />
                <Box w="3" h="3" rounded="full" bg="#28c840" />
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
          </Box>

          {/* dots */}
          {slides.length > 1 && (
            <Flex justify="center" gap="2" mt="6">
              {slides.map((s, i) => (
                <chakra.button
                  key={s.label}
                  type="button"
                  aria-label={`Show ${s.label}`}
                  onClick={() => setActive(i)}
                  w={i === active ? "7" : "2.5"}
                  h="2.5"
                  rounded="full"
                  cursor="pointer"
                  transition="all 0.25s ease"
                  bg={i === active ? "white" : "whiteAlpha.400"}
                  _hover={{ bg: i === active ? "white" : "whiteAlpha.600" }}
                />
              ))}
            </Flex>
          )}
        </Box>
      </Container>
    </Box>
  );
}
