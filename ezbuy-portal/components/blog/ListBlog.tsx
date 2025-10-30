"use client";
import { getStrapiMediaUrl } from "@/public/api/strapiService";
import { usePathname } from "next/navigation";
import { CardBlog } from "./CardBlog";

const ListBlog = ({ posts }: any) => {
  const locale = usePathname().split("/")[1];

  return (
    <div>
      <div className="my-5 ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4  lg:gap-6">
          {posts &&
            posts?.map((value: any, index: number) => (
              <CardBlog
                key={index}
                banner={getStrapiMediaUrl(value?.attributes?.banner)}
                url={`/${locale}/blog/${value?.attributes?.slug}`}
                content={value?.attributes?.body}
                createdAt={value?.attributes?.createdAt}
                tags={value?.attributes?.tags}
                title={value?.attributes?.title}
                author={value?.attributes?.author}
                className="max-w-[92vw]"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ListBlog;
