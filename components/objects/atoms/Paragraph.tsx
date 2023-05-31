import { NextPage } from "next";
import React, { ReactNode } from "react";

const Paragraph: NextPage<{ children?: ReactNode, className?: string }> = ({ children, className }) => {
  return <div className={`tracking-widest text-xs md:text-sm leading-5 md:leading-6 ${className}`}>{children}</div>;
};

export default Paragraph;
