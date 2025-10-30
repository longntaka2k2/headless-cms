import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { RelativeImagePath } from "@/utils/utils";
import { formatDateToDDMMYYYY } from "@/convert";
import endpoints from "@/const/endpoints";
import qs from "qs";
import { useRouter } from "next/router";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import clsx from "clsx";
const ExploreThePoin = () => {
  const { t } = useTranslation("pos");
  const router = useRouter();
  const sliderRef = useRef<SwiperClass>();
  const [sliderActive, setSliderActive] = useState<number>(0);
  const [newsBlogs, setNewsBlogs] = useState([]);
  const getBlogs = async (locale?: string) => {
    const query = qs.stringify({
      populate: ["category-blogs", "image", "title"],
      locale: locale,
      pagination: {
        page: 1,
        pageSize: 3,
      },
      sort: ["publishedAt:desc"],
    });
    const { data } = await fetch(`${endpoints.blog}?${query}`).then((x) =>
      x.json(),
    );
    setNewsBlogs(data);
  };
  useEffect(() => {
    getBlogs(router?.locale);
  }, []);

  return (
    <div className="tw-container tw-pt-6 tw-pb-7 lg:tw-pt-15 lg:tw-pb-20">
      <div className="tw-text-center lg:tw-w-[65%] tw-mx-auto tw-mb-6 lg:tw-mb-10">
        <h2 className="tw-text-2xl tw-leading-8 lg:tw-text-4xl lg:tw-leading-[48px] tw-font-bold tw-mb-2">
          {t("explore.title")}
        </h2>
        <p className="tw-text-sm lg:tw-text-base tw-mb-0">
          {t("explore.subtitle")}
        </p>
      </div>

      <div className="tw-relative">
        <div
          className={clsx(
            "tw-hidden 2xl:tw-flex",
            "tw-absolute tw-left-[-50px] tw-top-[50%] tw-translate-y-[-50%]",
            "tw-w-12 tw-h-12 tw-items-center tw-justify-center",
            "tw-rounded-full tw-border tw-border-[#333] tw-cursor-pointer",
          )}
          onClick={() => sliderRef.current?.slidePrev()}
        >
          <FontAwesomeIcon icon={faArrowLeft} size="sm" />
        </div>
        <div
          className={clsx(
            "tw-hidden 2xl:tw-flex",
            "tw-absolute tw-right-[-50px] tw-top-[50%] tw-translate-y-[-50%]",
            "tw-w-12 tw-h-12 tw-items-center tw-justify-center",
            "tw-rounded-full tw-border tw-border-[#333] tw-cursor-pointer",
          )}
          onClick={() => sliderRef.current?.slideNext()}
        >
          <FontAwesomeIcon icon={faArrowRight} size="sm" />
        </div>
        <Swiper
          onBeforeInit={(swiper) => {
            sliderRef.current = swiper;
          }}
          spaceBetween={25}
          onSlideChange={(e) => setSliderActive(e.activeIndex)}
          className="w-full"
          slidesOffsetBefore={16}
          slidesOffsetAfter={16}
          breakpoints={{
            1000: {
              slidesPerView: 2.3,
            },
            1150: {
              slidesPerView: 2.7,
            },
            1250: {
              slidesPerView: 3,
            },
          }}
        >
          {(newsBlogs?.length as number) > 0 &&
            newsBlogs?.map((value: any, index: number) => (
              <SwiperSlide
                className="scroll-m-16 tw-max-w-[340px] lg:tw-max-w-[384px]"
                key={index}
              >
                <Link
                  rel="canonical"
                  href={"/blog/" + value?.attributes?.slug}
                  target={"_blank"}
                  className="text-decoration-none text-link text-dark"
                >
                  <div className="tw-border tw-border-[#DDD] tw-rounded-3xl tw-overflow-hidden">
                    <Image
                      className="!tw-rounded-none !tw-w-full !tw-max-w-full tw-object-cover"
                      src={RelativeImagePath(
                        value?.attributes?.image?.data?.attributes.url || "",
                      )}
                      width={value?.attributes?.image?.data?.attributes.width}
                      height={value?.attributes?.image?.data?.attributes.height}
                      alt={
                        value?.attributes?.image?.data?.attributes.url
                          ? value?.attributes?.image?.data?.attributes.url
                          : "news-item"
                      }
                    />
                    <div className="lg:tw-p-5 tw-p-4">
                      <span
                        className="d-block text-decoration-none mt-2 "
                        // href={`/blog/category/${value?.attributes?.category_blog?.data?.attributes?.value}`}
                      >
                        {
                          value?.attributes?.category_blog?.data?.attributes
                            ?.label
                        }
                      </span>
                      <p className="tw-my-2 tw-font-bold tw-text-base lg:tw-text-xl tw-line-clamp-2">
                        {value?.attributes?.title}
                      </p>
                      <p className="tw-mb-4 tw-text-base tw-text-[#666] tw-hidden lg:tw-block">
                        {formatDateToDDMMYYYY(value?.attributes?.createdAt)}
                      </p>

                      <div className="tw-flex tw-justify-end">
                        <Link
                          rel="canonical"
                          href={"/blog/" + value?.attributes?.slug}
                          target={"_blank"}
                          className="tw-block tw-no-underline tw-text-sm tw-font-medium tw-text-[#F57C00]"
                        >
                          {t("explore.readMore")}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="tw-ml-2"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ExploreThePoin;
