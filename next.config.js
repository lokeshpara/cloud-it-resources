/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove basePath and assetPrefix if the site is showing 404
  // basePath: '/cloud-it-resources',
  // assetPrefix: '/cloud-it-resources/',
};

module.exports = nextConfig; 