// pages/server-sitemap.xml/index.tsx
import { getServerSideSitemapLegacy } from "next-sitemap";
import { GetServerSideProps } from "next";
import endpoints from "@/const/endpoints";
import QueryString from "qs";
import { GetBlogs } from "@/services/strapi";
import { removeAccent } from "@/utils/utils";
const qs = require("qs");
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const locale = ctx.locale;
  const url: string = `https://${ctx.req.headers["x-forwarded-host"]}`;
  const now = new Date().toISOString();

  const fields = ["createdAt", "updatedAt", "slug", "locale"];
  const sort = ["updatedAt:desc", "createdAt:desc"];

  const pagination = {
    start: 0,
    limit: 200,
  };

  const query = qs.stringify(
    {
      locale: locale,
      fields,
      sort,
      pagination,
    },
    {
      encodeValuesOnly: true,
      indices: false,
    },
  );

  const blogs = await fetch(`${endpoints.blog}?${query}`)
    .then((x) => x.json())
    .then((x) =>
      x.data
        ?.filter((x: any) => removeAccent(x?.attributes?.slug))
        .map((x: any) => ({
          loc: `${url}/blog/${removeAccent(x?.attributes?.slug)}`,
          lastmod: x?.attributes?.updatedAt ?? x?.attributes?.createdAt ?? now,
        })),
    );
  return getServerSideSitemapLegacy(ctx, [...blogs]);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
