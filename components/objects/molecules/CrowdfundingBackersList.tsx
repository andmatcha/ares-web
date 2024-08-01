import { NextPage } from "next";

const CrowdFundingBackersList: NextPage<{ backers: string[] }> = ({
  backers,
}) => {
  return (
    <ul className="flex flex-wrap text-sm pb-2 gap-y-1 justify-center md:justify-start">
      {backers.map((backer, i) => (
        <li key={i}>
          <div className="inline-block">{backer} 様</div>
          {i + 1 < backers.length ? (
            <span className="px-1 text-gray-600">/</span>
          ) : undefined}
        </li>
      ))}
      <span className="pl-1 text-sm">他</span>
    </ul>
  );
};

export default CrowdFundingBackersList;
