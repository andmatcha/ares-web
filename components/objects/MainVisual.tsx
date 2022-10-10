import type { NextPage } from "next";
import Image from "next/image";
import { css } from "@emotion/react";

const MainVisual: NextPage = () => {
  return (
    <div css={styles.container}>
      <div css={styles.imageOuter}>
        <div css={styles.imageBox}>
          <Image
            src="/images/main_visual.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            priority={true}
          />
          <div css={styles.imageCover}></div>
        </div>
      </div>
      <div css={styles.body}>
        <h2 css={styles.title}>Building rovers since 2017.</h2>
        <p css={styles.paragraph}>
          We are a team of students passionate about designing and building the
          next generation of Mars and Lunar rovers.
        </p>
        <p css={styles.subParagraph}>
          We work towards the world&apos;s most prestigious university robotics
          competitions, as vehicles to develop new skills, innovate and promote
          STEM-based courses and careers.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: css`
    position: relative;
    display: flex;
    min-height: 100vh;
  `,
  imageOuter: css`
    padding-top: 80px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 80px);
    display: flex;
    justify-content: right;
    margin-top: 80px;
  `,
  imageBox: css`
    position: relative;
    width: 960px;
    overflow: hidden;
    margin-bottom: 80px;
    @media (max-width: 1170px) {
      width: 100%;
    }
  `,
  imageCover: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  `,
  body: css`
    z-index: 1;
    width: 100%;
    padding: 80px 10% 40px;
    @media (max-width: 1170px) {
      padding: 40px 5% 40px;
      font-size: 12px;
    }
  `,
  title: css`
    font-size: 4em;
    margin-top: 180px;
    margin-bottom: 120px;
    letter-spacing: 2px;
    @media (max-width: 1170px) {
      margin-top: 80px;
      margin-bottom: 64px;
    }
  `,
  paragraph: css`
    font-size: 2.5em;
    width: 60%;
    margin-bottom: 40px;
    line-height: 1.5;
    letter-spacing: 2px;
  `,
  subParagraph: css`
    font-size: 1.5em;
    line-height: 1.5;
    letter-spacing: 1.5px;
    width: 840px;
  `,
};

export default MainVisual;
