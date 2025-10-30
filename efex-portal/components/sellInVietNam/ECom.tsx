import eCom from "@/public/images/sell-in-vietnam/ecomm.webp";
import chart from "@/public/images/sell-in-vietnam/chart.svg";
import bgeCOM from "@/public/images/sell-in-vietnam/bgEcom.svg";
import bgeCOMdt from "@/public/images/sell-in-vietnam/bgEcomdt.svg";
import Image from "next/image";
import clsx from "clsx";
const ECom = ({ lang }: any) => {
  return (
    <div className="overflow-hidden">
      <div className=" py-6 lg:pt-[80px] lg:pb-[258px] lg:px-0 h-max lg:container relative z-[2]">
        <Image
          src={bgeCOM}
          alt=""
          className="absolute z-[1] top-[80px] lg:hidden"
          quality={100}
        />
        <Image
          src={bgeCOMdt}
          alt=""
          className="absolute z-[1] top-[100px] left-[260px] lg:block hidden"
          quality={100}
        />

        <div className="px-4 lg:px-0 lg:flex justify-center relative z-[2]">
          <div className="max-w-[596px] mr-6 w-full lg:block hidden text-white rounded-[16px] bg-[#001033] px-10 pb-4 pt-[80px]">
            <div className="font-bold text-[30px]">{lang.whyShould.title}</div>
            <div className="mt-5">
              <span className="text-lg font-normal text-[rgba(255,255,255,.8)]">
                {lang.whyShould.content[0]}
              </span>
              <span className="font-bold text-xl">
                {lang.whyShould.content[1]}
              </span>
              <span className="text-lg font-normal text-[rgba(255,255,255,.8)]">
                {lang.whyShould.content[2]}
              </span>
              <div className="text-right italic text-xs mt-10 underline text-[rgba(255,255,255,_0.80)]">
                {lang.whyShould.source}
              </div>
            </div>
          </div>
          <div>
            <Image
              src={eCom}
              alt="ecom"
              className="object-cover w-full lg:w-[460px] lg:h-[389px] h-[210px] rounded-xl "
              quality={100}
            />
            <div className="relative ">
              <div
                className={clsx(
                  "absolute z-[2] right-0 top-[-62px] lg:top-[-122px] lg:right-[-120px]",
                  "p-3 lg:py-4 lg:px-6",
                  "bg-[linear-gradient(114deg,rgba(255,255,255,.6)_3.87%,rgba(243,245,247,.68)_99.44%,rgba(252,252,252,.5)_100.62%)]",
                  "border-[1.7px] border-[rgba(255,255,255,.6)] rounded-xl",
                  "shadow-[0_0_17.42px_0_rgba(0,0,0,.11)]",
                  "backdrop-blur-xl"
                )}
              >
                <div className="text-xs lg:text-lg font-bold text-brand-secondary">
                  {lang.whyShould.ecom}
                </div>
                <div className="text-[9px] lg:text-xs italic text-[#333]">
                  {lang.whyShould.date}
                </div>
                <Image src={chart} alt="" className="lg:w-[400px]" quality={100} />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-4 lg:hidden text-white mt-[190px] h-max rounded-xl bg-[#001033] px-4 py-5">
          <div className="font-bold text-xl">{lang.whyShould.title}</div>
          <div className="">
            <span className="font-bold">{lang.whyShould.content[0]}</span>
            <span className="text-sm">{lang.whyShould.content[1]}</span>
            <span className="text-sm">{lang.whyShould.content[2]}</span>
            <div className="text-right italic text-xs mt-10">
              {lang.whyShould.ecom}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECom;
