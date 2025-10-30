import clsx from "clsx";
import { useRef, useState } from "react";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { divide, slice } from "lodash";
const PressSays = ({ lang }: { lang: any }) => {
  return (
    <div className="relative py-6 lg:pt-20 lg:pb-10 overflow-hidden">
      <div className="container px-4 lg:px-0">
        <h2 className="text-2xl lg:text-4xl font-bold lg:leading-[48px] text-center mx-auto mb-6 lg:mb-10">
          {lang.heading}
        </h2>

        <div className="grid lg:grid-cols-2 gap-3 lg:gap-6 h-full">
          <Link
            href={lang.items[0].link}
            target="_blank"
            className={clsx(
              "hover:-translate-y-2 transition-all ease-in-out duration-300",
              "p-2 lg:p-4 rounded-xl lg:rounded-[20px] bg-white shadow-[0px_0px_12px_0px_rgba(54,_50,_46,_0.08)] grid gap-2 lg:gap-4"
            )}
          >
            <Image
              src={lang.items[0].image}
              width={556}
              height={300}
              alt="EFEX"
              className="mx-auto"
            />
            <div>
              <h3 className="text-base lg:text-xl font-bold mb-1 lg:mb-2">
                {lang.items[0].title}
              </h3>
              <p className="text-sm lg:text-base mb-4">
                {lang.items[0].subTitle}
              </p>
              <div className="flex items-center justify-between">
                <Image
                  src={lang.items[0].logo}
                  width={383}
                  height={131}
                  alt="EFEX"
                  className="w-auto h-10"
                />

                <Link
                  href={lang.items[0].link}
                  target="_blank"
                  className="w-max flex items-center text-sm text-[#AF0000] font-medium"
                >
                  {lang?.readMore}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-1"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>
          </Link>
          <div className="grid gap-3 lg:gap-6">
            {lang.items.slice(1).map((item: any, index: number) => (
              <Link
                key={index}
                target="_blank"
                href={item.link}
                className="hover:-translate-y-2 transition-all ease-in-out duration-300"
              >
                <div className="p-2 lg:p-4 rounded-xl lg:rounded-[20px] bg-white shadow-[0px_0px_12px_0px_rgba(54,_50,_46,_0.08)] flex gap-2 lg:gap-4 ">
                  <div className="min-w-[160px] min-h-[145px] xl:min-w-[310px] xl:min-h-[226px] relative rounded-lg xl:rounded-2xl rounded-tl-none xl:rounded-tl-none overflow-hidden">
                    <Image
                      src={item.image}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="top left"
                      alt="EFEX"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-base lg:text-xl font-bold mb-1 lg:mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm lg:text-base mb-4 line-clamp-2 lg:line-clamp-5">
                        {item.subTitle}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <Image
                        src={item.logo}
                        width={383}
                        height={131}
                        alt="EFEX"
                        className="w-auto h-8"
                      />

                      <Link
                        href={item.link}
                        target="_blank"
                        className="w-max flex items-center text-xs xl:text-sm text-[#AF0000] font-medium"
                      >
                        {lang?.readMore}
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          width={24}
                          height={24}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Image
        src="https://strapi-efex.ichiba.net/uploads/Group_19149_b2720840a6.svg"
        width={355}
        height={758}
        alt="EFEX"
        className="absolute top-0 left-[-5%] w-[241px] h-[261px] lg:w-[355px] lg:h-[758px] -z-1"
      />
    </div>
  );
};

export default PressSays;

