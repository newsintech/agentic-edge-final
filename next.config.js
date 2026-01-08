/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    typedRoutes: true, 
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
