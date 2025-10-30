"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import EzImage from "../commons/EzImage";

const WareHouse = ({ lang }: any) => {
  const [active, setActive] = useState(true);
  const [activeHN, setActiveHN] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const newTimeoutId = setTimeout(() => {
      setActiveHN((prevActiveHN) => !prevActiveHN);
    }, 5000);
    return () => clearTimeout(newTimeoutId);
  }, [activeHN]);
  return (
    <div>
      <div className="max-w-[976px] text-center mx-auto lg:mt-15 mt-8 overflow-hidden">
        <div className="lg:font-black font-bold lg:text-[32px] text-2xl text-center">
          {lang.warehouse.title}
        </div>
        <div className="lg:my-6 mt-4 lg:text-lg text-sm">
          {lang.warehouse.subtitle}
        </div>
      </div>
      <div className="max-w-[476px] mx-auto mt-6 mb-14 grid grid-cols-2 border border-[#00194F] rounded-full">
        <div
          className={clsx(
            "max-w-[234px] font-bold rounded-full py-3 text-center m-[2px] ",
            active
              ? "bg-[#00194F] text-white "
              : "text-[#00194F] cursor-pointer"
          )}
          onClick={() => setActive(true)}
        >
          {lang.warehouse.japan}
        </div>
        <div
          className={clsx(
            "max-w-[234px] font-bold rounded-full py-3 text-center m-[2px]",
            !active
              ? "bg-[#00194F] text-white "
              : "text-[#00194F] cursor-pointer"
          )}
          onClick={() => setActive(false)}
        >
          {lang.warehouse.vietnam}
        </div>
      </div>
      <div className="lg:block hidden">
        <div
          className={clsx(
            "max-w-[976px] mx-auto lg:mt-[72px] transition-all duration-100",
            active ? " scale-100" : "scale-0 h-0"
          )}
        >
          <div className="grid grid-cols-2">
            <div>
              <div className="rounded-lg overflow-hidden shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] max-w-[376px] relative z-[1] top-[120px] left-[160px]">
                <EzImage
                  width={376}
                  height={164}
                  src={"/uploads/image_7_73f0109401.png"}
                  alt="/uploads/image_7_73f0109401.png"
                  className="border-b-[6px] border-[#00194F]"
                />
                <div className="px-4 pt-3 pb-4">
                  <div className="font-bold">Tokyo, Japan</div>
                  <div className="uppercase text-[#687077] text-xs mt-2">
                    Tokyo, Koto City, Shinsuna, 3 Chome−10−8, 1F Warehouse 3
                  </div>
                  <div className="text-xs  mt-1">〒136-0075</div>
                </div>
              </div>
            </div>
            <div
              className={clsx(
                "delay-150 transition-all duration-50 ease-in-out"
              )}
            >
              <EzImage
                src={"/uploads/OBJECTS_e5c16e3b2b.svg"}
                alt="/uploads/OBJECTS_e5c16e3b2b.svg"
                width={572}
                height={739}
                quality={100}
              />
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "max-w-[976px] mx-auto lg:mt-[72px] transition-all duration-100",
            !active ? " scale-100" : "scale-0 h-0"
          )}
        >
          <div className="flex ">
            <div>
              <div className="rounded-lg overflow-hidden shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] max-w-[376px] relative z-[1] ">
                <EzImage
                  width={376}
                  height={164}
                  src={"/uploads/image_6_5eb402407a.png"}
                  alt="/uploads/image_6_5eb402407a.png"
                  className="border-b-[6px] border-[#00194F]"
                />
                <div className="px-4 pt-3 pb-4">
                  <div className="font-bold">
                    {lang.warehouse.address.hanoi}
                  </div>
                  <div className="uppercase text-[#687077] text-xs mt-2">
                    {lang.warehouse.address.detailHanoi}
                  </div>
                  <div className="text-xs mt-1">Vietnam-72517</div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] max-w-[376px] relative z-[1] top-[70px] left-[102px]">
                <EzImage
                  width={376}
                  height={164}
                  src={"/uploads/image_6_1_bd7403d9c5.png"}
                  alt="/uploads/image_6_1_bd7403d9c5.png"
                  className="border-b-[6px] border-[#00194F]"
                />
                <div className="px-4 pt-3 pb-4">
                  <div className="font-bold">{lang.warehouse.address.hcm}</div>
                  <div className="uppercase text-[#687077] text-xs mt-2">
                    {lang.warehouse.address.detailHcm}
                  </div>
                  <div className="text-xs mt-1">Vietnam-72517</div>
                </div>
              </div>
            </div>
            <div
              className={clsx(
                "delay-150 transition-all duration-50 ease-in-out w-[611px]"
              )}
            >
              <EzImage
                src={"/uploads/Layer_1_1_65c7401233.svg"}
                alt="/uploads/Layer_1_1_65c7401233.svg"
                width={611}
                height={584}
                quality={100}
                className="w-full h-[584px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={clsx("lg:hidden")}>
        <div
          className={clsx(
            "transition-all duration-100",
            active ? " scale-100" : "scale-0 h-0"
          )}
        >
          <div className="h-0">
            <div className="rounded-lg overflow-hidden shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] max-w-[300px] relative z-[1] top-[30px] ">
              <EzImage
                width={376}
                height={164}
                src={"/uploads/image_7_73f0109401.png"}
                alt="/uploads/image_7_73f0109401.png"
                className="border-b-[6px] border-[#00194F]"
              />
              <div className="px-4 pt-3 pb-4 bg-white">
                <div className="font-bold text-base">Tokyo, Japan</div>
                <div className="uppercase text-[#687077] text-xs mt-2">
                  Tokyo, Koto City, Shinsuna, 3 Chome−10−8, 1F Warehouse 3
                </div>
                <div className="text-xs  mt-1">〒136-0075</div>
              </div>
            </div>
          </div>
          <EzImage
            src={"/uploads/OBJECTS_1_2a31293422.svg"}
            alt="/uploads/OBJECTS_1_2a31293422.svg"
            width={572}
            height={739}
          />
        </div>
        <div
          className={clsx(
            "transition-all duration-100",
            !active ? " scale-100" : "scale-0 h-0"
          )}
        >
          <div className="h-0">
            <div onClick={() => setActiveHN(true)} className={clsx("relative z-10 text-sm bg-[#00194F] text-white font-bold rounded-full w-max px-2 py-1 top-[30px] left-[100px]",!activeHN ?'opacity-70' :'' )}>
              {lang.warehouse.address.hanoi}
            </div>
          </div>
          <EzImage
            src={"/uploads/Layer_1_2_cbcb153851.svg"}
            alt="/uploads/Layer_1_2_cbcb153851.svg"
            width={572}
            height={739}
          />
          <div className="h-0">
            <div onClick={() => setActiveHN(false)} className={clsx("relative z-10 text-sm bg-[#00194F] text-white font-bold rounded-full w-max px-2 py-1 bottom-[100px] left-[110px]",activeHN ?'opacity-70' :'')}>
              {lang.warehouse.address.hcm}
            </div>
          </div>
          <div className="">
            <div
            
              className={clsx(
                activeHN ? " scale-100" : "scale-0 h-0",
                "mx-auto bg-white transition-all duration-50 rounded-lg overflow-hidden shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] max-w-[300px] relative z-[1] "
              )}
            >
              <EzImage
                width={376}
                height={164}
                src={"/uploads/image_6_5eb402407a.png"}
                alt="/uploads/image_6_5eb402407a.png"
                className="border-b-[6px] border-[#00194F]"
              />
              <div className="px-4 pt-3 pb-4">
                <div className="font-bold">{lang.warehouse.address.hanoi}</div>
                <div className="uppercase text-[#687077] text-xs mt-2">
                  {lang.warehouse.address.detailHanoi}
                </div>
                <div className="text-xs mt-1">Vietnam-72517</div>
              </div>
            </div>
            <div
              className={clsx(
                !activeHN ? " scale-100" : "scale-0 h-0",
                "mx-auto bg-white transition-all duration-50 rounded-lg overflow-hidden shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] max-w-[300px] relative z-[1] "
              )}
            >
              <EzImage
                width={376}
                height={164}
                src={"/uploads/image_6_1_bd7403d9c5.png"}
                alt="/uploads/image_6_1_bd7403d9c5.png"
                className="border-b-[6px] border-[#00194F]"
              />
              <div className="px-4 pt-3 pb-4">
                <div className="font-bold">{lang.warehouse.address.hcm}</div>
                <div className="uppercase text-[#687077] text-xs mt-2">
                  {lang.warehouse.address.detailHcm}
                </div>
                <div className="text-xs mt-1">Vietnam-72517</div>
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default WareHouse;
