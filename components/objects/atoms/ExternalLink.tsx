"use client";
import { ReactNode } from "react";

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
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
