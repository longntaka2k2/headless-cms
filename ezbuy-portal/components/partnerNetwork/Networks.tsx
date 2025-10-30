"use client";

import clsx from "clsx";
import EzImage from "../commons/EzImage";
import { useState } from "react";

const Networks = ({ lang }: any) => {
  const [active, setActive] = useState(true);

  const itemjp = [
    "/uploads/Rectangle_29_3_5385feeffc.png",
    "/uploads/Rectangle_29_2_308c6d8c1d.png",
    "/uploads/Rectangle_30_1_4a693bda2c.png",
    "/uploads/Rectangle_29_1_a25509d300.png",
    "/uploads/Rectangle_29_aa31a67e1a.png",
    "/uploads/Rectangle_30_0643d43812.png",
  ];
  const itemvi1 = [
    "/uploads/Rectangle_29_fff9f25179.png",
    "/uploads/Rectangle_29_1_5014a8fb8d.png",
    "/uploads/Rectangle_30_bf6e0df0c0.png",
  ];
  const itemvi2 = [
    "/uploads/Rectangle_29_2_507369aa6f.png",
    "/uploads/Rectangle_30_1_92d77d9d84.png",
  ];
  return (
    <div className="lg:mt-[80px] mt-10 px-4 lg:px-0">
      <div className="text-center lg:max-w-[976px] mx-auto lg:font-black font-bold lg:text-[40px] lg:leading-54 text-2xl lg:mb-10 overflow-hidden">
        {lang.title}
      </div>
      <div className="lg:block hidden bg-[url(https://strapi-ezbuy.ichiba.net/uploads/Layer_1_36aaf4d56f.svg)] lg:py-20 bg-no-repeat">
        <div className="max-w-[976px] text-center mx-auto">
          <div className="lg:font-black lg:text-[32px] text-2xl text-center">
            {lang.shipping.title}
          </div>
          <div className="my-6 text-lg">{lang.shipping.subtitle}</div>
        </div>
        <div className="max-w-[476px] mx-auto mt-6 mb-14 grid grid-cols-2 border border-[#00194F] rounded-full">
          <div
            className={clsx(
              "max-w-[234px font-bold rounded-full py-3 text-center m-[2px] ",
              active
                ? "bg-[#00194F] text-white "
                : "text-[#00194F] cursor-pointer"
            )}
            onClick={() => setActive(true)}
          >
            {lang.shipping.japan}
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
            {lang.shipping.vietnam}
          </div>
        </div>
        <div
          className={clsx(
            "max-w-[900px] mx-auto grid grid-cols-3 gap-6 justify-items-center transition-all duration-50 ",
            active ? "scale-100" : "scale-0 h-0"
          )}
        >
          {itemjp.map((value: any, index: number) => (
            <div
              className={clsx(
                "hover:transition-all hover:scale-110 hover:duration-200 hover:ease-linear hover:shadow-[0px_4px_12px_rgba(0,_0,_0,_0.24)] rounded-lg",
                "shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]"
              )}
              key={index}
            >
              <EzImage
                width={240}
                height={96}
                quality={100}
                src={value}
                alt={value}
              />
            </div>
          ))}
        </div>
        <div
          className={clsx(
            "max-w-[900px] mx-auto grid grid-cols-3 gap-6 justify-items-center transition-all duration-50 ",
            !active ? "scale-100" : "scale-0 h-0"
          )}
        >
          {itemvi1.map((value: any, index: number) => (
            <div
              className={clsx(
                "hover:transition-all hover:scale-110 hover:duration-200 hover:ease-linear hover:shadow-[0px_4px_12px_rgba(0,_0,_0,_0.24)] rounded-lg",
                "shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]"
              )}
              key={index}
            >
              <EzImage
                width={240}
                height={96}
                quality={100}
                src={value}
                alt={value}
              />
            </div>
          ))}
        </div>
        <div
          className={clsx(
            "max-w-[584px] mx-auto grid grid-cols-2 gap-6 justify-items-center transition-all duration-50 mt-6",
            !active ? "scale-100" : "scale-0 h-0"
          )}
        >
          {itemvi2.map((value: any, index: number) => (
            <div
              className={clsx(
                "hover:transition-all hover:scale-110 hover:duration-200 hover:ease-linear hover:shadow-[0px_4px_12px_rgba(0,_0,_0,_0.24)] rounded-lg",
                "shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]"
              )}
              key={index}
            >
              <EzImage
                width={240}
                height={96}
                quality={100}
                src={value}
                alt={value}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden block">
        <div className="max-w-[976px] text-center mx-auto  px-4">
          <div className="lg:font-black lg:text-[32px] font-bold text-2xl text-center">
            {lang.shipping.title}
          </div>
          <div className="my-4 text-sm">{lang.shipping.subtitle}</div>
        </div>
        <EzImage
          width={1024}
          height={400}
          quality={100}
          src={"/uploads/Layer_1_36aaf4d56f.svg"}
          alt="/uploads/Layer_1_36aaf4d56f.svg"
        />
        <div className="mt-6 px-4">
          <div className="flex gap-6 border-b-[2px] border-[#00194f60] justify-center">
            <div
              className={clsx(
                "relative font-bold text-lg top-[2px] px-3 py-1",
                active
                  ? "border-[2px] border-[#00194f60] border-b-white rounded-t-xl "
                  : "opacity-80"
              )}
              onClick={() => setActive(true)}
            >
              {lang.shipping.japan}
            </div>
            <div
              className={clsx(
                "relative font-bold text-lg top-[2px] px-3 py-1",
                !active
                  ? "border-[2px] border-[#00194f60] border-b-white rounded-t-xl "
                  : "opacity-80"
              )}
              onClick={() => setActive(false)}
            >
              {lang.shipping.vietnam}
            </div>
          </div>
          <div
            className={clsx('relative ',active ? "grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 justify-items-center transition-all duration-50 mt-6 scale-100  " : "scale-0 h-0")}
          >
            {itemjp.map((x: any, index: number) => (
              <div
                key={index}
              >
                <EzImage
                  width={240}
                  height={96}
                  quality={100}
                  src={x}
                  alt={x}
                className="shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] rounded-lg"

                />
              </div>
            ))}
          </div>
          <div
            className={clsx('relative',!active ? "grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 justify-items-center transition-all duration-50 mt-6 scale-100" : "scale-0 h-0")}
          >
            {itemvi1.map((x: any, index: number) => (
              <div
                className="shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] rounded-lg"
                key={index}
              >
                <EzImage
                  width={240}
                  height={96}
                  quality={100}
                  src={x}
                  alt={x}
                />
              </div>
            ))}
            {itemvi2.map((x: any, index: number) => (
              <div
                className={clsx(
                  "shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] rounded-lg"
                )}
                key={index}
              >
                <EzImage
                  width={240}
                  height={96}
                  quality={100}
                  src={x}
                  alt={x}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Networks;
