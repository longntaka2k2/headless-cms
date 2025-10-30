"use client";
import {
  faArrowRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import { SwiperClass, Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { SlideContent } from "./shared/SlideContent";
import { useRef, useState } from "react";
import Image from "next/image";

const ContentComp = ({
  lang,
  contents,
  heading,
  subHeading,
  link,
  bgLink,
}: {
  lang: any;
  heading: string;
  subHeading: string;
  contents: any[];
  link: string;
  bgLink: string;
}) => {
  const refSwiper = useRef<SwiperClass>();
  const [active, setActive] = useState(0);
  return (
    <div className=" container w-full mb-12">
      <div className="z-10 top-[100px]  px-4 md:px-0">
        <div className=" top-10">
          <div className="flex flex-col py-12 pr-6 pl-0 gap-6 z-10 ">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <p className="text-2xl font-bold">{heading}</p>
              <div className="self-stretch relative text-base leading-[150%]">
                {subHeading}
              </div>
            </div>
            <Link
              href={link}
              target="_blank"
              className="flex flex-row items-center justify-start gap-[12px] text-sm text-[#00194F]"
            >
              <div className="relative leading-[150%] font-medium">
                {lang.common.learnMore}
              </div>
              <div className="relative text-base leading-[150%] text-center flex items-center justify-center w-4 h-4 shrink-0">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "lg:px-0",
          // "h-[480px]",
          "bg-cover bg-center w-full",
          "!bg-center !bg-contain !bg-no-repeat"
        )}
        // style={{ background: `url(${bgLink})` }}
      >
        <Image src={bgLink} alt="Background Ezbuy" width={1176} height={480} quality={100} />
        {/* {contents && contents?.length > 0 && (
          <div className="relative h-full w-full ">
            <div
              className={clsx(
                "lghidden bottom-[-18%] gap-4 text-center text-base overflow-hidden",
                "flex flex-col items-start justify-start absolute z-10 w-full lg:w-[99%] !px-[2%] !pr-0"
              )}
            >
              <div className="hidden lg:flex flex-row items-start justify-start gap-2 text-white">
                <div className="bg-gray-2 flex flex-col p-2 items-center justify-center">
                  <div className="leading-[150%] inline-block w-6 h-6 shrink-0">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </div>
                </div>
                <div className="bg-gray-2 flex flex-col p-2 items-center justify-center">
                  <div className="leading-[150%] inline-block w-6 h-6 shrink-0">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                </div>
              </div>
              <Swiper
                onSwiper={(ref) => (refSwiper.current = ref)}
                modules={[FreeMode]}
                onSlideChange={(x) => setActive(x.activeIndex)}
                slidesPerView={1.5}
                spaceBetween={10}
                navigation={{ enabled: true }}
                breakpoints={{
                  984: {
                    slidesPerView: 4.3,
                    spaceBetween: 10,
                  },
                }}
                className="text-left text-sm text-gray-10 overflow-hidden w-full"
              >
                {contents.map((content, idx) => (
                  <SwiperSlide key={idx}>
                    <SlideContent {...content} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};
const Services2 = ({ lang }: { lang: any }) => {
  const { services } = lang.home;

  return (
    <section className="">
      <div
        className={clsx(
          "text-whitesmoke-200 font-black select-none ",
          "text-[100px] lg:leading-[100%] -z-10 overflow-hidden w-full",
          "absolute lg:left-[calc(50%_-_1077px)] lg:text-[400px] left-[-10%] "
        )}
      >
        <span className={clsx("overflow-hidden ")}>{services.services}</span>
      </div>
      <div className="container">
        <div className="leading-[150%] text-4xl uppercase font-black inline-block md:w-[576px] px-4">
          {lang.home.services.services}
        </div>
        <ContentComp
          heading={lang.home.services.heading}
          lang={lang}
          subHeading={lang.home.services.subHeading}
          contents={[
            {
              title: lang.home.common.airFreight,
              image:
                "https://strapi-ezbuy.ichiba.net/uploads/Air_Freight_0772923bc1.png",
            },
            {
              title: lang.home.common.seaFreight,
              image:
                "https://strapi-ezbuy.ichiba.net/uploads/Sea_Freight_af61f9ea80.png",
            },
            {
              title: lang.home.common.surfaceFreight,
              image:
                "https://strapi-ezbuy.ichiba.net/uploads/Surface_Freight_b3fae8ee69.png",
            },
            {
              title: lang.home.common.express,
              image:
                "https://strapi-ezbuy.ichiba.net/uploads/Express_8a3f2e9489.png",
            },
            {
              title: lang.home.common.express,
              image:
                "https://strapi-ezbuy.ichiba.net/uploads/Express_8a3f2e9489.png",
            },
            {
              title: lang.home.common.crossBorder,
              image:
                "https://strapi-ezbuy.ichiba.net/uploads/Express_8a3f2e9489.png",
            },
            {
              title: lang.home.common.lastMile,
              image:
                "https://strapi-ezbuy.ichiba.net/uploads/Express_8a3f2e9489.png",
            },
          ]}
          bgLink="https://strapi-ezbuy.ichiba.net/uploads/image_24_b9b3ec4bd2.png"
          link="/services/crossboder-ecommerce-shipping"
        />
        <ContentComp
          heading={lang.home.warehouseFulfillment.heading}
          lang={lang}
          subHeading={lang.home.warehouseFulfillment.subHeading}
          contents={[
            {
              title: lang.home.common.airFreight,
              image:
                "https://strapi-ezbuy.ichiba.net/uploads/Air_Freight_0772923bc1.png",
            },
            {
              title: lang.home.common.seaFreight,
              image:
                "https://strapi-ezbuy.ichiba.net/uploads/Sea_Freight_af61f9ea80.png",
            },
            {
              title: lang.home.common.surfaceFreight,
              image:
                "https://strapi-ezbuy.ichiba.net/uploads/Surface_Freight_b3fae8ee69.png",
            },
          ]}
          bgLink="https://strapi-ezbuy.ichiba.net/uploads/Warehouse_Fulfillment_87f941d13a.png"
          link="/services/warehouse-fulfillment"
        />
        <ContentComp
          lang={lang}
          heading={lang.home.sellInJapan.heading}
          subHeading={lang.home.sellInJapan.subHeading}
          contents={[
            {
              title: lang.home.common.airFreight,
              image:
                "https://strapi-ezbuy.ichiba.net/uploads/Air_Freight_0772923bc1.png",
            },
            {
              title: lang.home.common.seaFreight,
              image:
                "https://strapi-ezbuy.ichiba.net/uploads/Sea_Freight_af61f9ea80.png",
            },
            {
              title: lang.home.common.surfaceFreight,
              image:
                "https://strapi-ezbuy.ichiba.net/uploads/Surface_Freight_b3fae8ee69.png",
            },
          ]}
          bgLink="https://strapi-ezbuy.ichiba.net/uploads/Sell_in_japan_5f8d681c7f.png"
          link="/services/sell-in-japan"
        />
        <ContentComp
          lang={lang}
          heading={lang.home.b2bTrading.heading}
          subHeading={lang.home.b2bTrading.subHeading}
          contents={[
            {
              title: lang.home.common.airFreight,
              image:
                "https://strapi-ezbuy.ichiba.net/uploads/Air_Freight_0772923bc1.png",
            },
            {
              title: lang.home.common.seaFreight,
              image:
                "https://strapi-ezbuy.ichiba.net/uploads/Sea_Freight_af61f9ea80.png",
            },
            {
              title: lang.home.common.surfaceFreight,
              image:
                "https://strapi-ezbuy.ichiba.net/uploads/Surface_Freight_b3fae8ee69.png",
            },
          ]}
          bgLink="https://strapi-ezbuy.ichiba.net/uploads/b2_B_Ecommerce_874760f6a1.png"
          link="/services/b2b-trading-ecommerce"
        />
        <ContentComp
          lang={lang}
          heading={lang.home.airFreight.heading}
          subHeading={lang.home.airFreight.subHeading}
          contents={[
            {
              title: lang.home.common.airFreight,
              image:
                "https://strapi-ezbuy.ichiba.net/uploads/Air_Freight_0772923bc1.png",
            },
            {
              title: lang.home.common.seaFreight,
              image:
                "https://strapi-ezbuy.ichiba.net/uploads/Sea_Freight_af61f9ea80.png",
            },
            {
              title: lang.home.common.surfaceFreight,
              image:
                "https://strapi-ezbuy.ichiba.net/uploads/Surface_Freight_b3fae8ee69.png",
            },
          ]}
          bgLink="https://strapi-ezbuy.ichiba.net/uploads/air_Freight_d4d672c854.png"
          link="/services/air-freight-customs-clearance"
        />
      </div>
    </section>
  );
};

export default Services2;
