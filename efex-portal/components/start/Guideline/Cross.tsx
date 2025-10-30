'use client'
import EzImage from "@/components/commons/EzImage";
import { removeAccent } from "@/utils/ultils";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Cross = ({ lang }: { lang: any }) => {
  const locale = usePathname().slice(1, 3);
  const link = locale === 'en' ? 'https://efex.vn/en/blog/cross-border-fulfillment' : 'https://efex.vn/vi/blog/fulfillment-la-gi '
  return (
    <div className="bg-[#E4E9F4] px-4 lg:px-0 scroll-m-[124px]" id={removeAccent(lang?.label)}>
      <div className="lg:container bg-[url('https://strapi-efex.ichiba.net/uploads/Background_806e63949e.png')] bg-cover lg:py-[50px] py-6">
        <div className="lg:flex lg:justify-between lg:items-center">
          <div className="lg:max-w-[512px]">
            <h2 className="mt-2 lg:mt-0 text-[18px] lg:text-[24px] font-bold leading-8" >
              {lang?.title}
            </h2>
            <div className=" pb-4 lg:pb-2 mt-2 ">
              <div className="text-[14px] lg:text-base">{lang?.subtitle}</div>
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
            </div>
          </div>
          <EzImage
            src={"/uploads/Image_1_ec38591eea.png"}
            alt="ecommerce_1_3a047dd270"
            width={438}
            height={271}
            quality={100}
            className="w-full lg:max-w-[438px]"
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-2 lg:gap-6 mt-5 lg:mt-6">
          {lang?.content?.map((value: any, index: number) => (
            <div key={index} className="text-[14px] lg:text-base p-4 lg:p-7 lg:pt-6 bg-[rgb(255,255,255,0.75)] rounded-lg lg:rounded-xl">
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Cross;
