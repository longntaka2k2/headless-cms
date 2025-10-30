"use client";
import { clsx } from "clsx";
import Link from "next/link";
import useWidth from "@/hooks/useWidth";
import { usePathname } from "next/navigation";

const TablePhilippinesPC = ({ lang }: any) => {
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
          <div className="max-w-[200px] w-full pl-5 text-xl font-medium">
            {lang?.type}
          </div>
          <div className="grid grid-cols-5 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 2
                    ? "border border-b-0 border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] rounded-t-xl"
                    : "",
                  "mt-2 px-5 py-4 "
                )}
              >
                <div className="h-0">
                  <div
                    className={
                      index === 2
                        ? "relative  w-max text-sm font-bold  rounded-t-[4px] bg-[#00194F] py-[3px] px-2 text-white bottom-[43px]"
                        : "hidden"
                    }
                  >
                    {lang?.most}
                  </div>
                </div>
                <div className=" font-medium mt-1 text-xl text-center">
                  {value?.value}
                  <p className="text-[#666] text-base font-medium">
                    {lang?.orders}
                  </p>
                </div>
                <div className="mt-4 flex justify-center">
                  <Link
                    className="p-2 font-medium rounded-lg bg-brand-primary text-white"
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
      <div className="px-5 flex items-center border-t border-[#F2F2F2] sticky top-[165px]">
        <div className="max-w-[200px] border-r pr-4 w-full pl-5">
          {lang?.titleLeft?.discount?.title}
        </div>
        <div className="grid grid-cols-5 w-full">
          {lang?.subHeader?.map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                index === 2
                  ? "border-x  border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] "
                  : "",
                "px-5 py-[18px]"
              )}
            >
              <span className="font-bold">
                {value?.itemContent?.discount?.value[0]}
              </span>
              {value?.itemContent?.discount?.value[1]}
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 relative z-[1]">
        <div className="flex items-center border-t border-[#F2F2F2] sticky top-[165px] bg-white">
          <div className="max-w-[200px] w-full pl-5 font-bold text-brand-secondary">
            {lang?.titleLeft?.inBound}
          </div>
          <div className="grid grid-cols-5 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 2
                    ? "border-x  border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] "
                    : "",
                  "px-5 py-[18px]"
                )}
              ></div>
            ))}
          </div>
        </div>

        <div className=" flex items-center border-t border-[#F2F2F2] sticky top-[165px] bg-white">
          <div className="max-w-[200px] w-full pl-5">
            {lang?.titleLeft?.warehouse?.title}
            <div className=" text-sm text-[#666] max-w-[200px]">
              {lang?.titleLeft?.warehouse?.subtitle}
            </div>
          </div>

          <div className="grid grid-cols-5 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 2
                    ? "border-x  border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] "
                    : "",
                  "px-5 py-[18px] "
                )}
              >
                <div className="">{value?.itemContent?.warehouse?.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center border-t border-[#F2F2F2] sticky top-[165px] bg-white">
          <div className="max-w-[200px] w-full pl-5 font-bold text-brand-secondary">
            {lang?.titleLeft?.inStorage}
          </div>
          <div className="grid grid-cols-5 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 2
                    ? "border-x  border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] "
                    : "",
                  "px-5 py-[18px]"
                )}
              ></div>
            ))}
          </div>
        </div>

        <div className="flex items-center border-t border-[#F2F2F2] sticky top-[165px] bg-white">
          <div className="max-w-[200px] border-r pr-4 w-full pl-5  ">
            {lang?.titleLeft?.storage?.title}
          </div>
          <div className="grid grid-cols-5 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 2
                    ? "border-x  border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] "
                    : "",
                  "px-5 py-[18px] "
                )}
              >
                <div className="">
                  <p className="text-[#389E0D]">
                    {value?.itemContent?.storage?.value[0]}
                  </p>
                  {value?.itemContent?.storage?.value[1]}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center border-t border-[#F2F2F2] sticky top-[165px] bg-white">
          <div className="max-w-[200px] w-full pl-5 font-bold text-brand-secondary">
            {lang?.titleLeft?.outBound}
          </div>
          <div className="grid grid-cols-5 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 2
                    ? "border-x  border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] "
                    : "",
                  "px-5 py-[18px]"
                )}
              ></div>
            ))}
          </div>
        </div>

        <div className="flex items-center border-t border-[#F2F2F2] sticky top-[165px] bg-white">
          <div className="max-w-[200px] border-r pr-4 w-full pl-5  ">
            <div>{lang?.titleLeft?.returned?.title}</div>
            <div className=" text-sm text-[#666] max-w-[270px]">
              {lang?.titleLeft?.returned?.subtitle}
            </div>
          </div>
          <div className="grid grid-cols-5 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 2
                    ? "border-x  border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] "
                    : "",
                  "px-5 py-[18px] "
                )}
              >
                <div className="">{value?.itemContent?.returned?.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center border-t border-[#F2F2F2] sticky top-[165px] bg-white">
          <div className="max-w-[200px] border-r pr-4 w-full pl-5">
            {lang?.titleLeft?.includes?.title}
          </div>
          <div className="grid grid-cols-5 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 2
                    ? "border-x border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] "
                    : "",
                  "px-5 py-[18px] "
                )}
              >
                <div className="">{value?.itemContent?.includes?.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center border-t border-[#F2F2F2] sticky top-[165px] bg-white">
          <div className="max-w-[200px] border-r pr-4 w-full pl-5  ">
            {lang?.titleLeft?.doesNotIncludes?.title}
          </div>
          <div className="grid grid-cols-5 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 2
                    ? "border-x  border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] "
                    : "",
                  "px-5 py-[18px] "
                )}
              >
                <div className="">
                  {value?.itemContent?.doesNotIncludes?.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center border-t border-[#F2F2F2] sticky top-[165px] bg-white">
          <div className="max-w-[200px] border-r pr-4 w-full pl-5 ">
            <div>{lang?.titleLeft?.account?.title}</div>
            <div className=" text-sm text-[#666] max-w-[200px]">
              {lang?.titleLeft?.account?.subtitle}
            </div>
          </div>
          <div className="grid grid-cols-5 w-full">
            {lang?.subHeader?.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 2
                    ? "border border-t-0 border-[#7D9DC4] bg-[rgba(236,_239,_249,_0.4)] rounded-b-[20px]"
                    : "",
                  "px-5 py-[18px]"
                )}
              >
                <div className="">{value?.itemContent?.account?.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablePhilippinesPC;
