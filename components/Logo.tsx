import { Image, type ImageProps } from "@chakra-ui/react";

/** City Connect brand logo (skyline + network mark with wordmark). */
export function Logo({
  h = { base: "32px", md: "40px" },
}: {
  h?: ImageProps["h"];
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
    />
  );
}
