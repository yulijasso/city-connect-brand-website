import { Stack, Heading, Text, HStack, Box } from "@chakra-ui/react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
}) {
  const centered = align === "center";
  return (
    <Stack
      gap="4"
      maxW="2xl"
      mx={centered ? "auto" : undefined}
      textAlign={centered ? "center" : "start"}
      align={centered ? "center" : "flex-start"}
    >
      {eyebrow && (
        <HStack
          gap="2"
          fontSize="xs"
          fontWeight="700"
          letterSpacing="0.08em"
          textTransform="uppercase"
          color="accent.fg"
        >
          <Box w="5" h="0.5" bg="accent.500" rounded="full" />
          {eyebrow}
        </HStack>
      )}
      <Heading
        as="h2"
        fontSize={{ base: "2xl", md: "4xl" }}
        letterSpacing="-0.025em"
        lineHeight="1.1"
        fontWeight="800"
      >
        {title}
      </Heading>
      {subtitle && (
        <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted">
          {subtitle}
        </Text>
      )}
    </Stack>
  );
}
