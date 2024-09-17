import { NextPage } from "next";

import HyakuBanch from "../objects/molecules/HyakuBanch";
import SponsorArea from "../objects/molecules/SponsorArea";

const Footer: NextPage<{ withSponsor?: boolean }> = ({ withSponsor = false }) => {
  return (
    <footer className="w-full">
      <div>
        {withSponsor && (
          <>
            <SponsorArea />
            {/* <HyakuBanch /> */}
          </>
        )}
      </div>
      <div className="w-full flex flex-col items-center bg-black">
        <p className="w-full text-sm text-center py-2 text-gray-500 tracking-wider">
          &copy; 2022 ARES Project
        </p>
      </div>
    </footer>
  );
};

export default Footer;
