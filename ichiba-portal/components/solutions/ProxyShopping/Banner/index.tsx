import { useTranslation } from "next-i18next";
import Image from "next/image";

const BannerProxy = () => {
  const p = useTranslation("proxy-shopping").t;

  return (
    <div className="tw-px-4 tw-pt-6 lg:tw-pt-[100px] lg:tw-container ">
      <h1 className="tw-font-bold tw-text-2xl lg:tw-max-w-[850px] lg:tw-text-5xl">
        {p("banner.title")}
      </h1>
      <div className="tw-text-sm tw-mt-3 lg:tw-mt-6 lg:tw-text-base">
        {p("banner.subtitle")}
      </div>
      <div className="tw-mt-4 lg:tw-hidden tw-max-h-[115px]">
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Frame_1171276134_6b5353ff89.png"
          }
          alt="banner.title"
          width={1200}
          height={534}
          className="tw-max-w-[358px] tw-mx-auto tw-w-full"
        />
      </div>
      <div className="tw-mt-10 lg:tw-block tw-hidden tw-max-h-[338px]">
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Frame_1171276134_18239dd8dd.png"
          }
          alt="banner.title"
          width={1200}
          height={534}
        />
      </div>
    </div>
  );
};
export default BannerProxy;
