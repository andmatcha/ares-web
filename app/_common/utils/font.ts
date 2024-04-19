import { Montserrat, Noto_Sans_JP, Orbitron } from "next/font/google"; // google fonts

// 全ページ共通のフォント
// 英語フォント
export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// 日本語フォント
export const noto_sans_jp = Noto_Sans_JP({
  preload: false,
  variable: "--font-noto-sans-jp",
});

// 角張った英語フォント(タイトルやヘッダーなどに使用)
export const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});
