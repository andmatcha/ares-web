import dayjs from "dayjs";
import type { NextPage } from "next";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

import Layout from "../components/layouts/Layout";
import ArticleCard from "../components/objects/atoms/ArticleCard";
import CountUp from "../components/objects/atoms/CountUp";
import FadeIn from "../components/objects/atoms/FadeIn";
import MainButton from "../components/objects/atoms/MainButton";
import Paragraph from "../components/objects/atoms/Paragraph";
import Section from "../components/objects/molecules/Section";
import SponsorArea from "../components/objects/molecules/SponsorArea";
import MainVisual from "../components/objects/organisms/MainVisual";
import { articles } from "../const/articles";
import supporters from "../const/supporters";
import URL from "../const/url";

const Home: NextPage = () => {
  const { ref: teamRef, inView: teamInView } = useInView({ delay: 800 });
  const { ref: fundingRef, inView: fundingInView } = useInView({ delay: 800 });

  const sortArticles = () => {
    return articles.sort((a, b) => {
      return dayjs(a.date).isAfter(b.date) ? -1 : 1;
    });
  };
  const sortedArticles = useMemo(() => sortArticles(), []);

  return (
    <Layout title="ARES Project">
      <MainVisual />
      <SponsorArea />
      <div className="px-8 py-10 bg-black">
        <FadeIn
          options={{ triggerOnce: true, delay: 400 }}
          className="flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <img
            src="/images/brand_marks/100banch.png"
            alt="100BANCH"
            className="w-80 h-80"
          />
          <p className="font-sans">
            GARAGE Program第70期プロジェクト
            <br />
            <a
              href={URL.hyaku_banch_project}
              className="w-full text-left text-xs text-ares-red"
            >
              100BANCH プロジェクトページ
            </a>
          </p>
        </FadeIn>
      </div>
      <div className="w-screen overflow-hidden">
        <img
          src="/images/rovers/ares4_wide.jpg"
          alt="ARES4"
          className="w-full object-cover"
        />
      </div>
      <section className="py-10 md:py-20 px-2 md:px-[10%] flex flex-col items-center gap-10 text-lg">
        <FadeIn
          options={{ triggerOnce: true }}
          className="flex gap-8 justify-center items-center pb-4"
        >
          <h3 className="text-4xl md:text-5xl leading-relaxed md:leading-relaxed tracking-wider">
            ARES
            <br />
            Project
            <br />
            とは？
          </h3>
          <Paragraph className="w-3/5 md:text-center">
            火星探査機の学生世界大会 “University Rover Challenge (URC)”
            へ、日本チームとして初の出場を目指す学生団体プロジェクトです。東北大学・慶應義塾大学を主な拠点として活動しています。
          </Paragraph>
        </FadeIn>
        <div
          ref={teamRef}
          className="flex justify-center items-center gap-10 pb-4"
        >
          <div className="flex flex-col justify-center items-end md:items-center gap-2 font-display">
            <div className="text-4xl md:text-6xl flex items-center justify-center">
              <div className="w-28 flex justify-end">
                <CountUp active={teamInView} from={0} to={30} time={1200} />
              </div>
              +
            </div>
            <span className="text-sm">members</span>
          </div>
          <div className="flex flex-col justify-center items-end md:items-center gap-2 font-display">
            <div className="text-4xl md:text-6xl flex items-center justify-center">
              <div className="w-28 flex justify-end">
                <CountUp active={teamInView} from={0} to={40} time={1600} />
              </div>
              +
            </div>
            <span className="text-sm">patrons</span>
          </div>
        </div>
        <FadeIn
          options={{ rootMargin: "-20% 0px" }}
          className={`flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[10%]`}
        >
          <img src="/images/keio_members.jpg" alt="" className="md:w-[45%]" />
          <div className="md:w-[45%]">
            <h4 className="text-2xl">東京班</h4>
            <Paragraph>
              東京班は主にアームの設計を行っています。この大会では宇宙飛行士のサポートを前提としたミッションや岩を移動させるミッションがあるためアームは重要な役割を果たします。
            </Paragraph>
          </div>
        </FadeIn>
        <FadeIn
          className={`flex flex-col md:flex-row-reverse justify-center items-center gap-4 md:gap-[10%]`}
        >
          <img src="/images/tohoku_members.jpg" alt="" className="md:w-[45%]" />
          <div className="md:w-[45%]">
            <h4 className="text-2xl">東北班</h4>
            <Paragraph>
              東北班は機体の設計、開発を行っています。整備されていない地形でミッションを進めることができるようにそれぞれの得意分野を活かして開発しています。
            </Paragraph>
          </div>
        </FadeIn>
        <MainButton url={URL.team} label="SEE MORE" />
      </section>
      <FadeIn
        as="section"
        className="py-10 md:py-20 px-2 md:px-[10%] flex flex-col items-center gap-10 text-lg"
      >
        <div className="flex gap-4 md:gap-[4%] flex-col items-center md:flex-row">
          <img src="/images/mars1.png" alt="" className="md:w-[48%]" />
          <Paragraph className="md:w-[48%]">
            <h3 className="text-3xl md:text-4xl mt-10 tracking-wider pb-4">
              URCとは？
            </h3>
            University Rover
            Challenge(URC)は大学生を対象とした世界最高峰のロボット工学コンテストです。URCは、毎年米国ユタ州南部の砂漠で開催され、それぞれのチームが、火星を調査する宇宙飛行士と一緒に働く次世代の火星探査機の設計と製作に挑戦しています。
            <br />
            <a
              href={URL.urc_official}
              className="w-full text-left text-xs text-ares-red"
            >
              URC公式サイト
            </a>
          </Paragraph>
        </div>
      </FadeIn>
      <div className="flex flex-col justify-center items-center px-2 md:px-[10%]">
        <h2 className="text-4xl pb-4">NEWS</h2>
        <div className="w-full flex flex-col justify-center gap-4">
          {articles.map((article) => (
            <ArticleCard key={article.id} articleOverview={article} />
          ))}
        </div>
      </div>
      <FadeIn
        as="section"
        className="py-10 md:py-20 px-2 md:px-[10%] flex flex-col items-center gap-10 text-lg"
      >
        <div className="flex flex-col items-center gap-8">
          <img
            src="/images/kabuto_cad.gif"
            alt=""
            className="w-full max-w-xs md:max-w-lg"
          />
          <MainButton url={URL.rover} label="SEE OUR ROVERS" />
        </div>
      </FadeIn>
      <SponsorArea />
      <footer
        ref={fundingRef}
        className="w-full bg-black flex flex-col items-center py-10"
      >
        <h3 className="mb-4 text-xl pt-10 pb-4">
          ご支援ありがとうございました!
        </h3>
        <div className="flex justify-center items-center gap-4 py-4">
          <div className="flex flex-col justify-center items-center gap-2 p-4 min-w-fit">
            <h4 className="text-sm">支援者数</h4>
            <p className="w-16 md:w-20 text-center text-4xl md:text-5xl font-display">
              <CountUp active={fundingInView} to={37} time={1000} />
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 p-4 min-w-fit">
            <h4 className="text-sm">支援総額</h4>
            <p className="w-64 text-4xl md:text-5xl font-display">
              ¥
              <CountUp active={fundingInView} from={190} to={230} time={1000} />
              ,
              <CountUp active={fundingInView} from={450} to={500} time={1500} />
            </p>
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
