import "destyle.css";
import "../../styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Orbitron } from "next/font/google";
import { ReactNode } from "react";

import { ClientI18nProvider } from "../../components/I18nProvider";
import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
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
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function LocaleLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${notoSansJP.variable} ${orbitron.variable}`}>
      <body className={notoSansJP.className}>
        <ClientI18nProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientI18nProvider>
      </body>
    </html>
  );
}

