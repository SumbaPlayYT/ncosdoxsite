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
      {
        protocol: "https",
        hostname: "www.cosdox.co.kr",
      },
    ],
  },
  turbopack: {
    root: ".",
  },
};

export default nextConfig;
