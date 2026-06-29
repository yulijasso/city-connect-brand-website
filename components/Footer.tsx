import {
  Box,
  Container,
  Stack,
  Text,
  Link as CLink,
  Flex,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <Box as="footer" bg="ink.900" color="white" py={{ base: "14", md: "20" }}>
      <Container maxW="6xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          gap={{ base: "10", md: "8" }}
        >
          <Stack gap="4" maxW="xs">
            <Logo inverse />
            <Text fontSize="sm" color="ink.400" lineHeight="1.6">
              {footer.tagline}
            </Text>
          </Stack>

          <Flex gap={{ base: "12", md: "16" }} flexWrap="wrap">
            {footer.columns.map((col) => (
              <Stack key={col.title} gap="3" minW="28">
                <Text
                  fontSize="xs"
                  fontWeight="700"
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                  color="ink.500"
                >
                  {col.title}
                </Text>
                {col.links.map((l) => (
                  <CLink
                    key={l.label}
                    href={l.href}
                    fontSize="sm"
                    color="ink.300"
                    _hover={{ color: "white", textDecoration: "none" }}
                  >
                    {l.label}
                  </CLink>
                ))}
              </Stack>
            ))}
          </Flex>
        </Flex>

        <Flex
          mt={{ base: "10", md: "14" }}
          pt="6"
          borderTop="1px solid"
          borderColor="whiteAlpha.200"
          direction={{ base: "column", sm: "row" }}
          gap="3"
          justify="space-between"
          align={{ base: "flex-start", sm: "center" }}
        >
          <Text fontSize="xs" color="ink.500">
            © {new Date().getFullYear()} {footer.brand}. All rights reserved.
          </Text>
          <Text fontSize="xs" color="ink.500">
            AI-powered resident engagement.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
