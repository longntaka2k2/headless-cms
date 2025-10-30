"use client";
import check from "@/public/images/home/whatWeDo/check.svg";
import ecommobile from "@/public/images/home/whatWeDo/ecommobile.svg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Fulfillment = ({ data }: { data: any }) => {
  const locale = usePathname().slice(1, 3);

  return (
    <div className="p-4 lg:p-[60px] bg-[#001033] rounded-[16px] lg:rounded-[20px] text-white lg:flex lg:justify-between">
      <div className="lg:max-w-[450px]">
        <div className="text-lg lg:text-2xl font-bold">
          {data?.titleContent}
        </div>
        <div className="text-sm opacity-80 mb-10">{data?.bio}</div>
        <div>
          {data?.content.map((value: any, index: number) => (
            <div className="flex items-start py-3 lg:pt-3 lg:pb-0" key={index}>
              <Image src={check} alt="efex" className="mr-2" quality={100} />
              <div className="text-sm lg:text-base">{value}</div>
            </div>
          ))}
        </div>
        <Link
          target="_blank"
          href={`${locale}/solutions/ecommerce-order-fulfillment`}
          className="text-sm block w-max rounded-[8px] bg-contact text-white py-2 px-3 my-5 lg:mt-10 lg:mb-0 hover:bg-[#A30505]"
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
      <div className="pt-5 lg:pt-6">
        <Image
          src={ecommobile}
          alt="efex"
          className="lg:max-w-[500px]"
          quality={100}
        />
      </div>
    </div>
  );
};
export default Fulfillment;
