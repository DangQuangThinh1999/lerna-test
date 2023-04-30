/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/admin",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/admin",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
