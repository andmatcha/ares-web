import { createTransport } from "nodemailer";

import { escapeHtml, parseContactMailData } from "@/lib/mail";

const transporter = createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  let mailData;

  try {
    mailData = await parseContactMailData(request);
  } catch {
    return Response.json({ success: false }, { status: 400 });
  }

  const escapedMailData = {
    name: escapeHtml(mailData.name),
    email: escapeHtml(mailData.email),
    message: escapeHtml(mailData.message),
    mailTo: escapeHtml(process.env.MAIL_TO ?? ""),
  };

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
    <p style="padding: 0px 10px">${escapedMailData.name} 様</p>
    <p>【メッセージ内容】</p>
    <p style="padding: 0px 10px">${escapedMailData.message}</p>
    <p>【返信先メールアドレス】</p>
    <p style="padding: 0px 10px">${escapedMailData.email}</p>
    </section>
    <p>
    <font size="2" color="#696969">
    ※このメールはARES WEBシステムより自動送信されています。
    <br>
    ※このメールアドレスは配信専用です。お問い合わせは${escapedMailData.mailTo}にお願いいたします。
    </font>
    </p>
    `,
  });

  return Response.json({ success: true });
}
