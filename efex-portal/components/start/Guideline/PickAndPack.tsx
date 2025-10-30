"use client";
import EzImage from "@/components/commons/EzImage";
import { removeAccent } from "@/utils/ultils";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PickAndPack = ({ lang }: any) => {
  const locale = usePathname().slice(1, 3);
  const link =
    locale === "en"
      ? "https://efex.vn/en/blog/pick-and-pack-warehousing"
      : "https://efex.vn/vi/blog/fulfillment-la-gi";
  return (
    <div
      className=" lg:pt-[150px] pt-[80px] pb-5 px-4 lg:px-0 text-center bg-[linear-gradient(3deg,_#F4F6F8_0.54%,_rgba(244,_246,_248,_0.00)_89.71%)] scroll-m-[124px]"
      id={removeAccent(lang?.label)}
    >
      <div className="lg:container">
        <div className="text-[18px] lg:text-[24px] font-bold ">
          {lang?.title}
        </div>
        <div className="px-4 py-5 lg:py-8 lg:px-0 lg:grid lg:grid-cols-3">
          <div className="border-b lg:border-b-0 lg:border-r border-[#af000031] pb-4 lg:py-5 lg:pr-10">
            <EzImage
              src={"/uploads/Image_28ddda2163.svg"}
              alt="/uploads/Image_28ddda2163.svg"
              width={64}
              height={64}
              className="w-10 h-10 lg:w-16 lg:h-16 mx-auto lg:mb-5"
            />
            <div className="text-[14px] lg:text-base lg:max-w-[314px]">
              {lang?.content[0]}
            </div>
          </div>
          <div className="border-b lg:border-b-0 lg:border-r border-[#af000031] py-4 lg:py-5 lg:px-10">
            <EzImage
              src={"/uploads/Frame_b7cc979bd1.svg"}
              alt="/uploads/Frame_b7cc979bd1.svg"
              width={64}
              height={64}
              className="w-10 h-10 lg:w-16 lg:h-16 mx-auto lg:mb-5"
            />
            <div className="text-[14px] lg:text-base lg:max-w-[314px]">
              {lang?.content[1]}
            </div>
          </div>
          <div className="pt-4 lg:pl-10 lg:py-5">
            <EzImage
              src={"/uploads/Frame_1_1467b484b3.svg"}
              alt="/uploads/Frame_1_1467b484b3.svg"
              width={64}
              height={64}
              className="w-10 h-10 lg:w-16 lg:h-16 mx-auto lg:mb-5"
            />
            <div className="text-[14px] lg:text-base lg:max-w-[314px]">
              {lang?.content[2]}
            </div>
          </div>
        </div>
        <div className="">
          <Link
            href={link}
            className="block w-max rounded-[8px] text-sm bg-contact text-white py-2 px-3 lg:px-5 lg:mb-5  hover:bg-[#A30505] mx-auto "
          >
            {lang?.viewMore}
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" width={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PickAndPack;
