export type ContactMailData = {
  name: string;
  email: string;
  message: string;
};

const htmlEscapes: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

const getRequiredString = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

export const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => htmlEscapes[character]);

export const parseContactMailData = async (
  request: Request,
): Promise<ContactMailData> => {
  const body: unknown = await request.json();

  if (!body || typeof body !== "object") {
    throw new Error("Invalid contact form data");
  }

  const record = body as Record<string, unknown>;
  const mailData = {
    name: getRequiredString(record.name),
    email: getRequiredString(record.email),
    message: getRequiredString(record.message),
  };

  if (!mailData.name || !mailData.email || !mailData.message) {
    throw new Error("Invalid contact form data");
  }

  return mailData;
};
