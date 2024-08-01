import { NextPage } from "next";
import { ReactNode } from "react";

const ExternalLink: NextPage<{ href: string; children: ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <a
      href={href}
      target="blank"
      className="w-full text-left text-xs text-ares-red hover:underline"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
