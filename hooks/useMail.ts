import { useState } from "react";

export const useMail = () => {
  const send = async (name: string, email: string, message: string) => {
    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });
  };

  return {
    send,
  };
};
