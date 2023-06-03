/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://api.mihomo.me/:path*',
          },
        ]
      },
}

module.exports = nextConfig
