"use client";
import curve from "@/public/images/icons/solutions/curve.svg";
import customizePackage from "@/public/images/icons/solutions/customizePackage.svg";
import partAutomation from "@/public/images/icons/solutions/partAutomation.svg";
import partHandling from "@/public/images/icons/solutions/partHandling.svg";
import transportService from "@/public/images/icons/solutions/transportService.svg";
import clsx from "clsx";
import Image from "next/image";
import { OptimizeList } from "./OptimizeList";
import Link from "next/link";
import EzImage from "@/components/commons/EzImage";

const OptimizeOrder = ({ lang, params }: { lang: any; params: any }) => {
  const link =
    params === "en"
      ? "https://www.youtube.com/watch?v=QVsY77JVb9I"
      : "https://www.youtube.com/watch?v=5onusd_oOQM";
  const fastOrderList = [
    {
      icon: partHandling,
      description: lang.fastOrder.content[0],
    },
    {
      icon: partAutomation,
      description: lang.fastOrder.content[1],
    },
  ];
  const expandList = [
    {
      icon: transportService,
      description: (
        <>
          {lang.expand.content[0].first}&nbsp;
          <Link
            href={link}
            target="_blank"
            className="font-medium text-brand-primary underline"
          >
            {lang.expand.content[0].second}
          </Link>
          &nbsp;{lang.expand.content[0].third}
        </>
      ),
    },
    {
      icon: customizePackage,
      description: lang.expand.content[1],
    },
  ];

  return (
    <>
      <section className="w-full overflow-x-hidden text-ic-ink-6">
        <div className="container py-6 lg:py-[60px]">
          <div className="w-full mx-auto text-center px-4">
            <h2 className="text-2xl font-bold lg:text-4xl">{lang.title}</h2>
            <p className="mt-1 text-sm text-ic-ink-5 lg:text-lg lg:leading-6">
              {lang.subTitle}
            </p>
          </div>

          {/** mobile */}
          <div className="lg:hidden">
            <div className="flex flex-col gap-3">
              <OptimizeList
                title={lang.fastOrder.title}
                list={fastOrderList}
                className="mt-6 mx-4"
              />
              <div className="relative">
                <div className="relative w-[328px] h-[191px] ml-auto">
                  <Image
                    src={
                      "https://strapi-efex.ichiba.net/uploads/optimize_bg_984327e3cc.svg"
                    }
                    alt=""
                    width={74}
                    height={98}
                    className="absolute top-[14.21px] left-[156.33px]"
                    quality={100}
                  />
                  <div className="bg-[#AF7E00] w-full h-full opacity-10 " />
                  <div className={clsx("absolute top-[23px] -left-[46px]")}>
                    <EzImage
                      src={"/uploads/image_832_6971587ffa.png"}
                      alt=""
                      width={232}
                      height={146}
                      className="w-[232px] h-[146px]"
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={curve}
              alt="Curve"
              width={328}
              height={25}
              className="ml-auto"
              quality={100}
            />
            <div className="">
              <div className="relative w-full">
                <div className="w-[298px] h-[320px] bg-brand-secondary">
                  <EzImage
                    src={"/uploads/Image_3_b6bb1d68d1.png"}
                    alt=""
                    width={354}
                    height={279}
                    className="absolute right-1/2 translate-x-1/2 top-[21px] w-[354px] h-[279px]"
                    quality={100}
                  />
                </div>
              </div>
              <OptimizeList
                title={lang.expand.title}
                list={expandList}
                className="mt-4 mx-4"
              />
            </div>
          </div>

          {/** desktop */}
          <div className="mt-10 hidden lg:block">
            <div className="flex gap-[206px]">
              <div className="self-center">
                <OptimizeList
                  title={lang.fastOrder.title}
                  list={fastOrderList}
                  className="w-[608px] h-fit"
                />
              </div>
              <div className="relative">
                <Image
                  src={
                    "https://strapi-efex.ichiba.net/uploads/optimize_bg_lg_dee07f81cd.svg"
                  }
                  alt=""
                  width={148}
                  height={196}
                  className="absolute top-[32px] left-[322px] w-[148px] h-[196px]"
                  quality={100}
                />
                <div className="bg-[#AF7E00] w-[1000px] h-[430px] opacity-10" />
                <div className={clsx("absolute top-[58px] -left-[102px]")}>
                  <Image
                    src={
                      "https://strapi-efex.ichiba.net/uploads/optimize_order_d8e8673b56.svg"
                    }
                    alt=""
                    width={486}
                    height={306}
                    className="w-[486px] h-[306px]"
                    quality={100}
                  />
                </div>
              </div>
            </div>
            <Image
              src={curve}
              alt="Curve"
              width={763}
              height={45}
              className="ml-[52px] -mt-[2px]"
              quality={100}
            />
            <div className="container flex gap-20">
              <div className="relative w-full max-w-[512px] flex-1">
                <div className="w-[408px] h-[438px] bg-brand-secondary" />
                <Image
                  src={
                    "https://strapi-efex.ichiba.net/uploads/optimize_order_2_lg_svg_8fbcbe07d7.webp"
                  }
                  alt=""
                  width={484}
                  height={382}
                  className="absolute right-0 top-[26px] w-[484px] h-[382px]"
                  quality={100}
                />
              </div>
              <div className="self-center flex-1">
                <OptimizeList
                  title={lang.expand.title}
                  list={expandList}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OptimizeOrder;
