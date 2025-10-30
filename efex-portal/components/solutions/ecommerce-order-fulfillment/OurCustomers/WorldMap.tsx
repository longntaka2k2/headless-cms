"use client";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import "swiper/css/effect-fade";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { desktopLogos, mobileLogos } from "./const";

const NumberCount = ({
  className,
  number,
  description,
}: {
  className?: string;
  number: number | string;
  description: string;
}) => {
  return (
    <div
      className={clsx(
        className,
        "py-2 flex flex-col justify-center items-center gap-1 bg-white rounded-[3.74px]",
        "shadow-[0px_5.29828px_9.34991px_0px_rgba(0,0,0,0.07)] border-[0.312px] border-ic-ink-1",
        "lg:shadow-[0px_17px_30px_0px_rgba(0,0,0,0.07)]"
      )}
    >
      <p className="font-bold text-lg leading-6 lg:text-4xl lg:leading-[48px]">
        {number}
      </p>
      <p className="font-medium text-[10px] leading-[14px] lg:text-lg lg:leading-6 text-ic-ink-6">
        {description}
      </p>
    </div>
  );
};

const LogoLayout = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        className,
        "bg-[rgba(255,255,255,0.40)] flex justify-center items-center"
      )}
    >
      {children}
    </div>
  );
};

export const WorldMap = ({ lang }: { lang: any }) => {
  return (
    <>
      {/** mobile */}
      <div className="mt-5 h-[200px] flex lg:hidden">
        <div
          className={clsx(
            "relative w-full h-[158px] mt-auto px-4 max-[320px]:px-1",
            "bg-[url('https://strapi-efex.ichiba.net/uploads/world_map_444b5a5bb8.png')] bg-contain bg-no-repeat bg-center"
          )}
        >
          <div className="flex justify-center gap-[19px] w-full -mt-9 max-[320px]:gap-1">
            <div className="mt-[38px]">
              <NumberCount
                className="w-[100px] text-[#25AA89]"
                description={lang.B2BBusinesses}
                number="99+"
              />
            </div>
            <div>
              <NumberCount
                className="w-[120px] text-brand-primary mx-auto max-[320px]:w-[100px]"
                description={lang.B2CCustomers}
                number="100.000+"
              />
            </div>
            <div className="mt-[38px]">
              <NumberCount
                className="w-[100px] text-[#F27C08]"
                description={lang.countries}
                number={8}
              />
            </div>
          </div>
          <div className="mt-3">
            <Swiper slidesPerView={1} loop>
              {mobileLogos.map((section, idx) => (
                <SwiperSlide key={idx}>
                  <div className="w-full grid grid-cols-3 gap-y-1 gap-x-[7.48px]">
                    {section.map((item, itemIdx) => (
                      <React.Fragment key={itemIdx}>
                        <LogoLayout className=" h-8 rounded">
                          <Image
                            src={`https://strapi-efex.ichiba.net/uploads/${item.link}`}
                            alt="Logo"
                            width={item.width}
                            height={item.height}
                            quality={100}
                          />
                        </LogoLayout>
                      </React.Fragment>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/** desktop */}
      <div className="mt-10 h-[523px] hidden lg:flex container">
        <div className="h-[463px] mt-[60px] w-full bg-[url('https://strapi-efex.ichiba.net/uploads/Group_906543c17e.webp')] bg-contain bg-no-repeat">
          <div className="flex justify-center gap-[171px] -mt-[60px]">
            <div className="mt-[121px]">
              <NumberCount
                className="w-[198px] h-[120px] text-[#25AA89]"
                description={lang.B2BBusinesses}
                number={99}
              />
            </div>
            <div>
              <NumberCount
                className="w-[255px] h-[120px] text-brand-primary mx-auto"
                description={lang.B2CCustomers}
                number="100.000+"
              />
            </div>
            <div className="mt-[121px]">
              <NumberCount
                className="w-[198px] h-[121px] text-[#F27C08]"
                description={lang.countries}
                number={8}
              />
            </div>
          </div>
          <div className="mt-7 w-full h-full">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="order-fullfilment"
            >
              {desktopLogos.map((section, idx) => (
                <SwiperSlide key={idx}>
                  <div className="grid grid-cols-5 gap-y-4 gap-x-6">
                    {section.map((logo, sectionIdx) => (
                      <React.Fragment key={sectionIdx}>
                        <LogoLayout className="rounded-xl h-[66px]">
                          <Image
                            src={`https://strapi-efex.ichiba.net/uploads/${logo.link}`}
                            alt="Logo"
                            width={logo.width}
                            height={logo.height}
                            quality={100}
                          />
                        </LogoLayout>
                      </React.Fragment>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
