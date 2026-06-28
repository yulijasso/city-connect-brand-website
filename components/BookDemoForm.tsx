"use client";

import { useState } from "react";
import {
  Box,
  Stack,
  SimpleGrid,
  Input,
  Textarea,
  Button,
  Text,
  Heading,
  Flex,
  chakra,
} from "@chakra-ui/react";
import { CheckIcon } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

type Fields = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  subject: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Loose international-friendly phone check: 10–15 digits, ignoring formatting. */
function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

/** Formats input as a US phone number: (956) 555-0123 (caps at 10 digits). */
function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function FieldLabel({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) {
  return (
    <chakra.label htmlFor={htmlFor} fontSize="sm" fontWeight="600" color="fg">
      {children}
    </chakra.label>
  );
}

const inputStyles = {
  bg: "white",
  borderColor: "border.emphasized",
  rounded: "l1",
  size: "lg" as const,
  fontSize: "sm",
  _hover: { borderColor: "ink.300" },
  _focusVisible: {
    borderColor: "accent.500",
    boxShadow: "0 0 0 1px var(--chakra-colors-accent-500)",
  },
};

export function BookDemoForm() {
  const [fields, setFields] = useState<Fields>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [serverError, setServerError] = useState<string | null>(null);

  function set<K extends keyof Fields>(key: K, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = "Please enter your name.";
    if (!fields.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(fields.email)) next.email = "Enter a valid email address.";
    if (!fields.phone.trim()) next.phone = "Please enter a phone number.";
    else if (!isValidPhone(fields.phone)) next.phone = "Enter a valid phone number.";
    if (!fields.organization.trim()) next.organization = "Let us know your city or organization.";
    if (!fields.subject.trim()) next.subject = "Please add a subject.";
    if (!fields.message.trim()) next.message = "Please let us know how we can help.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <Stack
        gap="4"
        p={{ base: "8", md: "10" }}
        bg="white"
        rounded="l3"
        border="1px solid"
        borderColor="border"
        align="flex-start"
        justify="center"
        minH="320px"
      >
        <Flex
          w="12"
          h="12"
          align="center"
          justify="center"
          rounded="full"
          bg="accent.600"
          color="white"
          fontSize="24px"
        >
          <CheckIcon />
        </Flex>
        <Heading as="h3" fontSize="xl">
          Thanks — we&apos;ll be in touch.
        </Heading>
        <Text color="fg.muted" fontSize="sm">
          Your demo request is on its way to our team. We&apos;ll reach out at{" "}
          <Text as="span" fontWeight="600" color="fg">
            {fields.email}
          </Text>{" "}
          to schedule a walkthrough for {fields.organization}.
        </Text>
      </Stack>
    );
  }

  return (
    <chakra.form
      onSubmit={onSubmit}
      p={{ base: "6", md: "8" }}
      bg="white"
      rounded="l3"
      border="1px solid"
      borderColor="border"
      shadow="0 24px 60px -40px rgba(12,12,14,0.4)"
      noValidate
    >
      <Stack gap="5">
        <SimpleGrid columns={{ base: 1, sm: 2 }} gap="4">
          <Stack gap="1.5">
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input
              id="name"
              value={fields.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Jane Rivera"
              autoComplete="name"
              aria-invalid={!!errors.name}
              {...inputStyles}
            />
            {errors.name && (
              <Text fontSize="xs" color="red.600">
                {errors.name}
              </Text>
            )}
          </Stack>

          <Stack gap="1.5">
            <FieldLabel htmlFor="phone">Phone number</FieldLabel>
            <Input
              id="phone"
              type="tel"
              inputMode="tel"
              value={fields.phone}
              onChange={(e) => set("phone", formatPhone(e.target.value))}
              placeholder="(956) 555-0123"
              autoComplete="tel"
              aria-invalid={!!errors.phone}
              {...inputStyles}
            />
            {errors.phone && (
              <Text fontSize="xs" color="red.600">
                {errors.phone}
              </Text>
            )}
          </Stack>
        </SimpleGrid>

        <Stack gap="1.5">
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            value={fields.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="jane@cityofpharr.gov"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...inputStyles}
          />
          {errors.email && (
            <Text fontSize="xs" color="red.600">
              {errors.email}
            </Text>
          )}
        </Stack>

        <Stack gap="1.5">
          <FieldLabel htmlFor="organization">City or organization</FieldLabel>
          <Input
            id="organization"
            value={fields.organization}
            onChange={(e) => set("organization", e.target.value)}
            placeholder="City of Pharr"
            autoComplete="organization"
            aria-invalid={!!errors.organization}
            {...inputStyles}
          />
          {errors.organization && (
            <Text fontSize="xs" color="red.600">
              {errors.organization}
            </Text>
          )}
        </Stack>

        <Stack gap="1.5">
          <FieldLabel htmlFor="subject">Subject</FieldLabel>
          <Input
            id="subject"
            value={fields.subject}
            onChange={(e) => set("subject", e.target.value)}
            placeholder="Demo request for City of Pharr"
            aria-invalid={!!errors.subject}
            {...inputStyles}
          />
          {errors.subject && (
            <Text fontSize="xs" color="red.600">
              {errors.subject}
            </Text>
          )}
        </Stack>

        <Stack gap="1.5">
          <FieldLabel htmlFor="message">How can we help you?</FieldLabel>
          <Textarea
            id="message"
            value={fields.message}
            onChange={(e) => set("message", e.target.value)}
            placeholder="We'd love help deflecting calls to our municipal court line…"
            rows={3}
            bg="white"
            borderColor="border.emphasized"
            rounded="l1"
            fontSize="sm"
            aria-invalid={!!errors.message}
            _hover={{ borderColor: "ink.300" }}
            _focusVisible={{
              borderColor: "accent.500",
              boxShadow: "0 0 0 1px var(--chakra-colors-accent-500)",
            }}
          />
          {errors.message && (
            <Text fontSize="xs" color="red.600">
              {errors.message}
            </Text>
          )}
        </Stack>

        {serverError && (
          <Text fontSize="sm" color="red.600">
            {serverError}
          </Text>
        )}

        <Button
          type="submit"
          size="lg"
          bg="ink.900"
          color="white"
          rounded="l1"
          loading={status === "submitting"}
          loadingText="Sending…"
          transition="all 0.18s ease"
          shadow="0 12px 26px -14px rgba(10,10,12,0.5)"
          _hover={{ bg: "ink.700", transform: "translateY(-1px)" }}
          _active={{ transform: "translateY(0)" }}
        >
          Book a demo
        </Button>

        <Text fontSize="xs" color="fg.subtle" textAlign="center">
          We&apos;ll only use your details to schedule your demo.
        </Text>
      </Stack>
    </chakra.form>
  );
}
