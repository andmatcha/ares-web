import dayjs from "dayjs";
import type { NextPage } from "next";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";

import Layout from "../components/layouts/Layout";
import ArticleCard from "../components/objects/atoms/ArticleCard";
import CountUp from "../components/objects/atoms/CountUp";
import FadeIn from "../components/objects/atoms/FadeIn";
import MainButton from "../components/objects/atoms/MainButton";
import Paragraph from "../components/objects/atoms/Paragraph";
import HyakuBanch from "../components/objects/molecules/HyakuBanch";
import Section from "../components/objects/molecules/Section";
import SponsorArea from "../components/objects/molecules/SponsorArea";
import MainVisual from "../components/objects/organisms/MainVisual";
import { articles } from "../const/articles";
import supporters from "../const/supporters";
import { branches, goals } from "../const/team";
import URL from "../const/url";

const Home: NextPage = () => {
  const { ref: teamRef, inView: teamInView } = useInView({
    rootMargin: "-10% 0%",
    triggerOnce: true,
  });
  const { ref: fundingRef, inView: fundingInView } = useInView({
    rootMargin: "-10% 0%",
    triggerOnce: true,
  });

  const sortArticlesDec = () => {
    return articles.sort((a, b) => {
      return dayjs(a.date).isAfter(b.date) ? -1 : 1;
    });
  };
  const sortedArticles = useMemo(() => sortArticlesDec(), []);

  useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "https://platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    document.head.appendChild(s);
  }, []);

  return (
    <Layout title="ARES Project">
      <MainVisual />
      <SponsorArea />
      <div className="bg-black">
        <FadeIn>
          <HyakuBanch />
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
          className="flex gap-8 justify-center items-center pb-4 px-4"
        >
          <h3 className="text-4xl md:text-6xl leading-relaxed md:leading-relaxed tracking-wider font-normal">
            ARES
            <br />
            Project
            <br />
            とは？
          </h3>
          <div className="w-3/5 flex flex-col gap-8">
            <Paragraph>
              火星探査機の学生世界大会 “University Rover Challenge (URC)”
              へ、日本チームとして初の出場を目指す学生団体プロジェクトです。東北大学・慶應義塾大学を主な拠点として活動しています。
            </Paragraph>
            <div
              ref={teamRef}
              className="flex justify-center items-center gap-4 md:gap-10"
            >
              <div className="flex flex-col justify-center items-end md:items-center gap-2 font-display">
                <div className="text-4xl md:text-6xl flex items-center justify-center">
                  <div className="w-16 md:w-28 flex justify-end">
                    <CountUp active={teamInView} from={0} to={30} time={1200} />
                  </div>
                  +
                </div>
                <span className="text-sm">members</span>
              </div>
              <div className="flex flex-col justify-center items-end md:items-center gap-2 font-display">
                <div className="text-4xl md:text-6xl flex items-center justify-center">
                  <div className="w-16 md:w-28 flex justify-end">
                    <CountUp active={teamInView} from={0} to={40} time={1600} />
                  </div>
                  +
                </div>
                <span className="text-sm">patrons</span>
              </div>
            </div>
          </div>
        </FadeIn>
        <MainButton url={URL.team} label="SEE MORE" />
      </section>
      <FadeIn
        as="section"
        className="py-10 md:py-20 px-2 md:px-[10%] flex flex-col items-center gap-4 md:gap-10 text-lg"
      >
        <h3 className="text-3xl md:text-5xl font-medium tracking-wider pb-2">
          わたしたちの目標
        </h3>
        <div>
          <ol className="flex flex-col md:flex-row gap-8">
            {goals.map(({ title, icon }, index) => (
              <FadeIn as="li" options={{ delay: 150 * index }} key={index} className="flex flex-row md:flex-col justify-center md:justify-start items-center gap-4 md:w-1/5">
                <div className="w-12 md:w-1/3">
                  <img src={icon} alt="" className="w-full" />
                </div>
                <Paragraph className="w-3/4 md:w-full md:text-center">{title}</Paragraph>
              </FadeIn>
            ))}
          </ol>
        </div>
      </FadeIn>
      <div className="block md:hidden w-screen h-24 overflow-hidden mt-4">
        <img src="/images/mars1.png" alt="" className="w-screen" />
      </div>
      <FadeIn
        as="section"
        className="py-10 md:py-20 px-2 md:px-[10%] flex flex-col items-center gap-10 text-lg"
      >
        <div className="flex gap-4 md:gap-10 flex-col items-center md:flex-row">
          <img
            src="/images/mars1.png"
            alt=""
            className="hidden md:block md:w-[48%]"
          />
          <div className="md:w-[48%] px-4">
            <h3 className="text-2xl md:text-4xl tracking-wider pb-2">
              URCとは？
            </h3>
            <Paragraph>
              University Rover Challenge (URC)
              は、大学生・大学院生が開発した火星探査機の性能を競う国際大会です。毎年米国ユタ州南部の砂漠で開催され、参加チームは次世代火星探査機の設計と製作に挑戦しています。
            </Paragraph>
            <a
              href={URL.urc_official}
              target="blank"
              className="w-full text-left text-xs text-ares-red"
            >
              URC公式サイト
            </a>
          </div>
        </div>
      </FadeIn>
      <div className="flex flex-col justify-center items-center px-2 md:px-[10%]">
        <h2 className="text-3xl md:text-4xl pb-4">News</h2>
        <div className="w-full flex flex-col justify-center gap-4 px-4">
          {sortedArticles.map((article, index) => (
            <FadeIn key={index} options={{ delay: 150 * index }}>
              <ArticleCard articleOverview={article} />
            </FadeIn>
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
      <div ref={fundingRef} className="w-full flex flex-col items-center py-10">
        <h3 className="mb-4 text-xl md:text-2xl pt-10">
          ご支援ありがとうございました!
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-8">
          <div className="w-2/3 md:w-1/3">
            <img
              src="/images/campfire.png"
              alt=""
              className="w-full object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-2 p-4 min-w-fit">
              <h4 className="text-sm">支援者数</h4>
              <p className="w-16 md:w-20 text-center text-4xl md:text-5xl font-display">
                <CountUp active={fundingInView} to={37} time={1000} />
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 p-4 min-w-fit">
              <h4 className="text-sm">支援総額</h4>
              <p className="w-56 md:w-64 text-4xl md:text-5xl font-display">
                ¥
                <CountUp
                  active={fundingInView}
                  from={190}
                  to={230}
                  time={1000}
                />
                ,
                <CountUp
                  active={fundingInView}
                  from={450}
                  to={500}
                  time={1500}
                />
              </p>
            </div>
          </div>
        </div>
        <ul className="flex gap-2 flex-wrap w-4/5 md:w-2/3 md:px-0 text-sm pb-4 justify-center">
          {supporters.map((supporter, i) => (
            <li key={i}>
              <div className="inline-block">{supporter} 様</div>
              {i + 1 < supporters.length ? (
                <span className=" text-gray-600">/</span>
              ) : undefined}
            </li>
          ))}
          <span className="text-sm">他</span>
        </ul>
        <div className="w-full text-center">
          <a
            href={URL.campfire_project}
            target="blank"
            className="w-full text-left text-xs text-ares-red"
          >
            CAMPFIRE プロジェクトページ
          </a>
        </div>
      </div>
      <Section id="contact" title="Follow Us!">
        <p className="text-center  text-sm md:text-base">
          ↓日々の活動の様子や最新情報を発信しています↓
        </p>
        <div className="max-w-4xl mx-auto mt-5">
          <a
            className="twitter-timeline"
            data-height="800"
            data-theme="dark"
            href="https://twitter.com/AresPjt2022?ref_src=twsrc%5Etfw"
          >
            Tweets by AresPjt2022
          </a>
        </div>
      </Section>
    </Layout>
  );
};

export default Home;
