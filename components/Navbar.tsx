"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Flex,
  HStack,
  Link as CLink,
  Button,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { nav } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="banner"
      bg="bg"
    >
      <Container maxW="6xl">
        <Flex h="16" align="center" justify="space-between">
          <CLink href="#top" _hover={{ textDecoration: "none" }}>
            <Logo />
          </CLink>

          {/* Desktop nav */}
          <HStack gap="8" display={{ base: "none", md: "flex" }}>
            {nav.links.map((l) => (
              <CLink
                key={l.href}
                href={l.href}
                fontSize="sm"
                fontWeight="500"
                color="fg.muted"
                position="relative"
                transition="color 0.18s ease"
                _after={{
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: "-6px",
                  h: "2px",
                  w: "full",
                  bg: "accent.500",
                  borderRadius: "full",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.22s cubic-bezier(0.16,1,0.3,1)",
                }}
                _hover={{
                  color: "fg",
                  textDecoration: "none",
                  _after: { transform: "scaleX(1)" },
                }}
              >
                {l.label}
              </CLink>
            ))}
          </HStack>

          <HStack gap="3" display={{ base: "none", md: "flex" }}>
            <Button
              asChild
              bgGradient="to-r"
              gradientFrom="#c23c5a"
              gradientTo="#a8324d"
              color="white"
              size="sm"
              rounded="l1"
              px="5"
              transition="all 0.18s ease"
              shadow="0 8px 18px -8px rgba(168,50,77,0.55)"
              _hover={{ filter: "brightness(1.08)", transform: "translateY(-1px)" }}
              _active={{ transform: "translateY(0)" }}
            >
              <a href={nav.cta.href}>{nav.cta.label}</a>
            </Button>
          </HStack>

          {/* Mobile toggle */}
          <IconButton
            aria-label="Toggle menu"
            variant="ghost"
            display={{ base: "inline-flex", md: "none" }}
            onClick={() => setOpen((v) => !v)}
          >
            <HamburgerIcon open={open} />
          </IconButton>
        </Flex>
      </Container>

      {/* Mobile panel */}
      {open && (
        <Box
          display={{ base: "block", md: "none" }}
          borderTop="1px solid"
          borderColor="border"
          bg="bg"
          px="4"
          py="4"
        >
          <Stack gap="1">
            {nav.links.map((l) => (
              <CLink
                key={l.href}
                href={l.href}
                py="2.5"
                fontWeight="500"
                color="fg.muted"
                onClick={() => setOpen(false)}
                _hover={{ color: "fg", textDecoration: "none" }}
              >
                {l.label}
              </CLink>
            ))}
            <Button
              asChild
              mt="2"
              bgGradient="to-r"
              gradientFrom="#c23c5a"
              gradientTo="#a8324d"
              color="white"
              rounded="l1"
              w="full"
              _hover={{ filter: "brightness(1.08)" }}
            >
              <a href={nav.cta.href} onClick={() => setOpen(false)}>
                {nav.cta.label}
              </a>
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}
