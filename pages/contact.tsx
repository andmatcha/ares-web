import { NextPage } from "next";

import Layout from "../components/layouts/Layout";
import Hero from "../components/objects/atoms/Hero";
import { useMail } from "../hooks/useMail";

const Contact: NextPage = () => {
  const { setName, setEmail, setMessage, send } = useMail();
  return (
    <Layout title="CONTACT" allowTopSpace>
      <Hero title="CONTACT" imagePath="/images/leaders_wide.jpg" />
      <div className="flex p-4">
        <div className="w-1/2">
          <div className="flex flex-col gap-2 px-4 py-2">
            <label htmlFor="name">お名前</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              className="h-8 bg-white text-black flex items-center rounded-sm p-2"
            />
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
    </Layout>
  );
};

export default Contact;
