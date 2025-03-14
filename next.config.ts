import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.notion.so",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",  // S3 のドメインを追加
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;