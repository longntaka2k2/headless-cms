"use client";
import costIcon from "@/public/images/services/siv/whatwedo/costIcon.svg";
import costIconActive from "@/public/images/services/siv/whatwedo/costIconActive.svg";
import costImg from "@/public/images/services/siv/whatwedo/costImg.webp";
import digitalIcon from "@/public/images/services/siv/whatwedo/digitalIcon.svg";
import digitalIconActive from "@/public/images/services/siv/whatwedo/digitalIconActive.svg";
import digitalImg from "@/public/images/services/siv/whatwedo/digitalImg.webp";
import mistakeIcon from "@/public/images/services/siv/whatwedo/mistakeIcon.svg";
import mistakeIconActive from "@/public/images/services/siv/whatwedo/mistakeIconActive.svg";
import mistakeImg from "@/public/images/services/siv/whatwedo/mistakeImg.webp";
import transIcon from "@/public/images/services/siv/whatwedo/transIcon.svg";
import transIconActive from "@/public/images/services/siv/whatwedo/transIconActive.svg";
import transImg from "@/public/images/services/siv/whatwedo/transImg.webp";
import { removeAccent } from "@/utils/ultils";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

const SetupBusiness = ({ lang, locale }: any) => {
  const [rotateChevron, setRotateChevron] = useState(false);
  const rotate = rotateChevron === true ? "rotate(0deg)" : "rotate(180deg)";
  const contents = [
    {
      ...lang.items.content[0],
      icon: digitalIcon,
      active: digitalIconActive,
      img: digitalImg,
    },
    {
      ...lang.items.content[1],
      icon: mistakeIcon,
      active: mistakeIconActive,
      img: mistakeImg,
    },
    {
      ...lang.items.content[2],
      icon: costIcon,
      active: costIconActive,
      img: costImg,
    },
    {
      ...lang.items.content[3],
      link: "Just pay as you go!",
      icon: transIcon,
      active: transIconActive,
      img: transImg,
    },
  ];
  const [itemDetail, setItem] = useState(contents[0] as any);

  return (
    <div className="lg:container mt-[60px]">
      <div
        className="uppercase text-xs lg:text-sm scroll-m-24  mx-4 lg:mx-0"
        id={locale == "ja" ? lang.title : removeAccent(lang?.title)}
      >
        {lang?.title}
      </div>
      <div className="font-bold text-lg lg:text-2xl mx-5 lg:mx-0">
        <span className="inline-block text-brand-secondary">
          {lang?.items?.number} &nbsp;
        </span>
        <span className="inline-block text-brand mb-4">
          {lang?.items?.title}
        </span>
      </div>
      <div className="lg:grid lg:grid-cols-2 gap-[80px]">
        <div className="">
          {contents?.map((value: any, index: number) =>
            itemDetail.title === value.title ? (
              <div className="" key={index}>
                <div className=" pb-4 lg:pb-7 rounded-[20px] shadow-[0px_17px_30px_0px_rgba(0,_0,_0,_0.07)] overflow-hidden ">
                  <div className="bg-linear h-[5px] w-full"></div>
                  <div className="flex items-center justify-between px-3 pt-3 lg:px-7  lg:pt-6">
                    <div className="flex items-center">
                      <div className="mr-3 lg:mr-4 h-6 w-6 lg:h-8 lg:w-8">
                        <Image src={value?.active} alt={value.title} className="" />
                      </div>
                      <div className="font-bold text-brand-secondary lg:text-xl">
                        {value.title}
                      </div>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="w-3 h-3 lg:w-5 lg:h-5"
                        style={{
                          transform: rotate,
                          transition: "all 0.2s linear",
                        }}
                      />
                    </div>
                  </div>
                  <div className="px-3 ">
                    <div className="text-sm ml-9 pt-3 pb-5  ">
                      {value.content}
                    </div>
                    <div className="lg:hidden">
                      <Image
                        src={value?.img}
                        alt={value.content}
                        className="rounded-xl"
                        quality={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className={clsx(
                  "flex items-center justify-between px-3 py-4 lg:px-7 lg:py-7 cursor-pointer",
                  contents?.indexOf(itemDetail) !== index + 1 &&
                    "border-b border-[#ddd]"
                )}
                onClick={() => setItem(value)}
              >
                <div className="flex items-center">
                  <div className="mr-3 h-6 w-6 lg:h-8 lg:w-8">
                    <Image src={value.icon} alt={value.title} className="" />
                  </div>
                  <div className="font-bold ">{value.title}</div>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="w-3 h-3 lg:w-5 lg:h-5"
                  />
                </div>
              </div>
            )
          )}
        </div>
        <div>
          <Image
            src={itemDetail?.img}
            alt={itemDetail.title}
            className="hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default SetupBusiness;
