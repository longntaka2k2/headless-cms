// "use client";
import { getDictionary } from "@/app/getDictionary";
import BlogTag from "@/components/blog/BlogTag";
import ClientSideImage from "@/components/blog/ClientSideImage";
import ListBlogPanel from "@/components/blog/ListBlogPanel";
import {
  getStrapiMediaUrl,
  getPostsQuery,
  StrapiQuery,
} from "@/public/api/strapiService";
import { LocalizeLink, formatTime } from "@/utils/ultils";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

interface Props {
  params: { lang: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Blog({ params, searchParams }: Props) {
  const lang = await getDictionary(params.lang);
  const category = searchParams?.["category"] as string;
  const pageNumber = searchParams?.["pageNumber"] as string;
  const query: StrapiQuery = {
    locale: params.lang,
    populate: "*",
    pagination: {
      start: 0,
      limit: 9,
    },
  };

  const getPosts = async (
    lang: string,
    pageNumber: number,
    pageSize: number,
    category?: string
  ) => {
    const query: StrapiQuery = {
      locale: lang,
      populate: "*",
      sort: ["publishedAt:DESC"],
      pagination: {
        page: pageNumber ?? 1,
        pageSize: pageSize ?? 9,
      },
      filters: category
        ? {
            blog_category: {
              name: category,
            },
          }
        : undefined,
    };
    return await getPostsQuery(query);
  };

  const posts = await getPosts(params.lang as string, 0, 9);

  return (
    <div className=" lg:px-0 blog bg-[#fafafa]">
      {posts && posts?.length > 0 && (
        <>
          <div className="container px-4">
            <div className="text-[24px] py-6 lg:text-[36px] font-black title">
              Blog EzBuy
            </div>
            <div className="lg:grid lg:grid-cols-8 gap-6 py-10 lg:pb-[60px]">
              <div className="lg:col-span-5 shadow-[0px_0px_12px_0px_rgba(54,_50,_46,_0.08)] overflow-hidden rounded-[16px]">
                <Link
                  href={LocalizeLink(
                    params.lang,
                    `/blog/${posts[0]?.attributes?.slug}`
                  )}
                >
                  <Image
                    src={getStrapiMediaUrl(posts[0]?.attributes?.banner)}
                    alt="Blog EzBuy"
                    width={1000}
                    height={1000}
                    className="w-full h-[200px] lg:h-[300px] object-cover cursor-pointer scale rounded-[16px]"
                  />
                </Link>
                <div className="p-5 lg:p-7">
                  <BlogTag tags={posts[0]?.attributes?.tags} />
                  <Link
                    className=" font-bold lg:text-[24px] line-clamp-2 cursor-pointer"
                    href={LocalizeLink(
                      params.lang,
                      `/blog/${posts[0]?.attributes?.slug}`
                    )}
                  >
                    {posts[0]?.attributes?.title}
                  </Link>
                  {/* <div
                    className="text-[14px] lg:text-base mt-2 line-clamp-3 text-[#333]"
                    dangerouslySetInnerHTML={{
                      __html: posts[0]?.attributes?.body ?? "",
                    }}
                  /> */}
                  <div className="mt-2 flex justify-between text-[14px] text-[#5e6a78]">
                    <div>
                      {posts[0]?.attributes?.author
                        ? posts[0]?.attributes?.author
                        : "EzBuy"}
                    </div>
                    <div className=" ">
                      {posts[0]?.attributes?.createdAt
                        ? formatTime(posts[0]?.attributes?.createdAt)
                        : ""}
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3 mt-7 lg:mt-0 grid grid-col-1 gap-4">
                {posts.map((value: any, index: number) =>
                  index > 0 && index < 5 ? (
                    <div className="flex lg:justify-between flex-1" key={index}>
                      <ClientSideImage
                        src={getStrapiMediaUrl(
                          posts[index]?.attributes?.banner
                        )}
                        lang={LocalizeLink(
                          params.lang,
                          `/blog/${value?.attributes?.slug}`
                        )}
                        alt="image"
                        width={220}
                        height={220}
                        quality={100}
                        className={clsx(
                          "w-[120px] h-[120px] rounded-[16px] object-cover cursor-pointer shadow-[0px_0px_12px_0px_rgba(54,_50,_46,_0.08)]",
                          "hover:scale-105 transition-all duration-1000 ease-in-out"
                        )}
                      />
                      <div className="ml-4">
                        <BlogTag tags={value?.attributes?.tags} />
                        <Link
                          href={LocalizeLink(
                            params.lang,
                            `/blog/${value?.attributes?.slug}`
                          )}
                          className="font-bold line-clamp-2 cursor-pointer"
                        >
                          {value?.attributes?.title}
                        </Link>
                        <div className="mt-2 flex justify-between text-[12px] text-[#5e6a78]">
                          <div>
                            {value?.attributes?.author
                              ? value?.attributes?.author
                              : "EzBuy Japan"}
                          </div>
                          <div className=" ">
                            {value?.attributes?.createdAt
                              ? formatTime(value?.attributes?.createdAt)
                              : ""}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="hidden" key={index}></div>
                  )
                )}
              </div>
            </div>
          </div>
          <ListBlogPanel lang={lang} />
        </>
      )}
    </div>
  );
}
