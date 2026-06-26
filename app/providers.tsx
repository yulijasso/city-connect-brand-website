"use client";

import { useState } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@/theme/system";

/**
 * Chakra UI v3 runs on Emotion. In the Next.js App Router we need an Emotion
 * cache whose inserted styles are flushed into the streamed HTML via
 * `useServerInsertedHTML`, otherwise the server-rendered <style> tags don't
 * match the client tree and React throws a hydration mismatch.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  const [cache] = useState(() => {
    const c = createCache({ key: "css" });
    c.compat = true;
    return c;
  });

  useServerInsertedHTML(() => {
    const inserted = Object.keys(cache.inserted);
    if (inserted.length === 0) return null;
    return (
      <style
        data-emotion={`${cache.key} ${inserted.join(" ")}`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: inserted.map((name) => cache.inserted[name]).join(" "),
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
