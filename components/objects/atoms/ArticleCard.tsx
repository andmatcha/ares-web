import { NextPage } from "next";

import Paragraph from "./Paragraph";
import { THUMBNAIL_BASE_URL } from "../../../const/articles";
import { ArticleOverview } from "../../../types/article";

type Props = {
  articleOverview: ArticleOverview;
};

const ArticleCard: NextPage<Props> = ({
  articleOverview: { date, title, thumbnail, description },
}) => {
  const trimDescription = (description: string) => {
    const TEXT_LIMIT = 200;
    if (description.length > TEXT_LIMIT) {
      return description.slice(0, TEXT_LIMIT) + "...";
    }
    return description;
  };
  return (
    <div className="md:h-48 flex flex-col md:flex-row gap-4 md:gap-10 px-4 lg:px-10 py-8 hover:bg-[#1f1f1f] duration-500">
      <div className="flex justify-center">
        <img
          src={THUMBNAIL_BASE_URL + thumbnail}
          alt=""
          className="w-2/3 md:w-auto h-full object-contain"
        />
      </div>
      <div className="w-full md:w-3/4 flex flex-col">
        <h3 className="md:text-lg tracking-wider pb-1">{title}</h3>
        <p className="pb-2 text-gray-500 tracking-wider text-xs md:text-sm">
          {date}
        </p>
        <Paragraph size="small">{trimDescription(description)}</Paragraph>
      </div>
    </div>
  );
};

export default ArticleCard;
