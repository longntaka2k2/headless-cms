"use client";
import clsx from "clsx";
import { RelativeImagePath } from "@/utils/ultils";
import { CustomBlogCard } from "./Card";
import { useEffect, useState } from "react";
import { getPostsQuery } from "@/public/api/strapiService";
import { LocalizeLink, LoadImageRictext, LoadPRictext } from "@/utils/ultils";
import { BlogCardProps } from "@/types";
import { usePathname } from "next/navigation";

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
                    "what-is-cross-border-shipping",
                    "international-shipping-from-vietnam",
                    "shipping-company-in-vietnam",
                  ],
                }
              : {
                  $in: [
                    "gui-hang-thuong-mai-dien-tu-goi-nho-di-my",
                    "gui-hang-thuong-mai-dien-tu-di-philippines",
                    "dich-vu-gui-hang-di-malaysia",
                    "dich-vu-gui-hang-di-thai-lan",
                    "gui-hang-thuong-mai-dien-tu-di-indonesia",
                    "gui-hang-thuong-mai-dien-tu-di-nhat-ban",
                    "gui-hang-di-han-quoc",
                    "gui-hang-di-singapore",
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
        "lg:pt-15 lg:pb-10 pt-6",
        "bg-[url('https://strapi-efex.ichiba.net/uploads/Vector_11_1_e8c046b459.svg')]",
        "bg-no-repeat bg-top"
      )}
    >
      <h2 className="font-bold text-2xl lg:text-4xl text-center px-4 lg:px-0">
        {lang.heading}
      </h2>
      <div
        className={clsx(
          "container flex flex-nowrap lg:gap-6 gap-4",
          "overflow-x-auto scroll-snap-type-x mandatory"
        )}
      >
        {contents?.slice(0, 4).map((x, idx) => (
          <div
            key={idx}
            className={clsx(
              "first:ml-4 last:mr-4 snap-center",
              "mt-[60px] lg:mt-20 min-w-[340px] lg:mx-auto mb-5 shadow-7 rounded-2xl"
            )}
          >
            <CustomBlogCard {...x} lang={lang} />
          </div>
        ))}
      </div>

      {Number(contents?.length) > 4 && (
        <div
          className={clsx(
            "container flex flex-nowrap lg:gap-6 gap-4",
            "overflow-x-auto scroll-snap-type-x mandatory"
          )}
        >
          {contents?.slice(-4).map((x, idx) => (
            <div
              key={idx}
              className={clsx(
                "first:ml-4 last:mr-4 snap-center",
                "mt-[60px] lg:mt-20 min-w-[340px] lg:mx-auto mb-5 shadow-7 rounded-2xl"
              )}
            >
              <CustomBlogCard {...x} lang={lang} />
            </div>
          ))}
        </div>
      )}
      {/* <Link
        href={LocalizeLink(params?.lang, "/blog")}
        target="_blank"
        className={clsx(
          "block w-fit",
          "mx-auto px-5 py-3",
          "bg-brand-primary hover:bg-brand-primary-active  rounded-lg text-white"
        )}
      >
        {lang.cta}
      </Link> */}
    </section>
  );
};

export default ShippingBlog;
