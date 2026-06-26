"use client";

import { useEffect, useRef, useState } from "react";
import { Box, HStack, Flex, Text } from "@chakra-ui/react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

type Role = "assistant" | "user";
type Message = {
  id: string;
  role: Role;
  text: string;
  sources?: string[];
  feedback?: boolean;
};

const GREETING = "Hi! Ask me anything about city services.";

const CONVERSATIONS = [
  {
    user: "¿Cuáles son los horarios del juzgado municipal?",
    answer:
      "El Juzgado Municipal de Pharr abre de lunes a viernes de 8 a.m. a 6 p.m. y cierra los fines de semana.",
    sources: ["Municipal Court · City of Pharr", "+2 sources"],
    feedbackLabel: "¿Se resolvió tu pregunta?",
  },
  {
    user: "How do I pay my water bill online?",
    answer:
      "You can pay your water bill anytime through the city's utility portal, or by phone 24/7. Want the direct link?",
    sources: ["Utility Billing · City of Pharr", "Pay Online"],
    feedbackLabel: "Did this answer your question?",
  },
  {
    user: "¿Cómo solicito un permiso de construcción?",
    answer:
      "Puedes solicitar un permiso de construcción en el Departamento de Desarrollo. Necesitarás tus planos y la solicitud completa. ¿Te muestro los requisitos?",
    sources: ["Permits & Licensing · City of Pharr", "+1 source"],
    feedbackLabel: "¿Se resolvió tu pregunta?",
  },
  {
    user: "When is trash pickup on my street?",
    answer:
      "Trash is collected weekly — enter your address in the city's collection lookup to see your day and any holiday changes. Want the link?",
    sources: ["Sanitation · City of Pharr", "Collection Schedule"],
    feedbackLabel: "Did this answer your question?",
  },
  {
    user: "What are the public library hours?",
    answer:
      "The Pharr Memorial Library is open Mon–Thu 9 a.m.–8 p.m., Fri–Sat 9 a.m.–6 p.m., and closed Sundays. Anything else?",
    sources: ["Pharr Memorial Library", "Hours & Locations"],
    feedbackLabel: "Did this answer your question?",
  },
  {
    user: "¿Dónde puedo pagar una multa de tránsito?",
    answer:
      "Las multas de tránsito se pagan en línea o en el Juzgado Municipal. Necesitas tu número de citación. ¿Quieres el enlace de pago?",
    sources: ["Municipal Court · City of Pharr", "Pay a Citation"],
    feedbackLabel: "¿Se resolvió tu pregunta?",
  },
];

export function HeroChat({ maxW = "440px" }: { maxW?: string }) {
  const reduced = usePrefersReducedMotion();
  const [messages, setMessages] = useState<Message[]>([
    { id: "greeting", role: "assistant", text: GREETING },
  ]);
  const [typing, setTyping] = useState(false);
  const [typingUserId, setTypingUserId] = useState<string | null>(null);
  const [feedbackLabel, setFeedbackLabel] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // auto-scroll to the latest message
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (reduced) {
      // Static, fully-resolved conversation — no animation.
      const c = CONVERSATIONS[0];
      setMessages([
        { id: "greeting", role: "assistant", text: GREETING },
        { id: "user", role: "user", text: c.user },
        {
          id: "answer",
          role: "assistant",
          text: c.answer,
          sources: c.sources,
          feedback: true,
        },
      ]);
      setFeedbackLabel(c.feedbackLabel);
      return;
    }

    let cancelled = false;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    async function typeUser(text: string) {
      const id = `user-${Date.now()}`;
      setTypingUserId(id);
      setMessages((m) => [...m, { id, role: "user", text: "" }]);
      for (let i = 1; i <= text.length; i++) {
        if (cancelled) return;
        setMessages((m) =>
          m.map((x) => (x.id === id ? { ...x, text: text.slice(0, i) } : x)),
        );
        await sleep(24 + Math.random() * 36);
      }
      setTypingUserId(null);
    }

    async function run() {
      while (!cancelled) {
        for (const c of CONVERSATIONS) {
          if (cancelled) return;
          setMessages([{ id: "greeting", role: "assistant", text: GREETING }]);
          setFeedbackLabel(null);
          await sleep(1000);
          if (cancelled) return;

          await typeUser(c.user);
          await sleep(450);
          if (cancelled) return;

          setTyping(true);
          await sleep(1500);
          if (cancelled) return;
          setTyping(false);

          setMessages((m) => [
            ...m,
            {
              id: `answer-${Date.now()}`,
              role: "assistant",
              text: c.answer,
              sources: c.sources,
              feedback: true,
            },
          ]);
          await sleep(700);
          setFeedbackLabel(c.feedbackLabel);
          await sleep(4200);
        }
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [reduced]);

  return (
    <Box position="relative" w="full" maxW={maxW} mx="auto">
      {/* soft green glow */}
      <Box
        className="cc-glow"
        position="absolute"
        inset="-12%"
        bg="accent.400"
        filter="blur(70px)"
        rounded="full"
        zIndex={0}
        pointerEvents="none"
      />

      <Box
        position="relative"
        zIndex={1}
        rounded="l3"
        overflow="hidden"
        bg="white"
        border="1px solid"
        borderColor="border"
        shadow="0 30px 70px -32px rgba(12,12,14,0.5), 0 4px 16px -8px rgba(12,12,14,0.15)"
      >
        {/* browser chrome */}
        <HStack
          gap="2"
          px="4"
          py="3"
          borderBottom="1px solid"
          borderColor="ink.100"
          bg="ink.50"
        >
          <HStack gap="1.5" color="fg.subtle">
            <Box
              className="cc-dot"
              w="1.5"
              h="1.5"
              rounded="full"
              bg="accent.500"
            />
            <Text fontSize="xs" fontWeight="500">
              City Connect assistant
            </Text>
          </HStack>
        </HStack>

        {/* messages */}
        <Box
          ref={scrollRef}
          h={{ base: "300px", sm: "340px" }}
          overflow="hidden"
          px="4"
          py="5"
          display="flex"
          flexDirection="column"
          gap="3"
          css={{ scrollbarWidth: "none" }}
        >
          {messages.map((m) =>
            m.role === "user" ? (
              <Flex key={m.id} justify="flex-end">
                <Box
                  className="cc-msg-in"
                  maxW="80%"
                  bg="accent.600"
                  color="white"
                  px="3.5"
                  py="2.5"
                  rounded="l2"
                  borderBottomRightRadius="sm"
                  fontSize="sm"
                  lineHeight="1.5"
                >
                  {m.text}
                  {typingUserId === m.id && <span className="cc-caret" />}
                </Box>
              </Flex>
            ) : (
              <Flex key={m.id} direction="column" align="flex-start" gap="2">
                <Box
                  className="cc-msg-in"
                  maxW="88%"
                  bg="bg.subtle"
                  color="fg"
                  px="3.5"
                  py="2.5"
                  rounded="l2"
                  borderBottomLeftRadius="sm"
                  border="1px solid"
                  borderColor="border"
                  fontSize="sm"
                  lineHeight="1.5"
                >
                  {m.text}
                </Box>
                {m.sources && (
                  <HStack gap="2" flexWrap="wrap" pl="1">
                    {m.sources.map((s) => (
                      <HStack
                        key={s}
                        className="cc-msg-in"
                        gap="1.5"
                        px="2.5"
                        py="1"
                        rounded="full"
                        bg="white"
                        border="1px solid"
                        borderColor="border"
                        color="accent.fg"
                        fontSize="11px"
                        fontWeight="600"
                      >
                        <Box w="1.5" h="1.5" rounded="full" bg="accent.500" />
                        {s}
                      </HStack>
                    ))}
                  </HStack>
                )}
              </Flex>
            ),
          )}

          {typing && (
            <Flex justify="flex-start">
              <HStack
                className="cc-msg-in"
                gap="1.5"
                bg="bg.subtle"
                border="1px solid"
                borderColor="border"
                px="3.5"
                py="3"
                rounded="l2"
                borderBottomLeftRadius="sm"
              >
                {[0, 1, 2].map((i) => (
                  <Box
                    key={i}
                    className="cc-dot"
                    w="1.5"
                    h="1.5"
                    rounded="full"
                    bg="ink.400"
                    style={{ animationDelay: `${i * 0.16}s` }}
                  />
                ))}
              </HStack>
            </Flex>
          )}

          {feedbackLabel && (
            <Flex
              className="cc-msg-in"
              align="center"
              gap="2.5"
              pl="1"
              pt="0.5"
            >
              <Text fontSize="xs" color="fg.muted">
                {feedbackLabel}
              </Text>
              <HStack gap="1.5">
                <Pill>✓ Sí</Pill>
                <Pill muted>✕ No</Pill>
              </HStack>
            </Flex>
          )}
        </Box>

        {/* fake input bar */}
        <HStack
          gap="2"
          px="3"
          py="3"
          borderTop="1px solid"
          borderColor="ink.100"
          bg="white"
        >
          <Flex
            flex="1"
            align="center"
            px="3.5"
            py="2"
            rounded="full"
            bg="bg.subtle"
            border="1px solid"
            borderColor="border"
            color="fg.subtle"
            fontSize="sm"
          >
            Escribe tu pregunta…
          </Flex>
          <Flex
            w="9"
            h="9"
            flexShrink={0}
            align="center"
            justify="center"
            rounded="full"
            bg="accent.600"
            color="white"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
            </svg>
          </Flex>
        </HStack>
      </Box>
    </Box>
  );
}

function Pill({
  children,
  muted,
}: {
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <Flex
      align="center"
      px="2.5"
      py="1"
      rounded="full"
      fontSize="11px"
      fontWeight="700"
      border="1px solid"
      borderColor={muted ? "border" : "accent.600"}
      bg={muted ? "white" : "accent.600"}
      color={muted ? "fg.muted" : "white"}
    >
      {children}
    </Flex>
  );
}
