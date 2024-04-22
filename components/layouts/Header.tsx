import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import Drawer from "./Drawer";
import contents from "../../const/header";
import { LocaleSwitcher } from "../objects/atoms/LocaleSwitcher";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };
  const router = useRouter();

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
      <div className="flex items-center gap-2 absolute right-10 md:hidden z-20">
        <LocaleSwitcher href={router.asPath} locale={router.locale ?? ""} />
        <button onClick={handleMenuOpen} type="button" className="">
          <img
            src={
              openMenu
                ? "/images/icons/hamburger_menu_close.svg"
                : "/images/icons/hamburger_menu_icon.svg"
            }
            alt=""
          />
        </button>
      </div>
      {/* メニュー SP表示 */}
      <Drawer open={openMenu} />
      <div className="hidden md:flex items-center gap-16">
        <LocaleSwitcher href={router.asPath} locale={router.locale ?? ""} />
        {/* メニュー PC表示 */}
        <nav className="flex ease-linear duration-300">
          <ul className="flex items-center gap-10 text-xs font-display">
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
      </div>
    </header>
  );
};

export default Header;
