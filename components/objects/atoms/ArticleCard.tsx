import { NextPage } from "next";
import React from "react";

import { ArticleOverview } from "../../../types/article";

type Props = {
  articleOverview: ArticleOverview;
};

const ArticleCard: NextPage<Props> = ({
  articleOverview: { date, title, thumbnail, description },
}) => {
  const trimDescription = (description: string) => {
    if (description.length > 100) {
      return description.slice(0, 200) + "...";
    }
    return description;
  };
  return (
    <div className="w-full md:h-56 flex flex-col md:flex-row gap-2 md:gap-8 px-[10%] md:px-8 py-8 hover:bg-[#1f1f1f] duration-500">
      <div className="w-full md:w-1/4">
        <img src={thumbnail} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="w-full md:w-3/4 flex flex-col">
        <h3 className="text-2xl tracking-wider">{title}</h3>
        <p className="text-gray-500 tracking-wider">{date}</p>
        <p className="tracking-wider line-clamp-3">{trimDescription(description)}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
