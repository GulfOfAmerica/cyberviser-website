/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/cyberviser-website',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
}

module.exports = nextConfig
