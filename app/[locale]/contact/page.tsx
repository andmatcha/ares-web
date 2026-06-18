"use client";

import { useState } from "react";
import { RegisterOptions, SubmitHandler, useForm } from "react-hook-form";

import Button from "@/components/objects/atoms/Button";
import Hero from "@/components/objects/atoms/Hero";
import Loader from "@/components/objects/atoms/Loader";
import ContactFormField from "@/components/objects/molecules/ContactFormField";
import ContactLinks from "@/components/objects/molecules/ContactLinks";
import { useMail } from "@/hooks/useMail";
import { useRouter } from "@/i18n/routing";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const contactValidationRules: Record<keyof FormData, RegisterOptions<FormData>> =
  {
    name: {
      required: "名前は必須です",
      maxLength: {
        value: 100,
        message: "100文字以内で入力してください",
      },
    },
    email: {
      required: "メールアドレスは必須です",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "有効なメールアドレスを入力してください",
      },
      maxLength: {
        value: 256,
        message: "有効なメールアドレスを入力してください",
      },
    },
    message: {
      required: "問い合わせ内容は必須です",
      maxLength: {
        value: 2000,
        message: "2000文字以内で入力してください",
      },
    },
  };

export default function ContactPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormData>();
  const { sendToAres, sendToCustomer } = useMail();
  const [isSending, setIsSending] = useState<boolean>(false);

  const handleBlur = async (fieldName: keyof FormData) => {
    await trigger(fieldName);
  };

  const onSubmit: SubmitHandler<FormData> = ({ name, email, message }) => {
    setIsSending(true);
    sendToAres(name, email, message)
      .then(() => sendToCustomer(name, email, message))
      .then(() => router.push("/contact/success"))
      .catch(() => router.push("/contact/error"))
      .finally(() => setIsSending(false));
  };

  return isSending ? (
    <div className="w-screen h-screen">
      <Loader message="SENDING" />
    </div>
  ) : (
    <>
      <Hero title="CONTACT" imagePath="/images/rovers/ares4_wide.jpg" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex p-4 justify-center">
          <div className="w-full lg:w-1/2">
            <ContactFormField
              id="name"
              label="お名前"
              registration={register("name", contactValidationRules.name)}
              error={errors.name}
              onBlur={() => handleBlur("name")}
            />
            <ContactFormField
              id="email"
              label="メールアドレス"
              type="email"
              registration={register("email", contactValidationRules.email)}
              error={errors.email}
              onBlur={() => handleBlur("email")}
              containerClassName="flex flex-col justify-end gap-2 px-4 py-2"
            />
            <ContactFormField
              id="message"
              label="お問い合わせ内容"
              registration={register(
                "message",
                contactValidationRules.message
              )}
              error={errors.message}
              onBlur={() => handleBlur("message")}
              multiline
            />
            <div className="flex gap-2 px-4 py-2 justify-center">
              <Button type="submit">送信</Button>
            </div>
            <ContactLinks />
          </div>
        </div>
      </form>
    </>
  );
}
