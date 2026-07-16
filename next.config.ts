import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel handles image optimisation natively — no extra config needed.
  // Add any remote image domains here if you ever use external images:
  // images: { remotePatterns: [{ hostname: "example.com" }] },

  // Strict mode for better React behaviour in production
  reactStrictMode: true,

  // Compress responses
  compress: true,

  // PoweredBy header removed for security
  poweredByHeader: false,
};

export default nextConfig;
