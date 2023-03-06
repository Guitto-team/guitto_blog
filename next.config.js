const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // target: 'serverless',
  sassOptions: {
    includePaths: ['./src'],
    prependData: `
      @use 'styles/variables.scss' as *;
    `,
  },
  images: {
    domains: ['images.microcms-assets.io'],
  },
  experimental: {
    optimizeFonts: true,
  },
}

module.exports = nextConfig
