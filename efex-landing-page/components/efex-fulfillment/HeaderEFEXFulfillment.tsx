"use client";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HeaderEFEXFulfillment = ({ lang, onButtonClick }: any) => {
  return (
    <>
      <div
        className={clsx(
          "sticky top-0 z-[150] bg-[linear-gradient(90deg,_#AA0606_-12.5%,_#00194F_56.78%)] py-2 lg:py-3"
        )}
      >
        <div className="container flex items-center justify-between gap-5 px-4 lg:px-0 text-white">
          <Image
            src={"https://strapi-efex.ichiba.net/uploads/Group_334cf6f7c8.svg"}
            width={114}
            height={36}
            alt="EFEX"
            className="w-[75px] h-[25px] lg:w-[114px] lg:h-9"
          />

          <div className="text-center">
            <p className="text-xs lg:text-xl font-bold">{lang.heading}</p>
            <p className="text-[10px] lg:text-sm">{lang.subHeading}</p>
          </div>

          <div
            onClick={onButtonClick}
            className="py-2 px-3 lg:py-3 lg:px-5 text-sm rounded-lg bg-brand-primary whitespace-nowrap cursor-pointer"
          >
            <span className="lg:hidden">{lang.textBtn[0]}</span>
            <span className="hidden lg:block">{lang.textBtn[1]}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderEFEXFulfillment;
