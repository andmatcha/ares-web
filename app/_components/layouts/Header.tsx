import Link from "next/link";
import React, { useState } from "react";

import Drawer from "./Drawer";
import contents from "../../_common/constants/header";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="fixed w-screen h-16 flex items-center justify-center px-12 md:justify-between z-20">
      {/* ロゴ部分 */}
      <Link href="/">
        <h1 className="text-lg h-16 flex gap-2 items-center cursor-pointer ">
          <div className="h-16 flex items-center">
            <img
              src="/images/ares_logo_white.png"
              alt="ARES"
              className="h-3/4 md:h-full object-contain"
            />
          </div>
        </h1>
      </Link>
      {/* メニュー表示切り替えボタン */}
      <button
        onClick={handleMenuOpen}
        type="button"
        className="absolute right-10 md:hidden z-20"
      >
        <img
          src={
            openMenu
              ? "/images/icons/hamburger_menu_close.svg"
              : "/images/icons/hamburger_menu_icon.svg"
          }
          alt=""
        />
      </button>
      {/* メニュー SP表示 */}
      <Drawer open={openMenu} />
      {/* メニュー PC表示 */}
      <nav className="flex ease-linear duration-300">
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
