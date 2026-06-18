import path from "node:path";
import { fileURLToPath } from "node:url";

import createNextIntlPlugin from "next-intl/plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
