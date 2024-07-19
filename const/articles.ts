import { Article } from "../types/article";

export const THUMBNAIL_BASE_URL = "/images/thumbnails/";

export const articles: Article[] = [
  {
    id: 1,
    thumbnail: "festa_fukushima.jpg",
    date: "2022-11-26",
    title: "ロボット・航空宇宙フェスタふくしま2022に出展しました",
    category: "出展情報",
    body:
      "11月25,26日にビッグパレットふくしまで開催された「ロボット・航空宇宙フェスタふくしま2022」に参加しました。スポンサーであるABLab様のブース内で展示を行い、当プロジェクトの紹介、支援の呼びかけを行いました。また、当プロジェクトのメンバーが講演を行いました。",
    is_published: true,
    is_top: true,
  },
  {
    id: 2,
    thumbnail: "isiex.jpg",
    date: "2023-02-03",
    title: "2023国際宇宙産業展 ISIEXに出展しました",
    category: "出展情報",
    body:
      "2月1~3日に東京ビッグサイトで開催された「2023 国際宇宙産業展 ISIEX」に参加しました。スポンサーであるABLab様のブース内で展示を行い、多くの方に私たちの活動を知っていただきました。最新の機体である「ARES4」を公開しました。",
    is_published: true,
    is_top: true,
  },
  {
    id: 3,
    thumbnail: "tankyu_no_kaidan.png",
    date: "2023-04-20",
    title: "テレビ東京「探求の階段」に出演しました",
    category: "出演情報",
    body: "4月13日、20日に放送された「探求の階段」に、代表の阿依ダニシおよびARES Projectメンバーが出演しました。",
    is_published: true,
    is_top: true,
  }
];
