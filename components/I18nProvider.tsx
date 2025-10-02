"use client";
import { usePathname } from "next/navigation";
import { createContext, useContext, useMemo } from "react";

import enCommon from "../public/locales/en/common.json";
import jaCommon from "../public/locales/ja/common.json";

type Dictionary = Record<string, any>;

const I18nContext = createContext<{ dict: Dictionary; locale: string }>({
  dict: {},
  locale: "en",
});

export function I18nProvider({
  dict,
  locale,
  children,
}: {
  dict: Dictionary;
  locale: string;
  children: React.ReactNode;
}) {
  const value = useMemo(() => ({ dict, locale }), [dict, locale]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useT(prefix?: string) {
  const { dict } = useContext(I18nContext);
  return (key: string) => {
    const path = (prefix ? `${prefix}.` : "") + key;
    return (
      path.split(".").reduce<any>((o, k) => (o ? o[k] : undefined), dict) ??
      path
    );
  };
}

export function useCurrentLocale() {
  const { locale } = useContext(I18nContext);
  return locale;
}

export function ClientI18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname() ?? "/";
  const match = path.match(/^\/(en|ja)(?:\/|$)/);
  const locale = (match?.[1] ?? "en") as "en" | "ja";
  const dict = {
    common: locale === "ja" ? (jaCommon as any) : (enCommon as any),
  } as any;
  return (
    <I18nProvider dict={dict} locale={locale}>
      {children}
    </I18nProvider>
  );
}
