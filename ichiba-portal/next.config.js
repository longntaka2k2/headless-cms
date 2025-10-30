const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
  i18n,
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  images: {
    minimumCacheTTL: 604800,
    remotePatterns: [
      {
        hostname: "images.ctfassets.net",
        port: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
      {
        protocol: "https",
        hostname: "ichiba.vn",
      },
      {
        protocol: "https",
        hostname: "ichiba.net",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "cms-strapi.ichiba.net",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "test-api.ichiba.net",
      },
      {
        protocol: "https",
        hostname: "api.ichiba.net",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cms-strapi.ichiba.net",
      },
    ],
    domains: ["cms-careers.ichiba.net", "cms-strapi.ichiba.net"],
  },
  experimental: { scrollRestoration: true },
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
      {
        source: "/sitemap.xml",
        destination: "/sitemap",
      },
    ];
  },
  //async headers() {
  //  return [
  //    {
  //      // matching all routes
  //      source: "/(.*)",
  //      headers: [
  //        { key: "Access-Control-Allow-Credentials", value: "true" },
  //        { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
  //        {
  //          key: "Access-Control-Allow-Methods",
  //          value: "GET, POST, PUT, DELETE, OPTIONS",
  //        },
  //        {
  //          key: "Access-Control-Allow-Headers",
  //          value: "Content-Type, Authorization",
  //        },
  //        {
  //          key: "Content-Security-Policy",
  //          value:
  //            "frame-ancestors 'self' https://test-app.ichiba.net https://app.ichiba.net",
  //        },
  //      ],
  //    },
  //  ];
  //},
  
  // Đảm bảo tài nguyên tĩnh được phục vụ đúng cách
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
};
