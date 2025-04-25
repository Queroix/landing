const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? "/landing" : "",
  assetPrefix: isProd ? "/landing/" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
