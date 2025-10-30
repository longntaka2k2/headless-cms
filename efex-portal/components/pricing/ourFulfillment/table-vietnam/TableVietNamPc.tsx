"use client";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clsx } from "clsx";
import Link from "next/link";
import useWidth from "@/hooks/useWidth";
import { useState } from "react";
import { usePathname } from "next/navigation";

const TableVietNamPc = ({ lang }: any) => {
  const [dropValue, setDropValue] = useState(false);
  const width = useWidth();
  const locale = usePathname().slice(1, 3);

  return (
    <div className="shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11)] pb-4 max-w-[1280px] w-full mx-auto rounded-[20px] lg:block hidden lg:mt-8">
      <div
        className={clsx(
          "shadow-[] px-5 sticky bg-white rounded-t-[20px] z-[2]",
          width >= 1830 ? "top-[102px]" : "top-[165px]"
        )}
      >
        <div className=" flex items-center ">
          <div className="max-w-[380px] w-full pl-5 text-xl font-medium">
            {lang?.type}
          </div>
          <div className="grid grid-cols-3 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 1
                    ? "border border-b-[0px] border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] rounded-t-xl"
                    : "",
                  "mt-2 px-5 py-4 "
                )}
              >
                <div className="h-0">
                  <div
                    className={
                      index === 1
                        ? "relative  w-max text-sm font-bold  rounded-t-[4px] bg-[#00194F] py-[3px] px-2 text-white bottom-[43px]"
                        : "hidden"
                    }
                  >
                    {lang?.most}
                  </div>
                </div>
                <div className=" font-medium mt-1 text-xl">
                  {value?.value}
                  <span className="text-[#666] text-base font-medium">
                    {lang?.orders}
                  </span>
                </div>
                <div className="mt-4 ">
                  <Link
                    className="py-2 px-5 font-medium rounded-lg bg-brand-primary text-white"
                    href={`/${locale}/contact-sales`}
                    target="_blank"
                  >
                    {lang?.contactUs}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-5 relative z-[1]">
        <div className=" flex items-center sticky top-[165px]">
          <div className="max-w-[380px] w-full pl-5 font-bold text-brand-secondary">
            {lang?.titleLeft?.inBound}
          </div>
          <div className="grid grid-cols-3 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 1
                    ? "border-x  border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] "
                    : "",
                  "px-5 py-4 "
                )}
              ></div>
            ))}
          </div>
        </div>
        <div className=" flex items-center border-t border-[#F2F2F2] sticky top-[165px]">
          <div className="max-w-[380px] w-full pl-5  ">
            {lang?.titleLeft?.setup?.title}
          </div>
          <div className="grid grid-cols-3 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 1
                    ? "border-x  border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] "
                    : "",
                  "px-5 py-[18px] "
                )}
              >
                <div className="text-sm w-max border border-[#389E0D] text-[#389E0D] bg-[#F6FFED] rounded px-3">
                  {lang?.free}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex items-center border-t border-[#F2F2F2] sticky top-[165px]">
          <div className="max-w-[380px] w-full pl-5  ">
            {lang?.titleLeft?.uploading?.title}
          </div>
          <div className="grid grid-cols-3 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 1
                    ? "border-x  border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] "
                    : "",
                  "px-5 py-[18px] "
                )}
              >
                <div className="">{value?.itemContent?.uploading?.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex items-center border-t border-[#F2F2F2] sticky top-[165px]">
          <div className="max-w-[380px] w-full pl-5  ">
            {lang?.titleLeft?.importing?.title}
          </div>
          <div className="grid grid-cols-3 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 1
                    ? "border-x  border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] "
                    : "",
                  "px-5 py-[18px] "
                )}
              >
                <div className="">
                  {value?.itemContent?.importing?.value[0]}
                  <span className="font-bold">
                    
                    {value?.itemContent?.importing?.value[1]}
                  </span>
                  {value?.itemContent?.importing?.value[2]}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex items-center border-t border-[#F2F2F2] sticky top-[165px]">
          <div className="max-w-[380px] w-full pl-5 font-bold text-brand-secondary">
            {lang?.titleLeft?.instorage}
          </div>
          <div className="grid grid-cols-3 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 1
                    ? "border-x  border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] "
                    : "",
                  "px-5 py-4 "
                )}
              ></div>
            ))}
          </div>
        </div>
        <div className=" flex items-center border-t border-[#F2F2F2] sticky top-[165px]">
          <div className="max-w-[380px] w-full pl-5  ">
            {lang?.titleLeft?.storage?.title}
          </div>
          <div className="grid grid-cols-3 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 1
                    ? "border-x  border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] "
                    : "",
                  "px-5 py-[18px] "
                )}
              >
                <div className="">{value?.itemContent?.storage?.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex items-center border-t border-[#F2F2F2] sticky top-[165px]">
          <div className="max-w-[380px] w-full pl-5 font-bold text-brand-secondary">
            {lang?.titleLeft?.outBound}
          </div>
          <div className="grid grid-cols-3 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 1
                    ? "border-x  border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] "
                    : "",
                  "px-5 py-4 "
                )}
              ></div>
            ))}
          </div>
        </div>
        <div className=" flex place-items-stretch border-t border-[#F2F2F2] sticky  top-[165px]">
          <div className="pl-5 max-w-[380px] w-full py-[18px] h-full">
            <div className=" ">{lang?.titleLeft?.exporting?.title}</div>
            <div className=" text-sm text-[#666] max-w-[270px]">
              {lang?.titleLeft?.exporting?.subtitle}
            </div>
          </div>

          <div className="grid grid-cols-3 w-full flex-1">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 1
                    ? "border-x  border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] "
                    : "",
                  "px-5 py-[18px] flex-1"
                )}
              >
                <div className="">
                  {value?.itemContent?.exporting?.value[0]}
                  <span className="font-bold">
                    
                    {value?.itemContent?.exporting?.value[1]}
                  </span>
                  {value?.itemContent?.exporting?.value[2]}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex items-center border-t border-[#F2F2F2] sticky  top-[165px]">
          <div className="max-w-[380px] w-full pl-5  ">
            <div>{lang?.titleLeft?.carton?.title}</div>
            <div className=" text-sm text-[#666] max-w-[270px]">
              {lang?.titleLeft?.carton?.subtitle}
            </div>
          </div>
          <div className="grid grid-cols-3 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 1
                    ? "border-x  border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] "
                    : "",
                  "px-5 py-[18px] "
                )}
              >
                <div className="">{value?.itemContent?.carton?.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex place-items-stretch border-t border-[#F2F2F2] sticky  top-[165px]">
          <div className="max-w-[380px] w-full pl-5 py-[18px] ">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setDropValue(!dropValue)}
            >
              <div className="">{lang?.titleLeft?.valueAdd?.title}</div>
              <div>
                <FontAwesomeIcon
                  icon={!dropValue ? faAngleDown : faAngleUp}
                  className="mr-3"
                  size="xs"
                />
              </div>
            </div>
            <div className={dropValue ? " dropdown_menu-6" : "hidden"}>
              <ul className="ml-5 mt-1">
                {lang?.titleLeft?.valueAdd?.content?.map(
                  (x: any, w_index: number) => (
                    <li
                      key={w_index}
                      className="list-disc text-sm text-[#666] list-outside"
                    >
                      {x}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-3 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 1
                    ? "border-x  border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] "
                    : "",
                  "px-5 py-[18px] "
                )}
              >
                <div className="">{value?.itemContent?.valueAdd?.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex items-center border-t border-[#F2F2F2] sticky  top-[165px]">
          <div className="max-w-[380px] w-full pl-5  ">
            {lang?.titleLeft?.persona?.title}
          </div>
          <div className="grid grid-cols-3 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 1
                    ? "border border-t-[0px] rounded-b-xl border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] "
                    : "",
                  "px-5 py-[18px] "
                )}
              >
                <div className="">{value?.itemContent?.persona?.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableVietNamPc;
