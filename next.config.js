/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Include the private PDF in Vercel's serverless bundle
  experimental: {
    outputFileTracingIncludes: {
      '/api/download-book': ['./private/**'],
    },
  },
};

module.exports = withPWA(nextConfig);
