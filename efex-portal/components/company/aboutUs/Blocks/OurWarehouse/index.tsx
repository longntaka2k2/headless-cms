"use client";
import Link from "next/link";
import clsx from "clsx";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { RelativeImagePath } from "@/utils/ultils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { getPostsQuery } from "@/public/api/strapiService";
import { LocalizeLink } from "@/utils/ultils";
import { LoadPRictext } from "@/utils/ultils";
import { LoadImageRictext } from "@/utils/ultils";
import { BlogCardProps } from "@/types";
import EzImage from "@/components/commons/EzImage";
import { Element } from "react-scroll";

const OurWarehouse = ({ lang }: any) => {
  const [sliderActive, setSliderActive] = useState<number>(0);
  const sliderRef = useRef<SwiperClass>();
  const [contents, setContents] = useState<string[]>([
    "/uploads/Mask_group_aa0b62f745.png",
    "/uploads/Mask_group_1_193c972699.png",
    "/uploads/Mask_group_2_bb5d9bc6ba.png",
    "/uploads/Mask_group_3_76677a7c0a.png",
  ]);

  return (
    <Element name="warehouse" className="flex flex-col lg:flex-row  pt-6 ">
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
            <h2 className="mb-2">{lang.heading}</h2>
            <p className="text-sm lg:text-base">{lang.subHeading}</p>
          </div>
        </div>
        <div className={clsx("absolute bottom-3", "hidden lg:flex gap-6 mr-4")}>
          <FontAwesomeIcon
            role="button"
            icon={faArrowRight}
            onClick={() => sliderRef.current?.slidePrev()}
            className={clsx(
              "rotate-180 p-3  border-[2px] rounded-full ",
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
              "rounded-full p-3  border-[2px]",
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
          className="w-full !py-9 !lg:py-15"
          slidesOffsetBefore={16}
          slidesPerView={2.3}
          breakpoints={{
            640: {
              spaceBetween: 12,
            },
            1200: {
              slidesPerView: 3.6,
              spaceBetween: 24,
              slidesOffsetBefore: 64,
            },
          }}
        >
          {contents.map((x, idx) => (
            <SwiperSlide className=" scroll-m-16" key={idx}>
              <EzImage src={x} alt="" width={300} height={300} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Element>
  );
};
export default OurWarehouse;
