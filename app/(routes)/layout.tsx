import "destyle.css";
import "../_common/styles/globals.css";

import Head from "next/head";

import { montserrat, noto_sans_jp, orbitron } from "../_common/utils/font";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html
    className={`${montserrat.variable} ${noto_sans_jp.variable} ${orbitron.variable}`}
  >
    <Head>
      {/* twitter card */}
      <meta
        name="twitter:image"
        content="https://arespjt.jp/images/ares_logo_white.png"
      />
      <meta name="twitter:card" content="summary"></meta>
    </Head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
