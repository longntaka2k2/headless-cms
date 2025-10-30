"use client";
import EzImage from "../commons/EzImage";
import Link from "next/link";

const Banner = ({ lang, params }: { lang: any; params: any }) => {
  const { heading, subHeading, textBtn, items } =
    lang.services.dropshipping.banner;

  return (
    <section className="py-6 lg:pt-15 lg:pb-10 bg-[linear-gradient(180deg,_#DEEBFE_-14.66%,_#FAFCFF_48.96%)]">
      <div className="container px-4">
        <h1 className="text-[28px] lg:text-4xl font-black uppercase lg:text-center pb-2">
          {heading}
        </h1>
        <p className="text-sm lg:text-base lg:text-center pb-6">{subHeading}</p>
        <div className="py-[13px] px-4 bg-brand-secondary text-white w-[200px] text-center lg:mx-auto mb-6 lg:mb-10">
          <Link href={`/${params.lang}/contact-sales`} className="text-sm">
            {textBtn}
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4 lg:mb-10">
          {items.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="flex items-center shadow-[0px_0px_12px_0px_#36322E14] bg-white"
              >
                <EzImage src={item.icon} width={62} height={62} alt="icon" />
                <h3 className="text-sm lg:text-base font-bold">{item.title}</h3>
              </div>
            );
          })}
        </div>

        <EzImage
          src="/uploads/Map_1473f27996.svg"
          alt="#"
          width={1078}
          height={619}
          className="mx-auto"
        />
      </div>
    </section>
  );
};
export default Banner;
