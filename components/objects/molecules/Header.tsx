import contents from "../../../contents/header";

const Header = () => {
  return (
    <header className="fixed w-screen h-20 flex items-center px-12 justify-center md:justify-between z-20">
      <h1 className="text-lg h-16 flex gap-2 items-center">
        <img
          src={contents.aresLogo.imagePath}
          alt={contents.aresLogo.label}
          className="h-3/4 md:h-full object-contain"
        />
        <span>
          A<span className="text-red-600">R</span>ES Project
        </span>
      </h1>
      <ul className="hidden md:flex items-center gap-10 text-xs">
        {contents.menu.map((menuItem, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-red-600 duration-300"
          >
            <a href={`#${menuItem.id}`}>{menuItem.label}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
