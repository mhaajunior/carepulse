import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // This disables ESLint during builds
  },
};

export default nextConfig;
