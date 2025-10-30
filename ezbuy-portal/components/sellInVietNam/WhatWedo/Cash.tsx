"use client";
import clsx from "clsx";
import { useState } from "react";
import EzImage from "@/components/commons/EzImage";

const Cash = ({ data, lang, locale }: any) => {
  const [itemDetail, setItem] = useState(lang?.items?.content[0] as any);

  return (
    <div>
      <div className="lg:flex lg:justify-between bg-[#0D1D37] px-4 py-5 lg:container lg:px-15 lg:pt-12 lg:pb-15 lg:my-[60px] lg:rounded-[20px]">
        <div className=" ">
          <div className="flex  items-center font-bold lg:text-[24px] text-lg lg:text-2xl mb-5">
            <div className="text-brand-secondary mr-2">
              {lang?.items?.number}
            </div>
            <div
              className=" text-white  scroll-m-24"
              id={locale == "ja" ? lang.title : "removeAccent(lang?.title)"}
            >
              {lang?.title}
            </div>
          </div>
          <div>
            {lang?.items.content.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  "text-white flex mb-2 lg:rounded-r-[8px]",
                  itemDetail.title === value.title
                    ? "bg-[rgba(255,_255,_255,_0.08)]  "
                    : "hover:bg-[rgba(255,_255,_255,_0.08)]"
                )}
                onClick={() => setItem(value)}
              >
                <div
                  className={`${
                    itemDetail.title === value.title
                      ? "bg-[linear-gradient(23deg,_#365393_-3.4%,_#FF4F4F_134.45%)]"
                      : ""
                  } min-w-[8px] `}
                ></div>
                <div className="px-2 py-4">
                  <div className="font-bold lg:pb-3 lg:text-xl">
                    {value.title}
                  </div>
                  <div className="text-sm lg:text-base pt-2 lg:max-w-[540px]">
                    {value.content}{" "}
                    <span className="text-[#0F62FE] uppercase">
                      {value?.free}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-1">
          <EzImage
            src={"/uploads/Image_1_bc8d0934ba.png"}
            alt={lang?.title}
            width={441}
            height={360}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};
export default Cash;
