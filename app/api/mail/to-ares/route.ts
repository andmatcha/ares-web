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
  };

  await transporter.sendMail({
    from: mailData.email,
    to: process.env.MAIL_TO,
    subject: `[ARES-WEB] ${mailData.name}様よりお問い合わせがありました`,
    text: mailData.message,
    html: `
    <p>
    以下のお問い合わせがありましたのでご確認ください。
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
    ※このメールアドレスは配信専用です。返信の際は、返信先メールアドレスをご利用ください。
    </font>
    </p>
    `,
  });

  return Response.json({ success: true });
}
