import type { NextPage } from "next";

import { mainImages } from "../../../const/images";
import Slide from "../atoms/Slide";

const MainVisual: NextPage = () => {
  return (
    <div className="relative h-screen">
      <div className="h-20 md:h-0"></div>
      <Slide
        images={mainImages}
        settings={{
          className: "absolute top-0 left-0 w-full h-full overflow-hidden",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-main-bg/75">
        <div className="w-full h-full flex flex-col justify-end gap-2 pl-2 md:pl-20 pb-[30vh] md:pb-20">
          <h2 className=" font-display text-4xl md:text-6xl animate-[emerge1_3s_ease-out] tracking-wider">
            A<span className="text-red-600">R</span>ES Project
          </h2>
          <p className="text-xl md:text-3xl animate-[emerge2_3s_ease-out]">
            世界レベルの火星ローバーを日本から
          </p>
          <p className="mt-4 text-base md:text-xl max-w-xl leading-8 tracking-wider animate-[emerge2_4.5s_ease-out]">
            私たちは世界有数のローバーのコンテストであるURC(University Rover
            Challenge)の日本勢初出場を目指して活動しています。
          </p>
        </div>
      </div>
      <div className="absolute bottom-20 left-5 md:left-auto md:right-20 animate-[emerge3_5.5s_ease-out]">
        <svg
          className="w-20 h-20 animate-arrow-up-down"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default MainVisual;
