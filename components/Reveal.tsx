"use client";

import { useEffect, useRef, useState } from "react";
import { Box, type BoxProps } from "@chakra-ui/react";

/**
 * Fades + slides its children up the first time they scroll into view.
 * Honors reduced-motion (renders visible immediately) and is SSR-safe.
 */
export function Reveal({
  children,
  delay = 0,
  y = 16,
  ...rest
}: { delay?: number; y?: number } & BoxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      opacity={shown ? 1 : 0}
      transform={shown ? "translateY(0)" : `translateY(${y}px)`}
      transition="opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)"
      transitionDelay={`${delay}ms`}
      willChange="opacity, transform"
      {...rest}
    >
      {children}
    </Box>
  );
}
