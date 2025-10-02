import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED = ["en", "ja"] as const;
type Locale = (typeof SUPPORTED)[number];
const DEFAULT_LOCALE: Locale = "en";
const COOKIE_NAME = "NEXT_LOCALE";

function detectCountry(req: NextRequest): string | null {
  // Cloudflare, Vercel, proxies sometimes set geo headers; fall back to undefined
  const cfCountry = req.headers.get("cf-ipcountry");
  const xCountry = req.headers.get("x-vercel-ip-country");
  return cfCountry || xCountry;
}

function parseAcceptLanguage(header: string | null): string[] {
  if (!header) return [];
  return header
    .split(",")
    .map((part) => part.trim().split(";")[0])
    .filter(Boolean);
}

function chooseLocale(req: NextRequest): Locale {
  // 1) Cookie優先
  const cookie = req.cookies.get(COOKIE_NAME)?.value;
  if (cookie && SUPPORTED.includes(cookie as Locale)) {
    return cookie as Locale;
  }

  // 2) 国コードでJPならja
  const country = detectCountry(req)?.toUpperCase();
  if (country === "JP") return "ja";

  // 3) Accept-Language
  const langs = parseAcceptLanguage(req.headers.get("accept-language"));
  for (const lang of langs) {
    const base = lang.toLowerCase().split("-")[0];
    if (SUPPORTED.includes(base as Locale)) return base as Locale;
  }

  // 4) それ以外は既定
  return DEFAULT_LOCALE;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 静的アセットやAPIは除外
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // 既に /en または /ja で始まっていれば何もしない
  const pathLocale = pathname.split("/")[1];
  if ((SUPPORTED as readonly string[]).includes(pathLocale)) {
    return NextResponse.next();
  }

  const locale = chooseLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  const res = NextResponse.redirect(url);
  // 将来のためCookieに保存
  res.cookies.set(COOKIE_NAME, locale, { path: "/", maxAge: 31536000 });
  return res;
}

export const config = {
  matcher: "/((?!api|_next|.*\\..*).*)",
};
