"use client";

import { getPostsQuery } from "@/public/api/strapiService";
import { LocalizeLink } from "@/utils/ultils";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { SwiperClass, Swiper, SwiperSlide } from "swiper/react";
import { CardBlog } from "../blog/CardBlog";

const News = ({ params, lang }: { params: any; lang: any }) => {
  const [active, setActive] = useState(0);
  const [contents, setContents] = useState([]);
  useEffect(() => {
    const getDataByCategory = async () => {
      const data = await getPostsQuery({
        locale: params.lang as string,
        pagination: { page: 1, pageSize: 8 },
        populate: ["banner, tags"],
        sort: ["publishedAt:desc"],
      }).then((x) => {
        return x.map((x: any) => ({
          img: x?.attributes.banner.data.attributes?.url,
          heading: x?.attributes?.title,
          description: x?.attributes?.body,
          publicAt: x?.attributes?.publishedAt,
          author: x?.attributes?.author,
          link: LocalizeLink(
            params.lang,
            `/blog/${x?.attributes?.slug}`
          ),
          tags: x?.attributes?.tags,
        }));
      });

      setContents(data);
    };

    getDataByCategory();
  }, []);

  const refSwiper = useRef<SwiperClass>();
  return (
    <>
      {contents && contents.length > 0 && (
        <section className="my-10">
          <div className=" mb-12">
            <div className="container flex justify-between md:pb-10 px-4">
              <div>
                <h2 className="font-black text-2xl md:text-4xl uppercase mb-4 text-center lg:text-start">
                  {lang.home?.news?.heading}
                </h2>
                <p className="mb-6">{lang.home?.news?.subHeading}</p>
              </div>
              <div className="flex flex-col justify-center">
                <Link
                  href={LocalizeLink(params.lang, "/blog")}
                  className={clsx(
                    "py-3 px-4 font-semibold hidden md:block  hover:text-brand-primary transition-all ",
                    "bg-[#F5f5f5] hover:bg-white border-[#F5f5f5] border-4"
                  )}
                >
                  {lang.common.viewMore} <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
            <Swiper
              onSwiper={(ref) => (refSwiper.current = ref)}
              onSlideChange={(x) => setActive(x.activeIndex)}
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={10}
              navigation={{ enabled: true }}
              breakpoints={{
                984: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              effect="coverflow"
              coverflowEffect={{
                rotate: 30,
                stretch: 100,
                depth: 150,
                modifier: 1.5,
                slideShadows: true,
              }}
              className="container"
            >
              {contents.map((content: any, idx) => (
                <SwiperSlide key={idx}>
                  <CardBlog
                    banner={`https://strapi-ezbuy.ichiba.net${content.img}`}
                    content={content.description}
                    createdAt={content.publicAt}
                    tags={content.tags}
                    title={content.heading}
                    url={content.link}
                    author={content.author}
                    className="!w-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="container hidden md:flex justify-end ">
              <div
                role="button"
                className={clsx(
                  "p-3 rounded-full border-[1px] border-gray-12 hover:bg-gray-12",
                  refSwiper.current?.isBeginning
                    ? "opacity-40 pointer-events-none cursor-auto"
                    : ""
                )}
                onClick={() => refSwiper.current?.slideTo(active - 3)}
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="text-black w-6"
                />
              </div>
              <div className="p-3">
                {`${Math.floor(active / 2) + 1} / ${Math.floor(
                  contents.length / 2
                )}`}
              </div>
              <div
                role="button"
                className={clsx(
                  "p-3 rounded-full border-[1px] border-gray-12 hover:bg-gray-12",
                  refSwiper.current?.isEnd &&
                    "opacity-40 pointer-events-none cursor-auto"
                )}
                onClick={() => refSwiper.current?.slideTo(active + 3)}
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="text-black fa-flip-horizontal w-6"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default News;
