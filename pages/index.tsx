import type { NextPage } from "next";
import { css } from "@emotion/react";
import Layout from "../components/layouts/Layout";
import MainVisual from "../components/objects/organisms/MainVisual";
import Section from "../components/objects/molecules/Section";
import MainButton from "../components/objects/atoms/MainButton";
import NewsRow from "../components/objects/molecules/NewsRow";
import dayjs from "dayjs";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Layout title="ARES Project">
      <div css={styles.container}>
        <MainVisual></MainVisual>
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
        <Section title="ABOUT US">
          <div css={styles.about}>
            <div css={styles.imageBox}>
              <Image
                src="/images/logo.jpg"
                alt=""
                width={560}
                height={560}
                objectFit="cover"
                priority={true}
              />
            </div>
            <p css={styles.description}>
              観測ロケット「MOMO
              -モモ-」は弾道飛行を行うロケットです。様々な観測機器やお客様からお預かりした荷物をペイロードとして搭載し、宇宙空間に到達します。微小重力環境での科学実験に使われているほか、企業のPRやブランディング利用の市場も開拓しています。
            </p>
          </div>
        </Section>
        <Section title="ROVERS">
          <MainButton text="SEE OUR ROVERS" />
        </Section>
      </div>
    </Layout>
  );
};

const styles = {
  container: css`
  `,
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
  `
};

export default Home;
