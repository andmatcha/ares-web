import { NextPage } from "next";
import React, { ReactNode } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";

type Props = {
  children?: ReactNode;
  options?: IntersectionOptions;
  className?: string;
  as?: React.ElementType;
};

const FadeIn: NextPage<Props> = ({
  children,
  options,
  className,
  as: CustomTag = "div",
}) => {
  const { ref, inView } = useInView({
    rootMargin: "-10% 0%",
    triggerOnce: true,
    ...options,
  });
  return (
    <CustomTag
      ref={ref}
      className={`${inView ? "animate-fade-in" : "opacity-0"} ${className}`}
    >
      {children}
    </CustomTag>
  );
};

export default FadeIn;
