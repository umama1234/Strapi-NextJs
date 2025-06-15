/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'mindful-hug-9b4d919f22.media.strapiapp.com'], // Add the hostname here
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;