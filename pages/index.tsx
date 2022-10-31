import type { NextPage } from "next";
import Layout from "../components/layouts/Layout";
import MainVisual from "../components/objects/organisms/MainVisual";
import Section from "../components/objects/molecules/Section";
import MainButton from "../components/objects/atoms/MainButton";
import NewsRow from "../components/objects/molecules/NewsRow";
import Paragraph from "../components/objects/atoms/Paragraph";
import dayjs from "dayjs";

const Home: NextPage = () => {
  return (
    <Layout title="ARES Project">
      <MainVisual />
      <Section id="team" title="TEAM" className="flex flex-col gap-20">
        <div className="flex flex-col justify-center items-center gap-4">
          <img src="/images/logo.jpg" alt="" className="w-4/5 md:w-1/5" />
          <Paragraph className="md:w-3/5 md:text-center">
            URCの日本初の出場を目指して活動している学生団体です。
            2022年2月に現在の幹部3人から発足しました。
            現在のメンバーは慶應、東北、東大、筑波の学生で構成されており、慶應と東北を活動拠点として活動しています。
          </Paragraph>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[10%]">
          <img src="/images/arm2.png" alt="" className="md:w-[45%]" />
          <div className="md:w-[45%]">
            <h4 className="text-2xl">東京班</h4>
            <Paragraph>
              東京班は主にアームの設計を行っています。この大会では宇宙飛行士のサポートを前提としたミッションや岩を移動させるミッションがあるためアームは重要な役割を果たします。
            </Paragraph>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-4 md:gap-[10%]">
          <div className="md:w-[45%]">
            <h4 className="text-2xl">東北班</h4>
            <Paragraph>
              東北班は機体の設計、開発を行っています。整備されていない地形でミッションを進めることができるようにそれぞれの得意分野を活かして開発しています
            </Paragraph>
          </div>
          <img src="/images/rover2.png" alt="" className="md:w-[45%]" />
        </div>
      </Section>
      <Section id="urc" title="WHAT&apos;S URC?">
        <div className="flex gap-4 md:gap-[4%] flex-col items-center md:flex-row">
          <img src="/images/mars1.png" alt="" className="md:w-[48%]" />
          <Paragraph className="md:w-[48%]">
            University Rober
            Challengeは大学生を対象とした世界最高峰のロボット工学コンテストです。
            URCは、毎年米国ユタ州南部の砂漠で開催され、それぞれのチームが、火星を調査する宇宙飛行士と一緒に働く次世代の火星探査機の設計と製作に挑戦しています。
            <br />
            <a
              href="https://urc.marssociety.org/"
              className="w-full text-left text-xs text-ares-red"
            >
              URC公式サイト
            </a>
          </Paragraph>
        </div>
      </Section>
      <Section id="rovers" title="ROVERS">
        <div className="flex flex-col items-center gap-8">
          <video
            src="/videos/ares_rover_cad2.mov"
            autoPlay={true}
            muted={true}
            loop={true}
          ></video>
          <MainButton text="SEE OUR ROVERS" />
        </div>
      </Section>
      <Section id="news" title="NEWS" className="flex flex-col items-center">
        <NewsRow
          date={dayjs("2022-11-01")}
          tag="広報局"
          title="公式webサイトをオープンしました！"
        />
      </Section>
      <footer className="w-full bg-black flex flex-col items-center py-10">
        <h3 className="text-sm font-light">Sponsored by</h3>
        <div className="flex justify-center">
          <img
            src="/images/ABLab_logo_white(black)_sq.png"
            alt=""
            className="max-w-sm"
          />
        </div>
      </footer>
      <Section id="contact" title="CONTACT">
        <p className="flex justify-center">Email</p>
      </Section>
    </Layout>
  );
};

export default Home;
