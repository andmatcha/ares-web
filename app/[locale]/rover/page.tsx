"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { useState } from "react";

import Hero from "@/components/objects/atoms/Hero";
import Paragraph from "@/components/objects/atoms/Paragraph";
import AresXShowcase from "@/components/rover/AresXShowcase";
import { rovers } from "@/const/rover";

export default function RoverPage() {
  const locale = useLocale() === "ja" ? "ja" : "en";
  const [selectedRoverIndex, setSelectedRoverIndex] = useState(rovers.length - 1);
  const selectedRover = rovers[selectedRoverIndex];

  return (
    <>
      <Hero title="Our Rovers" imagePath="/images/rovers/ares4_wide.jpg" />
      <div className="px-4 xl:px-[5%]">
        <ul className="flex flex-wrap gap-4 py-8">
          {rovers.map(({ name, imagePath }, index) => (
            <li key={name}>
              <button
                aria-pressed={index === selectedRoverIndex}
                className="flex cursor-pointer flex-col items-center gap-2 rounded-sm opacity-60 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 aria-pressed:opacity-100"
                onClick={() => setSelectedRoverIndex(index)}
                type="button"
              >
                <span className="relative h-16 w-16 overflow-hidden rounded-full border-2 md:h-24 md:w-24">
                  <Image
                    fill
                    src={imagePath}
                    alt=""
                    sizes="(min-width: 768px) 96px, 64px"
                    className="object-cover"
                  />
                </span>
                <span className="text-xs lg:text-sm">{name}</span>
              </button>
            </li>
          ))}
        </ul>
        {selectedRover.name === "ARES X" ? (
          <AresXShowcase
            description={selectedRover.description[locale]}
          />
        ) : (
          <div className="flex flex-col xl:flex-row justify-center items-center gap-5 py-4">
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
          </div>
        )}
      </div>
    </>
  );
}
