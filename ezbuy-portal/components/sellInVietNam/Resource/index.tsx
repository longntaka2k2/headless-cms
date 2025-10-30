"use client";
import Link from "next/link";
import clsx from "clsx";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { CustomBlogCard, Props as CustomBlogCardProps } from "./CustomBlogCard";
import { usePathname } from "next/navigation";
import { LoadPRictext, LocalizeLink, RelativeImagePath } from "@/utils/ultils";
import { getPostsQuery } from "@/public/api/strapiService";

const Resource = ({ lang }: any) => {
  const locale = usePathname().split("/")[1];
  const [sliderActive, setSliderActive] = useState<number>(0);
  const sliderRef = useRef<SwiperClass>();

  const [contents, setContents] = useState<CustomBlogCardProps[]>([
    {
      image: "/uploads/429c4832e9ea5b876803dfd01c9865e8_1_5e70bc3928.png",
      title: "E-Commerce Indonesia will have a new trend in 2022",
      description:
        "Open Labs said that 2021 was an incredible year for the business world regardless of the challenges. The COVID-19 pandemic that occurred is definitely a factor that cause the m",
      url: "",
    },
    {
      image: "/uploads/47006d8d795827aac0760872d0865be1_1_7fff1b9a7c.png",
      title: "E-Commerce Indonesia will have a new trend in 2022",
      description:
        "Open Labs said that 2021 was an incredible year for the business world regardless of the challenges. The COVID-19 pandemic that occurred is definitely a factor that cause the m",
      url: "",
    },
    {
      image: "/uploads/Rectangle_7138_3_1_7574a3c796.png",
      title: "E-Commerce Indonesia will have a new trend in 2022",
      description:
        "Open Labs said that 2021 was an incredible year for the business world regardless of the challenges. The COVID-19 pandemic that occurred is definitely a factor that cause the m",
      url: "",
    },
    {
      image: "/uploads/429c4832e9ea5b876803dfd01c9865e8_1_5e70bc3928.png",
      title: "E-Commerce Indonesia will have a new trend in 2022",
      description:
        "Open Labs said that 2021 was an incredible year for the business world regardless of the challenges. The COVID-19 pandemic that occurred is definitely a factor that cause the m",
      url: "",
    },
  ]);

  useEffect(() => {
    const getDataByCategory = async () => {
      const data = await getPostsQuery({
        locale: locale as string,
        pagination: { page: 1, pageSize: 8 },
        populate: ["banner, tags"],
        sort: ["publishedAt:desc"],
      }).then((x) => {
        return x.map((x: any) => ({
          image: x?.attributes.banner.data.attributes?.url,
          title: x?.attributes?.title,
          description: LoadPRictext(x?.attributes?.body),
          publicAt: x?.attributes?.publishedAt,
          author: x?.attributes?.author,
          url: LocalizeLink(locale, `/blog/${x?.attributes?.slug}`),
        }));
      });

      data && data?.length > 0 && setContents(data);
    };
    getDataByCategory();
  }, [locale]);

  return (
    <section className="flex flex-col lg:flex-row  pt-6 ">
      <div
        className={clsx(
          "relative",
          "flex items-center gap-5 lg:justify-end",
          "lg:w-2/5 min-h-[200px] px-4 py-6",
          "bg-[linear-gradient(104deg,_#00194F_0.49%,rgba(22,21,92,0.92)_45.4%)]",
          "text-white"
        )}
      >
        <div className="w-fit lg:w-[55%] lg:pr-[38px]">
          <div className="mb-5">
            <h2 className="text-2xl lg:text-4xl font-bold">{lang.heading}</h2>
            <p className="text-sm lg:text-base">{lang.subHeading}</p>
          </div>
          <Link
            href={`/${locale}/blog`}
            role="button"
            target="_blank"
            className="px-5 py-[14px] text-center rounded-lg bg-brand-secondary active:bg-brand-secondary-active inline-block"
          >
            {lang.cta}
          </Link>
        </div>
        <div className={clsx("absolute bottom-3", "hidden lg:flex gap-6 mr-4")}>
          <FontAwesomeIcon
            role="button"
            icon={faArrowRight}
            onClick={() => sliderRef.current?.slidePrev()}
            className={clsx(
              "rotate-180 p-3 border-[2px] rounded-full",
              sliderRef.current?.isBeginning
                ? "opacity-0"
                : "opacity-50 hover:opacity-100"
            )}
          />
          <FontAwesomeIcon
            role="button"
            onClick={() => sliderRef.current?.slideNext()}
            icon={faArrowRight}
            className={clsx(
              "rounded-full p-3 border-[2px]",
              sliderRef.current?.isEnd
                ? "opacity-0"
                : "opacity-50 hover:opacity-100"
            )}
          />
        </div>
      </div>
      <div className={clsx("lg:w-3/5 bg-[#FCF1EE]")}>
        <Swiper
          onBeforeInit={(swiper) => {
            sliderRef.current = swiper;
          }}
          spaceBetween={24}
          onSlideChange={(e) => setSliderActive(e.activeIndex)}
          className="w-full"
          slidesOffsetBefore={16}
          slidesPerView={1.15}
          breakpoints={{
            640: {
              spaceBetween: 12,
              centeredSlides: true,
            },
            1200: {
              slidesPerView: 2.7,
              spaceBetween: 24,
              slidesOffsetBefore: 64,
            },
          }}
        >
          {contents?.map((x, idx) => (
            <SwiperSlide className=" scroll-m-16" key={idx}>
              <CustomBlogCard
                key={idx}
                {...x}
                image={RelativeImagePath(x.image)}
                className=" mt-12 bg-6 lg:mb-20 lg:mt-32 mb-4"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Resource;
