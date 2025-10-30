import { CtaArrow } from "@/components/commons/Cta";
import img3 from "@/public/images/home/imgLooking.webp";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const JoinUs = ({ lang , locale }: { lang: any , locale : any}) => {
  return (
    <div className=" px-4 bg-white pb-3 pt-11 lg:pt-0 lg:pb-14">
      <div className="container px-4  bg-[#F5EEFC] rounded-[16px] relative bottom-4 lg:hidden ">
        <div className=" relative bottom-10 lg:flex lg:bottom-0">
          <Image
            src={img3}
            alt="EFEX"
            quality={100}
            className="max-w-[200px] lg:max-w-[360px]"
          />
          <div>
            <div className="text-xl font-bold">
              <div>{lang?.heading}</div>
            </div>
            <div className="text-sm mb-5">{lang?.subHeading}</div>
            <CtaArrow href={""}>{lang?.cta}</CtaArrow>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "hidden lg:block ",
          "max-w-[1020px] mx-auto rounded-[20px] max-h-[360px]",
          "bg-[linear-gradient(to_right,#fff_0%,#fff_18%,#F5EEFC_18%,#F5EEFC_100%)]"
        )}
      >
        <div className="flex items-center">
          <Image
            src={img3}
            alt="EFEX"
            quality={100}
            className=" h-[390px] relative bottom-[7px]"
          />
          <div className="ml-[60px] max-w-[481px]">
            <div className="text-[30px] font-bold">
              <div>{lang?.heading}</div>
            </div>
            <div className="mt-2 mb-5 lg:mb-10">{lang?.subHeading}</div>
            <CtaArrow href={`https://careers.ichiba.net/${locale}`}>{lang?.cta}</CtaArrow>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JoinUs;
