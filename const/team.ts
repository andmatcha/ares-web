import { Member } from "../types";

export const goals = [
  {
    title: "世界最高峰のローバー大会へ出場し、上位入賞する",
    icon: "/images/icons/trophy.svg",
  },
  {
    title:
      "日本の学生宇宙開発において、探査ローバー開発という新しい分野を開拓する",
    icon: "/images/icons/bulb.svg",
  },
  {
    title: "日本の学生の技術力を高め、未来の宇宙開発に貢献する",
    icon: "/images/icons/graduation.svg",
  },
  {
    title: "わたしたちの活動を実際に火星や月で活躍するローバーに役立てる",
    icon: "/images/icons/launch.svg",
  },
  {
    title: "探査ローバーの技術を応用し、地球の環境問題を解決する",
    icon: "/images/icons/show_love.svg",
  },
];

export const infoSets = [
  {
    title: "発足",
    description: "2022年2月",
  },
  {
    title: "所属人数",
    description: "約30人",
  },
  {
    title: "拠点大学",
    description: "東北大学・慶應義塾大学",
  },
  {
    title: "代表",
    description: "阿依ダニシ",
  },
];

export const branches = [
  {
    name: "東北支部",
    description:
      "ローバーの設計・製作を担当。自律走行技術や起伏に富む砂漠での走破性を実現する機体を開発しています。",
    imagePath: "/images/tohoku_members.jpg",
  },
  {
    name: "東京支部",
    description:
      "ローバーに搭載するロボットアームの設計・製作を担当。宇宙船の修理から岩石サンプルの回収まで、あらゆる環境に適応可能なロボットアームを開発しています。",
    imagePath: "/images/keio_members.jpg",
  },
];

export const subTeams = [
  {
    name: "機構班",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    imagePath: "/images/arm_cad.png",
    memberIds: [],
  },
  {
    name: "制御班",
    description:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    imagePath: "/images/group_photo1.png",
    memberIds: [],
  },
  {
    name: "電装班",
    description:
      "電装班は、火星探査ローバーの電気システムを設計・開発しています。EAGLEソフトウェアを使い、高品質なPCB基板を設計しています。安定した電源回路やArduino・STM32マイコンを活用し、ローバー制御や広範な通信システムの開発を行っています。役割分担し、チーム全体で基板設計と試験を進め、高い完成度を追求しています。",
    imagePath: "/images/group_photo1.png",
    memberIds: [],
  },
  {
    name: "サイエンス班",
    description:
      "火星に地球外生命体はいるのか？URC大会ではこの深遠な問いに立ち向かい、サンプル内での生命体の有無の分析を行います。ERC大会では火星地質学に基づいて独自のローバーの探査ルートを考案。その計画と仮説に沿った走行、サンプル回収を行うようアーム班や電装班などと協力して開発を行っています。論文に関する議論や機構の話し合いを重ね、工学・理学知識を融合させてより良い分析方法を模索しています。",
    imagePath: "/images/group_photo1.png",
    memberIds: [],
  },
  {
    name: "広報班",
    description:
      "広報班は、外部の企業や団体の方との連携、イベントの企画、WEBサイトや各種SNSの運営を行っています。より多くの方々に私たちの活動を知ってもらい、応援していただくことを目指しています。",
    imagePath: "/images/group_photo1.png",
    memberIds: [],
  },
];

export const members: Member[] = [
  {
    name: "阿依 ダニシ",
    university: "東北大学 工学研究科 航空宇宙工学専攻 吉田・桒原研究室",
    introduction:
      "1999年京都で生まれ、埼玉で育つ。両親がどちらもウイグル族でありながら、日本国籍を有して日本人として生きている特殊人物。 将来の夢は火星探査ミッションに関わる開発を通して、宇宙探査機エンジニアとして成長し、その知識と技術を持った宇宙飛行士になることである。小学生の頃から未知なロマンに溢れた宇宙に興味を持ち、学部生時代より火星探査UAVの研究を独自に行う。現在では新しい月面探査ロボットの研究ともに、火星探査ローバーの世界大会URCの日本初挑戦を目指す団体の代表を務めている。",
    imagePath: "/images/members/danishi_ai.jpg",
    isLeader: true,
  },
  {
    name: "長岡 佳汰",
    university:
      "東北大学 工学部 機械知能・航空工学科 航空宇宙コース 吉田・桒原研究室",
    introduction:
      "2000年に山形で生まれ、育つ。高校生の時に、テレビを通して現在所属する研究室の宇宙ロボットについて知り、その瞬間に完全に魅了された。その情熱を追求すべく東北大学へ進学した。学部時代は学生団体でハイブリッドロケットや小型ローバの開発に取り組み、代表も務めた。同時に宇宙教育にも興味があり、学部2年時に大学生として初の、高校生の学生顧問として水ロケットの世界大会へ出場を果たす。現在は研究室で新ロボット開発に取り組み、将来的にはロボットを通して宇宙の未知領域探査に挑む。",
    imagePath: "/images/members/keita_nagaoka.jpg",
    isLeader: false,
  },
  {
    name: "松橋 康太",
    university:
      "東北大学 工学部 機械知能・航空工学科 航空宇宙コース 山本・古澤研究室",
    introduction:
      "2002年秋田県生まれ。漠然とした宇宙への憧れを抱き、東北大学へ進学する。たまたま入った学生団体でのハイブリッドロケットの開発をきっかけに、ものづくりの楽しさに魅了された。宇宙工学に幅広く興味を持ち、小型ローバの学生世界大会の学生運営も務める。将来は、航空宇宙分野の研究に携わりたいと考えている。ARES Projectでは、東北チームリーダーのみならずローバ機構リーダーとしても開発を行う。",
    imagePath: "/images/members/kota_matsuhashi.jpg",
    isLeader: true,
  },
  {
    name: "永原 陵司",
    university: "慶應義塾大学 理工学部 機械工学科",
    introduction:
      "2002年 東京都生まれ、小さい頃から物作りが好きで小学4年生の頃からロボット教室に通い始め本格的にロボットづくりを始める。高校1,2年次に国際標準オリンピック2年連続日本代表に選ばれ、世界の壁を学ぶ。また、高校2年次にFIRST Global Challenge 日本代表チームリーダーを務め、196カ国の国とロボット競技で競い合った。小さい頃に出会ったアニメ「宇宙兄弟」をきっかけに、宇宙工学を目指し、慶應義塾大学にAO入試で合格。入学後、阿依との出会いをきっかけにARES Projectを立ち上げ、本格的にローバー開発に励む。将来は、自分の作った探査機を宇宙で動かしたいと考えている。",
    imagePath: "/images/members/ryoji_nagahara.jpg",
    isLeader: true,
  },
];
