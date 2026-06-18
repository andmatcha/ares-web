"use client";

import HeaderMenu from "@/components/layouts/HeaderMenu";

type Props = {
  open: boolean;
};

const Drawer = ({ open }: Props) => {
  return (
    <nav
      className={`${
        open ? "block" : "hidden"
      } md:hidden fixed w-screen h-screen top-0 right-0`}
    >
      <div className="flex w-full h-full flex-col pt-16">
        <div className="absolute w-full h-full top-0 bg-white opacity-95"></div>
        <HeaderMenu
          className="md:hidden flex flex-col items-center gap-10 text-m font-display pt-10 z-10"
          itemClassName="cursor-pointer hover:text-red-600 duration-300 md:text-black"
        />
      </div>
    </nav>
  );
};

export default Drawer;
