'use client'
import EzImage from "@/components/commons/EzImage";
import { removeAccent } from "@/utils/ultils";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Fullfilment = ({ lang }: any) => {
  const locale = usePathname().slice(1, 3);
  const link = locale === 'en' ? 'https://efex.vn/en/blog/order-fulfillment-cost' : 'https://efex.vn/vi/blog/fulfillment-la-gi'
  return (
    <div className="px-4 lg:px-0 py-6 lg:py-[60px] lg:container lg:flex justify-between items-center scroll-m-[124px]" id={removeAccent(lang?.label)}>
      <div className="lg:max-w-[588px]">
        <h3 className="text-[18px] lg:text-[24px] font-bold " >
          {lang?.title}
        </h3>
        <div className="lg:mt-4 mt-2 text-[14px] lg:text-base">{lang?.whether}</div>
        <div className="my-4 text-[14px] lg:text-base lg:block hidden">{lang?.let}</div>
        <div className="lg:mt-2">
          <Link
            href={link}
            target="_blank"
            className="lg:block hidden font-medium w-max rounded-[8px] text-sm border text-contact border-contact py-2 px-3 lg:px-5 my-5 "
          >
            {lang?.howto}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-2"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>

      <div className="bg-[#FFF1F0] rounded-xl py-4 lg:max-w-[588px] lg:w-full mt-4 lg:mt-0">
        <div className="relative mb-4 inline-block right-3 shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] py-2 px-5 rounded-[4px_40px_40px_4px] text-[12px] bg-white border border-[#F2F2F2] font-medium text-brand-secondary">
          <span>{lang?.tag}</span>
        </div>
        <div className="px-4 lg:px-6 ">
          {lang?.content?.map((value: any, index: number) => (
            <div className="flex items-center py-2 lg:py-4" key={index}>
              <EzImage
                src={"/uploads/Objects_a8d92e1708.svg"}
                alt="/uploads/Objects_a8d92e1708.svg"
                width={32}
                height={32}
                className="w-6 h-6 lg:w-8 lg:h-8 lg:ml-3 lg:mr-4 mr-3"
              />
              <div className="text-sm lg:text-base max-w-[290px] lg:max-w-[464px] lg:w-full">{value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-4 text-[14px] lg:hidden">{lang?.let}</div>
      <div>
        <Link
          href={link}
          target="_blank"
          className="lg:hidden inline-block rounded-[8px] text-sm border text-contact border-contact p-2 lg:px-5 lg:mt-5 mt-0 line-clamp-1"
        >
          {lang?.howto}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="inline"
            width={24}
            size="sm"
            height={24}
          />
        </Link>
      </div>
    </div>
  );
};

export default Fullfilment;
