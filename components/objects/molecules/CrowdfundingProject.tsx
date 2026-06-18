"use client";

import { useInView } from "react-intersection-observer";

import ExternalLink from "@/components/objects/atoms/ExternalLink";
import CrowdFundingBackersList from "@/components/objects/molecules/CrowdfundingBackersList";
import CrowdfundingCounter from "@/components/objects/molecules/CrowdfundingCounter";

type Props = {
  title: string;
  imagePath: string;
  projectUrl: string;
  projectLabel: string;
  locale: string;
  backersCount: number;
  raisedAmount: number;
  backers: string[];
  backerImages?: string[];
};

const CrowdfundingProject = ({
  title,
  imagePath,
  projectUrl,
  projectLabel,
  locale,
  backersCount,
  raisedAmount,
  backers,
  backerImages,
}: Props) => {
  const { ref, inView } = useInView({
    rootMargin: "-10% 0%",
    triggerOnce: true,
  });

  return (
    <div className="w-full flex flex-col items-center px-4 py-4" ref={ref}>
      <h3 className="w-full text-xl md:text-2xl py-2 lg:w-4/5">{title}</h3>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-4">
        <div className="w-2/3 md:w-2/5 lg:w-1/5">
          <img src={imagePath} alt="" className="w-full object-contain" />
          <ExternalLink href={projectUrl}>{projectLabel}</ExternalLink>
        </div>
        <div className="w-full md:w-3/5 lg:w-3/5">
          <CrowdfundingCounter
            locale={locale}
            inView={inView}
            backers={backersCount}
            raised={raisedAmount}
          />
          <CrowdFundingBackersList backers={backers} />
          {backerImages && (
            <div className="flex gap-4 py-2 flex-wrap justify-center">
              {backerImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="w-48 h-24 object-contain"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CrowdfundingProject;
