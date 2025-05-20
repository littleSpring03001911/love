/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/love' : '',
  eslint:{
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig 