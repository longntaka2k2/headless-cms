"use client";

import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useRef, useState } from "react";

const TableVietNamMB = ({ lang }: { lang: any }) => {
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
          {lang?.titleLeft?.inBound}
        </div>
        <div className="py-3 grid grid-cols-2 border-b border-[#F2F2F2]">
          <div className="text-sm">{lang?.titleLeft?.setup?.title}</div>
          <div className="text-sm w-max border border-[#389E0D] text-[#389E0D] bg-[#F6FFED] rounded px-3">
            {lang?.free}
          </div>
        </div>
        <div className="py-3 grid grid-cols-2 border-b border-[#F2F2F2]">
          <div className="text-sm">{lang?.titleLeft?.uploading?.title}</div>
          <div className="text-sm">{item?.itemContent?.uploading?.value}</div>
        </div>
        <div className="py-3 grid grid-cols-2 ">
          <div className="text-sm">{lang?.titleLeft?.importing?.title}</div>
          <div className="text-sm">
            {item?.itemContent?.importing?.value[0]}
            <span className="font-bold">
              {item?.itemContent?.importing?.value[1]}
            </span>
            {item?.itemContent?.importing?.value[2]}
          </div>
        </div>
        <div className="mt-3 py-2 text-sm text-brand-secondary font-bold border-b border-[#F2F2F2]">
          {lang?.titleLeft?.instorage}
        </div>
        <div className="py-3 grid grid-cols-2">
          <div className="text-sm">{lang?.titleLeft?.storage?.title}</div>
          <div className="text-sm">{item?.itemContent?.storage?.value}</div>
        </div>
        <div className="mt-3 py-2 text-sm text-brand-secondary font-bold border-b border-[#F2F2F2]">
          {lang?.titleLeft?.outBound}
        </div>
        <div className="py-3 grid grid-cols-2 border-b border-[#F2F2F2]">
          <div className="text-sm">{lang?.titleLeft?.exporting?.title}</div>
          <div className="text-sm">
            {item?.itemContent?.exporting?.value[0]}
            <span className="font-bold">
              {item?.itemContent?.exporting?.value[1]}
            </span>
            {item?.itemContent?.exporting?.value[2]}
          </div>
          <div className="text-xs text-[#666]">
            {lang?.titleLeft?.exporting?.subtitle}
          </div>
        </div>
        <div className="py-3 grid grid-cols-2 border-b border-[#F2F2F2]">
          <div className="text-sm">{lang?.titleLeft?.import?.title}</div>
          <div className="text-sm">{item?.itemContent?.import?.value}</div>
        </div>
        <div className="py-3 grid grid-cols-2">
          <div
            className="flex justify-between items-center"
            onClick={() => setDropValue(!dropValue)}
          >
            <div className="text-sm">{lang?.titleLeft?.valueAdd?.title}</div>
            <div>
              <FontAwesomeIcon
                icon={!dropValue ? faAngleDown : faAngleUp}
                className="mr-3"
                size="xs"
              />
            </div>
          </div>
          <div className="text-sm">{item?.itemContent?.valueAdd?.value}</div>
          <div className={dropValue ? " dropdown_menu-6" : "hidden"}>
            <ul className="ml-5 mt-1">
              {lang?.titleLeft?.valueAdd?.content?.map(
                (value: any, index: number) => (
                  <li
                    key={index}
                    className="list-disc text-xs text-[#666] list-outside"
                  >
                    {value}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default TableVietNamMB;
