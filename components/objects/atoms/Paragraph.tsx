import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  size?: "small";
};

const Paragraph: NextPage<Props> = ({ children, className, size }) => {
  return (
    <div
      className={`tracking-widest ${
        size === "small"
          ? "text-xs md:text-sm leading-5 md:leading-6"
          : "text-sm md:text-base leading-6 md:leading-7"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Paragraph;
