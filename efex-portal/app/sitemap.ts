import { MetadataRoute } from "next";
import {
  getAllPosts,
  getBlogCategories,
  getPostSitemap,
} from "@/public/api/strapiService";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Xây dựng danh sách các URL trong sitemap
  const sitemapUrls: any = [];
  const now = new Date().toISOString();
  sitemapUrls.push(
    {
      url: "https://efex.vn/en",
      lastModified: now,
    },
    {
      url: "https://efex.vn/vi",
      lastModified: now,
    },
    {
      url: "https://efex.vn/vi/blog",
      lastModified: now,
    },
    {
      url: "https://efex.vn/en/blog",
      lastModified: now,
    },
    {
      url: "https://efex.vn/vi/start",
      lastModified: now,
    },
    {
      url: "https://efex.vn/en/start",
      lastModified: now,
    },
    {
      url: "https://efex.vn/vi/pricing",
      lastModified: now,
    },
    {
      url: "https://efex.vn/en/pricing",
      lastModified: now,
    },
    {
      url: "https://efex.vn/vi/company/about-us",
      lastModified: now,
    },
    {
      url: "https://efex.vn/en/company/about-us",
      lastModified: now,
    },
    {
      url: "https://efex.vn/vi/solutions/ecommerce-order-fulfillment",
      lastModified: now,
    },
    {
      url: "https://efex.vn/en/solutions/ecommerce-order-fulfillment",
      lastModified: now,
    },
    {
      url: "https://efex.vn/vi/solutions/cross-border-shipping",
      lastModified: now,
    },
    {
      url: "https://efex.vn/en/solutions/cross-border-shipping",
      lastModified: now,
    },
    {
      url: "https://efex.vn/vi/solutions/bonded-warehouse",
      lastModified: now,
    },
    {
      url: "https://efex.vn/en/solutions/bonded-warehouse",
      lastModified: now,
    },
    {
      url: "https://efex.vn/vi/solutions/sell-in-vietnam",
      lastModified: now,
    },
    {
      url: "https://efex.vn/en/solutions/sell-in-vietnam",
      lastModified: now,
    },
    {
      url: "https://efex.vn/vi/solutions/b2b-retail-fulfillment",
      lastModified: now,
    },
    {
      url: "https://efex.vn/en/solutions/b2b-retail-fulfillment",
      lastModified: now,
    },
    {
      url: "https://efex.vn/vi/solutions/custom-clearance",
      lastModified: now,
    },
    {
      url: "https://efex.vn/en/solutions/custom-clearance",
      lastModified: now,
    }
  );

  let idxvi: number = 1;
  let idxen: number = 1;
  let maxIterations = 5;
  while (idxen < 8) {
    let blogEn: any = await getAllPosts("en", idxen as number, 100, "");
    // Lấy danh sách slug từ mảng bài viết
    let enSlugs = blogEn.map((post: any) => post?.attributes);
    blogEn.forEach((item: any) => {
      sitemapUrls.push({
        url: `https://efex.vn/en/blog/${item?.attributes?.slug}`, // Thay đổi đường dẫn dựa trên cấu trúc URL của bạn
        lastModified: item?.attributes?.createdAt,
      });
    });
    if (blogEn.length < 100) {
      break;
    }
    idxen++;
  }
  while (idxvi < 8) {
    let blogVi: any = await getAllPosts("vi", idxvi as number, 100, "");
    // Lấy danh sách slug từ mảng bài viết
    let viSlugs = blogVi.map((post: any) => post?.attributes);
    viSlugs.forEach((attributes: any) => {
      sitemapUrls.push({
        url: `https://efex.vn/vi/blog/${attributes?.slug}`, // Thay đổi đường dẫn dựa trên cấu trúc URL của bạn
        lastModified: attributes?.createdAt,
      });
    });
    if (blogVi.length < 100) {
      break;
    }

    idxvi++;
  }

  const dataVi = await getBlogCategories("vi");
  dataVi?.forEach((category: any) => {
    sitemapUrls.push({
      url: `https://efex.vn/vi/blog/category/${category?.attributes?.slug}`,
      lastModified: category?.attributes?.publishedAt,
    });
  });

  const dataEn = await getBlogCategories("en");
  dataEn?.forEach((category: any) => {
    sitemapUrls.push({
      url: `https://efex.vn/en/blog/category/${category?.attributes?.slug}`,
      lastModified: category?.attributes?.publishedAt,
    });
  });
  return sitemapUrls;
}
