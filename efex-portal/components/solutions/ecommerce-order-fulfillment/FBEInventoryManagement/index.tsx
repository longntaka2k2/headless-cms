"use client";
import { faArrowRightLong, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FBEDesktopList, FBEMobileList } from "./FBEList";

const FBEInventoryManagement = ({
  lang,
  params,
}: {
  lang: any;
  params: any;
}) => {
  const list = [
    {
      title: lang.manageInventory.title,
      content: lang.manageInventory.description,
    },
    {
      title: lang.orderDistribution.title,
      content: lang.orderDistribution.description,
    },
    {
      title: lang.reserveInventory.title,
      content: lang.reserveInventory.description,
    },
    {
      title: lang.trackInventoryAge.title,
      content: lang.trackInventoryAge.description,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const learmoreHref =
    params.lang === "vi"
      ? "https://efex.vn/vi/blog/fulfillment-la-gi"
      : "https://efex.vn/en/blog/ecommerce-order-fulfillment-guide";
  const videoHref = "https://www.youtube.com/watch?v=GJJtVp88fKk";
  return (
    <section>
      <div
        className={clsx(
          "bg-[url('https://strapi-efex.ichiba.net/uploads/image_826_39172fd5e9.webp')] overflow-hidden",
          "lg:hidden"
        )}
      >
        {/** mobile */}
        <div className="container pt-6 pb-8">
          <div className="px-4">
            <h2 className="text-2xl font-bold text-white">{lang.title}</h2>
            <p className="text-sm text-ic-white-5 mt-1">{lang.subTitle}</p>
            <div className="flex justify-between items-center mt-4">
              <Link href={videoHref} target="_blank">
                <button className="text-white flex items-center gap-3 px-5 py-2 bg-brand-primary rounded-lg">
                  <FontAwesomeIcon
                    icon={faPlay}
                    width={15}
                    height={18}
                    className="w-[15px] h-[18px]"
                  />
                  <p className="text-sm font-medium">{lang.watchVideo}</p>
                </button>
              </Link>
              <Link
                href={learmoreHref}
                target="_blank"
                className="text-white flex items-center gap-2"
              >
                <p className="text-sm font-medium">{lang.learnMore}</p>
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
          <div className="mt-7">
            <FBEMobileList
              list={list}
              activeIndex={activeIndex}
              onClick={setActiveIndex}
            />
          </div>
        </div>
        <div className="p-4 pb-6 bg-[#F5F8FE]">
          <div className="lg:hidden flex justify-center">
            <Image
              src={
                "https://strapi-efex.ichiba.net/uploads/warehouse_01_1_6c36965799.svg"
              }
              alt="warehouse"
              width={358}
              height={266}
              quality={100}
            />
          </div>
          <div className="text-ic-ink-6 mt-3">
            <h2 className="font-bold text-lg leading-6">
              {list[activeIndex].title}
            </h2>
            <p className="text-sm mt-2">{list[activeIndex].content}</p>
          </div>
        </div>
      </div>

      {/** desktop */}
      <div className="hidden lg:flex relative h-[636px] overflow-hidden">
        <div className="flex justify-end pt-[37px] pr-20 pb-16 bg-[#F5F8FE] w-[56%]">
          <div className="w-[540px]">
            <div>
              <Image
                src={
                  "https://strapi-efex.ichiba.net/uploads/warehouse_01_1_1_9a77c5ae44.svg"
                }
                alt="warehouse"
                width={520}
                height={386}
                quality={100}
              />
            </div>
            <div className="text-ic-ink-6 mt-[13px] ml-4">
              <h2 className="font-bold text-2xl"> {list[activeIndex].title}</h2>
              <p className="mt-2">{list[activeIndex].content}</p>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "bg-[url('https://strapi-efex.ichiba.net/uploads/image_826_lg_91a45e256f.webp')] bg-cover",
            "flex-1 relative"
          )}
        >
          <div className="m-[60px] mt-20 w-[384px]">
            <h2 className="text-4xl leading-[48px] font-bold text-white">
              {lang.title}
            </h2>
            <p className="text-ic-white-5 mt-1">{lang.subTitle}</p>
            <Link href={videoHref} target="_blank">
              <button className="h-10 text-white flex items-center gap-3 px-5 py-2 bg-brand-primary rounded-lg mt-5 hover:bg-brand-primary-active transition-all">
                <FontAwesomeIcon
                  icon={faPlay}
                  width={15}
                  height={18}
                  className="w-[15px] h-[18px]"
                />
                <p className="text-sm font-medium">{lang.watchVideo}</p>
              </button>
            </Link>
            <div className="mt-20">
              <FBEDesktopList
                list={list}
                activeIndex={activeIndex}
                onClick={setActiveIndex}
              />
            </div>
          </div>
          <Link
            href={learmoreHref}
            target="_blank"
            className="absolute text-white flex items-center gap-2 bottom-[30px] right-[72px]"
          >
            <p className="text-sm font-medium">{lang.learnMore}</p>
            <FontAwesomeIcon icon={faArrowRightLong} width={24} height={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FBEInventoryManagement;
