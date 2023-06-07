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
    const TEXT_LIMIT = 100;
    if (description.length > TEXT_LIMIT) {
      return description.slice(0, TEXT_LIMIT) + "...";
    }
    return description;
  };
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 px-4 lg:px-10 py-2 md:py-4 hover:bg-[#1f1f1f] duration-500">
      <div className="hidden md:flex md:justify-center w-1/6">
        <img
          src={THUMBNAIL_BASE_URL + thumbnail}
          alt=""
          className="w-auto h-full object-contain"
        />
      </div>
      <div className="w-full md:w-5/6 flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <div className="md:hidden w-1/5">
            <img
              src={THUMBNAIL_BASE_URL + thumbnail}
              alt=""
              className="w-full object-contain"
            />
          </div>
          <div className="w-4/5">
            <p className="pb-2 text-gray-500 tracking-wider text-xs md:text-sm">
              {date}
            </p>
            <h3 className="text-sm md:text-lg tracking-wider pb-1">{title}</h3>
          </div>
        </div>
        <Paragraph size="small">{trimDescription(description)}</Paragraph>
      </div>
    </div>
  );
};

export default ArticleCard;
