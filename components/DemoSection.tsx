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
import { ProductShot } from "./ProductShot";
import { BookDemoForm } from "./BookDemoForm";
import { Reveal } from "./Reveal";
import { CheckIcon } from "./icons";
import { demo } from "@/lib/content";

export function DemoSection() {
  return (
    <Box as="section" id="demo" py={{ base: "16", md: "24" }} scrollMarginTop="20">
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "12", lg: "16" }} alignItems="center">
          <Reveal>
          <Stack gap="6">
            <Stack gap="4">
              <HStack
                gap="2"
                fontSize="xs"
                fontWeight="700"
                letterSpacing="0.08em"
                textTransform="uppercase"
                color="accent.fg"
              >
                <Box w="5" h="0.5" bg="accent.500" rounded="full" />
                {demo.eyebrow}
              </HStack>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "4xl" }}
                letterSpacing="-0.025em"
                lineHeight="1.1"
                fontWeight="800"
              >
                {demo.title}
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted">
                {demo.subtitle}
              </Text>
            </Stack>

            <Stack gap="3">
              {demo.bullets.map((b) => (
                <HStack key={b} gap="3" align="flex-start">
                  <Flex
                    w="6"
                    h="6"
                    mt="0.5"
                    flexShrink={0}
                    align="center"
                    justify="center"
                    rounded="full"
                    bg="accent.subtle"
                    color="accent.fg"
                    fontSize="13px"
                  >
                    <CheckIcon />
                  </Flex>
                  <Text fontSize="sm" color="fg" fontWeight="500">
                    {b}
                  </Text>
                </HStack>
              ))}
            </Stack>

            <Box pt="2" display={{ base: "none", lg: "block" }}>
              <ProductShot maxW="380px" />
            </Box>
          </Stack>
          </Reveal>

          <Reveal delay={120}>
            <BookDemoForm />
            <Box mt="8" display={{ base: "block", lg: "none" }}>
              <ProductShot maxW="380px" />
            </Box>
          </Reveal>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
