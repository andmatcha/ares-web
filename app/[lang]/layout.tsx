import { dir } from "i18next";
import { Metadata } from "next";
import { Noto_Sans_JP, Orbitron, Roboto } from "next/font/google";

const notoSansJp = Noto_Sans_JP({
  weight: ["300", "400", "500"],
  variable: "--font-NotoSansJP",
});

const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-Orbitron",
});

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-Roboto",
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

const RootLayout = ({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) => (
  <html lang={lang} dir={dir(lang)}>
    <body
      className={`${notoSansJp.variable} ${orbitron.variable} ${roboto.variable} font-NotoSansJP`}
    >
      {children}
    </body>
  </html>
);

export default RootLayout;
