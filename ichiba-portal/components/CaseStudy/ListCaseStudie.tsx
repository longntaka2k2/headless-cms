"use client";
import { usePathname } from "next/navigation";
import { CardBlog } from "../blog/CardBlog";
import { GetStrapiRelation, RelativeImagePath } from "@/utils/utils";

const ListCaseStudie = ({ posts }: any) => {
  const locale = usePathname().split("/")[1];

  return (
    <div>
      <div className="tw-my-5 ">
        <div className="tw-grid lg:tw-grid-cols-3 md:tw-grid-cols-2 tw-gap-4  lg:tw-gap-6">
          {posts &&
            posts?.map((value: any, index: number) => (
              <CardBlog
                key={index}
                banner={RelativeImagePath(value?.attributes?.image?.data?.attributes?.url)}
                url={`/case-studies/${value?.attributes?.slug}`}
                content={value?.attributes?.content}
                publishedAt={value?.attributes?.publishedAt}
                tags={value?.attributes?.tags}
                title={value?.attributes?.title}
                author={value?.attributes?.author}
                className="tw-max-w-[92vw] hover:scale-105 transition-all duration-1000 ease-in-out"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ListCaseStudie;
