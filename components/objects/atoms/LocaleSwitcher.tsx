"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { LanguageIcon } from "../../../lib/mui";

export const LocaleSwitcher = ({
  href,
  locale,
}: {
  href: string;
  locale: string;
}) => {
  const pathname = usePathname();
  const targetLocale = locale === "en" ? "ja" : "en";
  const switchedHref = useMemo(() => {
    const path = pathname ?? href ?? "/";
    // /en/foo -> /ja/foo, /ja/foo -> /en/foo, 先頭にロケールがない場合は付与
    const replaced = path.replace(/^\/(en|ja)(?=\/|$)/, `/${targetLocale}`);
    if (replaced === path) {
      return `/${targetLocale}${path.startsWith("/") ? "" : "/"}${path}`;
    }
    return replaced;
  }, [pathname, href, targetLocale]);
  return (
    <div className="flex items-center gap-2 text-xs">
      <Link
        href={switchedHref}
        className="cursor-pointer hover:text-red-600 duration-300 flex items-center text-white"
      >
        <LanguageIcon className="h-4" />
        <span className="align-middle">{targetLocale.toUpperCase()}</span>
      </Link>
    </div>
  );
};
