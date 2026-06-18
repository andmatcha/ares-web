"use client";

import { useState } from "react";

import Hero from "@/components/objects/atoms/Hero";
import RoverDetails from "@/components/objects/molecules/RoverDetails";
import RoverSelector from "@/components/objects/molecules/RoverSelector";
import { rovers } from "@/const/rover";

export default function RoverPage() {
  const [selectedRoverIndex, setSelectedRoverIndex] = useState(
    rovers.length - 1
  );

  const onClickRover = (index: number) => {
    setSelectedRoverIndex(index);
  };

  const selectedRover = rovers[selectedRoverIndex];

  return (
    <>
      <Hero title="Our Rovers" imagePath="/images/rovers/ares4_wide.jpg" />
      <div className="px-4 xl:px-[5%]">
        <RoverSelector
          rovers={rovers}
          selectedIndex={selectedRoverIndex}
          onSelect={onClickRover}
        />
        <RoverDetails rover={selectedRover} />
      </div>
    </>
  );
}
