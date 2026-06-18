"use client";
import Link from "next/link";
import { MouseEvent } from "react";

import { RANK, sponsors } from "@/const/sponsors";
import { Sponsor } from "@/types/index";

type SponsorSize = "small" | "medium" | "large";

const sponsorSizeClassNames: Record<SponsorSize, string> = {
  small: "w-28 md:w-44 h-14 md:h-20",
  medium: "w-48 md:w-64 h-24 md:h-32",
  large: "w-64 md:w-96 h-32 md:h-40",
};

const sponsorGroups: { rank: number; size: SponsorSize }[] = [
  { rank: RANK.DIAMOND, size: "large" },
  { rank: RANK.GOLD, size: "medium" },
  { rank: RANK.SILVER, size: "small" },
  { rank: RANK.OTHER, size: "small" },
];

const handleSponsorClick = (
  event: MouseEvent<HTMLAnchorElement>,
  sponsor: Sponsor
) => {
  event.preventDefault();
  if (sponsor.url !== "") {
    window.open(sponsor.url, "_blank");
  }
};

const SponsorLink = ({
  sponsor,
  size,
}: {
  sponsor: Sponsor;
  size: SponsorSize;
}) => {
  const sponsorLinkClassName = `${sponsorSizeClassNames[size]} flex flex-col items-center${
    sponsor.bgWhite ? " bg-white" : ""
  }`;

  return (
    <Link
      role="button"
      onClick={(event) => handleSponsorClick(event, sponsor)}
      href={sponsor.url}
      className={sponsorLinkClassName}
    >
      {sponsor.label && (
        <span className="text-gray-700 mt-2 lg:mt-0">
          ― {sponsor.label} ―
        </span>
      )}
      <img
        src={sponsor.imagePath}
        alt={sponsor.name}
        className="w-full h-full object-contain"
      />
    </Link>
  );
};

const SponsorGroup = ({ rank, size }: { rank: number; size: SponsorSize }) => {
  const sponsorList = sponsors.filter((sponsor) => sponsor.rank === rank);

  return (
    <div className="py-10 bg-white">
      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-12 px-8">
        {sponsorList.map((sponsor) => (
          <SponsorLink key={sponsor.name} sponsor={sponsor} size={size} />
        ))}
      </div>
    </div>
  );
};

const SponsorArea = () => {
  return (
    <>
      {sponsorGroups.map((group) => (
        <SponsorGroup key={group.rank} {...group} />
      ))}
    </>
  );
};

export default SponsorArea;
