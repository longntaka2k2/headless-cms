"use client";
import EzImage from "@/components/commons/EzImage";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { removeAccent } from "@/utils/ultils";
import { usePathname } from "next/navigation";
const OutSourced = ({ lang }: any) => {
  const locale = usePathname().slice(1, 3);
  const link =
    locale === "en"
      ? "https://efex.vn/en/blog/ecommerce-order-fulfillment-guide"
      : "https://efex.vn/vi/blog/fulfillment-la-gi";
  return (
    <div
      className="px-4 lg:px-0 py-6 lg:container scroll-m-[124px]"
      id={removeAccent(lang?.label)}
    >
      <h2 className="text-[18px] lg:text-[24px] font-bold pb-3 lg:pb-5">
        {lang?.title}
      </h2>
      <div className="lg:flex lg:justify-between lg:items-center">
        <EzImage
          src={"/uploads/0116fc588ab062735ed70e0ce953bce3_a8dd7cb795.jfif"}
          alt="Image_34bbf9b52f"
          width={588}
          height={346}
          quality={100}
          className="lg:max-w-[588px] lg:max-h-[346px] rounded-lg"
        />
        <div className="lg:max-w-[552px] lg:pr-10">
          <div className="my-5">
            <div>
              <div className="text-[14px] lg:text-[18px] font-bold">
                {lang?.content1?.title}
              </div>
              <div className="text-[14px] lg:text-base">
                <span>{lang?.content1?.minimize}</span>{" "}
                <span className="font-medium text-[#0F62FE]">
                  {lang?.content1?.costs}
                </span>{" "}
                <span>{lang?.content1?.and}</span>
              </div>
            </div>
            <div className="border-b border-[#af000031] my-4"></div>
            <div>
              <div className="text-[14px] lg:text-[18px] font-bold">
                {lang?.content2?.title}
              </div>
              <div className="text-[14px] lg:text-base">
                {lang?.content2?.content}
              </div>
            </div>
          </div>
          <div className="">
            <Link
              href={link}
              className="block w-max rounded-[8px] text-sm bg-contact text-white py-2 px-3 lg:px-5 my-5 hover:bg-[#A30505]"
            >
              {lang?.viewMore}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative h-[30px] lg:h-[120px] lg:mt-[80px] ">
        <EzImage
          src={"/uploads/image_817_9f92187041.png"}
          alt="Image_34bbf9b52f"
          width={1200}
          height={240}
          quality={100}
          className="rounded-lg  h-[112px] lg:h-[240px] lg:max-w-[1200px] w-full"
        />
        <div className="absolute w-full top-[14px] lg:top-[60%] text-white font-bold text-lg lg:text-3xl text-center  ">
          <div className="lg:mx-auto lg:max-w-[800px] px-4 lg:px-0">
            {lang?.custom}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutSourced;
