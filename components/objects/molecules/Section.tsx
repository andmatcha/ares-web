"use client";
import { ReactNode } from "react";

const Section = ({
  title,
  id,
  children,
  className,
}: {
  title?: string;
  id: string;
  children?: ReactNode;
  className?: string;
}) => {
  const contentClassName = className ? `w-full ${className}` : "w-full";

  return (
    <section
      id={id}
      className="py-5 md:py-16 px-4 md:px-[10%] flex flex-col items-center gap-5 md:gap-10 text-lg"
    >
      {title && (
        <h3 className="text-2xl md:text-3xl mt-10 tracking-wider font-medium">
          {title}
        </h3>
      )}
      <div className={contentClassName}>{children}</div>
    </section>
  );
};

export default Section;
