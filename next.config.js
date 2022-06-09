/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'imgix',
    path: 'https://coderfaster.com.br/',
  },
  reactStrictMode: true,
}

module.exports = nextConfig
