import { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

const send = async (req: NextApiRequest, res: NextApiResponse) => {
  const mailData = JSON.parse(req.body);
  await transporter.sendMail({
    from: process.env.MAIL_TO,
    to: mailData.email,
    subject: `[ARES-WEB] お問い合わせ完了`,
    text: mailData.message,
    html: `
    <p>
    以下の内容でお問い合せが完了しました。担当者より返信を差し上げますのでお待ち下さい。
    </p>
    <section style="background-color: #f5f5f5; padding: 20px;">
    <p>【お名前】</p>
    <p style="padding: 0px 10px">${mailData.name} 様</p>
    <p>【メッセージ内容】</p>
    <p style="padding: 0px 10px">${mailData.message}</p>
    <p>【返信先メールアドレス】</p>
    <p style="padding: 0px 10px">${mailData.email}</p>
    </section>
    <p>
    <font size="2" color="#696969">
    ※このメールはARES WEBシステムより自動送信されています。
    <br>
    ※このメールアドレスは配信専用です。お問い合わせは${process.env.MAIL_TO}にお願いいたします。
    </font>
    </p>
    `,
  });

  res.status(200).json({
    success: true,
  });
};

export default send;
