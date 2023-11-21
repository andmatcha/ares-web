import { NextPage } from "next";
import { useEffect } from "react";

import Layout from "../components/layouts/Layout";
import Hero from "../components/objects/atoms/Hero";
import { useForm } from "../hooks/useForm";
import { useMail } from "../hooks/useMail";

const Contact: NextPage = () => {
  const { setName, setEmail, setMessage, send } = useMail();
  const { errors, values, setFieldValue, validateField, onSubmit } = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    rules: {
      name: {
        required: true,
        maxLength: 50,
      },
      email: {
        required: true,
        email: true,
        maxLength: 200,
      },
      message: {
        required: true,
        maxLength: 2000,
      },
    },
  });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <Layout title="CONTACT" allowTopSpace>
      <Hero title="CONTACT" imagePath="/images/leaders_wide.jpg" />
      <form action="" onSubmit={onSubmit}>
        <div className="flex p-4">
          <div className="w-1/2">
            <div className="flex flex-col gap-2 px-4 py-2">
              <label htmlFor="name">お名前</label>
              <input
                type="text"
                name="name"
                id="name"
                value={values.name}
                onBlur={() => validateField("name")}
                onChange={(e) => setFieldValue("name", e.target.value)}
                className="h-8 bg-white text-black flex items-center rounded-sm p-2"
              />
              <span className="text-white">
                エラー{String(errors.name.isError)}
              </span>
              {errors.name.isError && (
                <span className="text-red-500 text-sm">
                  {errors.name.rules.map((rule, index) => (
                    <span key={index}>{rule.message}</span>
                  ))}
                </span>
              )}
            </div>
            <div className="flex flex-col justify-end gap-2 px-4 py-2">
              <label htmlFor="email">メールアドレス</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="h-8 bg-white text-black flex items-center rounded-sm p-2"
              />
              <span className="text-red-500 text-sm">
                メールアドレスを入力してください
              </span>
            </div>
            <div className="flex flex-col gap-2 px-4 py-2">
              <label htmlFor="message">お問い合わせ内容</label>
              <textarea
                name="message"
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                cols={30}
                rows={16}
                className="bg-white text-black flex items-center rounded-sm p-2 "
              ></textarea>
              <span className="text-red-500 text-sm">
                お問い合わせ内容を入力してください
              </span>
            </div>
            <div className="flex flex-col gap-2 px-4 py-2">
              <button
                type="button"
                onClick={send}
                className="flex justify-center bg-white text-black w-20 px-4 py-2 rounded-sm"
              >
                送信
              </button>
            </div>
            <div className="p-4">E-MAIL: ares2022.tu@gmail.com</div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Contact;
