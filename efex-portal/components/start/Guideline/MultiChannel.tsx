'use client'
import EzImage from "@/components/commons/EzImage";
import { removeAccent } from "@/utils/ultils";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MultiChannel = ({ lang }: any) => {
  const locale = usePathname().slice(1, 3);
  const link = locale === 'en' ? 'https://efex.vn/en/blog/omnichannel-fulfillment' : 'https://efex.vn/vi/blog/fulfillment-la-gi' 
  return (
    <div className="lg:container px-4 lg:px-0 scroll-m-[124px]" id={removeAccent(lang?.label)}>
      <div className="border lg:relative lg:flex lg:justify-between border-[#ABD3C8] py-5 px-4 rounded-[16px] lg:ml-[130px] lg:p-[60px]">
        <div className=" lg:block hidden ">
          <EzImage
            src={"/uploads/Image_e3f56f7cbd.png"}
            alt="ecommerce_1_3a047dd270"
            width={463}
            height={364}
            className="w-full xl:h-[364px] xl:!w-[463px] left-[-130px] lg:absolute lg:!w-[282px]"
          />
        </div>
        <div className="lg:max-w-[612px]">
          <div className="font-bold text-[18px] lg:text-[24px]" >
            {lang?.title}
          </div>
          <div className="mt-2">
            {lang?.content?.map((value: any, index: number) => (
              <div
                className="flex justify-between py-2 items-start lg:mt-1 lg:py-3"
                key={index}
              >
                <EzImage
                  src={"/uploads/Group_72e270ded5.svg"}
                  alt="Group_72e270ded5"
                  width={24}
                  height={24}
                />
                {value?.length < 4 ? (
                  <div className="text-[14px] lg:text-base ml-3">
                    <span>{value[0]}</span>
                    <span className="text-[#389E0D]">{value[1]}</span>
                    <span>{value[2]}</span>
                  </div>
                ) : (
                  <div className="text-[14px] lg:text-base ml-3">{value}</div>
                )}
              </div>
            ))}
            <div className="my-4">
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
            <div className="relative h-[156px] lg:hidden">
              <EzImage
                src={"/uploads/Image_e3f56f7cbd.png"}
                alt="ecommerce_1_3a047dd270"
                width={463}
                height={364}
                quality={100}
                className="w-auto h-[254px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MultiChannel;
