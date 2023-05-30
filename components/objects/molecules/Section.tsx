import { NextPage } from "next";
import { ReactNode } from "react";

const Section: NextPage<{ title?: string; id: string; children?: ReactNode, className?: string }> = ({ title, id, children, className }) => {
  return (
    <section id={id} className="py-10 md:py-20 px-2 md:px-[10%] flex flex-col items-center gap-10 text-lg">
      {title && <h3 className="text-3xl md:text-4xl mt-10 tracking-wider">{title}</h3>}
      <div className={`w-full ${className}`}>{children}</div>
    </section>
  );
};

export default Section;
