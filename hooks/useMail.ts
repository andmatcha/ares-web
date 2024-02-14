export const useMail = () => {
  const sendToAres = async (name: string, email: string, message: string) => {
    await fetch("/api/mail/to-ares", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });
  };

  const sendToCustomer = async (
    name: string,
    email: string,
    message: string
  ) => {
    await fetch("/api/mail/to-customer", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });
  };

  return {
    sendToAres,
    sendToCustomer,
  };
};
