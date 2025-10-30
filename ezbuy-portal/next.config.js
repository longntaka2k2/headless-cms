const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "localhost", "strapi-ezbuy.ichiba.net","127.0.0.1"],
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "src", "styles")],
  // },
};

module.exports = nextConfig;
