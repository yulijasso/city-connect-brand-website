"use client";

import { useState } from "react";
import { Box, Container, Stack, Text, chakra } from "@chakra-ui/react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { faq } from "@/lib/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Box as="section" id="faq" py={{ base: "16", md: "24" }} bg="bg.subtle">
      <Container maxW="3xl">
        <Reveal>
          <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
        </Reveal>
        <Stack gap="3" mt={{ base: "10", md: "12" }}>
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={(i % 4) * 60}>
              <Box
                bg="white"
                rounded="l2"
                border="1px solid"
                borderColor={isOpen ? "border.emphasized" : "border"}
                overflow="hidden"
                transition="border-color 0.15s ease"
              >
                <chakra.h3 margin="0">
                  <chakra.button
                    type="button"
                    display="flex"
                    w="full"
                    alignItems="center"
                    justifyContent="space-between"
                    gap="4"
                    px={{ base: "5", md: "6" }}
                    py="5"
                    textAlign="left"
                    cursor="pointer"
                    fontSize={{ base: "sm", md: "md" }}
                    fontWeight="600"
                    transition="background 0.15s ease"
                    _hover={{ bg: "bg.subtle" }}
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <chakra.span>{item.q}</chakra.span>
                    <Box
                      flexShrink={0}
                      color={isOpen ? "accent.fg" : "fg.subtle"}
                      transform={isOpen ? "translateY(-2px)" : "none"}
                      transition="color 0.2s ease, transform 0.2s ease"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.7}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M3 21h18" />
                        <path d="M5 21V10h5v11" />
                        <path d="M12 21V5h7v16" />
                        <path d="M7.5 13.5h0.5M7.5 16.5h0.5" />
                        <path d="M15 9h0.5M15 12.5h0.5M15 16h0.5" />
                      </svg>
                    </Box>
                  </chakra.button>
                </chakra.h3>
                {isOpen && (
                  <Box px={{ base: "5", md: "6" }} pb="5" pt="0">
                    <Text fontSize="sm" color="fg.muted" lineHeight="1.65">
                      {item.a}
                    </Text>
                  </Box>
                )}
              </Box>
              </Reveal>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
