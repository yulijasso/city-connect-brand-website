import { Box, Container, Text, Flex } from "@chakra-ui/react";
import { logoBar } from "@/lib/content";

export function LogoBar() {
  return (
    <Box as="section" py={{ base: "10", md: "12" }} bg="white">
      <Container maxW="6xl">
        <Text
          textAlign="center"
          fontSize="xs"
          fontWeight="600"
          letterSpacing="0.12em"
          textTransform="uppercase"
          color="fg.subtle"
          mb="6"
        >
          {logoBar.label}
        </Text>
        <Flex
          justify="center"
          align="center"
          gap={{ base: "6", md: "12" }}
          flexWrap="wrap"
        >
          {logoBar.cities.map((c) => (
            <Text
              key={c}
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="600"
              letterSpacing="-0.01em"
              color="ink.400"
              whiteSpace="nowrap"
              transition="color 0.18s ease"
              _hover={{ color: "ink.700" }}
            >
              {c}
            </Text>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
