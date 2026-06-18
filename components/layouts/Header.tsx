"use client";
import { useLocale } from "next-intl";
import React, { useState } from "react";

import Drawer from "@/components/layouts/Drawer";
import HeaderMenu from "@/components/layouts/HeaderMenu";
import { LocaleSwitcher } from "@/components/objects/atoms/LocaleSwitcher";
import { Link, usePathname } from "@/i18n/routing";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <header className="fixed w-screen h-16 flex items-center justify-center px-12 md:justify-between z-20 bg-white/90 sm:bg-transparent hover:bg-white/95 duration-300">
      {/* ロゴ部分 */}
      <Link href="/">
        <h1 className="text-lg h-16 flex gap-2 items-center cursor-pointer">
          <div className="h-16 flex items-center">
            <img
              src="/images/ares_logo_black.png"
              alt="ARES"
              className="h-3/4 md:h-full object-contain z-20"
            />
          </div>
        </h1>
      </Link>
      {/* メニュー表示切り替えボタン */}
      <div className="flex items-center gap-2 absolute right-4 md:hidden z-20">
        <LocaleSwitcher href={pathname ?? "/"} locale={locale ?? "en"} />
        <button onClick={handleMenuOpen} type="button">
          <img
            src={
              openMenu
                ? "/images/icons/hamburger_menu_close.svg"
                : "/images/icons/hamburger_menu_icon.svg"
            }
            alt=""
            className="invert"
          />
        </button>
      </div>
      {/* メニュー SP表示 */}
      <Drawer open={openMenu} />
      <div className="hidden md:flex items-center gap-16">
        <LocaleSwitcher href={pathname ?? "/"} locale={locale ?? "en"} />
        {/* メニュー PC表示 */}
        <nav className="flex ease-linear duration-300">
          <HeaderMenu
            className="flex items-center gap-10 text-xs font-display"
            itemClassName="cursor-pointer hover:text-red-600 duration-300"
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
