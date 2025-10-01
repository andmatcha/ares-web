"use client";
import { ReactNode } from "react";

import Paragraph from "./Paragraph";

type Props = {
  title: string;
  imagePath: string;
  children?: ReactNode;
};

const TeamCard = ({ title, imagePath, children }: Props) => {
  return (
    <div className="w-full flex flex-col justify-center gap-1 bg-[#1f1f1f] p-6 rounded-md">
      <h4 className="text-xl lg:text-2xl pb-3 md:pb-6 font-medium">{title}</h4>
      <div className="w-8 h-[1px] bg-white mb-3 md:mb-6"></div>
      <div className="flex justify-center flex-col-reverse md:flex-row gap-4">
        <div className="md:w-3/4">
          <Paragraph>{children}</Paragraph>
        </div>
        <div className="md:w-1/4 rounded-md overflow-hidden">
          <img src={imagePath} alt="" className="w-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
