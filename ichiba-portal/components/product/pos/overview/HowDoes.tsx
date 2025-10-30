import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const HowDoes = () => {
  const p = useTranslation("pos").t;

  return (
    <div
      className={clsx(
        "tw-pt-6 tw-pb-8 tw-px-4 lg:tw-px-0 lg:tw-pt-20 lg:tw-pb-[100px] tw-bg-[#05102A] tw-text-white tw-bg-cover",
        "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/641dbd42118dea1144e78b7c_bg_jpg_1_7930b8022e.png)]",
        "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/dd_ed8b4d60cd.png)] tw-overflow-hidden",
      )}
    >
      <div className="tw-container">
        <h4 className="tw-font-bold tw-text-2xl lg:tw-text-3xl">{p("howDoes.title")}</h4>
        <div className="tw-text-sm tw-opacity-80 lg:tw-text-base">{p("howDoes.subtitle")}</div>
        <div className="tw-mt-10 tw-grid lg:tw-grid-cols-4 tw-gap-8 lg:tw-mt-20 lg:tw-w-max tw-relative">
          {(
            p("howDoes.items", {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-rounded-lg tw-border tw-border-[#dddddd34] tw-bg-[rgba(255,255,255,0.08)]",
                "tw-px-4 tw-pt-8 tw-pb-4 lg:tw-py-8 lg:tw-px-6 tw-flex tw-gap-4 tw-relative",
                "lg:tw-w-[320px]"
              )}
            >
              <div className="tw-absolute tw-bg-[#454344] tw-text-sm tw-top-[-14px] tw-rounded tw-uppercase tw-py-1 tw-px-2 ">
                {p("howDoes.step")} {index + 1}
              </div>
              <div className="tw-flex tw-gap-5 tw-items-start lg:tw-flex-col lg:tw-gap-6">
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/Frame_1171276458_d275758634.svg"
                  }
                  width={81}
                  height={76}
                  alt=""
                  className="lg:tw-w-[127px]"
                />
                <div>
                  <div className="tw-font-bold lg:tw-text-xl">{value.title}</div>
                  <div className="tw-text-sm tw-opacity-80 tw-mt-2 lg:tw-text-base lg:tw-mt-3">
                    {value.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowDoes;
