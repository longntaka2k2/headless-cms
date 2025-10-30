"use client";

import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useState } from "react";

const TablePhilippinesMB = ({ lang }: { lang: any }) => {
  const [item, setItemActive] = useState(lang?.subHeader[0]);
  const [dropValue, setDropValue] = useState(false);

  return (
    <>
      <div className="grid grid-cols-3 gap-3 mt-6 py-4 sticky top-[145px] bg-white px-4 lg:px-0 ">
        {lang?.subHeader?.map((value: any, index: number) => (
          <div
            onClick={() => setItemActive(value)}
            key={index}
            className={
              value?.title === item?.title
                ? clsx(
                    "bg-white relative border border-transparent bg-clip-padding rounded-lg px-2 py-3",
                    "after:absolute after:bg-[linear-gradient(89deg,_#00194F_0%,_#AF0000_84.37%)] after:z-[-1] after:rounded-lg ",
                    "after:top-[-2px] after:bottom-[-2px] after:left-[-2px] after:right-[-2px] "
                  )
                : "border border-[#D6E4FF] rounded-lg px-2 py-3"
            }
          >
            <div className="h-0">
              <div
                className={
                  index === 2
                    ? "relative mx-auto text-[10px] font-bold  rounded-t-[4px] bg-[#00194F] py-[3px] px-2 text-white bottom-[34px]"
                    : "hidden"
                }
              >
                {lang?.most}
              </div>
            </div>
            <div className="text-sm font-medium mt-1">{value?.value}</div>
            <div className="text-[#666] text-xs font-medium">
              {lang?.orders}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-lg shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11)] p-3 mx-4 lg:mx-0 ">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            {lang?.titleLeft?.fees}
            <span className="font-bold text-[#00194F]">
              {item?.itemContent?.title}
            </span>
          </div>
          <div className="text-sm py-2 px-5 rounded-lg bg-brand-primary text-white">
            {item?.itemContent?.fee}
          </div>
        </div>

        <div className="py-3 grid grid-cols-3 border-b border-[#F2F2F2]">
          <div className="text-sm">{lang?.titleLeft?.discount?.title}</div>
          <div className="col-span-2 text-sm">
            {item?.itemContent?.discount?.value}
          </div>
        </div>

        <div className="mt-2 py-2 text-sm text-brand-secondary font-bold border-b border-[#F2F2F2]">
          {lang?.titleLeft?.inBound}
        </div>

        <div className="py-3 grid grid-cols-3 border-b border-[#F2F2F2]">
          <div className="text-sm">
            <p>{lang?.titleLeft?.warehouse?.title}</p>
            <p>{lang?.titleLeft?.warehouse?.subtitle}</p>
          </div>
          <div className="col-span-2 text-sm">
            {item?.itemContent?.warehouse?.value}
          </div>
        </div>

        <div className="mt-2 py-2 text-sm text-brand-secondary font-bold border-b border-[#F2F2F2]">
          {lang?.titleLeft?.inStorage}
        </div>

        <div className="py-3 grid grid-cols-3 border-b border-[#F2F2F2]">
          <div className="text-sm">{lang?.titleLeft?.storage?.title}</div>
          <div className="col-span-2 text-sm">
            <p className="text-[#389E0D]">
              {item?.itemContent?.storage?.value[0]}
            </p>
            <p>{item?.itemContent?.storage?.value[1]}</p>
          </div>
        </div>

        <div className="mt-2 py-2 text-sm text-brand-secondary font-bold border-b border-[#F2F2F2]">
          {lang?.titleLeft?.outBound}
        </div>

        <div className="py-3 grid grid-cols-3 border-b border-[#F2F2F2]">
          <div className="text-sm">{lang?.titleLeft?.returned?.title}</div>
          <div className="col-span-2 text-sm">
            {item?.itemContent?.returned?.value}
          </div>
        </div>

        <div className="py-3 grid grid-cols-3 border-b border-[#F2F2F2]">
          <div className="text-sm">{lang?.titleLeft?.includes?.title}</div>
          <div className="col-span-2 text-sm">
            {item?.itemContent?.includes?.value}
          </div>
        </div>

        <div className="py-3 grid grid-cols-3 border-b border-[#F2F2F2]">
          <div className="text-sm">
            {lang?.titleLeft?.doesNotIncludes?.title}
          </div>
          <div className="col-span-2 text-sm">
            {item?.itemContent?.doesNotIncludes?.value}
          </div>
        </div>

        <div className="py-3 grid grid-cols-3">
          <div className="text-sm">
            <p>{lang?.titleLeft?.account?.title}</p>
            <p>{lang?.titleLeft?.account?.subtitle}</p>
          </div>
          <div className="col-span-2 text-sm">
            {item?.itemContent?.account?.value}
          </div>
        </div>
      </div>
    </>
  );
};
export default TablePhilippinesMB;
