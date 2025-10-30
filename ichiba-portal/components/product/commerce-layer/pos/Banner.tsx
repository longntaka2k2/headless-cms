import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
const BannerPos = () => {
  const p = useTranslation("pos").t;

  return (
    <div className="lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Rectangle_52683_64b5043d06.png)] tw-bg-cover">
      <div className="tw-pt-6 lg:tw-container lg:tw-pt-[120px] lg:tw-pb-[100px] lg:tw-flex">
        <div className="tw-px-4 lg:tw-px-0 lg:tw-min-w-[630px]">
          <h1 className="tw-text-2xl tw-font-bold lg:tw-text-5xl tw-mb-2">
            {p("banner.title")}
          </h1>
          <div className="tw-text-sm lg:tw-text-base tw-mb-4">
            {p("banner.subtitle")}
          </div>
          <div className="tw-grid tw-grid-cols-2">
            {(
              p("banner.items", {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <div
                key={index}
                className="tw-py-2 tw-flex tw-items-center tw-gap-3"
              >
                <Image
                  src={value.icon}
                  width={32}
                  height={32}
                  className="lg:tw-w-10"
                  alt="banner"
                />
                <div>
                  <div className="tw-text-xs tw-text-[#333] lg:tw-text-base">
                    {value.subtitle[0]}
                  </div>
                  <div className="tw-text-lg tw-font-bold tw-text-[#1135A8] lg:tw-text-2xl">
                    {value.title}
                  </div>
                  <div className="tw-text-xs tw-text-[#333] lg:tw-text-base">
                    {value.subtitle[1]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image
          src={"https://cms-strapi.ichiba.net/uploads/Image_4_08abb18e72.png"}
          alt="banner"
          width={585}
          height={588}
          className="tw-block lg:tw-hidden"
        />
        <div className="tw-relative tw-hidden lg:tw-block">
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Group_1171275979_71c867d4e3.png"
            }
            alt="banner"
            width={1290}
            height={879}
            className=" tw-w-full"
          />
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Conversion_puff_1_8b65072135.png"
            }
            alt=""
            width={800}
            height={713}
            className="tw-absolute tw-top-0 tw-z-[-1]"
          />
        </div>
      </div>
    </div>
  );
};
export default BannerPos;
