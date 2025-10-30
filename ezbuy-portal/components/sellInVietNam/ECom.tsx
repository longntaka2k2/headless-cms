import eCom from "@/public/images/services/siv/ecomm.webp";
import chart from "@/public/images/services/siv/chart.svg";
import bgeCOM from "@/public/images/services/siv/bgEcom.svg";
import bgeCOMdt from "@/public/images/services/siv/bgEcomdt.svg";
import Image from "next/image";
import clsx from "clsx";

const ECom = ({ lang }: { lang: any }) => {
  return (
    <div className="overflow-hidden">
      <div className=" py-6 lg:pt-[80px] lg:pb-[258px] lg:px-0 h-max lg:container relative z-[2]">
        <Image
          src={bgeCOM}
          alt="Ezbuy"
          className="absolute z-[1] top-[80px] lg:hidden"
        />
        <Image
          src={bgeCOMdt}
          alt="Ezbuy"
          className="absolute z-[1] top-[100px] left-[260px] lg:block hidden"
        />

        <div className="px-4 lg:px-0 lg:flex justify-center relative z-[2]">
          <div className="max-w-[596px] mr-6 w-full lg:block hidden text-white rounded-[16px] bg-[#001033] px-10 pb-4 pt-[80px]">
            <div className="font-bold text-[30px]">{lang.heading}</div>
            <div className="mt-5">
              <span className="text-lg font-[400] text-[rgba(255,_255,_255,_0.80)]">
                {lang.subHeading}
              </span>
              <div className="text-right italic text-xs mt-10 underline text-[rgba(255,_255,_255,_0.80)]">
                Source: Statista 2023
              </div>
            </div>
          </div>
          <div>
            <Image
              src={eCom}
              alt="ecom"
              className="object-cover w-full lg:w-[460px] lg:h-[389px] h-[210px] rounded-xl "
            />
            <div className="relative ">
              <div
                className={clsx(
                  " absolute z-[2] right-0 backdrop-blur-xl p-3 lg:py-4 lg:px-6 top-[-62px] lg:top-[-122px] lg:right-[-120px]",
                  "bg-[linear-gradient(114deg,_rgba(255,_255,_255,_0.60)_3.87%,_rgba(243,_245,_247,_0.68)_99.44%,_rgba(252,_252,_252,_0.50)_100.62%);]",
                  "border-[1.7px] border-[rgba(255,_255,_255,_0.60);] rounded-xl",
                  "shadow-[0px_0px_17.42px_0px_rgba(0,_0,_0,_0.11);]"
                )}
              >
                <div className="text-xs lg:text-lg font-bold text-brand-secondary">
                  E-commerce market volume in SEA, 2025
                </div>
                <div className="text-[9px] lg:text-xs italic text-[#333]">
                  Forecast for 2025, in billion U.S. dollars
                </div>
                <Image src={chart} alt="Chart" className="lg:w-[400px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-4 lg:hidden text-white mt-[190px] h-max rounded-xl bg-[#001033] px-4 py-5">
          <div className="font-bold text-xl">{lang.heading}</div>
          <div className="">
            <span className="text-sm">{lang.subHeading}</span>
            <div className="text-right italic text-xs mt-10">
              Source: Statista 2023
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECom;
