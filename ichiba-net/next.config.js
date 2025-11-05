/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "localhost",
      "strapi-efex.ichiba.net",
      "efex.vn",
      "oldimages.vertmarkets.com",
      "magenest.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "src", "styles")],
  // },
  reactStrictMode: true,
  async rewrites() {
    return [];
  },
};

module.exports = nextConfig;
