"use client";
import b2b from "@/public/images/home/whatWeDo/b2b.svg";
import icon from "@/public/images/home/whatWeDo/iconb2b.svg";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const B2B = ({ data }: { data: any }) => {
  const locale = usePathname().slice(1, 3);

  return (
    <div className="bg-white rounded-[16px] lg:rounded-[20px] p-4 lg:px-[60px] lg:py-[80px] lg:flex justify-between">
      <div>
        <div className="text-center">
          <div className="text-lg lg:text-2xl font-bold">{data?.title}</div>
          <div className="text-sm lg:text-base opacity-80">{data?.bio}</div>
        </div>
        <div className="lg:pt-10 lg:grid lg:grid-cols-2 gap-8">
          {data?.content?.map((value: any, index: number) => (
            <div
              className="mt-3 lg:mt-0 lg:h-full flex items-start bg-[#F2F4F8] border border-[#959DB9] rounded-[12px] py-4 px-5"
              key={index}
            >
              <Image src={icon} alt="supply" className="mr-2" quality={100} />
              <div className="text-sm lg:text-base">{value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:ml-[60px]">
        <Link
          target="_blank"
          href={`/${locale}/solutions/b2b-retail-fulfillment`}
          className="w-max rounded-[8px] bg-contact text-white py-2 px-3 my-5 lg:hidden block hover:bg-[#A30505] "
        >
          {data?.learnMore}
          <FontAwesomeIcon
            icon={faArrowRight}
            width={24}
            height={24}
            className="ml-2"
          />
        </Link>
        <div className="pt-5 lg:pt-0">
          <Image
            src={b2b}
            alt="supply"
            className="lg:max-w-[320px]"
            quality={100}
          />
        </div>
        <Link
          target="_blank"
          href={`/${locale}/solutions/b2b-retail-fulfillment`}
          className="text-sm w-max rounded-[8px] bg-contact text-white py-2 px-3 my-5 lg:mt-7 lg:block hidden hover:bg-[#A30505]"
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
    </div>
  );
};
export default B2B;
