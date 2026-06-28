import { Image, type ImageProps } from "@chakra-ui/react";

/** City Connect brand logo (skyline + network mark with wordmark). */
export function Logo({
  h = { base: "32px", md: "40px" },
  inverse = false,
}: {
  h?: ImageProps["h"];
  inverse?: boolean;
}) {
  return (
    <Image
      src="/cityconnectlogo.png"
      alt="City Connect"
      h={h}
      w="auto"
      maxW="none"
      objectFit="contain"
      alignSelf="flex-start"
      display="block"
      userSelect="none"
      // Render the dark logo as solid white on dark backgrounds.
      filter={inverse ? "brightness(0) invert(1)" : undefined}
    />
  );
}
