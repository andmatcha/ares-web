import Paragraph from "@/components/objects/atoms/Paragraph";
import { THUMBNAIL_BASE_URL } from "@/const/articles";
import { ArticleOverview } from "@/types/article";

type Props = {
  articleOverview: ArticleOverview;
};

const DESCRIPTION_LIMIT = 100;

const trimDescription = (description: string) => {
  if (description.length > DESCRIPTION_LIMIT) {
    return `${description.slice(0, DESCRIPTION_LIMIT)}...`;
  }
  return description;
};

const ArticleCard = ({
  articleOverview: { date, title, thumbnail, description },
}: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 px-4 lg:px-10 py-2 md:py-4 hover:bg-gray-100 duration-500">
      <div className="flex justify-center w-2/3 md:w-1/6">
        <img
          src={THUMBNAIL_BASE_URL + thumbnail}
          alt=""
          className="w-auto h-full object-contain"
        />
      </div>
      <div className="w-full md:w-5/6 flex flex-col gap-2">
        <div>
          <p className="pb-1 text-gray-500 tracking-wider text-xs md:text-sm">
            {date}
          </p>
          <h3 className="text-sm md:text-lg tracking-wider">{title}</h3>
        </div>
        <Paragraph size="small">{trimDescription(description)}</Paragraph>
      </div>
    </div>
  );
};

export default ArticleCard;
