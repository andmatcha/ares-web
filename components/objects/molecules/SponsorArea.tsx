import { NextPage } from "next";
import React from "react";

import { RANK, sponsors } from "../../../const/sponsors";
import { Sponsor } from "../../../types";

const SponsorArea: NextPage = () => {
  const sponsorArea = (
    sponsorList: Sponsor[],
    size: "small" | "medium" | "large"
  ) => {
    const sizeClass = () => {
      switch (size) {
        case "small":
          return "w-28 md:w-44 h-14 md:h-20";
        case "medium":
          return "w-48 md:w-64 h-24 md:h-32";
        case "large":
          return "w-64 md:w-80 h-32 md:h-40";
      }
    };
    return (
      <div className="py-10 bg-black">
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-12 px-8">
          {sponsorList.map(({ name, imagePath, url, bgWhite }, index) => (
            <a
              key={index}
              href={url}
              target="blank"
              className={`${sizeClass()} flex items-center ${
                bgWhite && "bg-white"
              }`}
            >
              <img
                src={imagePath}
                alt={name}
                className="w-full h-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    );
  };
  return (
    <>
      {sponsorArea(
        sponsors.filter((sponsor) => sponsor.rank === RANK.DIAMOND),
        "large"
      )}
      {sponsorArea(
        sponsors.filter((sponsor) => sponsor.rank === RANK.GOLD),
        "medium"
      )}
      {sponsorArea(
        sponsors.filter((sponsor) => sponsor.rank === RANK.OTHER),
        "small"
      )}
    </>
  );
};

export default SponsorArea;
