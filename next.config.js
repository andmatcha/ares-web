/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  reactStrictMode: true,
  // Keep the bind hostname in next-intl rewrites (Next.js issue #94745).
  skipProxyUrlNormalize: true,
  compiler: {
    emotion: true,
  },
}

const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl(nextConfig);
