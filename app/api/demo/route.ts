import { NextResponse } from "next/server";

export const runtime = "nodejs";

type DemoPayload = {
  name?: string;
  email?: string;
  phone?: string;
  organization?: string;
  subject?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Loose international-friendly phone check: 10–15 digits, ignoring spaces/()-+./ */
function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Accepts "Name <email@x.com>" or a bare "email@x.com" and returns a Brevo sender object. */
function parseSender(raw: string): { name: string; email: string } {
  const match = raw.match(/^\s*(.*?)\s*<\s*([^>]+)\s*>\s*$/);
  if (match) return { name: match[1] || "City Connect", email: match[2] };
  return { name: "City Connect", email: raw.trim() };
}

export async function POST(request: Request) {
  let body: DemoPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const organization = body.organization?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !phone || !organization || !subject || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }
  if (!isValidPhone(phone)) {
    return NextResponse.json({ error: "Please provide a valid phone number." }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const to = process.env.DEMO_TO_EMAIL;

  if (!apiKey || !to) {
    // Misconfiguration: surface a clear error instead of silently dropping the lead.
    console.error(
      "Demo request received but email is not configured. Set BREVO_API_KEY and DEMO_TO_EMAIL.",
      { name, email, organization, subject, message },
    );
    return NextResponse.json(
      { error: "Demo requests aren't configured yet. Please email us directly for now." },
      { status: 503 },
    );
  }

  // The "from" must be a verified Brevo sender; defaults to your own inbox.
  const from = process.env.DEMO_FROM_EMAIL || to;

  const htmlContent = `
    <h2>New City Connect demo request</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>City / organization:</strong> ${escapeHtml(organization)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  const textContent = [
    "New City Connect demo request",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `City / organization: ${organization}`,
    `Subject: ${subject}`,
    `Message: ${message}`,
  ].join("\n");

  try {
    // Brevo transactional email API: https://developers.brevo.com/reference/sendtransacemail
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: parseSender(from),
        to: [{ email: to }],
        replyTo: { email, name },
        subject,
        htmlContent,
        textContent,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Brevo error:", res.status, detail);
      return NextResponse.json(
        { error: "We couldn't send your request. Please try again shortly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Demo request failed:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again shortly." },
      { status: 500 },
    );
  }
}
