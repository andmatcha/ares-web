import type { NextPage } from "next";
import Header from "../_components/layouts/Header";
import { YouTubeEmbed } from "@next/third-parties/google";
import Image from "next/image";
import GroupPhoto1 from "../../public/images/group_photo1.png";
import SponsorArea from "../_components/objects/molecules/SponsorArea";
import { useTranslations } from "next-intl";

const Home: NextPage = () => {
  const t = useTranslations("Home");
  return (
    <>
      <Header />
      <main>
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="w-1/2">
            <Image src={GroupPhoto1} alt="ares members" />
          </div>
          <div className="w-1/2">
            <h1 className="font-orbitron text-4xl">
              A<span className="text-ares-red">R</span>ES P
              <span className="text-ares-red">R</span>OJECT
            </h1>
            <p>世界レベルの火星ローバーを日本から</p>
            <p>
              私たちは、学生による火星探査機の世界大会 ”University Rover
              Challenge (URC)”への日本勢初出場を目指して活動しています。
            </p>
            <p>{t("title")}aaa</p>
          </div>
        </div>
        <div className="flex gap-4 p-4">
          <div className="w-80">
            <h4>PR Movie</h4>
            <YouTubeEmbed
              videoid="l_ktA90qlF4"
              height={400}
              params="controls=0"
            />
          </div>
          <div className="w-80">
            <h4>URC SAR 2024</h4>
            <YouTubeEmbed
              videoid="wqzaqmNvUX4"
              height={400}
              params="controls=0"
            />
          </div>
        </div>
        <SponsorArea />
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
