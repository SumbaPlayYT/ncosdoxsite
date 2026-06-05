import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.tildacdn.pro",
      },
      {
        protocol: "https",
        hostname: "erp.cosdox.com",
      },
    ],
  },
  turbopack: {
    root: ".",
  },
};

export default nextConfig;
