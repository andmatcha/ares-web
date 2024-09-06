import URL from "./url";
import { Sponsor } from "../types";

const RANK = {
  DIAMOND: 1,
  GOLD: 2,
  OTHER: 3,
};

const sponsors: Sponsor[] = [
  {
    name: "ABLab",
    imagePath: "/images/brand_marks/ablab.png",
    url: URL.ablab,
    rank: RANK.DIAMOND,
  },
  {
    name: "amulapo",
    imagePath: "/images/brand_marks/amulapo.png",
    url: URL.amulapo,
    rank: RANK.GOLD,
  },
  {
    name: "アズワン",
    imagePath: "/images/brand_marks/asone.jpg",
    url: URL.asone,
    rank: RANK.OTHER,
  },
  {
    name: "autodesk",
    imagePath: "/images/brand_marks/autodesk.png",
    url: URL.autodesk,
    rank: RANK.OTHER,
  },
  {
    name: "CERATEC JAPAN",
    imagePath: "/images/brand_marks/ceratec_japan.png",
    url: URL.ceratec_japan,
    rank: RANK.OTHER,
  },
  {
    name: "CHUMS",
    imagePath: "/images/brand_marks/chums.jpg",
    url: URL.chums,
    rank: RANK.GOLD,
  },
  {
    name: "cyport",
    imagePath: "/images/brand_marks/cyport.jpg",
    url: URL.cyport,
    rank: RANK.OTHER,
  },
  {
    name: "4th.ai",
    imagePath: "/images/brand_marks/4thai.jpg",
    url: URL.fourthai,
    rank: RANK.DIAMOND,
  },
  {
    name: "工機ホールディングス",
    imagePath: "/images/brand_marks/hikoki.jpg",
    url: URL.hikoki,
    rank: RANK.OTHER,
  },
  {
    name: "iVicon Japan",
    imagePath: "/images/brand_marks/ivicon_japan.png",
    url: URL.ivicon_japan,
    rank: RANK.OTHER,
  },
  {
    name: "マブチモーター",
    imagePath: "/images/brand_marks/mabuchi.jpg",
    url: URL.mabuchi,
    rank: RANK.OTHER,
  },
  {
    name: "Mazak",
    imagePath: "/images/brand_marks/mazak.png",
    url: URL.mazak,
    rank: RANK.GOLD,
  },
  {
    name: "MISUMI",
    imagePath: "/images/brand_marks/misumi.png",
    url: URL.misumi,
    rank: RANK.OTHER,
  },
  {
    name: "日本精工",
    imagePath: "/images/brand_marks/nsk.png",
    url: URL.nsk,
    rank: RANK.GOLD,
  },
  {
    name: "PFM",
    imagePath: "/images/brand_marks/pfm.jpg",
    url: URL.pfm,
    rank: RANK.OTHER,
  },
  {
    name: "しぶちょー技術研究所",
    imagePath: "/images/brand_marks/sibucho.png",
    url: URL.sibucho,
    rank: RANK.OTHER,
  },
  {
    name: "SK本舗",
    imagePath: "/images/brand_marks/SKhonpo.jpg",
    url: URL.sk_honpo,
    rank: RANK.OTHER,
  },
  {
    name: "sorae",
    imagePath: "/images/brand_marks/sorae.png",
    url: URL.sorae,
    rank: RANK.OTHER,
  },
  {
    name: "TELSTAR",
    imagePath: "/images/brand_marks/telstar.jpg",
    url: URL.telstar,
    rank: RANK.OTHER,
  },
  {
    name: "宇宙ばなし",
    imagePath: "/images/brand_marks/utyu_banashi.jpg",
    url: URL.utyu_banashi,
    rank: RANK.OTHER,
  },
];

export {RANK, sponsors };
