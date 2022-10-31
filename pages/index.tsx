import type { NextPage } from "next";
import { css } from "@emotion/react";
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
      <Section title="TEAM" className="flex flex-col gap-20">
        <div className="flex justify-center gap-[10%]">
          <img src="/images/rover2.png" alt="" className="w-[45%]" />
          <div className="w-[45%]">
            <h4 className="text-2xl">東京班</h4>
            <Paragraph>
              東京班は主にアームの設計を行っています。この大会では宇宙飛行士のサポートを前提としたミッションや岩を移動させるミッションがあるためアームは重要な役割を果たします。
            </Paragraph>
          </div>
        </div>
        <div className="flex justify-center gap-[10%]">
          <div className="w-[45%]">
            <h4 className="text-2xl">東北班</h4>
            <Paragraph>
              東北班は機体の設計、開発を行っています。整備されていない地形でミッションを進めることができるようにそれぞれの得意分野を活かして開発しています
            </Paragraph>
          </div>
          <img src="/images/arm2.png" alt="" className="w-[45%]" />
        </div>
      </Section>
      <Section title="WHAT'S URC?">
        <div className="flex gap-[4%]">
          <img src="/images/mars1.png" alt="" className="w-[48%]" />
          <Paragraph className="w-[48%]">
            University Rober
            Challengeは大学生を対象とした世界最高峰のロボット工学コンテストです。
            URCは、毎年米国ユタ州南部の砂漠で開催され、それぞれのチームが、火星を調査する宇宙飛行士と一緒に働く次世代の火星探査機の設計と製作に挑戦しています。
          </Paragraph>
        </div>
      </Section>
      <Section title="ROVERS">
        <div className="flex flex-col items-center">
          <MainButton text="SEE OUR ROVERS" />
        </div>
      </Section>
      <Section title="NEWS">
        <NewsRow
          date={dayjs()}
          tag="慶応班"
          title="10万のアームレンタルしました！"
        />
        <NewsRow
          date={dayjs()}
          tag="慶応班"
          title="10万のアームレンタルしました！"
        />
        <NewsRow
          date={dayjs()}
          tag="慶応班"
          title="10万のアームレンタルしました！"
        />
      </Section>
    </Layout>
  );
};

export default Home;
