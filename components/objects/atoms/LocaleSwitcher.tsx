"use client";

import { Link, usePathname } from "@/i18n/routing";
import { LanguageIcon } from "@/lib/mui";

export const LocaleSwitcher = ({
  href,
  locale,
}: {
  href: string;
  locale: string;
}) => {
  const pathname = usePathname();
  const targetLocale: "en" | "ja" = locale === "en" ? "ja" : "en";
  const currentHref = pathname ?? href ?? "/";

  return (
    <div className="flex items-center gap-2 text-xs">
      <Link
        href={currentHref}
        locale={targetLocale}
        className="cursor-pointer hover:text-red-600 duration-300 flex items-center text-white"
      >
        <LanguageIcon className="h-4" />
        <span className="align-middle">{targetLocale.toUpperCase()}</span>
      </Link>
    </div>
  );
};
