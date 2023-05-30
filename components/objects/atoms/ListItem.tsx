import { NextPage } from "next";
import React, { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
};

const ListItem: NextPage<Props> = ({ title, description }) => {
  return (
    <li className="w-full flex justify-between items-center px-4 sm:px-10 pb-4 border-b">
      <h4 className="text-sm tracking-wide">{title}</h4>
      <p className="text-sm tracking-wide">{description}</p>
    </li>
  );
};

export default ListItem;
