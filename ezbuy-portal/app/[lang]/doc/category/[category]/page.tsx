// "use client";
import ListBlog from "@/components/blog/ListBlog";

import { getBlogCategories, getPosts } from "@/public/api/strapiService";
import { LoadImageRictext, LoadPRictext }  from "@/utils/ultils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: {
    category: string | undefined;
    lang: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function BlogCategory({ params, searchParams }: Props) {
  const posts: any[] = await getPosts(params.lang,undefined, undefined, params?.category);
  const categories: any[] = await getBlogCategories();
  return (
    <div className=" lg:px-0 blog">
      <div className="container px-4">
        <div className="text-[24px] py-6 lg:text-[36px] font-black title">
          Blog Buy For Me
        </div>
        <div className="lg:grid lg:grid-cols-8 gap-6 py-10 lg:pb-[60px]">
          <div className="lg:col-span-5 shadow-[0px_0px_12px_0px_rgba(54,_50,_46,_0.08)] rounded-[16px] overflow-hidden ">
            <div>
              <Image
                src={LoadImageRictext(posts[0]?.attributes?.body)}
                alt="Blog Buy For Me"
                width={1000}
                height={1000}
                className="w-full h-[200px] lg:h-[300px] object-cover cursor-pointer scale"
              />
            </div>
            <div className="p-5 lg:p-7">
              <div className="mb-3 text-white text-[12px] font-bold bg-black w-max px-2 py-1 rounded-[4px]">
                {posts[0]?.attributes?.blog_category?.data?.attributes?.name ||
                  "Buy For Me"}
              </div>
              <Link
                rel="canonical"
                className=" font-bold lg:text-[24px] line-clamp-2 cursor-pointer"
                href={`/blog/${posts[0]?.attributes?.slug}`}
              >
                {posts[0]?.attributes?.title}
              </Link>
              <div className="text-[14px] lg:text-base mt-2 line-clamp-3 text-[#333]">
                {LoadPRictext(posts[0]?.attributes?.body)}
              </div>
              <div className="mt-2 flex justify-between text-[14px] text-[#5e6a78]">
                <div>Buy For Me</div>
                <div className=" ">
                  {posts[0]?.attributes?.publishedAt
                    ? posts[0]?.attributes?.publishedAt
                    : ""}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 mt-7 lg:mt-0 grid grid-col-1 gap-4">
            {posts.map((value, index: number) =>
              index < 4 ? (
                <div className="flex lg:justify-between " key={index}>
                  <Image
                    src={LoadImageRictext(value?.attributes?.body)}
                    alt="Blog Buy For Me"
                    width={120}
                    height={120}
                    className="w-[120px] h-[120px] rounded-[16px] object-cover cursor-pointer scale shadow-[0px_0px_12px_0px_rgba(54,_50,_46,_0.08);]"
                  />
                  <div className="ml-4">
                    <div className="my-2 text-white text-[12px] font-bold bg-black w-max px-2 py-1 rounded-[4px]">
                      {value?.attributes?.blog_category?.data?.attributes
                        ?.name || "Buy For Me"}
                    </div>
                    <Link
                      rel="canonical"
                      href={`/blog/${value?.attributes?.slug}`}
                      className="font-bold line-clamp-2 cursor-pointer"
                    >
                      {value?.attributes?.title}
                    </Link>
                    <div className="mt-2 flex justify-between text-[12px] text-[#5e6a78]">
                      <div>BuyForMe</div>
                      <div className=" ">
                        {value?.attributes?.publishedAt
                          ? value?.attributes?.publishedAt
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
      <div className="bg-[#fafafa] py-10 lg:py-[60px] px-4 lg:px-0">
        <div className=" container  ">
          <div className="flex overflow-x-scroll font-bold style-2 pb-2">
            <Link
              rel="canonical"
              href={"/blog"}
              className={`block px-3 py-1 mx-2 whitespace-nowrap rounded-full cursor-pointer title`}
              // onClick={() => setType(value)}
            >
              ALL
            </Link>
            {categories?.map((value, index) => (
              <Link
                rel="canonical"
                href={`/blog/category/${value?.attributes?.slug}`}
                key={index}
                className={`block px-3 py-1 mx-2 whitespace-nowrap rounded-full cursor-pointer ${
                  value?.attributes?.slug === params?.category
                    ? "bg-[linear-gradient(89deg,_#000000_0%,_#000000_84.37%)] !text-white"
                    : "title"
                } `}
                // onClick={() => setType(value)}
              >
                {value?.attributes?.name}
              </Link>
            ))}
          </div>
          <ListBlog category={params?.category} />
        </div>
      </div>
    </div>
  );
}
