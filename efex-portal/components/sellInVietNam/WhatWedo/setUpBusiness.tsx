"use client";
import { removeAccent } from "@/utils/ultils";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

const SetupBusiness = ({lang} : any) => {
  const [rotateChevron, setRotateChevron] = useState(false);
  const rotate = rotateChevron === true ? "rotate(0deg)" : "rotate(180deg)";
  
  const data = {
    title: lang.label,
    items: {
      number: "#1",
      title: lang.title,
      content: [
        {
          title: lang.items[0].title,
          content:lang.items[0].content,
          icon: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035725/digital_Icon_8f43e517ed.svg',
          active: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035725/digital_Icon_Active_99ffe4ec12.svg',
          img: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035726/digital_Img_36e7b02220.jpg',
        },
        {
          title: lang.items[1].title,
          content:lang.items[1].content,
          icon: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035726/mistake_Icon_cd15ea22cf.svg',
          active: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035726/mistake_Icon_Active_dba9caed04.svg',
          img: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035726/mistake_Img_b0b7210736.jpg',
        },
        {
          title: lang.items[2].title,
          content:lang.items[2].content,
          icon: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035726/cost_Icon_4059f978ad.svg',
          active: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035725/cost_Icon_Active_cf633e40c5.svg',
          img: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035726/cost_Img_ad6be26f0c.jpg',
        },
        {
          title: lang.items[3].title,
          content:lang.items[3].content,
          link:lang.items[3].link,
          icon: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035725/trans_Icon_ff0b2bd144.svg',
          active: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035725/trans_Icon_Active_84d72a3e9b.svg',
          img: 'https://res.cloudinary.com/dz2y1uia5/image/upload/v1700035726/trans_Img_f792fb1fe5.jpg',
        },
      ],
    },
  }
  const [itemDetail, setItem] = useState(data?.items?.content[0] as any);
  return (
    <div className="lg:container lg:mt-15 px-4 lg:px-0">
      <div
        className="uppercase text-xs lg:text-sm scroll-m-24"
        id={removeAccent(data?.title)}
      >
        {data?.title}
      </div>
      <div className="font-bold text-lg lg:text-2xl ">
        <span className="inline-block text-contact">
          {data?.items?.number} &nbsp;
        </span>
        <span className="inline-block text-brand mb-4">
          {data?.items?.title}
        </span>
      </div>
      <div className="lg:grid lg:grid-cols-2 gap-[80px]">
        <div className="">
          {data?.items?.content?.map((value: any, index: number) =>
            itemDetail.title === value.title ? (
              <div className="" key={index}>
                <div className=" pb-4 lg:pb-7 rounded-[20px] shadow-[0px_17px_30px_0px_rgba(0,_0,_0,_0.07)] overflow-hidden ">
                  <div className="bg-linear h-[5px] w-full"></div>
                  <div className="flex items-center justify-between px-3 pt-3 lg:px-7  lg:pt-6">
                    <div className="flex items-center">
                      <div className="mr-3 lg:mr-4 h-6 w-6 lg:h-8 lg:w-8">
                        <Image src={value.active} alt="" className="" width={32} height={32} quality={100} />
                      </div>
                      <div className="font-bold text-contact lg:text-xl">
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
                    <div className="text-sm ml-[36px] pt-3 pb-5  ">
                      {value.content}
                    </div>
                    <div className="lg:hidden">
                      <Image
                        src={value.img}
                        alt={value.content}
                        className="rounded-xl"
                        width={532}
                        height={428}
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
                  data?.items?.content?.indexOf(itemDetail) !== (index + 1 || index - 1 )&& 
                  "border-b border-[#ddd]"
                )}
                onClick={() => setItem(value)}
              >
                <div className="flex items-center">
                  <div className="mr-3 h-6 w-6 lg:h-8 lg:w-8">
                    <Image src={value.icon} alt="" className="" width={32} height={32} quality={100} />
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
            className="hidden lg:block"
            width={532}
            height={428}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default SetupBusiness;
