"use client";
import { DefaultBlogCard } from "@/components/commons/DefaultBlogCard";
import { Cta } from "@/components/commons/Cta";
import { getPostsQuery } from "@/public/api/strapiService";
import { BlogCardProps } from "@/types";
import {
  LoadImageRictext,
  LoadPRictext,
  LocalizeLink,
  RelativeImagePath,
} from "@/utils/ultils";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

const RelatedResource = ({ lang }: { lang: any }) => {
  const locale = usePathname().split("/")[1];
  const [sliderActive, setSliderActive] = useState<number>(0);
  const sliderRef = useRef<SwiperClass>();
  const [contents, setContents] = useState<BlogCardProps[]>();

  useEffect(() => {
    const getDataByCategory = async () => {
      const data = await getPostsQuery({
        populate: ["banner, tags", "thumbnail"],
        locale: locale,
        filters: {
          slug: locale === 'en' ? {
            $in: [
              "what-is-fulfillment",
              "omnichannel-fulfillment",
              "order-fulfillment-cost",
            ],
          } : {
            $in: [
              "fulfillment-la-gi",
              "e-fulfillment-la-gi",
              "dich-vu-order-fulfillment",
            ],
          },
        },
        pagination: { page: 1, pageSize: 8 },
        sort: ["publishedAt:desc"],
      });
      if (!data || data.length <= 0) {
        return;
      }

      const formattedData = data.map(({ attributes }: any) => ({
        image: attributes?.thumbnail?.data
          ? "https://strapi-efex.ichiba.net" +
          attributes?.thumbnail?.data?.attributes?.url
          : LoadImageRictext(attributes?.body),
        title: attributes?.title,
        description: LoadPRictext(attributes?.body),
        publicAt: attributes?.publishedAt,
        author: attributes?.author,
        url: LocalizeLink(locale, `/blog/${attributes?.slug}`),
      }));
      setContents(formattedData as any);
      return formattedData;
    };
    getDataByCategory();
  }, []);

  return (
    <section className="flex flex-col lg:flex-row mb-6 lg:mb-15">
      <div
        className={clsx(
          "relative text-white",
          "flex items-center gap-5",
          "lg:w-2/5 lg:justify-end min-h-[200px] px-4 py-6",
          "bg-[linear-gradient(104deg,_#00194F_0.49%,rgba(22,21,92,0.92)_45.4%)]"
        )}
      >
        <div className="w-fit lg:w-[55%]">
          <div>
            <h2 className="text-2xl font-bold lg:text-4xl lg:leading-12">
              {lang.relatedResource.title}
            </h2>
            <p className="mt-1 text-ic-white-5 text-sm lg:text-base">
              {lang.relatedResource.subtitle}
            </p>
          </div>
          <Cta
            href={`/${locale}/blog`}
            target="_blank"
            className="mt-5 min-h-10 flex justify-center items-center lg:w-[140px]"
          >
            {lang.relatedResource.viewAll}
          </Cta>
        </div>
        <div className="absolute bottom-3 hidden lg:flex gap-6 mr-4">
          <FontAwesomeIcon
            role="button"
            icon={faArrowRight}
            onClick={() => sliderRef.current?.slidePrev()}
            className={clsx(
              "rotate-180 p-3 border-[2px] rounded-full hover:opacity-100"
            )}
          />
          <FontAwesomeIcon
            role="button"
            onClick={() => sliderRef.current?.slideNext()}
            icon={faArrowRight}
            className={clsx("rounded-full p-3 border-[2px] hover:opacity-100")}
          />
        </div>
      </div>
      <div className="lg:w-3/5 bg-[#FCF1EE]">
        <Swiper
          onBeforeInit={(swiper) => {
            sliderRef.current = swiper;
          }}
          spaceBetween={24}
          onSlideChange={(e) => setSliderActive(e.activeIndex)}
          className="w-full"
          slidesOffsetBefore={16}
          slidesOffsetAfter={16}
          slidesPerView={"auto"}
          breakpoints={{
            640: {
              spaceBetween: 12,
            },
            1024: {
              spaceBetween: 24,
              slidesOffsetAfter: 64,
              slidesOffsetBefore: 64,
            },
          }}
        >
          {contents?.map((blog, index) => (
            <SwiperSlide
              className="scroll-m-16 max-w-[340px] lg:max-w-[384px]"
              key={index}
            >
              <DefaultBlogCard
                key={index}
                {...blog}
                className=" mt-14 bg-6 lg:mb-20 lg:mt-32 mb-4"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RelatedResource;
