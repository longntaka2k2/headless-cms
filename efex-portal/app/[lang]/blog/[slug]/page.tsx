import ReadMore from "@/components/blog/ReadMore";
import { getAuthors, getPost } from "@/public/api/strapiService";
import { LoadImageRictext } from "@/utils/ultils";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import RichText from "./richtext";
import Share from "./share";
import TableOfContent from "@/components/blog/TableOfContent";
import { getDictionary } from "@/app/getDictionary";
import EzImage from "@/components/commons/EzImage";
import Image from "next/image";
import FromVietNam from "@/components/commons/FromVietNam";

type Props = {
  params: { lang: string; slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // const blogDetail: any = await getPost(params.slug, params.lang);
  const blogDetail = await getPost(params.slug, params.lang as string);
  // const data = await getPosts(params.lang as string, 1, 5);
  // const blogDetail = data?.find((item: any) => item.slug === params.slug);
  const link = `https://efex.vn/${params.lang}/blog/${params.slug}` as string;

  if (blogDetail?.body) {
    return {
      title: blogDetail?.metaTitle,
      description: blogDetail?.metaDescription,
      alternates: {
        canonical: link,
        // types: {
        //   "application/rss+xml": [
        //     {
        //       url: `https://efex.vn/${params.lang}/blog/${params.slug}/feed`,
        //       title: `${blogDetail?.data[0]?.attributes?.title + " » Feed "}`,
        //     },
        //   ],
        // },
      },
      openGraph: {
        type: "website",
        url: link,
        title: blogDetail?.metaTitle,
        description: blogDetail?.metaDescription,
        siteName: "EFEX",
        images: [
          {
            url: blogDetail?.thumbnail?.data?.attributes?.url
              ? "https://strapi-efex.ichiba.net" +
                blogDetail?.thumbnail?.data?.attributes?.url
              : (LoadImageRictext(blogDetail?.body) as string),
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        site: "@EfexVietnam",
        creator: "@EfexVietnam",
        images: blogDetail?.thumbnail?.data?.attributes?.url
          ? "https://strapi-efex.ichiba.net" +
            blogDetail?.thumbnail?.data?.attributes?.url
          : (LoadImageRictext(blogDetail?.body) as string),
        title: blogDetail?.metaTitle,
        description: blogDetail?.metaDescription,
      },
    };
  } else {
    return {};
  }
}

export default async function BlogDetail({
  params,
}: {
  params: {
    lang: string;
    slug: string;
  };
}) {
  const lang = await getDictionary(params.lang ?? "en");
  const currentUrl = `https://efex.vn/${params.lang}/blog/${params.slug}`;
  const blogDetail = await getPost(params.slug, params.lang as string);
  //  const data = await getPosts(params.lang as string, 1, 5);
  // const blogDetail = data?.find((item: any) => item.slug === params.slug);

  const authors = await getAuthors(params.lang as string);
  const author = authors?.find(
    (item: any) =>
      item.attributes.slug === blogDetail?.author?.data?.attributes?.slug
  );

  return (
    <>
      <head>
        {params.lang === "en" && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
              {
                "@context": "https://schema.org/",
                "@graph": [
                  {
                    "@type": "BlogPosting",
                    "@id": "https://efex.vn/en/blog/${blogDetail?.slug}/#BlogPosting",
                    "mainEntityOfPage": "https://efex.vn/en/blog/${blogDetail?.slug}",
                    "headline": "${blogDetail?.metaTitle}",
                    "name": "${blogDetail?.metaTitle}",
                    "description": "${blogDetail?.metaDescription}",
                    "datePublished": "${blogDetail?.createdAt}",
                    "dateModified": "${blogDetail?.updatedAt}",
                    "author": {
                      "@type": "Person",
                      "name": "${blogDetail?.author?.data?.attributes?.author_name}",
                      "@id": "https://efex.vn/en/blog/author/${blogDetail?.author?.data?.attributes?.slug}/#Person"
                    },
                    "publisher": {
                      "@type": "Person",
                      "name": "${blogDetail?.author?.data?.attributes?.author_name}",
                      "@id": "https://efex.vn/en/#Person"
                    },
                    "image": {
                      "@type": "ImageObject",
                      "@id": "https://strapi-efex.ichiba.net${blogDetail?.thumbnail?.data?.attributes?.url}",
                      "url": "https://strapi-efex.ichiba.net${blogDetail?.thumbnail?.data?.attributes?.url}",
                      "height": "828",
                      "width": "497"
                    },
                    "url": "https://efex.vn/en/blog/${blogDetail?.slug}",
                    "isPartOf": {
                      "@type": "Blog",
                    "@id": "https://efex.vn/en/blog/#WebPage",
                      "name": "EFEX Blog - The Ultimate Guide about Order Fulfillment"
                    }
                  },
                  {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                      // Home -> Blog -> Shipping -> What Is Cross-Border Shipping...
                      {
                        "@type": "ListItem",
                        "position": 1,
                        "item": {
                          "name": "Home",
                          "@id": "https://efex.vn/en"
                        }
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "item": {
                          "name": "Blog",
                          "@id": "https://efex.vn/en/blog"
                        }
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "item": {
                          "name": "${blogDetail?.blog_categories?.data[0].attributes?.name}",
                          "@id": "https://efex.vn/en/blog/category/${blogDetail?.blog_categories?.data[0].attributes?.slug}"
                        }
                      },
                      {
                        "@type": "ListItem",
                        "position": 4,
                        "item": {
                          "name": "${blogDetail?.title}",
                          "@id": "https://efex.vn/en/blog/${blogDetail?.slug}"
                        }
                      }
                    ]
                  }
                ]
              }
  `,
            }}
          />
        )}
        {params.lang === "vi" && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
              {
                "@context": "https://schema.org/",
                "@graph": [
                  {
                    "@type": "BlogPosting",
                    "@id": "https://efex.vn/vi/blog/${blogDetail?.slug}/#BlogPosting",
                    "mainEntityOfPage": "https://efex.vn/vi/blog/${blogDetail?.slug}",
                    "headline": "${blogDetail?.metaTitle}",
                    "name": "${blogDetail?.metaTitle}",
                    "description": "${blogDetail?.metaDescription}",
                    "datePublished": "${blogDetail?.createdAt}",
                    "dateModified": "${blogDetail?.updatedAt}",
                    "author": {
                      "@type": "Person",
                      "name": "${blogDetail?.author?.data?.attributes?.author_name}",
                      "@id": "https://efex.vn/vi/blog/author/${blogDetail?.author?.data?.attributes?.slug}/#Person"
                    },
                    "publisher": {
                      "@type": "Person",
                      "name": "${blogDetail?.author?.data?.attributes?.author_name}",
                      "@id": "https://efex.vn/vi/#Person"
                    },
                    "image": {
                      "@type": "ImageObject",
                      "@id": "https://strapi-efex.ichiba.net${blogDetail?.thumbnail?.data?.attributes?.url}",
                      "url": "https://strapi-efex.ichiba.net${blogDetail?.thumbnail?.data?.attributes?.url}",
                      "height": "828",
                      "width": "497"
                    },
                    "url": "https://efex.vn/vi/blog/${blogDetail?.slug}",
                    "isPartOf": {
                      "@type": "Blog",
                    "@id": "https://efex.vn/vi/blog/#WebPage",
                      "name": "EFEX Blog - Thông Tin Mới Nhất Về Order Fulfillment"
                    }
                  },
                  {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                      // Trang chủ -> Blog -> Dịch vụ Fulfillmennt -> Fulfillment là gì....
                      {
                        "@type": "ListItem",
                        "position": 1,
                        "item": {
                          "name": "Trang chủ",
                          "@id": "https://efex.vn/vi"
                        }
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "item": {
                          "name": "Blog",
                          "@id": "https://efex.vn/vi/blog"
                        }
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "item": {
                          "name": "${blogDetail?.blog_categories?.data[0].attributes?.name}",
                          "@id": "https://efex.vn/vi/blog/category/${blogDetail?.blog_categories?.data[0].attributes?.slug}"
                        }
                      },
                      {
                        "@type": "ListItem",
                        "position": 4,
                        "item": {
                          "name": "${blogDetail?.title}",
                          "@id": "https://efex.vn/vi/blog/${blogDetail?.slug}"
                        }
                      }
                    ]
                  }
                ]
              }
    `,
            }}
          />
        )}
      </head>

      <div className="blogDetail">
        <div className="container px-4 lg:px-0 py-6">
          {blogDetail?.body && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 ">
              <div className="lg:grid content-between lg:border-b lg:border-[#999]">
                <div className="lg:pt-8">
                  {blogDetail?.blog_categories?.data?.map(
                    (value: any, index: number) => (
                      <Link
                        href={`/${params.lang}/blog/category/${value?.attributes.slug}`}
                        className="inline-block mr-3 mb-3 text-[#389E0D] text-xs font-bold bg-[#D9F7BE] w-max px-2 py-1 rounded-[4px] cursor-pointer"
                        key={index}
                      >
                        {value?.attributes?.name}
                      </Link>
                    )
                  )}
                  <h1 className="text-[28px] lg:text-[2.2rem] font-black title">
                    {blogDetail?.title}
                  </h1>
                </div>
                <div className="mt-2 flex justify-between lg:justify-start text-sm text-[#5e6a78] lg:mb-8">
                  <Link
                    href={
                      blogDetail?.author?.data?.attributes?.slug
                        ? `/${params.lang}/blog/author/${blogDetail?.author?.data?.attributes?.slug}`
                        : "#"
                    }
                    className="mr-5 hover:font-bold"
                  >
                    <FontAwesomeIcon
                      icon={faCircleDot}
                      width={10}
                      height={10}
                      className=" mb-[1px] mr-1"
                    />{" "}
                    {blogDetail?.author?.data?.attributes?.author_name
                      ? blogDetail?.author?.data?.attributes?.author_name
                      : "EFEX"}
                  </Link>
                </div>
              </div>
              <div>
                <Image
                  src={
                    blogDetail?.thumbnail?.data?.attributes?.url
                      ? "https://strapi-efex.ichiba.net" +
                        blogDetail?.thumbnail?.data?.attributes?.url
                      : LoadImageRictext(blogDetail?.body)
                  }
                  quality={100}
                  alt={blogDetail?.title}
                  width={800}
                  height={600}
                  className="w-full rounded-[20px]"
                />
              </div>
            </div>
          )}

          <div className="lg:py-10 lg:flex lg:relative justify-between">
            <div className="lg:w-[27%] w-full relative flex lg:block">
              <div className="lg:sticky top-[100px]">
                <TableOfContent
                  lang={params.lang}
                  className="hidden lg:block"
                />

                <div className="hidden lg:block mt-3 mb-5">
                  <p className="text-base font-bold mb-[10px]">
                    {lang?.blogs?.moreContent}
                  </p>
                  <div className="grid gap-[5px] h-[190px] overflow-y-scroll overflow-hidden">
                    {lang.blogDetail.listMoreContents.map(
                      (item: any, idx: number) => (
                        <Link
                          key={idx}
                          href={item.link}
                          target="_blank"
                          className="p-[10px] bg-[linear-gradient(90deg,_#00194F_0%,_#AF0000_100%)] rounded-[5px] text-sm text-white hover:opacity-90"
                        >
                          {item.title}
                        </Link>
                      )
                    )}
                  </div>
                </div>

                <div className="flex items-center pl-2">
                  <span className="text-base font-bold">
                    {lang?.blogs?.shareThis}
                  </span>
                  <Share url={currentUrl} />
                </div>
              </div>
            </div>
            <div className="lg:w-[70%] w-full">
              <div className="content-blog text-[#2c2f34] px-3 border-b border-[#999] pb-4 lg:border-0">
                <RichText content={blogDetail?.body as any} />
              </div>
              <div className="h-[1px] w-full bg-black"></div>
              <div className="flex gap-6 pt-5 lg:items-start">
                <Link
                  href={`/${params.lang}/blog/author/${blogDetail?.author?.data?.attributes?.slug}`}
                  className="max-w-[70px] max-h-[70px] w-full h-full 
                            rounded-full overflow-hidden bg-[#cccc]
                            border-[2px] border-black"
                >
                  <EzImage
                    src={
                      author?.attributes?.avatar.data?.attributes?.url
                        ? `${author?.attributes?.avatar?.data?.attributes?.url}`
                        : ""
                    }
                    alt="avatar"
                    width={70}
                    height={70}
                    className="w-full h-full"
                  />
                </Link>
                <div className="grid w-[75%] lg:w-[85%]">
                  <Link
                    href={`/${params.lang}/blog/author/${blogDetail?.author?.data?.attributes?.slug}`}
                    className="text-base font-bold pb-1"
                  >
                    {author?.attributes?.author_name
                      ? author?.attributes?.author_name
                      : "EFEX"}
                  </Link>
                  <span className="text-sm">
                    {author?.attributes?.previewBio}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ReadMore
          category={blogDetail?.blog_categories?.data[0].attributes?.slug}
          id={blogDetail?.id}
        />
      </div>

      <FromVietNam lang={lang} />
    </>
  );
}
