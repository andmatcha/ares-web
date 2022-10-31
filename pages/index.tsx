import type { NextPage } from "next";
import { css } from "@emotion/react";
import Layout from "../components/layouts/Layout";
import MainVisual from "../components/objects/organisms/MainVisual";
import Section from "../components/objects/molecules/Section";
import MainButton from "../components/objects/atoms/MainButton";
import NewsRow from "../components/objects/molecules/NewsRow";
import Paragraph from "../components/objects/atoms/Paragraph";
import dayjs from "dayjs";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Layout title="ARES Project">
      <div css={styles.container}>
        <MainVisual></MainVisual>
        <Section title="TEAM">
          <div className="flex justify-center gap-[10%]">
            <img
              src="/images/rover2.png"
              alt=""
              className="w-[45%]"
            />
            <Paragraph className="w-[45%]">
              <h4 className="text-2xl">東京班</h4>
              東京班は主にアームの設計を行っています。この大会では宇宙飛行士のサポートを前提としたミッションや岩を移動させるミッションがあるためアームは重要な役割を果たします。
            </Paragraph>
          </div>
        </Section>
        <Section title="WHAT'S URC?">
          <Paragraph>
            University Rober
            Challengeは大学生を対象とした世界最高峰のロボット工学コンテストです。
            URCは、毎年米国ユタ州南部の砂漠で開催され、それぞれのチームが、火星を調査する宇宙飛行士と一緒に働く次世代の火星探査機の設計と製作に挑戦しています。
          </Paragraph>
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
      </div>
    </Layout>
  );
};

const styles = {
  container: css``,
  title: css`
    font-size: 36px;
    color: #c7dc68;
    letter-spacing: 1.6px;
  `,
  about: css`
    width: 100%;
    display: flex;
    gap: 16px;
  `,
  imageBox: css`
    width: 50%;
  `,
  description: css`
    width: 50%;
    letter-spacing: 1.5px;
    line-height: 1.5;
    font-weight: 300;
  `,
};

export default Home;
