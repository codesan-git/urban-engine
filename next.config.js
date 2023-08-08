/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com"
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com"
      }
    ],
  },
};

module.exports = nextConfig;
