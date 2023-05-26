import { Article } from "../types/article";

export const THUMBNAIL_BASE_URL = "/images/thumbnails/";

export const articles: Article[] = [
  {
    id: 1,
    date: "2022-11-26",
    title: "ロボット・航空宇宙フェスタふくしま2022に出展しました",
    thumbnail: "festa_fukushima.jpg",
    description:
      "11月25,26日にビッグパレットふくしまで開催された「ロボット・航空宇宙フェスタふくしま2022」に参加しました。スポンサーであるABLab様のブース内で展示を行い、当プロジェクトの紹介、支援の呼びかけを行いました。また、当プロジェクトのメンバーが講演を行いました。",
    author: "Jin",
    type: "news",
    tags: ["出展実績"],
    content: "",
  },
  {
    id: 2,
    date: "2023-02-03",
    title: "2023国際宇宙産業展 ISIEXに出展しました",
    thumbnail: "isiex.jpg",
    description:
      "2月1~3日に東京ビッグサイトで開催された「2023 国際宇宙産業展 ISIEX」に参加しました。スポンサーであるABLab様のブース内で展示を行い、多くの方に私たちの活動を知っていただきました。最新の機体である「ARES4」を公開しました。",
    author: "Jin",
    type: "news",
    tags: ["出展実績"],
    content: "",
  },
];
