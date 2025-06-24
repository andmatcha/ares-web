import { NextPage } from "next";
import Link from "next/link";
import React from "react";

import { RANK, sponsors } from "../../../const/sponsors";
import { Sponsor } from "../../../types";

const SponsorArea: NextPage = () => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sponsor: Sponsor
  ) => {
    event.preventDefault();
    if (sponsor.url !== "") {
      window.open(sponsor.url, "_blank");
    }
  };

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
          return "w-64 md:w-96 h-32 md:h-40";
      }
    };
    return (
      <div className="py-10 bg-black">
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-12 px-8">
          {sponsorList.map((sponsor, index) => (
            <Link
              role="button"
              onClick={(event) => handleClick(event, sponsor)}
              key={index}
              href={sponsor.url}
              className={`${sizeClass()} flex items-center ${
                sponsor.bgWhite && "bg-white"
              }`}
            >
              <img
                src={sponsor.imagePath}
                alt={sponsor.name}
                className="w-full h-full object-contain"
              />
            </Link>
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
        sponsors.filter((sponsor) => sponsor.rank === RANK.SILVER),
        "small"
      )}
      {sponsorArea(
        sponsors.filter((sponsor) => sponsor.rank === RANK.OTHER),
        "small"
      )}
    </>
  );
};

export default SponsorArea;
