import { NextPage } from "next";
import React, { ReactNode } from "react";

const Paragraph: NextPage<{ children?: ReactNode, className?: string }> = ({ children, className }) => {
  return <div className={`tracking-widest text-xs md:text-sm leading-6 md:leading-8 ${className}`}>{children}</div>;
};

export default Paragraph;
