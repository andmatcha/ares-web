const Header = () => {
  return (
    <header className="fixed w-screen h-20 flex items-center px-12 justify-center md:justify-between z-20 bg-gradient-to-b from-main-bg/70 to-black/0">
      <h1 className="text-lg h-16 flex gap-2 items-center">
        <img
          src="/images/logo_transparent.png"
          alt=""
          className="h-3/4 md:h-full object-contain"
        />
        <span>
          A<span className="text-red-600">R</span>ES Project
        </span>
      </h1>
      <ul className="hidden md:flex items-center gap-10 text-xs">
        <li className="cursor-pointer">
          <a href="#team">TEAM</a>
        </li>
        <li className="cursor-pointer">
          <a href="#urc">WHAT&apos;S URC?</a>
        </li>
        <li className="cursor-pointer">
          <a href="#rovers">ROVERS</a>
        </li>
        <li className="cursor-pointer">
          <a href="#news">NEWS</a>
        </li>
        <li className="cursor-pointer">
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
