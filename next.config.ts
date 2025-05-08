import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/portfolio",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hilazia.online',
        port: '',
        pathname: '/images/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
