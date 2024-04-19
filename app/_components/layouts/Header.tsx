"use client";

import Link from "next/link";
import React, { useState } from "react";

import AresLogo from "../../../public/images/ares_logo_white.png";
import Image from "next/image";
import HamburgerClose from "../../../public/images/icons/hamburger_menu_close.svg";
import HamburgerOpen from "../../../public/images/icons/hamburger_menu_icon.svg";
import headerContents from "../../_common/constants/header";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed w-screen h-16 flex items-center justify-center px-12 md:justify-between z-20">
        {/* ロゴ部分 */}
        <Link href="/" className="w-24 z-40">
          <Image src={AresLogo} alt="ARES" priority width={96} />
        </Link>
        {/* メニュー表示切り替えボタン */}
        <div className="absolute top-4 right-4 flex items-center gap-4">
          <div className="font-montserrat text-sm">JA / EN</div>
          <button onClick={handleMenu} type="button">
            <Image src={isOpen ? HamburgerClose : HamburgerOpen} alt="" />
          </button>
        </div>
        {/* ドロワーメニュー */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-16 right-8 ease-linear duration-300`}
        >
          <ul className="flex flex-col items-center gap-10 text-xs font-orbitron">
            {headerContents.menu.map((menuItem, index) => (
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
      <div className="h-16"></div>
    </>
  );
};

export default Header;
