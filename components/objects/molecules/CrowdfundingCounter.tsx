"use client";

import CountUp from "@/components/objects/atoms/CountUp";

const CrowdfundingCounter = ({
  locale,
  inView,
  backers,
  raised,
}: {
  locale: string;
  inView: boolean;
  backers: number;
  raised: number;
}) => {
  return (
    <div className="flex justify-center md:justify-start items-center gap-8 pb-4">
      <div className="flex flex-col justify-center items-center gap-2 px-4 min-w-fit">
        {locale === "ja" && <h4 className="text-sm">支援者数</h4>}
        <p className="w-16 md:w-20 text-center text-4xl md:text-5xl font-display">
          <CountUp active={inView} to={backers} time={1000} />
        </p>
        {locale === "en" && <h4 className="text-sm font-display">backers</h4>}
      </div>
      <div className="flex flex-col justify-center items-center gap-2 px-4 min-w-fit">
        {locale === "ja" && <h4 className="text-sm">支援総額</h4>}
        <p className="w-56 md:w-72 text-4xl md:text-5xl font-display">
          ¥
          <CountUp
            active={inView}
            from={raised - 500}
            to={raised}
            time={1500}
          />
        </p>
        {locale === "en" && <h4 className="text-sm font-display">raised</h4>}
      </div>
    </div>
  );
};

export default CrowdfundingCounter;
