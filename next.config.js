/** @type {import('next').NextConfig} */
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
}

module.exports = nextConfig
