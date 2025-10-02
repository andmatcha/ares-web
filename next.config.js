const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  webpack: (config, { dev }) => {
    config.resolve.alias["@"] = path.resolve(__dirname, ".");
    // 開発時はWebpackのFSキャッシュを無効化してENOENTの再発を防ぐ
    if (dev) {
      config.cache = false;
    }
    return config;
  }
}

const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl(nextConfig);
