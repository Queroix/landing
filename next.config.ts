/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/landing',
  assetPrefix: '/landing/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
