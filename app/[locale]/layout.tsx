import "@fontsource-variable/noto-sans-jp";
import "@fontsource-variable/orbitron";
import "../../styles/globals.css";
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ReactNode } from "react";

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

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
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
