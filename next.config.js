/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  webpack: config => {
    config.resolve.alias["@"] = path.resolve(__dirname, ".");
    return config;
  }
}

const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl(nextConfig);
