/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
    // 明示的に制御するため自動検出はmiddlewareで行う
    localeDetection: false,
  },
}

module.exports = nextConfig
