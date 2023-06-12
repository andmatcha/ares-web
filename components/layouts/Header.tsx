import Link from "next/link";
import React, { useState } from "react";

import Hamburger from "./Hamburger";
import contents from "../../const/header";

// type Props = {
//   open: boolean;
//   onClick: MouseEventHandler;
// };

// export const HamburgerMenu = ({ open, onClick }: Props) => {

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="fixed w-screen h-20 flex items-center justify-center px-12 md:justify-between z-20 relative">
      <div className="absolute"></div>
      <Link href="/">
        <h1 className="text-lg h-16 flex gap-2 items-center cursor-pointer ">
          <div className="h-20 flex items-center">
            <img
              src="/images/ares_logo_white.png"
              alt="ARES"
              className="h-3/4 md:h-full object-contain"
            />
          </div>
          <button
            onClick={handleMenuOpen}
            type="button"
            className="absolute right-10 "
          >
            <img
              src="/images/icons/hamburger_menu_icon.svg"
              alt=""
              className="md:hidden"
            />
          </button>
        </h1>
      </Link>
      <nav
        className={
          openMenu
            ? "md:hidden fixed bg-slate-50 top-0 w-full h-screen flex flex-col pt-8 text-black  ease-linear duration-300"
            : "hidden md:flex ease-linear duration-300"
        }
      >
        <Hamburger />
        <button
          onClick={handleMenuOpen}
          type="button"
          className="absolute right-10"
        >
          <img
            src="/images/icons/hamburger_menu_close.svg"
            alt=""
            className="md:hidden"
          />
        </button>
        <ul className="hidden md:flex items-center gap-10 text-xs font-display">
          {contents.menu.map((menuItem, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-red-600 duration-300"
            >
              <Link href={menuItem.path}>{menuItem.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
