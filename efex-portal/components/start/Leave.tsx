'use client'
import img3 from "@/public/images/home/imgLooking.webp";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Leave = ({ lang }: { lang: any }) => {
  const locale = usePathname().slice(1, 3);
  const link = locale === 'en' ? '/en/contact-sales' : '/vi/contact-sales'
  return (
    <div className=" px-4 lg:bg-white  pb-3  lg:py-[80px]">
      <div className="container px-4 bg-[#F5EEFC] rounded-[16px] relative pb-8 mt-14 lg:hidden ">
        <div className=" relative bottom-10 lg:flex lg:bottom-0">
          <Image
            src={img3}
            alt="EFEX"
            className="max-w-[200px] lg:max-w-[360px]"
          />
          <div>
            <div className="text-xl font-bold">
              <div>{lang?.title}</div>
            </div>
            
            <Link
              href={link}
              className="py-3 px-8 bg-contact rounded-lg text-white w-max relative top-[40px] mt-4 lg:top-0 text-sm hover:bg-[#A30505]"
            >
              {lang?.quote}
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:block hidden max-w-[1020px] mx-auto rounded-[20px] bg-[linear-gradient(to_right,_#fff_0%,_#fff_18%,_#F5EEFC_18%,_#F5EEFC_100%);] max-h-[360px]">
        <div className="flex items-center ">
          <Image
            src={img3}
            alt="EFEX"
            className=" h-[390px] relative bottom-[7px]"
          />
          <div className="ml-[60px] max-w-[481px]">
            <div className="text-[30px] font-bold">
              <div>{lang?.title}</div>
            </div>
            <Link
              href={link}
              target="_blank"
              className="lg:block py-2 px-8 text-sm bg-contact rounded-[12px] text-white w-max mt-10 hover:bg-[#A30505]"
            >
              {lang?.quote}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Leave;
