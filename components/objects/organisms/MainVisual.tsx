"use client";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const Slide = dynamic(() => import("@/components/objects/atoms/Slide"), {
  ssr: false,
});
import { mainImages } from "@/const/images";

const MainVisual = () => {
  const t = useTranslations();
  return (
    <div className="relative h-screen">
      <div className="h-16 md:h-0"></div>
      <Slide
        images={mainImages}
        settings={{
          autoplaySpeed: 3000,
          className: "absolute top-0 left-0 w-full h-full overflow-hidden",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bgmainbg75">
        <div className="w-full h-full flex flex-col justify-end gap-2 pl-2 md:pl-20 pb-[30vh] md:pb-20">
          <h2 className=" font-display text-4xl md:text-6xl animate-[emerge1_3s_ease-out] tracking-wider">
            A<span className="text-red-600">R</span>ES Project
          </h2>
          <p className="text-xl md:text-3xl animate-[emerge2_3s_ease-out]">
            {t("main-visual.slogan")}
          </p>
          <p className="mt-4 text-base md:text-xl max-w-xl leading-8 tracking-wider animate-[emerge2_4.5s_ease-out]">
            {t("main-visual.description")}
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
