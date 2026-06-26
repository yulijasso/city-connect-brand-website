import { Box, Container, Text, Flex, HStack } from "@chakra-ui/react";
import { logoBar } from "@/lib/content";

/** A small civic-style emblem so each name reads like a real seal, not plain text. */
function CityMark() {
  return (
    <Box as="span" color="ink.400" display="inline-flex">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-5h6v5M9 13h.01M15 13h.01" />
      </svg>
    </Box>
  );
}

export function LogoBar() {
  return (
    <Box
      as="section"
      py={{ base: "10", md: "12" }}
      borderBottom="1px solid"
      borderColor="border"
    >
      <Container maxW="6xl">
        <Text
          textAlign="center"
          fontSize="xs"
          fontWeight="600"
          letterSpacing="0.12em"
          textTransform="uppercase"
          color="fg.subtle"
          mb="7"
        >
          {logoBar.label}
        </Text>
        <Flex
          justify="center"
          align="center"
          gap={{ base: "5", md: "10" }}
          flexWrap="wrap"
        >
          {logoBar.cities.map((c) => (
            <HStack
              key={c}
              gap="2.5"
              opacity={0.65}
              transition="opacity 0.18s ease"
              _hover={{ opacity: 1 }}
            >
              <CityMark />
              <Text
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="700"
                letterSpacing="-0.01em"
                color="ink.600"
                whiteSpace="nowrap"
              >
                {c}
              </Text>
            </HStack>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
