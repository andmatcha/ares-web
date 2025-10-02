import en from "../public/locales/en/common.json";
import ja from "../public/locales/ja/common.json";

export type Locale = "en" | "ja";

export async function getDictionary(locale: Locale) {
  switch (locale) {
    case "ja":
      return ja as any;
    case "en":
    default:
      return en as any;
  }
}
