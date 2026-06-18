import { Link } from "@/i18n/routing";

type Props = {
  title: string;
  imagePath: string;
  href: string;
};

const PageTile = ({ title, imagePath, href }: Props) => {
  return (
    <Link href={href}>
      <div className="w-72 h-28 md:h-48 relative overflow-hidden rounded-md group hover:cursor-pointer">
        <img
          src={imagePath}
          alt=""
          className="absolute w-full h-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-white/50 transition-colors group-hover:bg-white/25" />
        <h3 className="absolute text-3xl font-display bottom-4 left-4 text-black">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default PageTile;
