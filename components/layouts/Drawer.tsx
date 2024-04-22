import { NextPage } from "next";
import Link from "next/link";

import contents from "../../const/header";

type Props = {
  open: boolean;
};

const Drawer: NextPage<Props> = ({ open }: Props) => {
  return (
    <nav className={`${open ? "block" : "hidden"} md:hidden fixed w-screen h-screen top-0 right-0`}>
      <div className="flex w-full h-full flex-col pt-16">
        <div className="absolute w-full h-full top-0 bg-black opacity-50"></div>
        <ul className="md:hidden flex flex-col items-center gap-10 text-m font-display pt-10 z-10">
          {contents.menu.map((menuItem, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-red-600 duration-300 md:text-black"
            >
              <Link href={menuItem.path}>{menuItem.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Drawer;
