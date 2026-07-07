import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  experimental: {
    // Disable buggy Turbopack dev filesystem cache (known unbounded-growth bug in Next.js 16.x)
    // Safe to re-enable once Next.js 16.3 is released as stable
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
