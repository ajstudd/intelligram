/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://images.unsplash.com/',
        port: '',
      },
    ],
  },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
}

module.exports = nextConfig
