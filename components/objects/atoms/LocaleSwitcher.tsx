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
        className={`cursor-pointer hover:text-red-600 duration-300 ${
          locale === "ja" ? "text-gray-400" : "text-white"
        }`}
      >
        JA
      </Link>
      /
      <Link
        href={href}
        locale="en"
        className={`cursor-pointer hover:text-red-600 duration-300 ${
          locale === "en" ? "text-gray-400" : "text-white"
        }`}
      >
        EN
      </Link>
    </div>
  );
};
