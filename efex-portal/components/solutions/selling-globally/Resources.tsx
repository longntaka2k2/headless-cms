"use client";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";

const Resources = ({ lang }: { lang: any }) => {
  const [rotateChevron, setRotateChevron] = useState(false);
  const rotate = rotateChevron === true ? "rotate(0deg)" : "rotate(180deg)";

  const [itemDetail, setItem] = useState(lang.contents[0] as any);
  return (
    <div className="py-6 lg:py-15">
      <div className="container px-4 lg:px-0">
        <div className="font-bold text-2xl lg:text-4xl text-center mb-6 lg:mb-10">
          <span className="inline-block text-brand mb-4">{lang?.heading}</span>
        </div>
        <div className="">
          {lang.contents?.map((value: any, index: number) =>
            itemDetail.title === value.title ? (
              <div className="" key={index}>
                <div className="pb-4 lg:pb-7 rounded-[20px] shadow-[0px_17px_30px_0px_rgba(0,_0,_0,_0.07)] overflow-hidden ">
                  <div className="bg-linear h-[5px] w-full"></div>
                  <div className="flex items-center justify-between px-3 pt-3 lg:px-7 lg:pt-6 mb-6 lg:mb-10">
                    <div className="font-bold text-contact text-base lg:text-xl">
                      {value.title}
                    </div>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="w-3 h-3 lg:w-5 lg:h-5"
                      style={{
                        transform: rotate,
                        transition: "all 0.2s linear",
                      }}
                    />
                  </div>
                  <div className="px-4 lg:px-7 cursor-pointer">
                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-10">
                      {value.items.map((item: any, idx: number) => {
                        return (
                          <div key={index} className="grid gap-3 group">
                            <Link href={item.link} target="_blank">
                              <p className="text-sm lg:text-base group-hover:text-contact mb-2 line-clamp-1 group-hover:font-medium">
                                {item.title}
                              </p>
                              <div className="w-full h-[150px] lg:h-[228px] overflow-hidden rounded-2xl">
                                <Image
                                  src={item.image}
                                  alt="EFEX"
                                  width={1104}
                                  height={457}
                                  className="hover:scale-110 w-full h-full transition-all duration-500"
                                />
                              </div>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className={clsx(
                  "flex items-center justify-between px-3 py-4 lg:px-7 lg:py-7 cursor-pointer",
                  lang?.items?.content?.indexOf(itemDetail) !==
                    (index + 1 || index - 1) && "border-b border-[#ddd]"
                )}
                onClick={() => setItem(value)}
              >
                <div className="font-bold ">{value.title}</div>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="w-3 h-3 lg:w-5 lg:h-5"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;
