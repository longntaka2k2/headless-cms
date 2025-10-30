"use client";
import { removeAccent } from "@/utils/ultils";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

import digitalImg from "@/public/images/sell-in-vietnam/whatwedo/digitalImg.webp";
import mistakeImg from "@/public/images/sell-in-vietnam/whatwedo/mistakeImg.webp";
import costImg from "@/public/images/sell-in-vietnam/whatwedo/costImg.webp";
import transImg from "@/public/images/sell-in-vietnam/whatwedo/transImg.webp";
import costIcon from "@/public/images/sell-in-vietnam/whatwedo/costIcon.svg";
import costIconActive from "@/public/images/sell-in-vietnam/whatwedo/costIconActive.svg";
import digitalIcon from "@/public/images/sell-in-vietnam/whatwedo/digitalIcon.svg";
import digitalIconActive from "@/public/images/sell-in-vietnam/whatwedo/digitalIconActive.svg";
import mistakeIcon from "@/public/images/sell-in-vietnam/whatwedo/mistakeIcon.svg";
import mistakeIconActive from "@/public/images/sell-in-vietnam/whatwedo/mistakeIconActive.svg";
import transIcon from "@/public/images/sell-in-vietnam/whatwedo/transIcon.svg";
import transIconActive from "@/public/images/sell-in-vietnam/whatwedo/transIconActive.svg";

const Prompt = ({ data }: any) => {
  const [rotateChevron, setRotateChevron] = useState(false);
  const rotate = rotateChevron === true ? "rotate(0deg)" : "rotate(180deg)";

  const contents = [
    {
      title: data.contents[0].title,
      content: data.contents[0].des,
      img: digitalImg,
      icon: digitalIcon,
      active: digitalIconActive,
    },
    {
      title: data.contents[1].title,
      content: data.contents[1].des,
      img: mistakeImg,
      icon: mistakeIcon,
      active: mistakeIconActive,
    },
    {
      title: data.contents[2].title,
      content: data.contents[2].des,
      img: costImg,
      icon: costIcon,
      active: costIconActive,
    },
    {
      title: data.contents[3].title,
      content: data.contents[3].des,
      img: transImg,
      icon: transIcon,
      active: transIconActive,
    },
  ];

  const [itemDetail, setItem] = useState(contents[0] as any);

  return (
    <div className="lg:container px-4 lg:px-0">
      <div className="font-bold text-lg lg:text-2xl ">
        <span className="inline-block text-brand mb-4">{data?.label}</span>
      </div>
      <div className="lg:flex lg:justify-between gap-[80px]">
        <div className="flex-1">
          {contents?.map((value: any, index: number) =>
            itemDetail.title === value.title ? (
              <div className="" key={index}>
                <div className=" pb-4 lg:pb-7 rounded-[20px] shadow-[0px_17px_30px_0px_rgba(0,_0,_0,_0.07)] overflow-hidden ">
                  <div className="bg-linear h-[5px] w-full"></div>
                  <div className="flex items-center justify-between px-3 pt-3 lg:px-7  lg:pt-6">
                    <div className="flex items-center">
                      <div className="mr-3 lg:mr-4 h-6 w-6 lg:h-8 lg:w-8">
                        <Image src={value.active} alt="" className="" quality={100} />
                      </div>
                      <div className="font-bold text-contact text-base lg:text-xl">
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
                    <div className="text-sm lg:text-base ml-[36px] pt-3 pb-5  ">
                      {value.content}
                    </div>
                    <div className="lg:hidden">
                      <Image
                        src={value.img}
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
                  data?.items?.content?.indexOf(itemDetail) !== (index + 1 || index - 1 ) &&
                    "border-b border-[#ddd]" 
                )}
                onClick={() => setItem(value)}
              >
                <div className="flex items-center">
                  <div className="mr-3 h-6 w-6 lg:h-8 lg:w-8">
                    <Image src={value.icon} alt="" className="" quality={100} />
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
            src={itemDetail.img}
            alt={itemDetail.title}
            className="flex-1 hidden lg:block"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Prompt;
