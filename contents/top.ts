import globalContents from "./global";

const topContents = {
  title: "ARES Project",
  team: {
    id: "team",
    title: "TEAM",
    aresLogo: {
      label: globalContents.aresLogo.label,
      imagePath: globalContents.aresLogo.imagePath,
    },
    paragraph:
      "URCの日本初の出場を目指して活動している学生団体です。2022年2月に現在の幹部3人から発足しました。現在のメンバーは慶應、東北、東大、筑波の学生で構成されており、慶應と東北を活動拠点として活動しています。",
    branches: [
      {
        title: "東京班",
        imagePath: "/images/keio_members.jpg",
        paragraph:
          "東京班は主にアームの設計を行っています。この大会では宇宙飛行士のサポートを前提としたミッションや岩を移動させるミッションがあるためアームは重要な役割を果たします。",
      },
      {
        title: "東北班",
        imagePath: "/images/tohoku_members.jpg",
        paragraph:
          "東北班は機体の設計、開発を行っています。整備されていない地形でミッションを進めることができるようにそれぞれの得意分野を活かして開発しています。",
      },
    ],
  },
  urc: {
    id: "urc",
    title: "WHAT'S URC?",
    imagePath: "/images/mars1.png",
    paragraph:
      "University Rover Challengeは大学生を対象とした世界最高峰のロボット工学コンテストです。URCは、毎年米国ユタ州南部の砂漠で開催され、それぞれのチームが、火星を調査する宇宙飛行士と一緒に働く次世代の火星探査機の設計と製作に挑戦しています。",
    urcOfficial: {
      label: "URC公式サイト",
      url: "https://urc.marssociety.org/",
    },
  },
  rovers: {
    id: "rovers",
    title: "ROVERS",
    videoPath: "/videos/ares_rover_cad2.mov",
    button: {
      label: "SEE OUR ROVERS",
      url: "",
    },
  },
  sponsor: {
    title: "Sponsored by",
    sponsors: [
      {
        name: "ABLab",
        imagePath: "/images/ABLab_logo_white(black)_sq.png",
      },
    ],
  },
  news: {
    id: "news",
    title: "NEWS",
  },
  contact: {
    id: "contact",
    title: "CONTACT",
  },
};

export default topContents;
