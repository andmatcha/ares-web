
import LanguageIcon from "@mui/icons-material/Language";
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
      {locale === "en" && (
        <Link
          href={href}
          locale="ja"
          className="cursor-pointer hover:text-red-600 duration-300 flex items-center text-white"
        >
          <LanguageIcon className="h-4" />
          <span className="">JA</span>
        </Link>
      )}
      {locale === "ja" && (
        <Link
          href={href}
          locale="en"
          className="cursor-pointer hover:text-red-600 duration-300 flex items-center text-white"
        >
          <LanguageIcon className="h-4" />
          <span className="align-middle">EN</span>
        </Link>
      )}
    </div>
  );
};
