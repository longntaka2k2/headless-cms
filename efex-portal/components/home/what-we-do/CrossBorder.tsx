"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon1 from "@/public/images/home/whatWeDo/icon1.svg";
import bg from "@/public/images/home/whatWeDo/bg.svg";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const CrossBorder = ({ data }: { data: any }) => {
  const locale = usePathname().slice(1, 3);

  return (
    <div
      className="bg-[#001033] rounded-[16px] lg:rounded-[20px] p-4 lg:px-[60px] lg:py-[80px] lg:flex justify-between"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="lg:flex lg:items-center">
        <div>
          <div className=" text-white">
            <div className="text-lg lg:text-2xl font-bold">{data?.title}</div>
            <div className="text-sm opacity-80">{data?.bio}</div>
          </div>
          <Link
            target="_blank"
            href={`/${locale}/solutions/cross-border-shipping`}
            className="block w-max rounded-[8px] text-sm bg-contact text-white py-2 px-3 my-5 lg:mt-5 lg:mb-0 hover:bg-[#A30505]"
          >
            {data?.learnMore}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-2"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <div className="lg:pt-0 lg:grid lg:grid-cols-2 gap-8 lg:gap-6 text-white lg:ml-10">
          {data?.content.map((value: any, index: number) => (
            <div
              className="mt-3 lg:mt-0 lg:h-full text-center items-start bg-[rgba(255,_255,_255,_0.08)] border border-[#959DB9] rounded-[12px] p-4 lg:p-5"
              key={index}
            >
              <Image
                src={icon1}
                alt="efex"
                className="mx-auto mb-2"
                quality={100}
              />
              <div className="text-sm lg:text-base">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CrossBorder;
