import type { NextPage } from "next";

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
        <div className="w-full h-full flex flex-col justify-end gap-2 md:gap-5 pl-2 md:pl-20 pb-[40vh] md:pb-20">
          <h2 className="text-4xl md:text-6xl">
            We are the A<span className="text-red-600">R</span>ES.
          </h2>
          <p className="text-xl md:text-3xl">世界に通用する火星ローバーを日本から</p>
          <p className="text-base md:text-xl max-w-xl leading-8 tracking-wider">
            私たちは世界有数のローバーのコンテストであるURC(University Rover
            Challenge)の日本勢初出場を目指して活動しています。
          </p>
        </div>
      </div>
      <div className="absolute bottom-20 right-20 animate-arrow-up-down">
        <svg
          className="w-20 h-20"
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
