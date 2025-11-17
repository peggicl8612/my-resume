/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: process.env.EXPORT_STATIC === 'true' ? 'export' : undefined,
  basePath: process.env.EXPORT_STATIC === 'true' ? '/my-resume' : '',
  assetPrefix: process.env.EXPORT_STATIC === 'true' ? '/my-resume' : '',
  images: {
    unoptimized: process.env.EXPORT_STATIC === 'true',
  },
}

module.exports = nextConfig

