import type { NextPage } from "next";

import Layout from "../components/layouts/Layout";
import MainButton from "../components/objects/atoms/MainButton";
import Paragraph from "../components/objects/atoms/Paragraph";
import Section from "../components/objects/molecules/Section";
import SponsorArea from "../components/objects/molecules/SponsorArea";
import MainVisual from "../components/objects/organisms/MainVisual";
import supporters from "../const/supporters";
import URL from "../const/url";

const Home: NextPage = () => {
  return (
    <Layout title="ARES Project">
      <MainVisual />
      <SponsorArea />
      <Section
        id="team"
        title="TEAM"
        className="flex flex-col gap-20 items-center"
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <img
            src="/images/ares_logo_white.png"
            alt="ARES"
            className="w-4/5 md:w-1/5"
          />
          <Paragraph className="md:w-3/5 md:text-center">
            URCの日本初の出場を目指して活動している学生団体です。2022年2月に現在の幹部3人から発足しました。現在のメンバーは慶應、東北、東大、筑波の学生で構成されており、慶應と東北を活動拠点として活動しています。
          </Paragraph>
        </div>
        <div
          className={`flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[10%]`}
        >
          <img src="/images/keio_members.jpg" alt="" className="md:w-[45%]" />
          <div className="md:w-[45%]">
            <h4 className="text-2xl">東京班</h4>
            <Paragraph>
              東京班は主にアームの設計を行っています。この大会では宇宙飛行士のサポートを前提としたミッションや岩を移動させるミッションがあるためアームは重要な役割を果たします。
            </Paragraph>
          </div>
        </div>
        <div
          className={`flex flex-col md:flex-row-reverse justify-center items-center gap-4 md:gap-[10%]`}
        >
          <img src="/images/tohoku_members.jpg" alt="" className="md:w-[45%]" />
          <div className="md:w-[45%]">
            <h4 className="text-2xl">東北班</h4>
            <Paragraph>
              東北班は機体の設計、開発を行っています。整備されていない地形でミッションを進めることができるようにそれぞれの得意分野を活かして開発しています。
            </Paragraph>
          </div>
        </div>
        <MainButton url={URL.team} label="SEE MORE" />
      </Section>
      <Section id="urc" title="WHAT'S URC?">
        <div className="flex gap-4 md:gap-[4%] flex-col items-center md:flex-row">
          <img src="/images/mars1.png" alt="" className="md:w-[48%]" />
          <Paragraph className="md:w-[48%]">
            University Rover
            Challengeは大学生を対象とした世界最高峰のロボット工学コンテストです。URCは、毎年米国ユタ州南部の砂漠で開催され、それぞれのチームが、火星を調査する宇宙飛行士と一緒に働く次世代の火星探査機の設計と製作に挑戦しています。
            <br />
            <a
              href={URL.urc_official}
              className="w-full text-left text-xs text-ares-red"
            >
              URC公式サイト
            </a>
          </Paragraph>
        </div>
      </Section>
      <Section id="rovers" title="ROVERS">
        <div className="flex flex-col items-center gap-8">
          <img
            src="/images/kabuto_cad.gif"
            alt=""
            className="w-full max-w-xs md:max-w-lg"
          />
          <MainButton url={URL.rover} label="SEE OUR ROVERS" />
        </div>
      </Section>
      <footer className="w-full bg-black flex flex-col items-center py-10">
        <SponsorArea />
        <h3 className="mb-4 text-xl pt-10 pb-4">
          ご支援ありがとうございました!
        </h3>
        <div className="flex justify-center items-center gap-4 py-4">
          <div className="flex flex-col justify-center items-center gap-2 p-4 min-w-fit">
            <h4 className="text-sm">支援者数</h4>
            <p className="text-4xl md:text-5xl font-bold">37</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 p-4 min-w-fit">
            <h4 className="text-sm">支援総額</h4>
            <p className="text-4xl md:text-5xl font-bold">¥230,500</p>
          </div>
        </div>
        <ul className="flex gap-2 flex-wrap px-4 md:px-32 text-sm pb-4 justify-center">
          {supporters.map((supporter, i) => (
            <>
              <li key={i} className="inline-block">
                {supporter} 様
              </li>
              {i + 1 < supporters.length ? (
                <span className=" text-gray-600">/</span>
              ) : undefined}
            </>
          ))}
          <span className="text-sm">他</span>
        </ul>
      </footer>
      <Section id="contact" title="FOLLOW US!">
        <p className="text-center  text-sm md:text-base">
          ↓日々の活動の様子や最新情報を発信しています↓
        </p>
        <div className="max-w-2xl mx-auto mt-5">
          <a
            className="twitter-timeline"
            data-height="1200"
            data-theme="dark"
            href="https://twitter.com/AresPjt2022?ref_src=twsrc%5Etfw"
          >
            Tweets by AresPjt2022
          </a>
          <script async src="https://platform.twitter.com/widgets.js"></script>
        </div>
      </Section>
    </Layout>
  );
};

export default Home;
