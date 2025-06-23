import URL from "./url";
import { Sponsor } from "../types";

const RANK = {
  DIAMOND: 1,
  GOLD: 2,
  SILVER: 3,
  OTHER: 4,
};

const sponsors: Sponsor[] = [
  //////// DIAMOND ////////
  {
    name: "ABLab",
    imagePath: "/images/brand_marks/ablab.png",
    url: URL.ablab,
    rank: RANK.DIAMOND,
  },
  {
    name: "CHUMS",
    imagePath: "/images/brand_marks/chums.jpg",
    url: URL.chums,
    rank: RANK.DIAMOND,
  },
  {
    name: "DENSO",
    imagePath: "/images/brand_marks/denso.png",
    url: URL.denso,
    rank: RANK.DIAMOND,
  },
  {
    name: "4th.ai",
    imagePath: "/images/brand_marks/4thai.jpg",
    url: URL.fourthai,
    rank: RANK.DIAMOND,
  },
  {
    name: "Tokyo Gem Science",
    imagePath: "/images/brand_marks/tokyo_gem_science.jpg",
    url: "", // todo
    rank: RANK.DIAMOND,
  },
  {
    name: "Uchida",
    imagePath: "/images/brand_marks/uchida.png",
    url: URL.uchida,
    rank: RANK.DIAMOND,
  },
  //////// GOLD ////////
  {
    name: "アズワン",
    imagePath: "/images/brand_marks/asone.jpg",
    url: URL.asone,
    rank: RANK.GOLD,
  },
  {
    name: "autodesk",
    imagePath: "/images/brand_marks/autodesk.png",
    url: URL.autodesk,
    rank: RANK.GOLD,
  },
  {
    name: "Local Knowledge Platform",
    imagePath: "/images/brand_marks/local_knowledge_platform.jpg",
    url: "", // todo
    rank: RANK.GOLD,
  },
  {
    name: "Mazak",
    imagePath: "/images/brand_marks/mazak.png",
    url: URL.mazak,
    rank: RANK.GOLD,
  },
  {
    name: "日本精工",
    imagePath: "/images/brand_marks/nsk.png",
    url: URL.nsk,
    rank: RANK.GOLD,
  },
  {
    name: "TKK",
    imagePath: "/images/brand_marks/tkk.png",
    url: "https://www.tokai-mmc.co.jp/index.html",
    rank: RANK.GOLD,
    bgWhite: true,
  },
  {
    name: "雑談会議",
    imagePath: "/images/brand_marks/zatsudan_kaigi.png",
    url: "", // todo
    rank: RANK.GOLD,
    bgWhite: true,
  },
  //////// SILVER ////////
  {
    name: "amulapo",
    imagePath: "/images/brand_marks/amulapo.png",
    url: URL.amulapo,
    rank: RANK.SILVER,
  },
  {
    name: "CERATEC JAPAN",
    imagePath: "/images/brand_marks/ceratec_japan.png",
    url: URL.ceratec_japan,
    rank: RANK.SILVER,
    bgWhite: true,
  },
  {
    name: "creality",
    imagePath: "/images/brand_marks/creality.png",
    url: URL.creality,
    rank: RANK.SILVER,
  },
  {
    name: "cyport",
    imagePath: "/images/brand_marks/cyport.jpg",
    url: URL.cyport,
    rank: RANK.SILVER,
  },
  // todo
  // {
  //   name: "DigiKey",
  //   imagePath: "/images/brand_marks/", // todo
  //   url: "", // todo
  //   rank: RANK.SILVER,
  // },
  {
    name: "Digi International",
    imagePath: "/images/brand_marks/digi_international.png",
    url: URL.digi_international,
    rank: RANK.SILVER,
    bgWhite: true,
  },
  {
    name: "HiKOKI",
    imagePath: "/images/brand_marks/hikoki.jpg",
    url: URL.hikoki,
    rank: RANK.SILVER,
  },
  {
    name: "100 BANCH",
    imagePath: "/images/brand_marks/100banch_wide.png",
    url: URL.hyaku_banch,
    rank: RANK.SILVER,
  },
  {
    name: "マブチモーター",
    imagePath: "/images/brand_marks/mabuchi.jpg",
    url: URL.mabuchi,
    rank: RANK.SILVER,
  },
  {
    name: "MISUMI",
    imagePath: "/images/brand_marks/misumi.png",
    url: URL.misumi,
    rank: RANK.SILVER,
  },
  {
    name: "PFM",
    imagePath: "/images/brand_marks/pfm.jpg",
    url: URL.pfm,
    rank: RANK.SILVER,
  },
  {
    name: "SK本舗",
    imagePath: "/images/brand_marks/SKhonpo.jpg",
    url: URL.sk_honpo,
    rank: RANK.SILVER,
  },
  {
    name: "創造工学センター",
    imagePath: "/images/brand_marks/sozo_kogaku_center.png",
    url: "", // todo
    rank: RANK.SILVER,
    bgWhite: true,
  },
  {
    name: "st",
    imagePath: "/images/brand_marks/st.png",
    url: URL.st,
    rank: RANK.SILVER,
  },
  //////// IN-KIND ////////
  // todo
  // {
  //   name: "カーボンラボ",
  //   imagePath: "",
  //   url: "",
  //   rank: RANK.OTHER,
  // },
  {
    name: "コニシ",
    imagePath: "/images/brand_marks/konishi.png",
    url: "", // todo
    rank: RANK.OTHER,
  },
  {
    name: "iVicon Japan",
    imagePath: "/images/brand_marks/ivicon_japan.png",
    url: URL.ivicon_japan,
    rank: RANK.OTHER,
  },
  {
    name: "サイマ",
    imagePath: "/images/brand_marks/saima.jpg",
    url: "", // todo
    rank: RANK.OTHER,
  },
];

export { RANK, sponsors };
