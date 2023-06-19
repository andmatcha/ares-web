import { NextPage } from "next";
import { useMemo, useState } from "react";

import Layout from "../components/layouts/Layout";
import Paragraph from "../components/objects/atoms/Paragraph";
import { rovers } from "../const/rover";

const Team: NextPage = () => {
  const [selectedRoverIndex, setSelectedRoverIndex] = useState(0);

  const onClickRover = (index: number) => {
    setSelectedRoverIndex(index);
  };

  const selectedRover = useMemo(() => {
    return rovers[selectedRoverIndex];
  }, [selectedRoverIndex]);
  return (
    <Layout allowTopSpace title="Our Rover">
      <div className="px-4 lg:px-20">
        <div>
          <h1 className="border-b text-3xl lg:text-5xl pb-4">Our Rovers</h1>
        </div>
        {/* ローバー選択エリア */}
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
        {/* ローバー詳細エリア */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 py-4">
          <div className="w-2/3 lg:w-2/5">
            <img
              src={selectedRover.imagePath}
              alt={selectedRover.name}
              className="w-full object-contain"
            />
          </div>
          <div className="lg:py-4 flex flex-col gap-4 lg:w-3/5">
            <h2 className="text-3xl font-medium">{selectedRover.name}</h2>
            <Paragraph>{selectedRover.description}</Paragraph>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
