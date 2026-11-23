"use client";

import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Button from "@/components/objects/atoms/Button";
import Hero from "@/components/objects/atoms/Hero";
import Instagram from "@/components/objects/icons/instagram";
import Twitter from "@/components/objects/icons/twitter";
import URL from "@/const/url";
import { Link, useRouter } from "@/i18n/routing";
import { type ContactFields, contactLimits, isContactEmail } from "@/lib/contact";

import TurnstileWidget from "./TurnstileWidget";

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const submissionErrorMessage = "お問い合わせを送信できませんでした。時間をおいてもう一度お試しください。";

export default function ContactPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<ContactFields>();
  const [token, setToken] = useState<string | null>(null);
  const [verificationAttempt, setVerificationAttempt] = useState(0);
  const [verificationFailed, setVerificationFailed] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const sending = useRef(false);

  const handleBlur = async (fieldName: keyof ContactFields) => {
    await trigger(fieldName);
  };

  const restartVerification = () => {
    setToken(null);
    setVerificationFailed(false);
    setVerificationAttempt((attempt) => attempt + 1);
  };

  const onSubmit: SubmitHandler<ContactFields> = async (data) => {
    if (!token || sending.current) return;

    sending.current = true;
    setIsSending(true);
    setSubmissionError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, token }),
      });

      if (response.ok) {
        router.push("/contact/success");
        return;
      }

      if (response.status === 403) {
        setSubmissionError("送信前の確認が完了しませんでした。もう一度お試しください。");
      } else if (response.status === 400 || response.status === 413) {
        setSubmissionError("入力内容を確認して、もう一度お試しください。");
      } else {
        setSubmissionError(submissionErrorMessage);
      }
    } catch {
      setSubmissionError(submissionErrorMessage);
    }

    restartVerification();
    sending.current = false;
    setIsSending(false);
  };

  return (
    <>
      <Hero title="CONTACT" imagePath="/images/rovers/ares4_wide.jpg" />
      <form onSubmit={handleSubmit(onSubmit)} aria-busy={isSending}>
        <div className="flex p-4 justify-center">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-2 px-4 py-2">
              <label htmlFor="name">お名前</label>
              <input
                type="text"
                id="name"
                readOnly={isSending}
                {...register("name", {
                  required: "名前は必須です",
                  validate: (name) => !!name.trim() || "名前は必須です",
                  maxLength: {
                    value: contactLimits.name,
                    message: "100文字以内で入力してください",
                  },
                })}
                onBlur={() => handleBlur("name")}
                className="h-8 bg-white text-black flex items-center rounded-sm p-2"
              />
              <div className="h-4">
                {errors.name && (
                  <p className="text-red-600 text-sm">{errors.name.message}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-end gap-2 px-4 py-2">
              <label htmlFor="email">メールアドレス</label>
              <input
                type="email"
                id="email"
                readOnly={isSending}
                {...register("email", {
                  required: "メールアドレスは必須です",
                  validate: (email) => isContactEmail(email) || "有効なメールアドレスを入力してください",
                })}
                onBlur={() => handleBlur("email")}
                className="h-8 bg-white text-black flex items-center rounded-sm p-2"
              />
              <div className="h-4">
                {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 px-4 py-2">
              <label htmlFor="message">お問い合わせ内容</label>
              <textarea
                id="message"
                readOnly={isSending}
                {...register("message", {
                  required: "問い合わせ内容は必須です",
                  validate: (message) => !!message.trim() || "問い合わせ内容は必須です",
                  maxLength: {
                    value: contactLimits.message,
                    message: "2000文字以内で入力してください",
                  },
                })}
                onBlur={() => handleBlur("message")}
                cols={30}
                rows={16}
                className="bg-white text-black flex items-center rounded-sm p-2"
              ></textarea>
              <div className="h-4">
                {errors.message && (
                  <p className="text-red-600 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 px-4 py-2">
              {siteKey && (
                <TurnstileWidget
                  key={verificationAttempt}
                  siteKey={siteKey}
                  onTokenChange={setToken}
                  onError={setVerificationFailed}
                />
              )}
              {submissionError && <p role="alert" className="text-sm">{submissionError}</p>}
              {(!siteKey || verificationFailed) && (
                <p role="alert" className="text-sm">
                  送信前の確認を開始できませんでした。下に記載のメールアドレスからもお問い合わせいただけます。
                </p>
              )}
              {siteKey && verificationFailed && (
                <button type="button" className="cursor-pointer text-sm underline" onClick={restartVerification} disabled={isSending}>
                  確認をやり直す
                </button>
              )}
              <p role="status" className="empty:hidden text-sm">
                {siteKey && !token && !verificationFailed && !isSending ? "送信前の確認を行っています。" : ""}
              </p>
              <Button type="submit" disabled={!token || isSending}>
                {isSending ? "送信中…" : "送信"}
              </Button>
            </div>
            <div className="mt-4 p-4 flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link
                href={URL.twitter}
                target="_blank"
                className="flex items-center gap-2 py-1 px-4 border rounded-3xl duration-300 fill-white hover:text-black hover:bg-white hover:fill-black"
              >
                <div className="w-5 h-5">
                  <Twitter className="w-full h-full fill-inherit" />
                </div>
                <p>@AresPjt2022</p>
              </Link>
              <Link
                href={URL.instagram}
                target="_blank"
                className="flex items-center gap-2 py-1 px-4 border rounded-3xl duration-300 fill-white hover:text-black hover:bg-white hover:fill-black"
              >
                <div className="w-5 h-5">
                  <Instagram className="w-full h-full fill-inherit" />
                </div>
                <p>@ares_project_official</p>
              </Link>
              <div className="flex items-center gap-2 py-1 px-4 border rounded-3xl">
                <div className="w-5 h-5">
                  <img
                    src="/images/icons/envelope.svg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <p>ares2022.tu@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
