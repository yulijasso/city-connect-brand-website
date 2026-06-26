import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { demo } from "@/lib/content";

/**
 * The product screenshot framed as a chat-widget card with a faux browser
 * chrome bar. Scales fluidly and keeps a soft monochrome shadow. When
 * `floating` is set, a soft glow is layered behind it to lift the hero.
 */
export function ProductShot({
  maxW = "440px",
  floating = false,
}: {
  maxW?: string;
  floating?: boolean;
}) {
  const card = (
    <Box
      w="full"
      maxW={maxW}
      mx="auto"
      rounded="l3"
      overflow="hidden"
      bg="white"
      border="1px solid"
      borderColor="border"
      shadow="0 30px 70px -32px rgba(12,12,14,0.5), 0 4px 16px -8px rgba(12,12,14,0.15)"
      position="relative"
      zIndex={1}
    >
      <HStack
        gap="2"
        px="4"
        py="3"
        borderBottom="1px solid"
        borderColor="ink.100"
        bg="ink.50"
      >
        <HStack gap="1.5" color="fg.subtle">
          <Box w="1.5" h="1.5" rounded="full" bg="accent.500" />
          <Text fontSize="xs" fontWeight="500">
            City Connect assistant
          </Text>
        </HStack>
      </HStack>
      <Image
        src="/demo-screenshot.png"
        alt={demo.screenshotAlt}
        w="full"
        h="auto"
        display="block"
      />
    </Box>
  );

  if (!floating) return card;

  return (
    <Box position="relative" w="full" maxW={maxW} mx="auto">
      {/* soft green glow */}
      <Box
        position="absolute"
        inset="-12%"
        bg="accent.400"
        opacity={0.18}
        filter="blur(70px)"
        rounded="full"
        zIndex={0}
        pointerEvents="none"
      />
      {card}
    </Box>
  );
}
