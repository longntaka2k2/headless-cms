import { useTranslation } from "next-i18next";
import Image from "next/image";

const Exclusivery = () => {
  const b = useTranslation("build-store-front").t;

  return (
    <div className="tw-pt-6 tw-pb-15 tw-px-4  lg:tw-py-[88px] lg:tw-pb-[200px]  tw-overflow-hidden">
      <div className="lg:tw-container tw-relative">
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Background_4441aa2e8c.svg"
          }
          alt="exclusively"
          className="tw-absolute lg:tw-top-[30%] tw-top-[70%] tw-max-w-[400px] lg:tw-max-w-full lg:tw-right-[-15%] tw-z-[-1]"
          width={836}
          height={388}
        />
        <div className="tw-flex tw-gap-3 tw-mb-5 tw-items-center">
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Frame_427318618_294760e06f.svg"
            }
            alt="exclusively"
            width={36}
            height={36}
            className="lg:tw-w-12"
          />
          <div className="tw-text-lg tw-font-bold lg:tw-text-2xl">
            {b("commerceSite.exclusively.title")}
          </div>
        </div>
        <div className="lg:tw-grid lg:tw-grid-cols-12 tw-gap-6 lg:tw-items-center tw-h-full">
          <div className="tw-bg-[#001033] tw-rounded-lg tw-p-5 lg:tw-px-10 tw-text-white lg:tw-w-[690px] lg:tw-col-span-7 lg:tw-h-full lg:tw-pt-[60px]">
            <div className="tw-text-xl tw-font-bold lg:tw-text-3xl">
              {b("commerceSite.exclusively.crawler")}
            </div>
            <div className="tw-text-sm tw-mt-3 lg:tw-text-lg lg:tw-mt-5 tw-text-[rgba(255,255,255,0.80)]">
              {b("commerceSite.exclusively.connect")}
            </div>
          </div>
          <div className="lg:tw-mt-0 tw-mt-2 tw-rounded-lg tw-shadow-[0px_0px_14.178px_0px_rgba(0,0,0,0.11)] lg:tw-flex-1 lg:tw-col-span-5">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Image_1_cf334d705f.svg"
              }
              alt="exclusively"
              width={358}
              height={218}
              className="tw-h-full tw-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Exclusivery;
