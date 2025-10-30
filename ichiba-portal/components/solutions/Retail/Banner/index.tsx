import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
const BannerRetail = () => {
  const r = useTranslation("retail").t;

  return (
    <div
      className="tw-px-4 tw-pt-6 tw-bg-cover tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Light_Background_2_1_3_c2f0dd9379.png)]"
      style={{ backgroundPosition: "center" }}
    >
      <div className="tw-container lg:tw-text-center tw-overflow-hidden">
        <h1 className="tw-mb-0 tw-text-2xl lg:tw-text-5xl tw-font-bold lg:tw-w-[65%] tw-mx-auto">
          {r("banner.title.0")}
          <span className="tw-text-[#F57C00]">{r("banner.title.1")}</span>
          {r("banner.title.2")}
        </h1>
        <div className="tw-mt-4 lg:tw-mt-6 tw-text-sm lg:tw-text-base">
          {r("banner.content")}
        </div>
        <Link href={"/contact-sales"} target="_blank" className="tw-no-underline">
          <button className="tw-px-8 tw-py-3 tw-text-white tw-text-sm  tw-bg-[#F57C00] tw-w-max tw-rounded-lg tw-mt-4">
            {r("banner.contact")}
          </button>
        </Link>
        <div className="tw-w-[354px] lg:tw-w-[995px] tw-h-[209px] lg:tw-h-[633px] tw-mx-auto tw-mt-4 lg:tw-mt-6  tw-overflow-hidden">
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Group_1171275974_2_769277bc9d.png"
            }
            alt="banner"
            width={995}
            height={633}
            className="tw-w-full tw-h-full tw-object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerRetail;
