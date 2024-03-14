import { NextPage } from "next";

import Paragraph from "./Paragraph";
import { tags, THUMBNAIL_BASE_URL } from "../../../const/articles";
import { ArticleOverview } from "../../../types/article";

type Props = {
  articleOverview: ArticleOverview;
};

const ArticleCard: NextPage<Props> = ({
  articleOverview: { date, tags: tagIds, title, thumbnail, description },
}) => {
  const trimDescription = (description: string) => {
    const TEXT_LIMIT = 100;
    if (description.length > TEXT_LIMIT) {
      return description.slice(0, TEXT_LIMIT) + "...";
    }
    return description;
  };

  const getTagLabel = (tagId: number) => {
    return tags.find((tag) => tag.id === tagId)?.label;
  };
  return (
    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 px-4 lg:px-10 py-2 md:py-4 rounded-md hover:bg-[#1f1f1f] duration-500">
      <div className="flex justify-center md:h-32">
        <img
          src={THUMBNAIL_BASE_URL + thumbnail}
          alt=""
          className="w-auto h-full object-contain"
        />
      </div>
      <div className="flex flex-col gap-2 md:w-3/4">
        <div>
          <div className="flex items-center gap-4 pb-1">
            <div className="text-gray-500 tracking-wider text-xs md:text-sm">
              {date}
            </div>
            <div className="md:flex gap-2 hidden">
              {tagIds.map((tagId) => (
                <div key={tagId} className="border border-gray-500 py-1 px-2 text-xs text-gray-500 rounded-xl">
                  {getTagLabel(tagId)}
                </div>
              ))}
            </div>
          </div>
          <h3 className="text-sm md:text-lg tracking-wider">{title}</h3>
        </div>
        <Paragraph size="small">{trimDescription(description)}</Paragraph>
      </div>
    </div>
  );
};

export default ArticleCard;
