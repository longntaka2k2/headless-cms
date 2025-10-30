"use client";

import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useRef, useState } from "react";

const TableJapanMB = ({ lang }: { lang: any }) => {
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
                  index === 1
                    ? "relative mx-auto text-[10px] font-bold  rounded-t-[4px] bg-[#00194F] py-[3px] px-2 text-white bottom-[34px]"
                    : "hidden"
                }
              >
                {lang?.most}
              </div>
            </div>
            <div className="font-bold">{value?.title}</div>
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
        <div className="mt-2 py-2 text-sm text-brand-secondary font-bold border-b border-[#F2F2F2]">
          {lang?.titleLeft?.inOutBound}
        </div>
        <div className="py-3 grid grid-cols-2 border-b border-[#F2F2F2]">
          <div className="text-sm">{lang?.titleLeft?.setup?.title}</div>
          <div className="text-sm w-max border border-[#389E0D] text-[#389E0D] bg-[#F6FFED] rounded px-3">
            {lang?.free}
          </div>
        </div>
        <div className="py-3 grid grid-cols-2 border-b border-[#F2F2F2]">
          <div className="text-sm">{lang?.titleLeft?.unloading?.title}</div>
          <div className="text-sm">{item?.itemContent?.unloading?.value}</div>
        </div>
        <div className="mt-3 py-2 text-sm text-brand-secondary font-bold border-b border-[#F2F2F2]">
          {lang?.titleLeft?.instorage}
        </div>
        <div className="py-3 grid grid-cols-2 border-b border-[#F2F2F2]">
          <div className="text-sm">{lang?.titleLeft?.storage?.title}</div>
          <div className="text-sm">
            <span className="text-[#389E0D]">{lang?.free}</span>
            {item?.itemContent?.storage?.value}
          </div>
        </div>
        <div className="mt-3 py-2 text-sm text-brand-secondary font-bold border-b border-[#F2F2F2]">
          {lang?.titleLeft?.packing}
        </div>
        <div className="py-3 grid grid-cols-2 border-b border-[#F2F2F2]">
          <div className="text-sm">{lang?.titleLeft?.nekoPost?.title}</div>
          <div className="text-sm">{item?.itemContent?.nekoPost?.value}</div>
        </div>
        <div className="py-3 grid grid-cols-2 border-b border-[#F2F2F2]">
          <div className="text-sm">{lang?.titleLeft?.size60?.title}</div>
          <div className="text-sm">{item?.itemContent?.size60?.value}</div>
          <div className="text-xs text-[#666]">
            {lang?.titleLeft?.size60?.subtitle}
          </div>
        </div>
        <div className="py-3 grid grid-cols-2 border-b border-[#F2F2F2]">
          <div className="text-sm">{lang?.titleLeft?.size80?.title}</div>
          <div className="text-sm">{item?.itemContent?.size80?.value}</div>
          <div className="text-xs text-[#666]">
            {lang?.titleLeft?.size80?.subtitle}
          </div>
        </div>
        <div className="py-3 grid grid-cols-2 border-b border-[#F2F2F2]">
          <div className="text-sm">{lang?.titleLeft?.size100?.title}</div>
          <div className="text-sm">{item?.itemContent?.size100?.value}</div>
          <div className="text-xs text-[#666]">
            {lang?.titleLeft?.size100?.subtitle}
          </div>
        </div>
        <div className="py-3 grid grid-cols-2 border-b border-[#F2F2F2]">
          <div className="text-sm">{lang?.titleLeft?.size140?.title}</div>
          <div className="text-sm">{item?.itemContent?.size140?.value}</div>
          <div className="text-xs text-[#666]">
            {lang?.titleLeft?.size140?.subtitle}
          </div>
        </div>
        <div className="py-3 grid grid-cols-2 border-b border-[#F2F2F2]">
          <div className="text-sm">{lang?.titleLeft?.size160?.title}</div>
          <div className="text-sm">{item?.itemContent?.size160?.value}</div>
          <div className="text-xs text-[#666]">
            {lang?.titleLeft?.size160?.subtitle}
          </div>
        </div>
        <div className="py-3 grid grid-cols-2 border-b border-[#F2F2F2]">
          <div className="text-sm">{lang?.titleLeft?.labeling?.title}</div>
          <div className="text-sm">{item?.itemContent?.labeling?.value}</div>
        </div>
        <div className="py-3 grid grid-cols-2 border-b border-[#F2F2F2]">
          <div className="text-sm">{lang?.titleLeft?.consolidation?.title}</div>
          <div className="text-sm w-max border border-[#389E0D] text-[#389E0D] bg-[#F6FFED] rounded px-3">
            {item?.itemContent?.consolidation?.value}
          </div>
        </div>
        <div className="mt-3 py-2 text-sm text-brand-secondary font-bold border-b border-[#F2F2F2]">
          {lang?.titleLeft?.other}
        </div>
        <div className="py-3 grid grid-cols-2 border-b border-[#F2F2F2]">
          <div className="text-sm">{lang?.titleLeft?.daibiki?.title}</div>
          <div className="text-sm">{item?.itemContent?.daibiki?.value}</div>
        </div>
        <div className="py-3 grid grid-cols-2">
          <div className="text-sm">{lang?.titleLeft?.cod?.title}</div>
          <div className="text-sm">{item?.itemContent?.cod?.value}</div>
        </div>
      </div>
    </>
  );
};
export default TableJapanMB;
