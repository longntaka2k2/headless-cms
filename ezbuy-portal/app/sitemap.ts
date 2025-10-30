import { getBlogCategories, getPostsQuery } from "@/public/api/strapiService";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Xây dựng danh sách các URL trong sitemap
  let sitemapUrls = [
    {
      url: "https://ezbuy.jp/en",
      lastModified: "2023-09-01T11:06:30.334Z",
    },
    {
      url: "https://ezbuy.jp/vi",
      lastModified: "2023-09-01T11:06:30.334Z",
    },
    {
      url: "https://ezbuy.jp/ja",
      lastModified: "2023-09-01T11:06:30.334Z",
    },
    {
      url: "https://ezbuy.jp/vi/blog",
      lastModified: "2023-09-01T11:06:30.334Z",
    },
    {
      url: "https://ezbuy.jp/en/blog",
      lastModified: "2023-09-01T11:06:30.334Z",
    },
    {
      url: "https://ezbuy.jp/ja/blog",
      lastModified: "2023-09-01T11:06:30.334Z",
    },
  ];

  const staticPath = [
    "services/air-freight-customs-clearance",
    "services/about-us",
    "services/b2b-trading",
    "services/cross-border-ecommerce",
    "services/cross-border-shipping",
    "services/sell-in-japan",
    "services/sell-in-vietnam",
    "services/warehouse-fulfillment",
  ];

  const isoTime = new Date().toISOString();
  staticPath.forEach((x) =>
    sitemapUrls.push(
      {
        url: `https://ezbuy.jp/ja/${x}`,
        lastModified: isoTime,
      },
      {
        url: `https://ezbuy.jp/vi/${x}`,
        lastModified: isoTime,
      },
      {
        url: `https://ezbuy.jp/en/${x}`,
        lastModified: isoTime,
      }
    )
  );

  let idxvi: number = 1;
  let idxen: number = 1;
  let idxja: number = 1;
  let data: any = [];
  let maxIterations = 5;

  while (idxen < 8) {
    let blogEn: any = await getPostsQuery({
      locale: "en",
      pagination: {
        page: idxen,
        pageSize: 100,
      },
    });
    // Lấy danh sách slug từ mảng bài viết
    blogEn.forEach((item: any) => {
      sitemapUrls.push({
        url: `https://ezbuy.jp/en/blog/${item?.attributes?.slug}`, // Thay đổi đường dẫn dựa trên cấu trúc URL của bạn
        lastModified: item?.attributes?.updatedAt,
      });
    });
    if (blogEn.length < 100) {
      break;
    }
    idxen++;
  }
  while (idxvi < 8) {
    let blogVi: any = await getPostsQuery({
      locale: "vi",
      pagination: {
        page: idxvi,
        pageSize: 100,
      },
    });
    // Lấy danh sách slug từ mảng bài viết
    let viSlugs = blogVi.map((post: any) => post?.attributes);
    viSlugs.forEach((attributes: any) => {
      sitemapUrls.push({
        url: `https://ezbuy.jp/vi/blog/${attributes?.slug}`, // Thay đổi đường dẫn dựa trên cấu trúc URL của bạn
        lastModified: attributes?.updatedAt,
      });
    });
    if (blogVi.length < 100) {
      break;
    }

    idxvi++;
  }
  while (idxja < 8) {
    let blogVi: any = await getPostsQuery({
      locale: "ja",
      pagination: {
        page: idxja,
        pageSize: 100,
      },
    });
    // Lấy danh sách slug từ mảng bài viết
    let slugs = blogVi.map((post: any) => post?.attributes);
    slugs.forEach((attributes: any) => {
      sitemapUrls.push({
        url: `https://ezbuy.jp/ja/blog/${attributes?.slug}`, // Thay đổi đường dẫn dựa trên cấu trúc URL của bạn
        lastModified: attributes?.updatedAt,
      });
    });
    if (blogVi.length < 100) {
      break;
    }

    idxja++;
  }

  const dataVi = await getBlogCategories("vi");
  dataVi?.forEach((category: any) => {
    sitemapUrls.push({
      url: `https://ezbuy.jp/vi/blog/category/${category?.attributes?.slug}`,
      lastModified: category?.attributes?.publishedAt,
    });
  });

  const dataEn = await getBlogCategories("en");
  dataEn?.forEach((category: any) => {
    sitemapUrls.push({
      url: `https://ezbuy.jp/en/blog/category/${category?.attributes?.slug}`,
      lastModified: category?.attributes?.publishedAt,
    });
  });
  const dataJa = await getBlogCategories("ja");
  dataJa?.forEach((category: any) => {
    sitemapUrls.push({
      url: `https://ezbuy.jp/ja/blog/category/${category?.attributes?.slug}`,
      lastModified: category?.attributes?.publishedAt,
    });
  });

  return sitemapUrls;
}
