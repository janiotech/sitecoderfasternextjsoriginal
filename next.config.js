/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: 'https://www.coderfaster.com.br/',
  },
  reactStrictMode: true,
}

module.exports = nextConfig
