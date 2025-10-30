import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

const BannerCommerce = () => {
  const b = useTranslation("build-store-front").t;
  return (
    <div className="lg:tw-pt-20 lg:tw-pb-5 tw-pt-7 tw-pb-4 lg:tw-px-0 tw-px-4 tw-bg-[linear-gradient(180deg,#d6e9fa91,white)] lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Rectangle_7243_cba9d0229e.svg)] tw-bg-no-repeat lg:tw-bg-bottomCommerce">
      <div className="lg:tw-max-w-[800px] tw-mx-auto tw-text-center tw-animate-showOn">
        <h1 className={clsx("lg:tw-text-5xl tw-font-bold tw-text-2xl")}>
          {b("commerceSite.banner.title.0")}
          <span className="tw-text-[#F57C00] tw-animate-changeColor tw-ease tw-delay-500">
            {b("commerceSite.banner.title.1")}
          </span>
          {b("commerceSite.banner.title.2")}
        </h1>
        <div className="lg:tw-mt-7 tw-mt-3 lg:tw-text-base tw-text-sm tw-animate-showOn">
          {b("commerceSite.banner.subtitle")}
        </div>
      </div>
      <div className="tw-flex tw-justify-center tw-mt-7 lg:tw-text-base tw-text-sm tw-font-medium tw-gap-7">
        <Link
          href={"https://org.ichiba.net"}
          className="tw-no-underline lg:tw-w-[200px] tw-px-7 tw-py-3 tw-border tw-border-[#F57C00] text-white text-center tw-bg-[#F57C00] tw-rounded-lg"
        >
          {b("commerceSite.banner.start")}
        </Link>
        <Link
          href={"/contact-sales"}
          className="tw-no-underline lg:tw-w-[200px] tw-px-7 tw-py-3 tw-border tw-border-[#F57C00] tw-text-[#F57C00] tw-bg-white text-center tw-rounded-lg"
        >
          {b("commerceSite.banner.contact")}
        </Link>
      </div>
      <div className="tw-animate-shaking2 tw-relative tw-mx-auto lg:tw-max-w-[996px] tw-max-w-[450px] tw-shadow-1 lg:tw-p-4 tw-p-1 tw-border-white lg:tw-rounded-2xl tw-rounded-md tw-bg-[linear-gradient(114deg,rgba(255,255,255,0.54)_3.87%,rgba(243,245,247,0.61),rgba(252,252,252,0.45))] tw-mt-7">
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Frame_1171275831_bd7de15095.png"
          alt="commerceSite.banner"
          width={800}
          height={400}
          quality={100}
          className="lg:tw-hidden  tw-w-full"
        />
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Frame_1171275831_1_ee26702870.png"
          alt="commerceSite.banner"
          width={996}
          height={460}
          quality={100}
          className="lg:tw-block tw-hidden tw-w-full "
        />
       <Image src="https://cms-strapi.ichiba.net/uploads/thumbnail_Frame_35_d1829b08ff.png" alt="commerceSite" width={100} height={100} className="lg:tw-max-w-[100px] tw-max-w-[50px] tw-absolute tw-right-[46%] tw-top-[40%] tw-cursor-pointer" /> 
      </div>
    </div>
  );
};
export default BannerCommerce;
