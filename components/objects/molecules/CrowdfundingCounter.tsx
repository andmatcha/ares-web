import { NextPage } from "next";

import CountUp from "../atoms/CountUp";

const CrowdfundingCounter: NextPage<{
  locale: string;
  inView: boolean;
  backers: number;
  raised: number;
}> = ({ locale, inView, backers, raised }) => {
  const splitNumber = (number: number) => {
    const str = number.toString();
    const len = str.length;
    const first = len % 3;
    const firstPart = str.slice(0, first);
    const restPart = str.slice(first);
    const split = [];
    for (let i = 0; i < restPart.length; i += 3) {
      split.push(restPart.slice(i, i + 3));
    }
    return [firstPart, ...split];
  };

  const splitRaised = splitNumber(raised);

  return (
    <div className="flex justify-center md:justify-start items-center">
      <div className="flex flex-col justify-center items-center gap-2 p-4 min-w-fit">
        {locale === "ja" && <h4 className="text-sm">支援者数</h4>}
        <p className="w-16 md:w-20 text-center text-4xl md:text-5xl font-display">
          <CountUp active={inView} to={backers} time={1000} />
        </p>
        {locale === "en" && <h4 className="text-sm font-display">backers</h4>}
      </div>
      <div className="flex flex-col justify-center items-center gap-2 p-4 min-w-fit">
        {locale === "ja" && <h4 className="text-sm">支援総額</h4>}
        <p className="w-56 md:w-64 text-4xl md:text-5xl font-display">
          ¥
          <CountUp active={inView} from={190} to={230} time={1000} />
          ,
          <CountUp active={inView} from={450} to={500} time={1500} />
        </p>
        {locale === "en" && <h4 className="text-sm font-display">raised</h4>}
      </div>
    </div>
  );
};

export default CrowdfundingCounter;
