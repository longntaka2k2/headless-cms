"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Navigation } from "swiper/modules";

import { SwiperSlide, Swiper, SwiperClass } from "swiper/react";

const SlideContent = ({
  heading,
  subHeading,
  description,
  image,
}: {
  heading: string;
  subHeading: string;
  description: string;
  image: string;
}) => {
  return (
    <article className="bg-white lg:min-h-[424px] w-full">
      <div className="flex flex-col lg:flex-row h-full">
        <div className="flex flex-col gap-6 p-6 lg:p-12 flex-1 bg-gray-200 lg:bg-transparent">
          <div className="lg:h-[253px]">
            <h1 className="font-black text-lg lg:text-xl pb-4">{heading}</h1>
            <p className="text-sm lg:text-base font-semibold">{subHeading}</p>
          </div>
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex-1 h-full">
          <Image
            src={image}
            width={344}
            height={506}
            alt="Ezbuy"
            className="object-bottom object-cover w-full"
          />
        </div>
      </div>
    </article>
  );
};
const CustomerStory = ({ lang }: { lang: any }) => {
  const { customerStories } = lang.home;
  const contents = [
    {
      ...customerStories.stories[0],
      image: `https://strapi-ezbuy.ichiba.net/uploads/Frame_19119_65a1be5089.png`,
    },
    {
      ...customerStories.stories[1],
      image: `https://strapi-ezbuy.ichiba.net/uploads/Frame_19119_65a1be5089.png`,
    },
    {
      ...customerStories.stories[2],
      image: `https://strapi-ezbuy.ichiba.net/uploads/Frame_19119_65a1be5089.png`,
    },
    {
      ...customerStories.stories[1],
      image: `https://strapi-ezbuy.ichiba.net/uploads/Frame_19119_65a1be5089.png`,
    },
  ];
  const refSwiper = useRef<SwiperClass>();
  const [active, setActive] = useState(0);
  const moveTo = (index: number) => {
    setActive(index);
    refSwiper.current?.slideTo(index);
  };
  return (
    <section className="my-10 px-4">
      <div className="container mb-12">
        <div className="flex justify-center lg:justify-between">
          <div>
            <h2 className="font-black text-2xl md:text-4xl uppercase mb-4">
              {customerStories.heading}
            </h2>
            <p>{customerStories.subHeading}</p>
          </div>
          <div className="flex flex-col-reverse">
            <Link
              href="#"
              className="py-3 px-4 font-semibold bg-[#F5f5f5] hidden md:block"
            >
              {lang.common.viewMore} <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </div>

      <Swiper
        onSwiper={(ref) => (refSwiper.current = ref)}
        onSlideChange={(x) => setActive(x.activeIndex)}
        modules={[Navigation]}
        onAfterInit={(x) => x.slideNext()}
        slidesPerView={1}
        spaceBetween={0}
        navigation={{ enabled: true }}
        // centeredSlides={true}
        breakpoints={{
          984: {
            slidesPerView: 2.2,
            spaceBetween: 30,
          },
        }}
        // loop={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 30,
          stretch: 100,
          depth: 150,
          modifier: 1.5,
          slideShadows: true,
        }}
        className="lg:h-[630px]"
      >
        {contents.map((content, idx) => (
          <SwiperSlide key={idx}>
            <SlideContent {...content} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center">
        {contents.map((x, idx) => (
          <div
            key={idx}
            className={clsx(
              "inline-block border-b-[3px] border-solid border-brand-primary mr-2",
              "w-[20px] lg:w-[76px]",
              "h-[10px]",
              "lg:h-[30px]",
              idx == active ? "opacity-100" : "opacity-60"
            )}
            onClick={() => moveTo(idx)}
          >
            <span className={clsx("hidden lg:inline-block font-medium")}>
              {idx + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default CustomerStory;
