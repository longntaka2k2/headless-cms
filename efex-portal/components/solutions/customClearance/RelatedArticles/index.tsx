"use client";
import clsx from "clsx";
import { RelativeImagePath } from "@/utils/ultils";
import { useEffect, useState } from "react";
import { getPostsBySlug, getPostsQuery } from "@/public/api/strapiService";
import { LocalizeLink, LoadImageRictext, LoadPRictext } from "@/utils/ultils";
import { BlogCardProps } from "@/types";
import { usePathname } from "next/navigation";
import { CustomBlogCard } from "../../x-border-shipping/ShippingBlog/Card";

const ShippingBlog = ({ lang, params }: any) => {
  const locale = usePathname().split("/")[1];
  const [contents, setContents] = useState<BlogCardProps[]>();

  useEffect(() => {
    const getDataByCategory = async () => {
      const data = await getPostsQuery({
        populate: ["banner, tags", "thumbnail"],
        locale: locale,
        filters: {
          slug:
            locale === "en"
              ? {
                $in: [
                  "customs-clearance-service-in-hanoi",
                  "customs-clearance-service-in-ho-chi-minh",
                  "what-is-custom-clearance-meaning",
                ],
              }
              : {
                $in: [
                  "dich-vu-hai-quan-tai-tphcm",
                  "dich-vu-khai-thue-hai-quan-la-gi",
                  "dich-vu-khai-bao-hai-quan-tai-ha-noi",
                ],
              },
        },
        pagination: { page: 1, pageSize: 8 },
        sort: ["publishedAt:desc"],
      }).then((x) => {
        return x.map(({ attributes }: any) => ({
          image: attributes?.thumbnail?.data?.attributes
            ? "https://strapi-efex.ichiba.net" +
            attributes?.thumbnail?.data?.attributes?.url
            : LoadImageRictext(attributes?.body),
          title: attributes?.title,
          description: LoadPRictext(attributes?.body),
          publicAt: attributes?.publishedAt,
          author: attributes?.author,
          url: LocalizeLink(locale, `/blog/${attributes?.slug}`),
        }));
      });

      data && data?.length > 0 && setContents(data as any);
    };
    getDataByCategory();
  }, [locale]);

  return (
    <section
      className={clsx(
        "lg:pt-10 lg:pb-10 pt-6",
        "bg-[url('https://strapi-efex.ichiba.net/uploads/Vector_12_9fbe019ede.svg')]",
        "bg-no-repeat bg-bottom"
      )}
    >
      <h2 className="font-bold text-2xl lg:text-4xl text-center px-4 lg:px-0">
        {lang.heading}
      </h2>
      <div
        className={clsx(
          "flex lg:gap-6 gap-4",
          "container",
          "overflow-auto no-scrollbar snap-x snap-mandatory"
        )}
      >
        {contents?.map((x, idx) => (
          <CustomBlogCard
            key={idx}
            className={clsx(
              "first:ml-4 last:mr-4",
              "mt-[60px] lg:mt-20 mb-5 min-w-[308px] lg:w-auto snap-center scroll-p-2 shadow-7 rounded-2xl"
            )}
            {...x}
            lang={lang}
          />
        ))}
      </div>
    </section>
  );
};

export default ShippingBlog;
