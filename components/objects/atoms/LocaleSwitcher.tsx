import Link from "next/link";

export const LocaleSwitcher = ({
  href,
  locale,
}: {
  href: string;
  locale: string;
}) => {
  return (
    <div className="flex items-center gap-2 text-xs">
      <Link
        href={href}
        locale="ja"
        className={`cursor-pointer hover:text-red-600 duration-300 flex ${
          locale === "ja" ? "text-gray-400 pointer-events-none" : "text-white"
        }`}
      >
        <img src="/images/icons/ja.png" alt="" className="h-4" />
        <span>JA</span>
      </Link>
      /
      <Link
        href={href}
        locale="en"
        className={`cursor-pointer hover:text-red-600 duration-300 flex ${
          locale === "en" ? "text-gray-400 pointer-events-none" : "text-white"
        }`}
      >
        <img src="/images/icons/en.png" alt="" className="h-4" />
        <span>EN</span>
      </Link>
    </div>
  );
};
