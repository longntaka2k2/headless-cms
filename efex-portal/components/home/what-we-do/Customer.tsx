"use client";
import custom from "@/public/images/home/whatWeDo/custom.svg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Customer = ({ data }: { data: any }) => {
  const locale = usePathname().slice(1, 3);
  
  return (
    <div className="lg:px-[60px] lg:py-[80px] bg-[#001033] text-white text-center rounded-[16px] lg:rounded-[20px] px-4 py-5 à">
      <div className="lg:max-w-[600px] lg:mx-auto lg:text-center">
        <div className="text-lg lg:text-2xl font-bold">{data?.title}</div>
        <div className="text-sm lg:text-base opacity-80 mt-2">{data?.bio}</div>
      </div>
      <div className="lg:grid lg:grid-cols-4 lg:gap-10">
        {data?.content?.map((value: any, index: number) => (
          <div
            className="px-0.5 pt-0.5 shadow-10 rounded-t-2xl mt-10"
            key={index}
            style={{
              background: "linear-gradient(0deg, #00194F 0%, #294583 100%)",
            }}
          >
            <div className="flex flex-col px-[20px] pt-[18px] text-center items-center relative bg-[#001033] h-full rounded-t-2xl">
              <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 rounded-full absolute top-0 -translate-y-1/2">
                <div className="relative right-[50%] bottom-[15px] lg:right-[0] lg:bottom-[0]">
                  <Image
                    src={custom}
                    alt="efex"
                    className=" max-w-[80px]"
                    quality={100}
                  />
                </div>
              </div>
              <span className="text-sm lg:text-base mt-10">{value}</span>
            </div>
          </div>
        ))}
      </div>
      <Link
        target="_blank"
        href={`/${locale}/solutions/custom-clearance`}
        className="text-sm block w-max rounded-[8px] bg-linear text-white py-2 px-3 my-5 lg:mt-7 mx-auto"
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
  );
};
export default Customer;
