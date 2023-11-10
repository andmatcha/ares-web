import { NextPage } from "next";
import { ReactNode } from "react";

import Paragraph from "./Paragraph";

type Props = {
  title: string;
  imagePath: string;
  children?: ReactNode;
};

const TeamCard: NextPage<Props> = ({ title, imagePath, children }) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center gap-4 bg-[#1f1f1f] p-6 rounded-md">
      <div className="md:w-3/4">
        <h4 className="text-xl lg:text-2xl pb-3 md:pb-6 font-medium">{title}</h4>
        <div className="w-12 h-1 bg-white mb-3 md:mb-6"></div>
        <Paragraph>{children}</Paragraph>
      </div>
      <div className="md:w-1/4 rounded-md overflow-hidden">
        <img src={imagePath} alt="" className="w-full object-contain" />
      </div>
    </div>
  );
};

export default TeamCard;
