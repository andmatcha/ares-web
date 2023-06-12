import Link from "next/link";
import React, { useState } from "react";

import contents from "../../const/header";

const Hamburger = () => {

  return (
    <ul className="md:hidden flex flex-col items-center gap-10 text-m font-display pt-10">
      {contents.menu.map((menuItem, index) => (
        <li
          key={index}
          className="cursor-pointer hover:text-red-600 duration-300 md:text-black"
        >
          <Link href={menuItem.path}>{menuItem.label}</Link>
        </li>
      ))}
    </ul>
  );};


export default Hamburger;