/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'files.stripe.com', 's3-alpha-sig.figma.com',
    ]
  },

  // experimental: {
  //   fontLoaders: [
  //     {loader: '@next/font/google', options: { subsets: ['latin'] }},
  //   ],
  // },

}

module.exports = nextConfig