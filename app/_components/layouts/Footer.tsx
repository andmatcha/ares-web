import { NextPage } from "next";

import HyakuBanch from "../objects/molecules/HyakuBanch";
import SponsorArea from "../objects/molecules/SponsorArea";

const Footer: NextPage = () => {
  return (
    <footer className="w-full">
      <div>
        <SponsorArea />
        <HyakuBanch />
      </div>
      <div className="w-full flex flex-col items-center bg-black">
        {/* <div className="w-20">
          <img
            src="/images/ares_logo_white.png"
            alt="ARES"
            className="w-full object-contain"
          />
        </div> */}
        <p className="w-full text-sm text-center py-2 text-gray-500 tracking-wider">
          &copy; 2022 ARES Project
        </p>
      </div>
    </footer>
  );
};

export default Footer;
