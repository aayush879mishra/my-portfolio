import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'placehold.co',
      'images.unsplash.com',
      'plus.unsplash.com',
    ],
  },
  
};

export default nextConfig;
