import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: undefined
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react/jsx-dev-runtime": require.resolve("react/jsx-dev-runtime"),
    };
    return config;
  },
};

export default nextConfig;
