"use client";

import SponsorArea from "@/components/objects/molecules/SponsorArea";

import { usePathname } from "@/i18n/routing";

const Footer: { (props: { withSponsor?: boolean }): JSX.Element } = ({
  withSponsor = false,
}) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <footer className="w-full">
      <div>
        {(withSponsor || pathname === "/") && (
          <SponsorArea />
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
