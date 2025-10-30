import { Cta } from "@/components/commons/Cta";
import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";

const Banner = ({ lang , locale }: any) => {
  return (
    <section
      className={clsx("pt-6 lg:pt-[120px] px-4", [
        "bg-[url('https://strapi-efex.ichiba.net/uploads/Hero_banner_ec11b59eda.svg')]",
        ["bg-no-repeat bg-cover bg-center"],
      ])}
    >
      <div className="container">
        <div className="text-center mb-10 lg:mb-15 lg:max-w-4xl lg:mx-auto">
          <h1 className="font-bold text-2xl lg:text-5xl mb-4 lg:mb-6">
            {lang.heading[0]}
            <span className="text-brand-primary">{lang.heading[1]}</span> {lang.heading[2]}
          </h1>
          <p className="mb-6 lg:mb-10 text-sm lg:text-base">{lang.subHeading}</p>
          <Cta href={`/${locale}/contact-sales`} target="_blank" className="mx-auto lg:w-[200px]">
            {lang.cta}
          </Cta>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <div className="hidden lg:flex flex-col items-end justify-center gap-3 flex-1">
            <EzImage
              src={"/uploads/Image_1_94d4e01164.png"}
              className="col-span-7 row-span-3"
              alt=""
              unoptimized
              width={693}
              height={282}
              quality={100}
            />
            <EzImage
              src={"/uploads/Image_3_43bb29dabf.png"}
              className=""
              alt=""
              unoptimized
              width={324}
              height={176}
              quality={100}
            />
          </div>
          <EzImage
            src={"/uploads/Image_2_ed86298014.png"}
            className="hidden lg:block"
            alt=""
            unoptimized
            width={494}
            height={330}
            quality={100}
          />
          <EzImage
            src={"/uploads/Frame_427318599_b8c9d0a72b.png"}
            className="block lg:hidden flex-grow"
            alt=""
            unoptimized
            width={358}
            height={216}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
