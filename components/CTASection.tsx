import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "./icons";
import { Reveal } from "./Reveal";
import { finalCta } from "@/lib/content";

export function CTASection() {
  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      backgroundImage="url('/explore/background-carousel2.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      color="white"
      py={{ base: "20", md: "32" }}
    >
      <Container maxW="4xl" position="relative">
        <Reveal y={24}>
          <Stack gap="7" align="center" textAlign="center">
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
              letterSpacing="-0.03em"
              lineHeight="1.05"
              fontWeight="800"
              textShadow="0 2px 24px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.45)"
            >
              {finalCta.title}
            </Heading>
            <Text
              fontSize={{ base: "md", md: "xl" }}
              color="white"
              fontWeight="500"
              maxW="2xl"
              textShadow="0 0 1px rgba(0,0,0,0.95), 0 1px 2px rgba(0,0,0,0.9), 0 2px 14px rgba(0,0,0,0.75)"
            >
              {finalCta.subtitle}
            </Text>
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
          </Stack>
        </Reveal>
      </Container>
    </Box>
  );
}
