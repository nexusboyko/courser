/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/courser',
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: ['github.com'],
  }
};

export default nextConfig;
