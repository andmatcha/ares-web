import { NextPage } from "next";
import React, { ReactNode } from "react";

const Paragraph: NextPage<{ children?: ReactNode, className?: string }> = ({ children, className }) => {
  return <div className={`tracking-widest text-base leading-8 ${className}`}>{children}</div>;
};

export default Paragraph;
