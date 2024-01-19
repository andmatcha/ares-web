import { NextPage } from "next";
import { useRouter } from "next/router";
import { Suspense, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Layout from "../../components/layouts/Layout";
import Hero from "../../components/objects/atoms/Hero";
import Loader from "../../components/objects/atoms/Loader";
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
      router.push("/contact/success");
      setIsSending(false);
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
        <div className="flex p-4">
          <div className="w-full lg:w-1/2">
            {/* お名前の入力フィールド */}
            <div className="flex flex-col gap-2 px-4 py-2">
              <label htmlFor="name">お名前</label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "名前は必須です" })}
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
            <div className="flex gap-2 px-4 py-2 justify-center lg:justify-start">
              <button
                type="submit"
                className="flex justify-center bg-white text-black w-20 px-4 py-2 rounded-sm"
              >
                送信
              </button>
            </div>
            <div className="p-4">Email: ares2022.tu@gmail.com</div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Contact;
