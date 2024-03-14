import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* google fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
            rel="stylesheet"
          />
          {/* twitter card */}
          <meta name="twitter:image" content="https://arespjt.jp/images/ares_logo_white.png" />
          <meta name="twitter:card" content="summary"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
