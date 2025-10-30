"use client";
import img3 from "@/public/images/home/imgLooking.webp";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Looking = ({ lang }: { lang: any }) => {
  const locale = usePathname().slice(1, 3);
  return (
    <div className=" px-4 lg:bg-white bg-[#FCF1EE] pb-3  lg:py-[80px]">
      <div className="container px-4  bg-[#F5EEFC] rounded-[16px] relative pb-8 bottom-4 lg:hidden ">
        <div className=" relative bottom-10 lg:flex lg:bottom-0">
          <Image
            src={img3}
            alt="EFEX"
            className="max-w-[200px] lg:max-w-[360px]"
            quality={100}
          />
          <div>
            <div className="text-xl font-bold">
              <div>{lang?.homePage?.looking}</div>
              <div>{lang?.homePage?.isEfex}</div>
            </div>
            <div className="text-sm">{lang?.homePage?.connect}</div>
            <Link
              href={`/${locale}/contact-sales`}
              target="_blank"
              className="py-3 px-8 bg-contact rounded-lg text-white w-max relative top-[40px] mt-4 lg:top-0 text-sm hover:bg-[#A30505]"
            >
              {lang?.homePage?.contact}
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:block hidden max-w-[1020px] mx-auto rounded-[20px] bg-[linear-gradient(to_right,_#fff_0%,_#fff_18%,_#F5EEFC_18%,_#F5EEFC_100%);] max-h-[360px]">
        <div className="flex items-center ">
          <Image
            src={img3}
            alt="EFEX"
            quality={100}
            className=" h-[390px] relative bottom-[7px]"
          />
          <div className="ml-[60px] max-w-[481px]">
            <h2 className="text-3xl font-bold">
              {lang?.homePage?.looking}
              {lang?.homePage?.isEfex}
            </h2>
            <div className="mt-1">{lang?.homePage?.connect}</div>
            <Link
              href={`/${locale}/contact-sales`}
              target="_blank"
              className="lg:block py-3 px-8 text-sm bg-contact rounded-[12px] text-white w-max mt-10 hover:bg-[#A30505]"
            >
              {lang?.homePage?.contact}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Looking;
