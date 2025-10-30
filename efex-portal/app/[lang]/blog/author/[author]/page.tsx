import { getAuthors, getPosts } from "@/public/api/strapiService";
import { Metadata, ResolvingMetadata } from "next";
import { getDictionary } from "@/app/getDictionary";
import Image from "next/image";
import clsx from "clsx";
import AuthorPageCPN from "@/components/blog/author/AuthorPage";
import FromVietNam from "@/components/commons/FromVietNam";

type Props = {
  params: { lang: string; author: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const data = await getAuthors(params.lang as string);
  const author = data?.find(
    (item: any) => item.attributes.slug === params.author
  );
  const link =
    `https://efex.vn/${params.lang}/blog/author/${params.author}` as string;

  if (author) {
    return {
      title: author?.attributes?.metaTitle,
      description: author?.attributes?.metaDescription,
      alternates: {
        canonical: link,
      },
      openGraph: {
        type: "website",
        url: link,
        title: author?.attributes?.metaTitle,
        description: author?.attributes?.metaDescription,
        siteName: "EFEX",
      },
      twitter: {
        card: "summary_large_image",
        site: "@EfexVietnam",
        creator: "@EfexVietnam",
        title: author?.attributes?.metaTitle,
        description: author?.attributes?.metaDescription,
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
    author: string;
  };
}) {
  const lang = await getDictionary(params.lang ?? "en");
  const data = await getAuthors(params.lang as string);
  const author = data?.find(
    (item: any) => item.attributes.slug === params.author
  );
  const listPost = await getPosts(params.lang as string);
  const postByAuthor =
    listPost?.filter((item: any) => {
      return item?.author?.data?.attributes?.slug === params?.author;
    }) || [];

  return (
    <>
      <head>
        {params.lang === "en" && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
              {
                "@context": "https://schema.org",
                "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://efex.vn/en/blog/author/${author?.attributes?.slug}/#Person",
                  "name": "${author?.attributes?.author_name}",
                  "jobTitle": "${author?.attributes?.position}",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "EFEX",
                    "@id": "https://efex.vn/en/#Organization"
                  },
                  "knowsAbout": [  
                      {
                        "@type": "Thing",
                        "name": "Logistics",
                        "@id": "https://www.wikidata.org/wiki/Q177777"
                      },
                      {
                        "@type": "Thing",
                        "name": "Supply Chain",
                        "@id": "https://www.wikidata.org/wiki/Q1824206"
                      },
                      {
                        "@type": "Thing",
                        "name": "Order Fulfillment",
                        "@id": "https://www.wikidata.org/wiki/Q1473552"
                      },
                      {
                        "@type": "Thing",
                        "name": "e-commerce",
                        "@id": "https://www.wikidata.org/wiki/Q484847"
                      }
                      ],
                  "description": "${author?.attributes?.metaDescription}",
                  "image": "https://strapi-efex.ichiba.net/uploads/nguyen_viet_loc_75a74f2e50.jpg"
                },
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    // Home -> Blog -> Liam Johnson
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
                        "name": "${author?.attributes?.author_name}",
                        "@id": "https://efex.vn/en/blog/author/${author?.attributes?.slug}"
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
                "@context": "https://schema.org",
                "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://efex.vn/vi/blog/author/${author?.attributes?.slug}/#Person",
                  "name": "${author?.attributes?.author_name}",
                  "jobTitle": "${author?.attributes?.position}",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "EFEX",
                    "@id": "https://efex.vn/vi/#Organization"
                  },
                  "knowsAbout": [  
                      {
                        "@type": "Thing",
                        "name": "Logistics",
                        "@id": "https://www.wikidata.org/wiki/Q177777"
                      },
                      {
                        "@type": "Thing",
                        "name": "Supply Chain",
                        "@id": "https://www.wikidata.org/wiki/Q1824206"
                      },
                      {
                        "@type": "Thing",
                        "name": "Order Fulfillment",
                        "@id": "https://www.wikidata.org/wiki/Q1473552"
                      },
                      {
                        "@type": "Thing",
                        "name": "e-commerce",
                        "@id": "https://www.wikidata.org/wiki/Q484847"
                      }
                      ],
                  "description": "${author?.attributes?.metaDescription}",
                  "image": "https://strapi-efex.ichiba.net${author?.attributes?.avatar?.data?.attributes?.url}"
                },
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    // Trang chủ -> Blog -> Nguyễn Viết Lộc
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
                        "name": "${author?.attributes?.author_name}",
                        "@id": "https://efex.vn/vi/blog/author/${author?.attributes?.slug}"
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
      <div
        className={clsx(
          "bg-[url('https://strapi-efex.ichiba.net/uploads/Hero_1_d36db4660a.svg')]",
          "lg:bg-[url('https://strapi-efex.ichiba.net/uploads/Hero_000f57f426.svg')]",
          "bg-center bg-cover bg-no-repeat"
        )}
      >
        <div className="container flex justify-between items-end px-4 lg:px-0 pt-15 lg:pt-[120px]">
          <div className="flex gap-3 lg:gap-8 items-center">
            <div
              className={clsx(
                "overflow-hidden border-white",
                "w-[120px] h-[120px] border-2 rounded-lg",
                "lg:w-[282px] lg:h-[282px] lg:border-4 lg:rounded-2xl"
              )}
            >
              <Image
                src={
                  author?.attributes?.avatar.data?.attributes?.url
                    ? `https://strapi-efex.ichiba.net${author?.attributes?.avatar?.data?.attributes?.url}`
                    : ""
                }
                width={282}
                height={282}
                objectFit="cover"
                alt={author?.attributes?.author_name}
                className="w-full h-full"
              />
            </div>
            <div className="text-white">
              <h2 className="text-2xl lg:text-5xl font-bold mb-[2px] lg:mb-4">
                {author?.attributes?.author_name}
              </h2>
              <p className="text-sm lg:text-2xl font-medium">
                {author?.attributes?.position}
              </p>
            </div>
          </div>
          <Image
            src={"https://strapi-efex.ichiba.net/uploads/Group_2e42ee7dff.svg"}
            width={152}
            height={140}
            alt="EFEX"
            className="w-[52px] h-12 lg:w-[152px] lg:h-[140px]"
          />
        </div>
      </div>

      <div className="container px-4 lg:px-0 py-6 lg:pt-10 lg:pb-15 flex flex-col gap-6 lg:gap-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="lg:w-2/3">
            <h3 className="text-xl lg:text-2xl font-bold mb-6">
              {lang?.author?.experience}
            </h3>
            <ul className="grid gap-2 lg:gap-3">
              {author.attributes.experience &&
                author.attributes.experience.map((item: any, idx: number) => (
                  <li key={idx} className="text-sm lg:text-base">
                    {item.item}
                  </li>
                ))}
            </ul>
          </div>
          <div className="lg:w-1/3 bg-[#F6F7FA] rounded-2xl p-4 lg:p-6">
            <h3 className="text-xl lg:text-2xl font-bold">
              {lang?.author?.expertise}
            </h3>
            <hr className="my-3" />
            <div className="grid gap-2">
              {author.attributes.expertise &&
                author.attributes.expertise.map((item: any, idx: number) => (
                  <li key={idx} className="list-disc text-sm lg:text-base">
                    {item.item}
                  </li>
                ))}
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl lg:text-2xl font-bold mb-6">
            {lang?.author?.highlights}
          </h3>
          <div className="grid gap-2">
            {author.attributes.highlights &&
              author.attributes.highlights.map((item: any, idx: number) => (
                <li key={idx} className="list-disc text-sm lg:text-base">
                  {item.item}
                </li>
              ))}
          </div>
        </div>
      </div>

      <div className="bg-[#F2F4F8]">
        <div className="container px-4 lg:px-0 py-6 lg:py-15">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-10 text-center">
            {lang?.author?.articleBy} {author?.attributes?.author_name}
          </h2>
          {/* <ListBlog post={postByAuthor} /> */}
          <AuthorPageCPN author={params.author} />
        </div>
      </div>

      <FromVietNam lang={lang} />
    </>
  );
}
