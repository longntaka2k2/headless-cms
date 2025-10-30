"use client";
import { usePathname } from "next/navigation";
import { BlogCard } from "./BlogCard";
import { LoadImageRictext, LoadPRictext } from "@/utils/ultils";

const ListBlog = (data: any) => {
  const locale = usePathname().split("/")[1];
  return (
    <div>
      <div className="my-5">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:gap-6 w-full">
          {data &&
            data?.post?.map((value: any, index: number) => (
              <BlogCard
                key={index}
                author={value?.author?.data?.attributes?.author_name}
                author_slug={
                  value?.author?.data?.attributes?.slug
                    ? `/${locale}/blog/author/${value?.author?.data?.attributes?.slug}`
                    : "#"
                }
                createdAt={value?.createdAt}
                description={LoadPRictext(value?.body)}
                title={value?.title}
                url={`/${locale}/blog/${value?.slug}`}
                category={value?.blog_categories?.data[0]?.attributes?.name}
                image={
                  value?.thumbnail?.data?.attributes?.url
                    ? "https://strapi-efex.ichiba.net" +
                      value?.thumbnail?.data?.attributes?.url
                    : (LoadImageRictext(value?.body) as string)
                }
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ListBlog;
