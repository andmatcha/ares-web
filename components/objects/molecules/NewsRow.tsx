import { Dayjs } from "dayjs";
import { NextPage } from "next";

const NewsRow: NextPage<{ date: Dayjs; tag: string; title: string }> = ({
  date,
  tag,
  title,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center max-w-8xl w-[80%] md:px-8 py-4 gap-2 md:gap-8 text-sm border-b border-gray-700">
      <div className="flex flex-row items-center gap-4">
        <p className="text-ares-red tracking-wider text-xs">
          {date.format("YYYY/MM/DD")}
        </p>
        <p className="border border-white rounded-3xl px-3 py-1 tracking-wider text-xs">
          {tag}
        </p>
      </div>
      <h4 className="text-white tracking-wider">{title}</h4>
    </div>
  );
};

export default NewsRow;
