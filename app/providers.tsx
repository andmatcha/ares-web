"use client";
import i18n from "i18next";
import { ReactNode, useEffect, useState } from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";

import enCommon from "../public/locales/en/common.json";
import jaCommon from "../public/locales/ja/common.json";

type Props = {
  children: ReactNode;
  initialLocale: string;
};

export default function Providers({ children, initialLocale }: Props) {
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    if (!i18n.isInitialized) {
      i18n
        .use(initReactI18next)
        .init({
          resources: {
            en: { common: enCommon as any },
            ja: { common: jaCommon as any },
          },
          lng: initialLocale || "en",
          fallbackLng: "en",
          ns: ["common"],
          defaultNS: "common",
          supportedLngs: ["en", "ja"],
          interpolation: { escapeValue: false },
        })
        .finally(() => setReady(true));
    } else {
      i18n.changeLanguage(initialLocale || "en").finally(() => setReady(true));
    }
  }, [initialLocale]);

  if (!ready) return null;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
