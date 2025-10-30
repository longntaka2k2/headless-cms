/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
module.exports = {
  output: "standalone",
  i18n,
  images: {
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
        protocol: "https",
        hostname: "cms-careers.ichiba.net",
      },
    ],
  },
  experimental: { appDir: false,  scrollRestoration: true, },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/sitemap',
      },
      {
        source: '/sitemap/sitemap_jobs.xml',
        destination: '/sitemap/sitemap_jobs',
      },
      {
        source: '/sitemap/sitemap_page.xml',
        destination: '/sitemap/sitemap_page',
      },
      {
        source: '/sitemap/sitemap_blogs_vi.xml',
        destination: '/sitemap/sitemap_blogs_vi',
      },
      {
        source: '/sitemap/sitemap_blogs_en.xml',
        destination: '/sitemap/sitemap_blogs_en',
      },
    ];
  },
};
