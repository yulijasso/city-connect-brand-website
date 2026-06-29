import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { CheckIcon } from "./icons";
import { useCases } from "@/lib/content";

export function UseCases() {
  return (
    <Box as="section" id="use-cases" py={{ base: "16", md: "24" }} bg="bg.subtle">
      <Container maxW="6xl">
        <Reveal>
          <SectionHeading
            eyebrow={useCases.eyebrow}
            title={useCases.title}
            subtitle={useCases.subtitle}
          />
        </Reveal>
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 3 }}
          gap={{ base: "5", md: "6" }}
          mt={{ base: "10", md: "14" }}
        >
          {useCases.items.map((u, i) => (
            <Reveal key={u.title} delay={(i % 3) * 80} h="full">
              <Stack
                gap="3"
                h="full"
                p="6"
                bg="white"
                rounded="l2"
                border="1px solid"
                borderColor="border"
                transition="all 0.18s ease"
                _hover={{
                  borderColor: "border.emphasized",
                  shadow: "0 16px 40px -28px rgba(12,12,14,0.35)",
                  transform: "translateY(-2px)",
                }}
              >
                <HStack gap="3" align="center">
                <Flex
                  w="7"
                  h="7"
                  flexShrink={0}
                  align="center"
                  justify="center"
                  rounded="full"
                  backgroundImage="linear-gradient(135deg, #d44be0, #8b5cf6)"
                  color="white"
                  fontSize="15px"
                  shadow="0 6px 14px -6px rgba(180,80,225,0.55)"
                >
                  <CheckIcon />
                </Flex>
                <Heading as="h3" fontSize="md" letterSpacing="-0.01em">
                  {u.title}
                </Heading>
                </HStack>
                <Text fontSize="sm" color="fg.muted" lineHeight="1.6">
                  {u.description}
                </Text>
              </Stack>
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
