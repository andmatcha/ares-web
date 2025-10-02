"use client";

import { useMemo, useState } from "react";

import Hero from "@/components/objects/atoms/Hero";
import Paragraph from "@/components/objects/atoms/Paragraph";
import { rovers } from "@/const/rover";

export default function RoverPage() {
  const [selectedRoverIndex, setSelectedRoverIndex] = useState(
    rovers.length - 1
  );

  const onClickRover = (index: number) => {
    setSelectedRoverIndex(index);
  };

  const selectedRover = useMemo(() => {
    return rovers[selectedRoverIndex];
  }, [selectedRoverIndex]);

  return (
    <>
      <Hero title="Our Rovers" imagePath="/images/rovers/ares4_wide.jpg" />
      <div className="px-4 xl:px-[5%]">
        <div>
          <ul className="flex flex-wrap gap-4 py-8">
            {rovers.map(({ name, imagePath }, index) => (
              <li
                key={index}
                onClick={() => onClickRover(index)}
                className={`flex flex-col gap-2 justify-center items-center ${
                  index !== selectedRoverIndex && "opacity-60"
                }`}
              >
                <div className="rounded-full overflow-hidden w-16 md:w-24 h-16 md:h-24 border-2">
                  <img
                    src={imagePath}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs lg:text-sm">{name}</p>
              </li>
            ))}
          </ul>
        </div>
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
            <Paragraph>{selectedRover.description.ja}</Paragraph>
          </div>
        </div>
      </div>
    </>
  );
}
