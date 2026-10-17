import {
  validateContact,
  type ContactValues,
} from "../../src/components/sections/contact/contact.ts";

export const config = { path: "/api/contact" };

const limits = { name: 100, contact: 200, topic: 100, message: 5000 } as const;
const defaultSender = "Index JR <onboarding@resend.dev>";

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const readValues = (input: unknown): (ContactValues & { honeypot: string }) | null => {
  if (typeof input !== "object" || input === null) return null;
  const data = input as Record<string, unknown>;
  const text = (key: string) => (typeof data[key] === "string" ? data[key].trim() : "");

  return {
    name: text("name"),
    contact: text("contact"),
    topic: text("topic"),
    message: text("message"),
    honeypot: text("bot-field"),
  };
};

const withinLimits = (values: ContactValues) =>
  (Object.keys(limits) as (keyof typeof limits)[]).every(
    (key) => values[key].length <= limits[key],
  );

export default async function handler(request: Request) {
  if (request.method !== "POST") return json({ error: "method_not_allowed" }, 405);

  const body: unknown = await request.json().catch(() => null);
  const values = readValues(body);
  if (!values) return json({ error: "invalid_request" }, 400);

  if (values.honeypot) return json({ ok: true });

  if (Object.keys(validateContact(values)).length > 0 || !withinLimits(values)) {
    return json({ error: "invalid_values" }, 422);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !recipient) return json({ error: "not_configured" }, 500);

  const replyTo = values.contact.includes("@") ? values.contact : undefined;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? defaultSender,
      to: [recipient],
      reply_to: replyTo,
      subject: `Ny förfrågan från ${values.name}: ${values.topic}`,
      text: [
        `Namn: ${values.name}`,
        `Kontakt: ${values.contact}`,
        `Ämne: ${values.topic}`,
        "",
        values.message,
      ].join("\n"),
    }),
  });

  if (!response.ok) return json({ error: "send_failed" }, 502);
  return json({ ok: true });
}
