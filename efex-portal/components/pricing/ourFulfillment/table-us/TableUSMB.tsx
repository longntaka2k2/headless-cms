"use client";

import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useState } from "react";

const TableUSMB = ({ lang }: { lang: any }) => {
  const [item, setItemActive] = useState(lang?.subHeader[0]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 mt-6 py-4 sticky top-[155px] bg-white px-4 lg:px-0 ">
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
            <div className="text-sm font-medium mt-1">{value?.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-lg shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11)] p-3 mx-4 lg:mx-0 ">
        <div className="flex justify-between items-center">
          <span className="text-sm font-bold text-[#00194F]">
            {item?.itemContent?.title}
          </span>
          <div className="text-sm py-2 px-5 rounded-lg bg-brand-primary text-white">
            {item?.itemContent?.fee}
          </div>
        </div>

        <div className="mt-2 py-2 text-sm text-brand-secondary font-bold border-b border-[#F2F2F2]">
          {lang?.titleLeft?.inBound}
        </div>

        <div className="py-3 grid grid-cols-7 border-b border-[#F2F2F2]">
          <div className="text-sm col-span-2">
            {lang?.titleLeft?.palletized?.title}
          </div>
          <div className="text-sm col-span-2">
            {item?.itemContent?.palletized?.value}
          </div>
          <div className="text-sm col-span-3">
            {lang?.description?.palletized?.value}
          </div>
        </div>

        <div className="py-3 grid grid-cols-7 border-b border-[#F2F2F2]">
          <div className="text-sm col-span-2">
            {lang?.titleLeft?.looseShipment?.title}
          </div>
          <div className="text-sm col-span-2">
            {item?.itemContent?.looseShipment?.value?.map(
              (item: any, indx: number) => (
                <li key={indx} className="pb-2">
                  {item}
                </li>
              )
            )}
          </div>
          <div className="text-sm col-span-3">
            {lang?.description?.looseShipment?.value?.map(
              (item: any, indx: number) => (
                <li key={indx} className="pb-2">
                  {item}
                </li>
              )
            )}
          </div>
        </div>

        <div className="mt-2 py-2 text-sm text-brand-secondary font-bold border-b border-[#F2F2F2]">
          {lang?.titleLeft?.storage}
        </div>

        <div className="py-3 grid grid-cols-7 border-b border-[#F2F2F2]">
          <div className="text-sm col-span-2">
            {lang?.titleLeft?.variable?.title}
          </div>
          <div className="text-sm col-span-2">
            {item?.itemContent?.variable?.value}
          </div>
          <div className="text-sm col-span-3">
            {lang?.description?.variable?.value}
          </div>
        </div>

        <div className="mt-2 py-2 text-sm text-brand-secondary font-bold border-b border-[#F2F2F2]">
          {lang?.titleLeft?.fulfillment}
        </div>

        <div className="py-3 grid grid-cols-7 border-b border-[#F2F2F2]">
          <div className="text-sm col-span-2">
            <p>{lang?.titleLeft?.pallet?.title}</p>
            <p>{lang?.titleLeft?.pallet?.subtitle}</p>
          </div>
          <div className="text-sm col-span-2">
            {item?.itemContent?.pallet?.value?.map(
              (item: any, indx: number) => (
                <li key={indx} className="pb-2">
                  {item}
                </li>
              )
            )}
          </div>
          <div className="text-sm col-span-3">
            {lang?.description?.pallet?.value?.map(
              (item: any, indx: number) => (
                <li key={indx} className="pb-2">
                  {item}
                </li>
              )
            )}
          </div>
        </div>

        <div className="py-3 grid grid-cols-7 border-b border-[#F2F2F2]">
          <div className="text-sm col-span-2">
            <p>{lang?.titleLeft?.packages?.title}</p>
            <p>{lang?.titleLeft?.packages?.subtitle}</p>
          </div>
          <div className="text-sm col-span-2">
            {item?.itemContent?.packages?.value?.map(
              (item: any, indx: number) => (
                <li key={indx} className="pb-2">
                  {item}
                </li>
              )
            )}
          </div>
          <div className="text-sm col-span-3">
            {lang?.description?.packages?.value?.map(
              (item: any, indx: number) => (
                <li key={indx} className="pb-2">
                  {item}
                </li>
              )
            )}
          </div>
        </div>

        <div className="py-3 grid grid-cols-7">
          <div className="text-sm col-span-2">
            {lang?.titleLeft?.labelFee?.title}
          </div>
          <div className="text-sm col-span-2">
            {item?.itemContent?.labelFee?.value}
          </div>
        </div>
      </div>
    </>
  );
};
export default TableUSMB;
