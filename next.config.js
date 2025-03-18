/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/cloud-it-resources',
    assetPrefix: '/cloud-it-resources/',
  } : {})
};

module.exports = nextConfig; 