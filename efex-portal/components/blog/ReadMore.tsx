"use client";
import { getDictionary } from "@/app/getDictionary";
import { getRelatedPosts } from "@/public/api/strapiService";
import loadingFile from "@/public/json/loading.json";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BlogCard } from "./BlogCard";
import { LoadImageRictext, LoadPRictext } from "@/utils/ultils";

const ReadMore = ({ category, id }: any) => {
  const [language, setLanguage] = useState([] as any);
  const locale = usePathname().split("/")[1];
  const [posts, setListPost] = useState([] as any);

  // useEffect(() => {
  //   const getDataByCategory = async () => {
  //     const data = await getRelatedPosts(locale, 1, 3, category, id);
  //     if (data.length < 3) {
  //       const data = await getRelatedPosts(locale, 1, 3, category);
  //       setListPost(data);
  //     }
  //     setListPost(data);
  //   };
  //   const getLang = async () => {
  //     setLanguage(await getDictionary(locale ? locale : "en"));
  //   };
  //   getLang();
  //   getDataByCategory();
  // }, []);

  useEffect(() => {
    const getDataByCategory = async () => {
      let data = await getRelatedPosts(locale, 1, 4, category);
      data = data.filter((post: any) => post.id !== id);
      data = data.slice(0, 3);
      setListPost(data);
    };
    const getLang = async () => {
      setLanguage(await getDictionary(locale ? locale : "en"));
    };
    getLang();
    getDataByCategory();
  }, [category, id, locale]);

  return (
    <div className="py-10 bg-[#f9f9f9] px-4">
      <div className="container">
        <div className="text-[28px] lg:text-[2.2rem] text-center font-black title mb-5">
          {language?.blogs?.relatedBlogs}
        </div>
        <div className="my-5">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:gap-6 w-full">
            {posts &&
              posts?.map((value: any, index: number) => (
                <BlogCard
                  key={index}
                  author={
                    value?.attributes?.author?.data?.attributes?.author_name
                  }
                  author_slug={
                    value?.attributes?.author?.data?.attributes?.slug
                      ? `/${locale}/blog/author/${value?.attributes?.author?.data?.attributes?.slug}`
                      : "#"
                  }
                  createdAt={value?.attributes?.createdAt}
                  description={LoadPRictext(value?.attributes?.body)}
                  title={value?.attributes?.title}
                  url={`/${locale}/blog/${value?.attributes?.slug}`}
                  category={
                    value?.attributes?.blog_categories?.data[0]?.attributes
                      ?.name
                  }
                  image={
                    value?.attributes?.thumbnail?.data?.attributes?.url
                      ? "https://strapi-efex.ichiba.net" +
                        value?.attributes?.thumbnail?.data?.attributes?.url
                      : (LoadImageRictext(value?.attributes?.body) as string)
                  }
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReadMore;
