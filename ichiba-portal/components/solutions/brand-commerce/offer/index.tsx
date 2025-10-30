/* eslint-disable @next/next/link-passhref */
import { useTranslation } from "next-i18next";
import cas1 from "@/public/icons/brand-commerce/case1.png";
import cas2 from "@/public/icons/brand-commerce/case2.png";
import cas3 from "@/public/icons/brand-commerce/case3.png";
import { Swiper, SwiperSlide, SwiperClass, SwiperRef } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { GetBlogs, GetCategories } from "@/services/strapi";
import { Any } from "react-spring";
import Link from "next/link";

const Offer = () => {
  const { t } = useTranslation("brand-commerce");
  const items = [
    {
      title: t("offer.case.title"),
      tag: t("offer.case.tag"),
      bg: cas1.src,
    },
    {
      title: t("offer.case.title"),
      tag: t("offer.case.tag"),
      bg: cas2.src,
    },
    {
      title: t("offer.case.title"),
      tag: t("offer.case.tag"),
      bg: cas3.src,
    },
  ];
  const swiperRef = useRef<SwiperRef | null>(null);
  const [dataBlog, setDataBlog] = useState([] as any);

  const [activeIndex, setActiveIndex] = useState(0);

  const onSlideChange = (swiper: SwiperClass) =>
    setActiveIndex(swiper.realIndex);

  const router = useRouter();
  const getBlog = async () => {
    const query = {
      populate: "deep",
      filters: {
        locale: router.locale,
        category_blog: {
          value: "customer-say", // value
        },
      },
      sort: ["publishedAt:desc"],
      pagination: {
        start: 0,
        limit: 9,
      },
    };
    const blogs = await GetBlogs(query);
    setDataBlog(blogs.slice(0, 3));
  };
  useEffect(() => {
    getBlog();
  }, []);
  return (
    <div className="brand-commerce tw-bg-[linear-gradient(to_bottom,_#00194F_0%,_#00194F_70%,_#FFF_70%,_#FFF_100%);] text-white tw-py-10">
      <div className="tw-container tw-text-center lg:tw-max-w-[792px] tw-mx-auto">
        <div className="tw-font-bold tw-text-xl lg:tw-text-4xl">
          {t("offer.title")}
        </div>
        <div className="tw-text-sm lg:tw-text-base tw-mt-2">
          {t("offer.subtitle")}
        </div>
      </div>
      <div className="tw-mt-6 tw-hidden lg:tw-grid tw-grid-cols-3 tw-container tw-gap-6">
        {dataBlog.map((x: any, index: number) => (
          <div
            key={index}
            className={clsx(
              "tw-py-[26px] tw-bg-cover tw-px-6 tw-rounded-xl tw-bg-no-repeat tw-relative tw-z-0",
              "before:tw-absolute before:tw-rounded-xl before:tw-z-1 before:tw-top-0 before:tw-left-0 before:tw-right-0 before:tw-full before:tw-w-full before:tw-h-full before:tw-bg-[rgba(0,0,0,0.5)]",
            )}
            style={{
              backgroundImage: `url(${x.attributes?.image?.data?.attributes?.url})`,
            }}
          >
            <div className="tw-relative tw-z-10">
              <div className="tw-uppercase tw-text-xs ">
                {x.attributes.category_blog.data.attributes.label}
              </div>
              <div className="tw-py-4 tw-font-bold">{x.attributes.title}</div>
              <Link
                target="_blank"
                href={`/blog/${x.attributes.slug}`}
                className="tw-py-2 tw-px-3 tw-rounded-lg tw-text-white tw-bg-brand-primary tw-w-max"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="tw-mt-6 lg:tw-hidden">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          onSlideChange={onSlideChange}
          className="tw-h-full"
        >
          {dataBlog.map((x: any, index: number) => (
            <SwiperSlide className="tw-h-full" key={index}>
              <div
                className={clsx(
                  "tw-py-[26px] tw-px-6 tw-rounded-xl tw-relative",
                  "before:tw-absolute before:tw-rounded-xl before:tw-z-1 before:tw-top-0 before:tw-left-0 before:tw-right-0 before:tw-full before:tw-w-full before:tw-h-full before:tw-bg-[rgba(0,0,0,0.5)]",
                )}
                style={{
                  backgroundImage: `url(${x.attributes?.image?.data?.attributes?.url})`,
                }}
              >
                <div className="tw-relative tw-z-10">
                  <div className="tw-uppercase tw-text-xs">
                    {x.attributes.category_blog.data.attributes.label}
                  </div>
                  <div className="tw-py-4 tw-font-bold">
                    {x.attributes.title}
                  </div>
                  <Link
                    target="_blank"
                    href={`/blog/${x.attributes.slug}`}
                    className="tw-block tw-py-2 tw-px-3 tw-rounded-lg tw-text-white tw-bg-brand-primary tw-w-max"
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="tw-flex tw-gap-5 tw-justify-center tw-mt-6">
          {items.map((x: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-max-w-[12px] tw-w-full tw-h-3 tw-rounded-full",
                activeIndex === index ? "tw-bg-brand-primary " : "tw-bg-[#ddd]",
              )}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
