import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Xây dựng danh sách các URL trong sitemap
  const sitemapUrls: any = [];
  sitemapUrls.push(
    {
      url: "https://fulfillment.efex.vn/en",
      lastModified: "2023-09-01T11:06:30.334Z",
    },
    {
      url: "https://fulfillment.efex.vn/vi",
      lastModified: "2023-09-01T11:06:30.334Z",
    },
    {
      url: "https://fulfillment.efex.vn/thank-you/en",
      lastModified: "2023-09-01T11:06:30.334Z",
    },
    {
      url: "https://fulfillment.efex.vn/thank-you/vi",
      lastModified: "2023-09-01T11:06:30.334Z",
    }
  );

  return sitemapUrls;
}
