/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['unavatar.io']
  },
  reactStrictMode: true,
}

module.exports = nextConfig
