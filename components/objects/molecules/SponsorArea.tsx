import { NextPage } from "next";

import sponsors from "../../../const/sponsors";

const SponsorArea: NextPage = () => {
  return (
    <div className="px-8 py-10 bg-black">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-8">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="w-full max-w-xs flex items-center"
          >
            <img src={sponsor.imagePath} alt={sponsor.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorArea;
