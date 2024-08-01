import { read } from "fs";

const URL = {
  // 内部ページ
  home: "/",
  rover: "/rover",
  team: "/team",
  blog: "/blog",
  contact: "/contact",
  funding: "/funding",

  // 外部ページ
  campfire_project: "https://camp-fire.jp/projects/view/632663",
  readyfor_project: "https://readyfor.jp/projects/ares_project",
  hyaku_banch_project: "https://100banch.com/projects/ares-project",
  urc_official: "https://urc.marssociety.org/",

  // SNS
  instagram: "https://www.instagram.com/ares_project_official",
  twitter: "https://twitter.com/arespjt2022",

  // スポンサー等のサイト
  ablab: "https://ablab.space/",
  amulapo: "https://amulapo-inc.com/",
  autodesk: "https://www.autodesk.co.jp/",
  chums: "https://www.chums.jp/",
  cyport: "https://www.cyport.co.jp/",
  fourthai: "https://www.4th.ai/",
  hikoki: "https://www.koki-holdings.co.jp/",
  hyaku_banch: "https://100banch.com/",
  ivicon_japan: "https://ivicon.jp/",
  mabuchi: "https://www.mabuchi-motor.co.jp/",
  mazak: "https://www.mazak.jp/",
  misumi: "https://www.misumi.co.jp/",
  nsk: "https://www.nsk.com/jp/",
  pfm: "https://pfm-jp.com/",
  robotis: "https://e-shop.robotis.co.jp/",
  sibucho: "https://sibucho-laboratory.com/",
  sk_honpo: "https://skhonpo.com/",
  sorae: "https://sorae.info/",
  telstar: "http://spacemgz-telstar.com/",
  utyu_banashi: "http://ryosasaki.net/",
};

export default URL;
