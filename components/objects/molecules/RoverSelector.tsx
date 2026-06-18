"use client";

import { Rover } from "@/types/index";

type Props = {
  rovers: Rover[];
  selectedIndex: number;
  onSelect: (index: number) => void;
};

const RoverSelector = ({ rovers, selectedIndex, onSelect }: Props) => {
  return (
    <div>
      <ul className="flex flex-wrap gap-4 py-8">
        {rovers.map(({ name, imagePath }, index) => (
          <li
            key={index}
            onClick={() => onSelect(index)}
            className={`flex flex-col gap-2 justify-center items-center ${
              index !== selectedIndex ? "opacity-60" : ""
            }`}
          >
            <div className="rounded-full overflow-hidden w-16 md:w-24 h-16 md:h-24 border-2">
              <img src={imagePath} alt="" className="w-full h-full object-cover" />
            </div>
            <p className="text-xs lg:text-sm">{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoverSelector;
