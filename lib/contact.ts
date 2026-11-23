export const contactLimits = {
  name: 100,
  email: 254,
  message: 2000,
  token: 2048,
};

export interface ContactFields {
  name: string;
  email: string;
  message: string;
}

export function isContactEmail(email: string) {
  const address = email.trim();
  const localPartLength = address.indexOf("@");

  return (
    address.length <= contactLimits.email &&
    localPartLength <= 64 &&
    /^[A-Z0-9_+%!-]+(?:\.[A-Z0-9_+%!-]+)*@(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+[A-Z](?:[A-Z0-9-]{0,61}[A-Z0-9])$/i.test(
      address
    )
  );
}
