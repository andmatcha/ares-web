import { NextPage } from "next";

import sponsors from "../../../const/sponsors";

const SponsorArea: NextPage = () => {
  return (
    <div className="py-10 bg-black">
      <div className="flex flex-wrap justify-center items-center gap-12 px-8">
        {sponsors.map(({ name, imagePath, url }, index) => (
          <a
            key={index}
            href={url}
            target="blank"
            className="w-32 md:w-48 h-20 md:h-24 flex items-center"
          >
            <img
              src={imagePath}
              alt={name}
              className="w-full h-full object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SponsorArea;
