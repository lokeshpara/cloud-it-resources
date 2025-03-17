/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/cloud-it-resources',
  assetPrefix: '/cloud-it-resources/',
};

module.exports = nextConfig; 