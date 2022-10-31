import type { NextPage } from "next";
import Image from "next/image";
import { css } from "@emotion/react";

const MainVisual: NextPage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full flex">
        <img
          src="/images/sample_rover1.jpg"
          alt=""
          className="w-full object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-main-bg/75">
        <div className="w-full h-full flex flex-col justify-end gap-5 pl-20 pb-20">
          <h2 className=" text-6xl">
            We are the A<span className="text-red-600">R</span>ES.
          </h2>
          <p className="text-3xl">世界に通用する火星ローバーを日本から</p>
          <p className="text-xl max-w-xl leading-8 tracking-wider">
            私たちは世界有数のローバーのコンテストであるURC(University Rover
            Challenge)の日本勢初出場を目指して活動しています。
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: css`
    position: relative;
    display: flex;
    min-height: 100vh;
    font-family: "Roboto";
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
