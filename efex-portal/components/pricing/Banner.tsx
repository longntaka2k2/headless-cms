import Link from "next/link";
import EzImage from "../commons/EzImage";
import clsx from "clsx";
const BannerPricing = ({ lang , locale }: { lang: any , locale: string }) => {
  return (
    <div className=" py-6 xl:pt-[102px] lg:pb-0 lg:px-0 bg-[rgba(233,_238,_249,_0.18)]">
      <div className="container grid grid-cols-1 xl:grid-cols-2 gap-6 px-4  ">
        <div className="text-[#333]">
          <h1 className="text-[24px] font-bold lg:text-[48px] mt-2">
            <span>{lang?.title[0]}</span>{" "}
            <span className="text-brand-primary">{lang?.title[1]}</span>{" "}
            <span>{lang?.title[2]}</span>
            <span className="text-brand-primary">{lang?.title[3]}</span>
          </h1>
          <div className="text-[14px] lg:text-base mt-4 mb-6 lg:mt-6 lg:mb-8">
            {lang?.content}
          </div>
          <div className="">
            <Link
              className="bg-brand-primary px-4 py-2 text-white text-sm lg:text-base font-medium lg:py-[14px] lg:px-8 rounded-lg"
              href={`/${locale}/contact-sales`}
              target="_blank"
            >
              {lang?.getQuote}
            </Link>
          </div>
        </div>
        <div>
          <EzImage
            src={"/uploads/14_2_037287e97a.png"}
            alt="/uploads/14_2_037287e97a.png"
            width={699}
            height={566}
            quality={100}
            className="rounded-lg lg:relative xl:max-w-[680px] "
          />
        </div>
      </div>
      <div className="h-0 max-w-[1000px] mx-auto">
        <div
          className={clsx(
            " border lg:border-[2px] border-[#F0F5FF] bg-[linear-gradient(114deg,_#FFF_0%,_rgba(243,_245,_247,_0.68)_30.14%,_rgba(252,_252,_252,_0.50)_68.75%)]  ",
            "p-4 lg:px-15 lg:py-10 mx-2  relative lg:bottom-15 bottom-10 backdrop-blur-xl rounded-lg overflow-hidden",
            'shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)]'
          )}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-2">
            {lang?.item?.map((x: any, index: number) => (
              <div className="text-center " key={index}>
                <EzImage
                  src={x?.icon}
                  alt={x?.icon}
                  width={62}
                  height={48}
                  quality={100}
                  className="mx-auto"
                />
                <div className="font-bold text-sm lg:text-[18px] mt-3 lg:mt-4 line-clamp-2">
                  {x?.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPricing;
