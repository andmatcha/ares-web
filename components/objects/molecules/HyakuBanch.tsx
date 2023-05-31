import { NextPage } from "next";

import URL from "../../../const/url";

const HyakuBanch: NextPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 bg-black px-8 py-10">
      <a href={URL.hyaku_banch} target="blank">
        <img
          src="/images/brand_marks/100banch.png"
          alt="100BANCH"
          className="hidden md:block w-64"
        />
        <img
          src="/images/brand_marks/100banch_wide.png"
          alt="100BANCH"
          className="block md:hidden w-64"
        />
      </a>
      <p className="font-sans">
        GARAGE Program第70期プロジェクト
        <br />
        <a
          href={URL.hyaku_banch_project}
          target="blank"
          className="w-full text-left text-xs text-ares-red"
        >
          100BANCH プロジェクトページ
        </a>
      </p>
    </div>
  );
};

export default HyakuBanch;
