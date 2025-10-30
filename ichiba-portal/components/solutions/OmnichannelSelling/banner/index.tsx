import { useTranslation } from "next-i18next";
import Image from "next/image";
const BannerSelling = () => {
  const o = useTranslation("omnichannel-selling").t;

  return (
    <div className="tw-px-4 tw-py-6 lg:tw-py-[80px] lg:tw-px-0 tw-bg-[linear-gradient(0deg,rgba(231,245,255,0.64)_0%,rgba(231,245,255,0.64)_100%)]">
      <div className="tw-text-center lg:tw-max-w-[900px] tw-mx-auto ">
        <h1 className=" tw-text-2xl tw-font-bold lg:tw-text-5xl">
          {o("banner.title.0")}{" "}
          <span className="tw-text-[#F57C00]">{o("banner.title.1")}</span>{" "}
          {o("banner.title.2")}
        </h1>
        <div className="tw-text-sm lg:tw-text-base tw-mt-4">
          {o("banner.subtitle")}
        </div>
      </div>
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Frame_1171276187_a19278e346.png"
        alt="banner"
        width={1920}
        height={579}
        className="tw-object-cover tw-h-[191px] tw-mx-auto tw-mt-6 lg:tw-h-[546px] lg:tw-mt-[60px]"
      />
    </div>
  );
};
export default BannerSelling;
