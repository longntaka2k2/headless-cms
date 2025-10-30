"use client";
import clsx from "clsx";
import { LoadImageRictext, LoadPRictext, LocalizeLink } from "@/utils/ultils";
import { CustomBlogCard } from "@/components/sellInVietNam/Resource/CustomBlogCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BlogCardProps } from "@/types";
import { getPostsBySlug } from "@/public/api/strapiService";

const RelatedArticle = ({ lang, params }: any) => {
  const locale = usePathname().split("/")[1];
  const [contents, setContents] = useState<BlogCardProps[]>();
  useEffect(() => {
    const getDataByCategory = async () => {
      const data = await getPostsBySlug(locale === 'en' ? [
        "what-is-a-bonded-warehouse",
        "bonded-warehouse-advantages",
        "how-much-does-it-cost-to-build-a-warehouse",
      ]: [
        "cac-kho-ngoai-quan-tai-tp-hcm",
        "kho-ngoai-quan-la-gi",
        "danh-sach-kho-ngoai-quan-o-ha-noi"
      ],locale as string).then((x) =>
        x.map(({ attributes }: any) => {
          return {
            image: attributes?.thumbnail?.data
              ? "https://strapi-efex.ichiba.net" +
                attributes?.thumbnail?.data?.attributes?.url
              : LoadImageRictext(attributes?.body),
            title: attributes?.title,
            description: LoadPRictext(attributes?.body),
            publicAt: attributes?.publishedAt,
            author: attributes?.author,
            url: LocalizeLink(locale, `/blog/${attributes?.slug}`),
          };
        })
      );

      data && data?.length > 0 && setContents(data as any);
    };
    getDataByCategory();
  }, [locale]);

  return (
    <section
      className={clsx(
        "lg:py-10 py-6",
        "bg-[url('https://strapi-efex.ichiba.net/uploads/Vector_11_4638796a3f.svg')]",
        "bg-cover bg-no-repeat"
      )}
    >
      <h2 className=" text-center">{lang.heading}</h2>
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
            title={x.title}
            description={x.description}
            url={x.url}
            image={x.image}
            className={clsx(
              "first:pl-4 last:pr-4",
              "bg-6 mt-[60px] lg:mt-32 mb-4 min-w-[308px] lg:w-auto snap-center  scroll-p-2 lg:mb-10"
            )} readMore={lang.read}          />
        ))}
      </div>
      <Link
        href={LocalizeLink(params?.lang, "/blog")}
        target="_blank"
        className={clsx(
          "block w-fit",
          "mx-auto px-5 py-3",
          "bg-brand-primary hover:bg-brand-primary-active  rounded-lg text-white capitalize"
        )}
      >
        {lang.cta}
      </Link>
    </section>
  );
};

export default RelatedArticle;
