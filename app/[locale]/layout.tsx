import "destyle.css";
import "../../styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Orbitron } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ReactNode } from "react";

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

const notoSansJP = Noto_Sans_JP({
  weight: ["300", "400", "500"],
  display: "swap",
  preload: false,
  variable: "--font-noto-sans-jp",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "ARES Project",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const messages = await getMessages();
  const locale = await getLocale();
  return (
    <html
      lang={locale}
      className={`${notoSansJP.variable} ${orbitron.variable}`}
    >
      <body className={notoSansJP.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
