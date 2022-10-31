const Header = () => {
  return (
    <header className="fixed w-screen h-20 flex items-center px-12 justify-between z-20 bg-gradient-to-b from-main-bg/70 to-black/0">
      <h1 className="text-xl">
        A<span className="text-red-600">R</span>ES Project
      </h1>
      <ul className="flex items-center gap-10 text-xs">
        <li className="cursor-pointer">TEAM</li>
        <li className="cursor-pointer">WHAT'S URC?</li>
        <li className="cursor-pointer">ROVERS</li>
        <li className="cursor-pointer">NEWS</li>
        <li className="cursor-pointer">CONTACT</li>
      </ul>
    </header>
  );
};

export default Header;
