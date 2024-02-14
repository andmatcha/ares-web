import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Suspense, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Layout from "../../components/layouts/Layout";
import Button from "../../components/objects/atoms/Button";
import Hero from "../../components/objects/atoms/Hero";
import Loader from "../../components/objects/atoms/Loader";
import Instagram from "../../components/objects/icons/instagram";
import Twitter from "../../components/objects/icons/twitter";
import URL from "../../const/url";
import { useMail } from "../../hooks/useMail";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: NextPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormData>();

  const { send } = useMail();

  const [isSending, setIsSending] = useState<boolean>(false);

  // onBlur イベントでバリデーションを実行する関数
  const handleBlur = async (fieldName: keyof FormData) => {
    await trigger(fieldName);
  };

  const onSubmit: SubmitHandler<FormData> = ({ name, email, message }) => {
    setIsSending(true);
    send(name, email, message).then(() => {
      router.push("/contact/success").then(() => {
        setIsSending(false);
      });
    });
  };

  return isSending ? (
    // メッセージ送信中の画面
    <div className="w-screen h-screen">
      <Loader message="SENDING" />
    </div>
  ) : (
    // メッセージ送信前の画面
    <Layout title="CONTACT" allowTopSpace>
      <Hero title="CONTACT" imagePath="/images/leaders_wide.jpg" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex p-4 justify-center">
          <div className="w-full lg:w-1/2">
            {/* お名前の入力フィールド */}
            <div className="flex flex-col gap-2 px-4 py-2">
              <label htmlFor="name">お名前</label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  required: "名前は必須です",
                  maxLength: {
                    value: 100,
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
            {/* メールアドレスの入力フィールド */}
            <div className="flex flex-col justify-end gap-2 px-4 py-2">
              <label htmlFor="email">メールアドレス</label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "メールアドレスは必須です",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "有効なメールアドレスを入力してください",
                  },
                  maxLength: {
                    value: 256,
                    message: "有効なメールアドレスを入力してください",
                  },
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
            {/* お問い合わせ内容の入力フィールド */}
            <div className="flex flex-col gap-2 px-4 py-2">
              <label htmlFor="message">お問い合わせ内容</label>
              <textarea
                id="message"
                {...register("message", {
                  required: "問い合わせ内容は必須です",
                  maxLength: {
                    value: 2000,
                    message: "2000文字以内で入力してください",
                  },
                })}
                onBlur={() => handleBlur("message")}
                cols={30}
                rows={16}
                className="bg-white text-black flex items-center rounded-sm p-2 "
              ></textarea>
              <div className="h-4">
                {errors.message && (
                  <p className="text-red-600 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-2 px-4 py-2 justify-center">
              <Button type="submit">送信</Button>
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
    </Layout>
  );
};

export default Contact;
