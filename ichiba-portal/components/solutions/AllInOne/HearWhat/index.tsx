import { useTranslation } from "next-i18next";
import Image from "next/image";
const HearWhat = () => {
  const a = useTranslation("all-in-one").t;

  return (
    <div className="tw-py-6 tw-px-4 lg:tw-container lg:tw-py-10">
      <h2 className="tw-text-2xl tw-font-bold lg:tw-text-4xl">{a("hear.title")}</h2>
      <div className="tw-mt-2 tw-text-sm lg:tw-text-lg">{a("hear.subtitle")}</div>
      <div className="tw-overflow-x-auto tw-pb-2 lg:tw-mt-5">
        <div className="tw-grid tw-grid-cols-5 tw-gap-4 tw-mt-5 tw-w-max">
          <div className="tw-w-[140px] lg:tw-w-[220px] lg:tw-h-[60px] tw-h-[40px] tw-border tw-border-[#ddd] tw-rounded-lg tw-flex tw-items-center tw-justify-center hover:tw-border-[#F57C00] hover:tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)]">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/testi_icons_1_1_4bf71bc9e0.svg"
              }
              alt=""
              width={96}
              height={24}
              className="lg:tw-w-[123px]"
            />
          </div>
          <div className="tw-w-[140px] lg:tw-w-[220px] lg:tw-h-[60px] tw-h-[40px] tw-border tw-border-[#ddd] tw-rounded-lg tw-flex tw-items-center tw-justify-center hover:tw-border-[#F57C00] hover:tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)]">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Image_458_1_0b41cc3a58.svg"
              }
              alt=""
              width={96}
              height={24}
              className="lg:tw-w-[123px]"
            />
          </div>
          <div className="tw-w-[140px] lg:tw-w-[220px] lg:tw-h-[60px] tw-h-[40px] tw-border tw-border-[#ddd] tw-rounded-lg tw-flex tw-items-center tw-justify-center hover:tw-border-[#F57C00] hover:tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)]">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Image_456_1_c60d791700.svg"
              }
              alt=""
              width={96}
              height={24}
              className="lg:tw-w-[123px]"
            />
          </div>
          <div className="tw-w-[140px] lg:tw-w-[220px] lg:tw-h-[60px] tw-h-[40px] tw-border tw-border-[#ddd] tw-rounded-lg tw-flex tw-items-center tw-justify-center hover:tw-border-[#F57C00] hover:tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)]">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/arata_logo_website_1_7156bc2f8c.svg"
              }
              alt=""
              width={96}
              height={24}
              className="lg:tw-w-[123px]"
            />
          </div>
          <div className="tw-w-[140px] lg:tw-w-[220px] lg:tw-h-[60px] tw-h-[40px] tw-border tw-border-[#ddd] tw-rounded-lg tw-flex tw-items-center tw-justify-center hover:tw-border-[#F57C00] hover:tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)]">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Image_457_1_108cbea164.svg"
              }
              alt=""
              width={96}
              height={24}
              className="lg:tw-w-[123px]"
            />
          </div>
        </div>
      </div>
      <div className="tw-my-5 lg:tw-mt-10 lg:tw-flex tw-items-center tw-gap-15">
        <div className="">
          <div className="tw-text-sm lg:tw-text-lg">{a("hear.items.0.content")}</div>
          <div className="tw-mt-5 tw-flex tw-gap-4 tw-items-center lg:tw-mt-10">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Ellipse_521_c876fea1b1.png"
              }
              className="tw-w-[60px]"
              alt=""
              width={40}
              height={40}
            />
            <div>
              <div className="tw-text-lg tw-font-bold lg:tw-text-xl">
                {a("hear.items.0.name")}
              </div>
              <div className="tw-text-sm tw-text-[#666]">
                {a("hear.items.0.bio")}
              </div>
            </div>
          </div>
        </div>
        <div className="tw-shadow-[0px_0px_12.302px_0px_rgba(0,0,0,0.11)] tw-p-3 tw-rounded-lg lg:tw-p-5 lg:tw-rounded-2xl">
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/image_120_cf044f4e41.png"
            }
            alt=""
            width={813}
            height={420}
            className="lg:tw-max-w-[542px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HearWhat;
