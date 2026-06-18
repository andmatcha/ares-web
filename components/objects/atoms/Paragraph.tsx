"use client";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  size?: "small";
};

const Paragraph = ({ children, className, size }: Props) => {
  const paragraphClassName = `tracking-widest ${
    size === "small"
      ? "text-xs md:text-sm leading-5 md:leading-6"
      : "text-sm md:text-base leading-6 md:leading-7"
  }${className ? ` ${className}` : ""}`;

  return (
    <div className={paragraphClassName}>{children}</div>
  );
};

export default Paragraph;
