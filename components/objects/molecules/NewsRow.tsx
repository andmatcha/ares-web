import { Dayjs } from "dayjs";
import { NextPage } from "next";

const NewsRow: NextPage<{ date: Dayjs; tag: string; title: string }> = ({
  date,
  tag,
  title,
}) => {
  return (
    <div className="flex items-center max-w-8xl w-[80%] px-8 py-4 gap-8 text-sm border-b border-gray-700">
      <p className="text-ares-red tracking-wider">{date.format("YYYY/MM/DD")}</p>
      <p className="border border-white rounded-3xl px-3 py-1 tracking-wider">{tag}</p>
      <h4 className="text-white tracking-wider">{title}</h4>
    </div>
  );
};

export default NewsRow;
