import Link from "next/link";

import contents from "../../../const/header";

const Header = () => {
  return (
    <header className="fixed w-screen h-20 flex items-center px-12 justify-center md:justify-between z-20">
      <Link href="/">
        <h1 className="text-lg h-16 flex gap-2 items-center cursor-pointer">
          <img
            src="/images/ares_logo_white.png"
            alt="ARES"
            className="h-3/4 md:h-full object-contain"
          />
        </h1>
      </Link>
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
    </header>
  );
};

export default Header;
