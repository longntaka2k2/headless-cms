"use client";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import bgImport from "@/public/images/services/siv/whatwedo/bgImport.webp";
import Image from "next/image";
import { removeAccent } from "@/utils/ultils";
import clsx from "clsx";
import professional from "@/public/images/services/siv/whatwedo/professional.webp";
import shipment from "@/public/images/services/siv/whatwedo/shipment.webp";
import significantly from "@/public/images/services/siv/whatwedo/significantly.webp";

const Import = ({ data, lang, locale }: any) => {
  const [rotateChevron, setRotateChevron] = useState(false);
  const rotate = rotateChevron === true ? "rotate(0deg)" : "rotate(180deg)";

  const content = [
    {
      ...lang.items.content[0],
      img: professional,
    },
    {
      ...lang.items.content[1],
      img: shipment,
    },
    {
      ...lang.items.content[2],
      img: significantly,
    },
  ];
  const [itemDetail, setItem] = useState(content[0] as any);

  return (
    <div
      className="py-5 lg:px-[136px] lg:pt-[48px] lg:pb-[60px] max-w-[1472px] mx-auto lg:mt-[60px] lg:rounded-lg"
      style={{
        backgroundImage: `url(${bgImport.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:container mt-6 px-4 text-white  ">
        <div
          className="uppercase text-xs lg:text-sm text-[rgba(255,_255,_255,_0.80)] opacity-[80] lg:mb-2  scroll-m-32"
          id={locale == "ja" ? lang.title : removeAccent(lang?.title)}
        >
          {lang?.title}
        </div>
        <div className="font-bold text-lg lg:text-2xl">
          <span className="inline-block text-brand-secondary">
            {lang?.items?.number} &nbsp;
          </span>
          <span className="uppercase text-white inline-block  mb-4 lg:mb-6">
            {lang?.items?.title}
          </span>
        </div>
        <div className="lg:flex">
          <Image
            src={itemDetail.img}
            alt={itemDetail.content}
            className="lg:block hidden  lg:h-[408px]"
          />
          <div className="">
            {content?.map((value: any, index: number) =>
              itemDetail.title === value.title ? (
                <div
                  className="bg-[rgba(255,_255,_255,_0.10)] lg:h-full lg:max-h-[168px] lg:px-10"
                  key={index}
                >
                  <div className=" pb-4 lg:pb-7 ">
                    <div className="lg:hidden">
                      <Image
                        src={value?.img}
                        alt={value.content}
                        className=""
                        quality={100}
                      />
                    </div>
                    <div className="px-3 lg:px-0 pt-4">
                      <div className="flex items-center justify-between lg:pt-6 ">
                        <div className="font-bold lg:text-xl">
                          {value.title}
                        </div>
                        <div>
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            className="w-4 h-4 lg:w-5 lg:h-5"
                            style={{
                              transform: rotate,
                              transition: "all 0.2s linear",
                            }}
                          />
                        </div>
                      </div>
                      <div className=" ">
                        <div className="text-sm pt-4 ">{value.content}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className={clsx(
                    "flex items-center justify-between px-3 py-4 lg:px-10 lg:py-10 cursor-pointer lg:h-full lg:max-h-[120px] ",
                    content?.indexOf(itemDetail) !== index + 1 &&
                      "border-b border-[rgba(255,_255,_255,_0.20)]"
                  )}
                  key={index}
                  onClick={() => setItem(value)}
                >
                  <div className="flex items-center">
                    <div className="font-bold ">{value.title}</div>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="w-4 h-4 lg:w-5 lg:h-5"
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Import;
