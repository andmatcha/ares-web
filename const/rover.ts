export const rovers = [
  {
    name: "ARES 1",
    description: {
      ja: "ARESプロジェクト創立メンバー3名より、100プログラム活動期間中の2か月で製作。ローバーの基本的な開発に初めて挑戦する中、3人だけであっても形にすることができるのか検証するために製作された。足回りの機構・電装、ローバーならではの機構の重要性を認識し、さらなる開発が必要となるような機体となったが、ローバー世界大会に挑戦する決断をする大きなきっかけとなった。",
      en: "ARESプロジェクト創立メンバー3名より、100プログラム活動期間中の2か月で製作。ローバーの基本的な開発に初めて挑戦する中、3人だけであっても形にすることができるのか検証するために製作された。足回りの機構・電装、ローバーならではの機構の重要性を認識し、さらなる開発が必要となるような機体となったが、ローバー世界大会に挑戦する決断をする大きなきっかけとなった。",
    },
    imagePath: "/images/rovers/ares1.jpg",
  },
  {
    name: "ARES 2",
    description: {
      ja: "ARES1での知識不足を改善していくため、ロッカーボギー機構を採用した機体を開発。ロッカーボギー機構の解明及び学習のための機体であったが、実際に走行できるようにした。同様に、簡易的ではあるが初のアームを開発、今後の大型化につなげるための機体となった。",
      en: "ARES1での知識不足を改善していくため、ロッカーボギー機構を採用した機体を開発。ロッカーボギー機構の解明及び学習のための機体であったが、実際に走行できるようにした。同様に、簡易的ではあるが初のアームを開発、今後の大型化につなげるための機体となった。",
    },
    imagePath: "/images/rovers/ares2.jpg",
  },
  {
    name: "ARES 3",
    description: {
      ja: "URCを見据え、機体を大型化した。様々な方からのアドバイス等により、ハードソフトウェアの両方の観点から6輪ではなく4輪を採用。ロッカーボギー機構ではなく別機構の採用検討を行った。電装系統は本番を想定したプロトタイプを採用しており、モーター・タイヤなどは実際の大会に利用する規模のものを搭載した。しかしながら大型化に伴う強度不足・安定性不足・機構の再変更などが必要となる機体となった。",
      en: "URCを見据え、機体を大型化した。様々な方からのアドバイス等により、ハードソフトウェアの両方の観点から6輪ではなく4輪を採用。ロッカーボギー機構ではなく別機構の採用検討を行った。電装系統は本番を想定したプロトタイプを採用しており、モーター・タイヤなどは実際の大会に利用する規模のものを搭載した。しかしながら大型化に伴う強度不足・安定性不足・機構の再変更などが必要となる機体となった。",
    },
    imagePath: "/images/rovers/ares3.jpg",
  },
  {
    name: "ARES 4",
    description: {
      ja: "ARES3をベースに、最終採用の機構を決定。電装・制御関連の改善、機体の安定性と強度を大幅に改善した機体である。機体本体の軽量化にも成功し、初めて海岸やテストフィールドで安定した走行試験を行った機体である。この機体は今後様々な検討試験を行う機体として1つの完成版としており、電装部分や制御関連のアップデートを継続していくものと位置付けている。",
      en: "ARES3をベースに、最終採用の機構を決定。電装・制御関連の改善、機体の安定性と強度を大幅に改善した機体である。機体本体の軽量化にも成功し、初めて海岸やテストフィールドで安定した走行試験を行った機体である。この機体は今後様々な検討試験を行う機体として1つの完成版としており、電装部分や制御関連のアップデートを継続していくものと位置付けている。",
    },
    imagePath: "/images/rovers/ares4.jpg",
  },
  {
    name: "ARES 5",
    description: {
      ja: "ARES4に修正を重ね、鳥取砂丘月面実証フィールド「ルナテラス」でのデモ走行を行った機体である。インテグレーションを考慮し、電源を始めとする電装部品のモジュール化を行った。これにより、機体の整備性を向上させる。",
      en: 'This aircraft was modified from ARES4 and demonstrated at the Tottori Sand Dunes Lunar Proving Ground "Lunar Terrace". Considering integration, the power supply and other electrical components were modularized. This will improve the maintainability of the aircraft.',
    },
    imagePath: "/images/rovers/ares5.jpg",
  },
  {
    name: "ARES 6",
    description: {
      ja: "これまでに得られた知見をもとに開発した、URC決勝を見据えた機体である。ステアリング機構を搭載し、スムーズな旋回移動を行う。ロッカー機構の改良により、走行時のブレを軽減している。また、アーム土台には平行移動機構を搭載し、操作性の向上を目指している。",
      en: "This aircraft was developed based on the knowledge obtained so far, and was designed for the URC finals. Equipped with a steering mechanism for smooth turning movement. The rocker mechanism has been improved to reduce shaking during travel. The arm base is equipped with a translation mechanism to improve operability.",
    },
    imagePath: "/images/rovers/ares6.jpg",
  },
  {
    name: "ARES 7",
    description: {
      ja: "URC2024に出場した機体。ローバーには不整地走行での安定性を高めるロッカー機構、サイクロイド減速機を採用し旋回性に優れたステアリング機構が搭載されている。柔軟性に優れた3Dプリンター製のタイヤには、火星の地表を想定した環境で高いトラクションを得られるよう、工学的に最適化された表面パターンを施した。さらに、ジェネレーティブデザインを利用することで軽量かつ高強度な設計を実現した。5kgまで持ち上げ可能なロボットアームは、5つの関節と平行移動する土台によって6自由度を実現した。同時に、サイクロイド減速機とエンコーダで高精度操作を実現し、大会で求められる機能を網羅した。キーボード入力や、ボルト開閉、スイッチのオンオフなどの繊細な作業も可能である。また、安定した機体には土壌採取、生命の検出/分析、土壌の温湿度分析、地層/岩石の観察が可能な機構を搭載し、サイエンスミッションの達成を可能にするとともに、アンテナやインジケーターランプなど大会の要件に適合する装備を持っている。",
      en: "The ARES7 is a rover that competed in URC 2024. It features a rocker mechanism to enhance stability on rough terrain and employs a cycloidal reducer in its steering system, enabling superior maneuverability. The flexible 3D-printed tires are engineered with an optimized surface pattern to achieve high traction in conditions mimicking the Martian surface. Additionally, generative design techniques were utilized to create a lightweight yet robust structure. The robotic arm, capable of lifting up to 5 kg, offers six degrees of freedom through its five joints and a base that allows linear motion. Precision operation is ensured by the use of cycloidal reducers and encoders, covering all functionalities required by the competition. The arm is capable of performing delicate tasks such as keyboard input, opening and closing bolts, and toggling switches. The rover is also equipped with mechanisms for soil collection, detection and analysis of potential life, temperature and humidity analysis of soil, and observation of geological layers and rocks, enabling successful completion of science missions. Furthermore, it meets competition requirements with features such as an antenna and indicator lights integrated into its stable design.",
    },
    imagePath: "/images/rovers/ares7.jpg",
  },
];
