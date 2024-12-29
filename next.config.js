/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;