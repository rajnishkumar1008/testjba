/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp']
   },
   plugins: {
    autoprefixer: {},
  }
  //  env:{
  //   BACKEND_URL:'https://blognew.dynamicssquare.ca'
  // }
}


module.exports = nextConfig
