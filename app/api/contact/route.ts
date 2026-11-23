import { createTransport } from "nodemailer";

import { contactLimits, isContactEmail } from "@/lib/contact";

export const runtime = "nodejs";

const maxBodyBytes = 32 * 1024;
const siteverifyUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const tokenErrors = new Set([
  "missing-input-response",
  "invalid-input-response",
  "timeout-or-duplicate",
]);

async function readBody(request: Request) {
  const contentType = request.headers.get("content-type")?.split(";")[0].trim();
  if (contentType?.toLowerCase() !== "application/json") {
    return { error: Response.json({ error: "invalid_input" }, { status: 415 }) };
  }

  const reader = request.body?.getReader();
  if (!reader) {
    return { error: Response.json({ error: "invalid_input" }, { status: 400 }) };
  }

  try {
    const decoder = new TextDecoder("utf-8", { fatal: true });
    let size = 0;
    let json = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      size += value.byteLength;
      if (size > maxBodyBytes) {
        void reader.cancel().catch(() => {});
        return { error: Response.json({ error: "invalid_input" }, { status: 413 }) };
      }
      json += decoder.decode(value, { stream: true });
    }

    const body: unknown = JSON.parse(json + decoder.decode());
    return { body };
  } catch {
    return { error: Response.json({ error: "invalid_input" }, { status: 400 }) };
  } finally {
    reader.releaseLock();
  }
}

async function verifyTurnstile(token: string, secret: string, hostnames: string[]) {
  const response = await fetch(siteverifyUrl, {
    method: "POST",
    body: new URLSearchParams({ secret, response: token }),
    signal: AbortSignal.timeout(5000),
  });

  if (!response.ok) throw new Error("Siteverify returned an HTTP error");

  const result = await response.json();
  if (result?.success === true && typeof result.hostname === "string") {
    return hostnames.includes(result.hostname.toLowerCase());
  }

  const errors = result?.["error-codes"];
  if (
    result?.success === false &&
    Array.isArray(errors) &&
    errors.length > 0 &&
    errors.every((code) => tokenErrors.has(code))
  ) {
    return false;
  }

  throw new Error("Siteverify could not validate the request");
}

export async function POST(request: Request) {
  const { body, error } = await readBody(request);
  if (error) return error;

  const data = body as Partial<Record<"name" | "email" | "message" | "token", unknown>> | null;
  const name = typeof data?.name === "string" ? data.name.trim() : "";
  const email = typeof data?.email === "string" ? data.email.trim() : "";
  const message = typeof data?.message === "string" ? data.message.trim() : "";
  const token = data?.token;

  if (
    !name || name.length > contactLimits.name || /[\r\n]/.test(name) ||
    !isContactEmail(email) || !message || message.length > contactLimits.message
  ) {
    return Response.json({ error: "invalid_input" }, { status: 400 });
  }

  if (typeof token !== "string" || !token.trim() || token.length > contactLimits.token) {
    return Response.json({ error: "verification_failed" }, { status: 403 });
  }

  const { GMAIL_USER, GMAIL_PASSWORD, MAIL_TO, TURNSTILE_SECRET_KEY } = process.env;
  const hostnames = (process.env.TURNSTILE_ALLOWED_HOSTNAMES ?? "")
    .toLowerCase()
    .split(",")
    .map((hostname) => hostname.trim())
    .filter(Boolean);

  if (!GMAIL_USER || !GMAIL_PASSWORD || !MAIL_TO || !TURNSTILE_SECRET_KEY || !hostnames.length) {
    console.error("Contact form is missing required configuration.");
    return Response.json({ error: "unavailable" }, { status: 503 });
  }

  try {
    if (!(await verifyTurnstile(token, TURNSTILE_SECRET_KEY, hostnames))) {
      return Response.json({ error: "verification_failed" }, { status: 403 });
    }
  } catch {
    console.error("Contact form could not reach or validate the Siteverify response.");
    return Response.json({ error: "unavailable" }, { status: 503 });
  }

  const transporter = createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_PASSWORD },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

  try {
    await transporter.sendMail({
      from: GMAIL_USER,
      to: MAIL_TO,
      replyTo: email,
      subject: `[ARES-WEB] ${name}様よりお問い合わせがありました`,
      text: `以下のお問い合わせがありましたのでご確認ください。\n\nお名前: ${name}\n返信先メールアドレス: ${email}\n\n${message}`,
    });
  } catch {
    console.error("Contact notification could not be sent to ARES.");
    return Response.json({ error: "unavailable" }, { status: 503 });
  }

  try {
    await transporter.sendMail({
      from: GMAIL_USER,
      to: email,
      subject: "[ARES-WEB] お問い合わせ完了",
      text: "ARES Project へのお問い合わせを受け付けました。担当者からの返信をお待ちください。\n\n※このメールは自動送信されています。",
    });
  } catch {
    console.error("Contact acknowledgement could not be sent.");
  }

  return Response.json({ success: true });
}
