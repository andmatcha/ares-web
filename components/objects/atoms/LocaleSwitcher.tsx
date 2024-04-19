import Link from "next/link";

export const LocaleSwitcher = ({ href }: { href: string }) => {
  return (
    <div className="flex items-center gap-2 text-xs">
      <Link
        href={href}
        locale="ja"
        className="cursor-pointer hover:text-red-600 duration-300"
      >
        JA
      </Link>
      /
      <Link
        href={href}
        locale="en"
        className="cursor-pointer hover:text-red-600 duration-300"
      >
        EN
      </Link>
    </div>
  );
};
