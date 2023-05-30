import { NextPage } from "next";

import sponsors from "../../../const/sponsors";

const SponsorArea: NextPage = () => {
  return (
    <div className="py-10 bg-black">
      <div className="flex flex-wrap justify-center items-center gap-12 px-8">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="w-48 md:w-64 flex items-center"
          >
            <img src={sponsor.imagePath} alt={sponsor.name} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorArea;
