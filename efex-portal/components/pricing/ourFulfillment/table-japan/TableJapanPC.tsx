"use client";
import { clsx } from "clsx";
import Link from "next/link";
import useWidth from "@/hooks/useWidth";
import { usePathname } from "next/navigation";

const TableJapanPC = ({ lang }: any) => {
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
          <div className="max-w-[380px] w-full pl-5 border-rext-xl font-medium">
            {lang?.type}
          </div>
          <div className="grid grid-cols-3 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 1
                    ? "border border-b-0 border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] rounded-t-xl"
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
                  <span className="text-[#666] text-base font-medium ml-1">
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
            {lang?.titleLeft?.inOutBound}
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
          <div className="max-w-[380px] w-full pl-5">
            {lang?.titleLeft?.unloading?.title}
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
                <div className="">{value?.itemContent?.unloading?.value}</div>
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
        <div className="flex items-center border-t border-[#F2F2F2] sticky top-[165px]">
          <div className="max-w-[380px] w-full pl-5 border-r">
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
                <div className="">
                  <span className="text-[#389E0D] pr-1">{lang?.free}</span>
                  {value?.itemContent?.storage?.value}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex items-center border-t border-[#F2F2F2] sticky top-[165px]">
          <div className="max-w-[380px] w-full pl-5 font-bold text-brand-secondary">
            {lang?.titleLeft?.packing}
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
          <div className="max-w-[380px] w-full pl-5">
            {lang?.titleLeft?.nekoPost?.title}
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
                <div className="">{value?.itemContent?.nekoPost?.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex items-center border-t border-[#F2F2F2] sticky top-[165px]">
          <div className="max-w-[380px] w-full pl-5">
            <div>{lang?.titleLeft?.size60?.title}</div>
            <div className=" text-sm text-[#666] max-w-[270px]">
              {lang?.titleLeft?.size60?.subtitle}
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
                <div className="">{value?.itemContent?.size60?.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex items-center border-t border-[#F2F2F2] sticky top-[165px]">
          <div className="max-w-[380px] w-full pl-5">
            <div>{lang?.titleLeft?.size80?.title}</div>
            <div className=" text-sm text-[#666] max-w-[270px]">
              {lang?.titleLeft?.size80?.subtitle}
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
                <div className="">{value?.itemContent?.size80?.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex items-center border-t border-[#F2F2F2] sticky top-[165px]">
          <div className="max-w-[380px] w-full pl-5">
            <div>{lang?.titleLeft?.size100?.title}</div>
            <div className=" text-sm text-[#666] max-w-[270px]">
              {lang?.titleLeft?.size100?.subtitle}
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
                <div className="">{value?.itemContent?.size100?.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex items-center border-t border-[#F2F2F2] sticky top-[165px]">
          <div className="max-w-[380px] w-full pl-5">
            <div>{lang?.titleLeft?.size140?.title}</div>
            <div className=" text-sm text-[#666] max-w-[270px]">
              {lang?.titleLeft?.size140?.subtitle}
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
                <div className="">{value?.itemContent?.size140?.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex items-center border-t border-[#F2F2F2] sticky top-[165px]">
          <div className="max-w-[380px] w-full pl-5">
            <div>{lang?.titleLeft?.size160?.title}</div>
            <div className=" text-sm text-[#666] max-w-[270px]">
              {lang?.titleLeft?.size160?.subtitle}
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
                <div className="">{value?.itemContent?.size160?.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex items-center border-t border-[#F2F2F2] sticky top-[165px]">
          <div className="max-w-[380px] w-full pl-5">
            {lang?.titleLeft?.labeling?.title}
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
                <div className="">{value?.itemContent?.labeling?.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex items-center border-t border-[#F2F2F2] sticky top-[165px]">
          <div className="max-w-[380px] w-full pl-5">
            {lang?.titleLeft?.consolidation?.title}
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
                <div className="text-[#389E0D]">
                  {value?.itemContent?.consolidation?.value}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex items-center border-t border-[#F2F2F2] sticky top-[165px]">
          <div className="max-w-[380px] w-full pl-5 font-bold text-brand-secondary">
            {lang?.titleLeft?.other}
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
          <div className="max-w-[380px] w-full pl-5">
            {lang?.titleLeft?.daibiki?.title}
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
                <div className="">{value?.itemContent?.daibiki?.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex items-center border-t border-[#F2F2F2] sticky top-[165px]">
          <div className="max-w-[380px] w-full pl-5">
            {lang?.titleLeft?.cod?.title}
          </div>
          <div className="grid grid-cols-3 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 1
                    ? "border border-t-0  border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] rounded-b-[20px] "
                    : "",
                  "px-5 py-[18px] "
                )}
              >
                <div className="">{value?.itemContent?.cod?.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableJapanPC;
