import { NextPage } from "next";
import React, { ReactNode } from "react";

const Paragraph: NextPage<{ children?: ReactNode, className?: string }> = ({ children, className }) => {
  return <div className={`tracking-widest text-sm md:text-base leading-6 md:leading-8 ${className}`}>{children}</div>;
};

export default Paragraph;
