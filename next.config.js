/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.pernod-ricard.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
