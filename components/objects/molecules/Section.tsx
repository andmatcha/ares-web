import { NextPage } from "next";
import { ReactNode } from "react";

const Section: NextPage<{ title: string; children?: ReactNode }> = ({ title, children }) => {
  return (
    <section className="h-screen py-20 px-[10%] flex flex-col items-center gap-10 text-lg">
      <h3 className="text-4xl mt-10 tracking-wider">{title}</h3>
      <div className="w-full">{children}</div>
    </section>
  );
};

export default Section;
