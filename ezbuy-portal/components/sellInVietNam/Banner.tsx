import clsx from "clsx";
import EzImage from "../commons/EzImage";
import { Cta } from "../commons/Cta";
import flagVietNam from "@/public/images/services/siv/vietnam.svg";
const Banner = ({ lang, locale }: { lang: any; locale: string }) => {
  return (
    <section
      className={clsx(
        "banner h-[870px] md:h-[980px]",
        "md:bg-[url('https://strapi-ezbuy.ichiba.net/uploads/Group_260917_a2fb5581d3.png')]",
        "bg-[url('https://strapi-ezbuy.ichiba.net/uploads/Frame_260917_44f14d2f7b.png')]",
        "lg:bg-cover bg-no-repeat [background-position-x:55%] bg-[length:100%_100%]  lg:bg-center"
      )}
    >
      <div className="container pt-6 lg:pt-[112px] px-4 lg:px-0">
        <div className="lg:text-center ">
          <h1 className="text-2xl lg:text-4xl font-black mb-2 uppercase">
            <EzImage src={flagVietNam} className="lg:inline-block" alt={lang.heading} />
            {lang.heading}
          </h1>
          <p className="text-sm lg:text-base mb-10">{lang.subHeading}</p>
          <Cta
            href={`/${locale}/contact-sales`}
            className="uppercase lg:mx-auto lg:w-[224px] text-center !rounded-none"
          >
            {lang.cta}
          </Cta>
        </div>
      </div>
    </section>
  );
};

export default Banner;
