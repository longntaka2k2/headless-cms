"use client";
import { clsx } from "clsx";
import Link from "next/link";
import useWidth from "@/hooks/useWidth";
import { usePathname } from "next/navigation";

const TableUSPC = ({ lang }: any) => {
  const width = useWidth();
  const locale = usePathname().slice(1, 3);

  return (
    <div className="shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11)] pb-4 max-w-[1280px] w-full mx-auto rounded-[20px] lg:block hidden lg:mt-8">
      <div
        className={clsx(
          "px-5 sticky bg-white rounded-t-[20px] z-[2]",
          width >= 1830 ? "top-[102px]" : "top-[165px]"
        )}
      >
        <div className="flex items-center">
          <div className="max-w-[380px] w-full pl-5 text-xl font-medium">
            {lang?.type}
          </div>
          <div className="grid grid-cols-3 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div key={index} className="mt-2 px-5 py-4 ">
                <h3 className=" font-medium mt-1 text-xl">{value?.value}</h3>
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
            <h3 className="mt-2 px-5 py-4  font-medium text-xl">
              {lang?.description?.title}
            </h3>
          </div>
        </div>
      </div>
      <div className="px-5 relative z-[1]">
        <div className="flex items-center sticky top-[165px] ">
          <div className="max-w-[380px] w-full pl-5 font-bold text-brand-secondary">
            {lang?.titleLeft?.inBound}
          </div>
          <div className="grid grid-cols-3 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div key={index} className="px-5 py-4 "></div>
            ))}
          </div>
        </div>

        <div className="flex items-center border-t border-[#F2F2F2] sticky top-[165px] bg-white ">
          <div className="max-w-[380px] w-full pl-5">
            {lang?.titleLeft?.palletized?.title}
          </div>
          <div className="grid grid-cols-3 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div key={index} className="px-5 py-[18px] ">
                <div className="">{value?.itemContent?.palletized?.value}</div>
              </div>
            ))}
            <div className="px-5 py-[18px] ">
              {lang?.description?.palletized?.value}
            </div>
          </div>
        </div>

        <div className="flex items-center border-t border-[#F2F2F2] sticky top-[165px] bg-white ">
          <div className="max-w-[380px] w-full pl-5 border-r">
            {lang?.titleLeft?.looseShipment?.title}
          </div>
          <div className="grid grid-cols-3 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div key={index} className="px-5 py-[18px] grid justify-between">
                {value?.itemContent?.looseShipment?.value?.map(
                  (item: any, indx: number) => (
                    <p key={indx} className=" sticky top-[165px]">
                      {item}
                    </p>
                  )
                )}
              </div>
            ))}
            <div className="px-5 py-[18px]">
              {lang?.description?.looseShipment?.value?.map(
                (item: any, indx: number) => (
                  <p key={indx} className="pb-5 sticky top-[165px]">
                    {item}
                  </p>
                )
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center border-t border-[#F2F2F2] sticky top-[165px] bg-white">
          <div className="max-w-[380px] w-full pl-5 font-bold text-brand-secondary">
            {lang?.titleLeft?.storage}
          </div>
          <div className="grid grid-cols-3 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div key={index} className="px-5 py-4 "></div>
            ))}
          </div>
        </div>

        <div className="flex items-center border-t border-[#F2F2F2] sticky top-[165px] bg-white">
          <div className="max-w-[380px] w-full pl-5">
            {lang?.titleLeft?.variable?.title}
          </div>
          <div className="grid grid-cols-3 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div key={index} className="px-5 py-[18px] ">
                <div className="">{value?.itemContent?.variable?.value}</div>
              </div>
            ))}
            <div className="px-5 py-[18px]">
              {lang?.description?.variable?.value}
            </div>
          </div>
        </div>

        <div className="flex items-center  border-t border-[#F2F2F2] sticky top-[165px] bg-white">
          <div className="max-w-[380px] w-full pl-5 font-bold text-brand-secondary">
            {lang?.titleLeft?.fulfillment}
          </div>
          <div className="grid grid-cols-3 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div key={index} className="px-5 py-4 "></div>
            ))}
          </div>
        </div>

        <div className="flex items-center border-t border-[#F2F2F2] sticky top-[165px] bg-white">
          <div className="pl-5 max-w-[380px] w-full py-[18px] h-full">
            <div className=" ">{lang?.titleLeft?.pallet?.title}</div>
            <div className=" text-sm text-[#666] max-w-[270px]">
              {lang?.titleLeft?.pallet?.subtitle}
            </div>
          </div>
          <div className="grid grid-cols-3 w-full h-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div key={index} className="px-5 py-[18px] grid justify-between">
                {value?.itemContent?.pallet?.value?.map(
                  (item: any, indx: number) => (
                    <p key={indx} className=" sticky top-[165px] my-auto">
                      {item}
                    </p>
                  )
                )}
              </div>
            ))}
            <div className="px-5 py-[18px]">
              {lang?.description?.pallet?.value?.map(
                (item: any, indx: number) => (
                  <p key={indx} className="pb-5 sticky top-[165px]">
                    {item}
                  </p>
                )
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center border-t border-[#F2F2F2] sticky top-[100px] bg-white ">
          <div className="pl-5 max-w-[380px] w-full py-[18px] h-full">
            <div>{lang?.titleLeft?.packages?.title}</div>
            <div className="text-sm text-[#666] max-w-[270px]">
              {lang?.titleLeft?.packages?.subtitle}
            </div>
          </div>
          <div className="grid grid-cols-3 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div key={index} className="px-5 py-[18px] grid justify-between">
                {value?.itemContent?.packages?.value?.map(
                  (item: any, indx: number) => (
                    <p key={indx} className="  my-auto">
                      {item}
                    </p>
                  )
                )}
              </div>
            ))}
            <div className="px-5 py-[18px]">
              {lang?.description?.packages?.value?.map(
                (item: any, indx: number) => (
                  <p key={indx} className="pb-5 ">
                    {item}
                  </p>
                )
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center border-t border-[#F2F2F2] sticky top-[165px] bg-white">
          <div className="max-w-[380px] w-full pl-5">
            {lang?.titleLeft?.labelFee?.title}
          </div>
          <div className="grid grid-cols-3 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div key={index} className="px-5 py-[18px] ">
                <div className="">{value?.itemContent?.labelFee?.value}</div>
              </div>
            ))}
            <div className="px-5 py-[18px]">
              {lang?.description?.labelFee?.value}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableUSPC;
