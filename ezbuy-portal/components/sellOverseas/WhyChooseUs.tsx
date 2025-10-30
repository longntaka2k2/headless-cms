"use client";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import EzImage from "../commons/EzImage";
import Link from "next/link";
import { usePathname } from "next/navigation";

const WhyChooseUs = ({ lang }: any) => {
  const [rotateChevron, setRotateChevron] = useState(false);
  const rotate = rotateChevron === true ? "rotate(0deg)" : "rotate(180deg)";
  const [itemDetail, setItem] = useState(lang.items[0] as any);
  const locale = usePathname().split("/")[1];

  return (
    <div className="container">
      <div className="mx-4 lg:mx-0">
        <h2 className=" lg:text-4xl font-black text-2xl uppercase text-center ">
          {lang?.title}
        </h2>
        <div className="lg:grid lg:grid-cols-2 gap-[80px]">
          <h3 className="font-bold text-2xl lg:mb-6 lg:mt-10 my-6 lg:text-left text-center">
            {lang.whydo}
          </h3>
        </div>
        <div className="lg:grid lg:grid-cols-2 gap-[80px]">
          <div className="">
            {lang.items.map((value: any, index: number) =>
              itemDetail.title === value.title ? (
                <div className="" key={index}>
                  <div className=" pb-4 lg:pb-7 rounded-[20px] shadow-[0px_17px_30px_0px_rgba(0,_0,_0,_0.07)] overflow-hidden ">
                    <div className="bg-linear h-[5px] w-full"></div>
                    <div className="flex items-center justify-between px-3 pt-3 lg:px-7  lg:pt-6">
                      <div className="flex items-center">
                        <div className="font-bold text-contact lg:text-lg text-base text-[#AF0000] flex items-center gap-1">
                          {index + 1}. <h3>{value.title}</h3>
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
                    <div className="px-3  pt-3 pb-5">
                      {value.content.map((value: any, index: number) => (
                        <div className="text-sm ml-[36px] pt-1" key={index}>
                          - {value}
                        </div>
                      ))}
                      <div className="lg:hidden mt-4">
                        <EzImage
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
                    lang.items.indexOf(itemDetail) !==
                      (index + 1 || index - 1) && "border-b border-[#ddd]"
                  )}
                  onClick={() => setItem(value)}
                >
                  <div className="flex items-center">
                    <div className="font-bold lg:text-lg text-base flex items-center gap-1">
                      {index + 1}. <h3>{value.title}</h3>
                    </div>
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
            <EzImage
              src={itemDetail.img}
              alt={itemDetail.title}
              className="hidden lg:block"
              width={532}
              height={428}
              quality={100}
            />
          </div>
        </div>
        <div className="text-center lg:mt-14 mt-10">
          <Link
            className="lg:text-base text-sm bg-[#B81010] uppercase lg:py-4 lg:px-10 py-3 px-8 text-white"
            href={`/${locale}/contact-sales`}
          >
            {lang.contact}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
