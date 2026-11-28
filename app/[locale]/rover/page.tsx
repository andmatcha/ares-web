"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import Hero from "@/components/objects/atoms/Hero";
import Paragraph from "@/components/objects/atoms/Paragraph";
import { rovers, upcomingRover } from "@/const/rover";

const roverOptions = [...rovers, upcomingRover];

export default function RoverPage() {
  const locale = useLocale() === "ja" ? "ja" : "en";
  const t = useTranslations("rover");
  const [selectedRoverIndex, setSelectedRoverIndex] = useState(
    rovers.length - 1
  );
  const selectedRover = roverOptions[selectedRoverIndex];
  const isPublished = selectedRover.imagePath !== null;

  return (
    <>
      <Hero title="Our Rovers" imagePath="/images/rovers/ares4_wide.jpg" />
      <div className="px-4 xl:px-[5%]">
        <ul className="flex flex-wrap gap-4 py-8">
          {roverOptions.map(({ name, imagePath }, index) => (
            <li key={name}>
              <button
                type="button"
                aria-pressed={index === selectedRoverIndex}
                onClick={() => setSelectedRoverIndex(index)}
                className="flex flex-col items-center gap-2 opacity-60 aria-pressed:opacity-100"
              >
                <span
                  aria-hidden="true"
                  className="flex items-center justify-center rounded-full overflow-hidden w-16 md:w-24 h-16 md:h-24 border-2"
                >
                  {imagePath ? (
                    <img
                      src={imagePath}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl font-medium text-ares-red">X</span>
                  )}
                </span>
                <span className="text-xs lg:text-sm">{name}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="flex flex-col xl:flex-row justify-center items-center gap-5 py-4">
          {isPublished ? (
            <>
              <div className="w-4/5 xl:w-2/5 rounded-md overflow-hidden">
                <img
                  src={selectedRover.imagePath}
                  alt={selectedRover.name}
                  className="w-full object-contain"
                />
              </div>
              <div className="lg:py-4 flex flex-col gap-4 w-full xl:w-2/5">
                <h2 className="text-3xl font-medium">{selectedRover.name}</h2>
                <Paragraph>{selectedRover.description[locale]}</Paragraph>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-4 py-12">
              <h2 className="text-3xl font-medium">
                ARES <span className="text-ares-red">X</span>
              </h2>
              <Paragraph>{t("comingSoon")}</Paragraph>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
