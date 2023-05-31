import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};

const Paragraph: NextPage<Props> = ({ children, className }) => {
  return (
    <div
      className={`tracking-widest text-xs md:text-sm leading-5 md:leading-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default Paragraph;
