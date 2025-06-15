/** @type {import('next').NextConfig} */
const nextConfig = {

 images: {
    domains: ['localhost'],  // Add localhost here to allow images from this domain
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
