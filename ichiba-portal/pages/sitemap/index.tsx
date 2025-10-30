// pages/server-sitemap.xml/index.tsx
import { getServerSideSitemapLegacy } from "next-sitemap";
import { GetServerSideProps } from "next";
import endpoints from "@/const/endpoints";
import QueryString from "qs";
import { GetBlogs, GetCategories } from "@/services/strapi";
import { getPosts } from "@/payload-client";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
  const locale = ctx.locale;
  const url: string = `https://${ctx.req.headers["x-forwarded-host"]}`;
  const now = new Date().toISOString();
  const siteRoute = [
    {
      loc: url, // Absolute url
      lastmod: now,
    },
    {
      loc: `${url}/products/storefront-layer/overview`, // Absolute url
      lastmod: now,
    },
    {
      loc: `${url}/products/integrations`,
      lastmod: now,
    },
    {
      loc: `${url}/products/ship4p/overview`,
      lastmod: now,
    },
    {
      loc: `${url}/products/cross-border-forwarding/overview`,
      lastmod: now,
    },
    {
      loc: `${url}/products/commerce-layer/overview`,
      lastmod: now,
    },
    {
      loc: `${url}/products/crawler/overview`,
      lastmod: now,
    },
    {
      loc: `${url}/products/storefront-layer/overview`,
      lastmod: now,
    },
    {
      loc: `${url}/products/wms`,
      lastmod: now,
    },
    {
      loc: `${url}/solutions/business-owner`,
      lastmod: now,
    },
    {
      loc: `${url}/solutions/marketing-teams`,
      lastmod: now,
    },
    {
      loc: `${url}/solutions/technical-teams`,
      lastmod: now,
    },
    {
      loc: `${url}/solutions/global-selling`,
      lastmod: now,
    },
    {
      loc: `${url}/solutions/multichannel-fulfillment`,
      lastmod: now,
    },
    {
      loc: `${url}/solutions/proxy-shopping`,
      lastmod: now,
    },
    {
      loc: `${url}/solutions/omnichannel-selling`,
      lastmod: now,
    },
    {
      loc: `${url}/solutions/all-in-one-shipping-management`,
      lastmod: now,
    },
    {
      loc: `${url}/solutions/order-fulfillment-by-efex`,
      lastmod: now,
    },
    {
      loc: `${url}/solutions/performance-marketing-growth-solution`,
      lastmod: now,
    },
    {
      loc: `${url}/solutions/retails`,
      lastmod: now,
    },
    {
      loc: `${url}/solutions/mother-baby`,
      lastmod: now,
    },
    {
      loc: `${url}/solutions/logistics-company`,
      lastmod: now,
    },
    {
      loc: `${url}/solutions/fashion-beauty`,
      lastmod: now,
    },
    {
      loc: `${url}/solutions/electronics`,
      lastmod: now,
    },
    {
      loc: `${url}/solutions/dropshipping`,
      lastmod: now,
    },
    {
      loc: `${url}/case-studies`,
      lastmod: now,
    },
    {
      loc: `${url}/support-portal`,
      lastmod: now,
    },
    {
      loc: `${url}/blog`,
      lastmod: now,
    },
    {
      loc: `${url}/trust-security`,
      lastmod: now,
    },
  ];

  const data = await GetCategories({ locale: locale });
  data?.forEach((category: any) => {
    siteRoute.push({
      loc: `${url}/blog/category/${category?.attributes?.value}`,
      lastmod: category?.attributes?.publishedAt,
    });
  });

  function escapeXml(unsafe: string) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  }

  let idx: number = 1;
  let hasMore: boolean = true;

  while (hasMore) {
    let blog: any = await GetBlogs({
      locale: locale,
      pagination: { page: idx, pageSize: 100 },
    });

    if (blog.length === 0) {
      hasMore = false; // No more blogs to fetch
    } else {
      blog.forEach((item: any) => {
        siteRoute.push({
          loc: escapeXml(`${url}/blog/${item?.attributes?.slug}`),
          lastmod: escapeXml(item?.attributes?.createdAt),
        });
      });
      idx++; // Increment to the next page
    }
  }

  return getServerSideSitemapLegacy(ctx, [...siteRoute]);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
