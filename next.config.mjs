/** @type {import('next').NextConfig} */
const nextConfig = {
  // logging: {
  //   fetches: {
  //     fullUrl: true,
  //   },
  // },
  images: {
    domains: [
      "localhost",
      "ik.imagekit.io",
      "utfs.io",
      "uploadthing.com",
      "https:/uploadthing.com",
    ],
  },
}

export default nextConfig
