"use client";
import Link from "next/link";
import clsx from "clsx";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { RelativeImagePath } from "@/utils/ultils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { CustomBlogCard } from "./CustomBlogCard";
import { usePathname } from "next/navigation";
import { getPostsQuery } from "@/public/api/strapiService";
import { LocalizeLink } from "@/utils/ultils";
import { LoadPRictext } from "@/utils/ultils";
import { LoadImageRictext } from "@/utils/ultils";
import { BlogCardProps } from "@/types";

const initContents = Array(4)
  .fill("")
  .map(() => ({
    image: RelativeImagePath(
      RelativeImagePath(
        "/uploads/429c4832e9ea5b876803dfd01c9865e8_b13bca4699.png"
      )
    ),
    title: "E-Commerce Indonesia will have a new trend in 2022",
    description:
      "Open Labs said that 2021 was an incredible year for the business world regardless of the challenges. The COVID-19 pandemic that occurred is definitely a factor that cause the m",
    url: "",
  }));

const Resource = ({lang} : any) => {
  const locale = usePathname().split("/")[1];
  const [sliderActive, setSliderActive] = useState<number>(0);
  const sliderRef = useRef<SwiperClass>();
  const [contents, setContents] = useState<BlogCardProps[]>(initContents as any);

  useEffect(() => {
    const getDataByCategory = async () => {
      const data = await getPostsQuery({
        populate: ["banner, tags","thumbnail"],
        locale: locale,
        filters: locale === 'en' ?{
          slug:  { 
            $in: [
              "doing-business-in-vietnam",
              "vietnam-business-culture",
              "business-registration-certificate-in-vietnam",
            ] ,
          },
        } : {

        },
        pagination: { page: 1, pageSize: 3 },
        sort: ["publishedAt:desc"],
      }).then((x) => {
        return x.map(({ attributes }: any) => ({
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
      });

      data && data?.length > 0 && setContents(data as any);
    };
    getDataByCategory();
  }, []);

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
            <h2 className="text-2xl lg:text-4xl font-bold">
              {lang.title}
            </h2>
            <p className="text-sm lg:text-base">
            {lang.subtitle}
            </p>
          </div>
          <Link
            href={`/${locale}/blog`}
            target="_blank"
            className="px-5 py-[14px] text-center rounded-lg bg-brand-primary inline-block"
          >
           {lang.read}
          </Link>
        </div>
        <div className={clsx("absolute bottom-3", "hidden lg:flex gap-6 mr-4")}>
          <FontAwesomeIcon
            role="button"
            icon={faArrowLeft}
            onClick={() => sliderRef.current?.slidePrev()}
            className={clsx(
              " p-3 border-[2px] rounded-full ",
              "opacity-50 hover:opacity-100"
            )}
          />
          <FontAwesomeIcon
            role="button"
            onClick={() => sliderRef.current?.slideNext()}
            icon={faArrowRight}
            className={clsx(
              "rounded-full p-3  border-[2px]", "opacity-50 hover:opacity-100"
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
          {contents.map((x, idx) => (
            <SwiperSlide
              className="scroll-m-16 max-w-[340px] lg:max-w-[384px]"
              key={idx}
            >
              <CustomBlogCard
                key={idx}
                {...x}
                readMore={lang.readMore}
                className=" mt-14 bg-6 lg:mb-20 lg:mt-32 mb-4"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Resource;
