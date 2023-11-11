import { useState } from "react";

export const useMail = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const send = async () => {
    console.log({ name, email, message });
    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });
  };

  return {
    setName,
    setEmail,
    setMessage,
    send,
  };
};
