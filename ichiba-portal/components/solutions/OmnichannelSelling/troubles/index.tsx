import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const Troubles = () => {
  const o = useTranslation("omnichannel-selling").t;

  return (
    <div
      className={clsx(
        "tw-py-6 lg:tw-py-20 lg:tw-px-0 tw-px-4 tw-text-white lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171276464_fdc1a920ed.png)] tw-bg-cover",
        "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171275878_ccc9740278.png)]",
      )}
    >
      <div className="lg:tw-flex lg:tw-gap-[120px] lg:tw-container lg:tw-items-center">
        <div className="tw-text-center lg:tw-text-left lg:tw-max-w-[385px]">
          <h3 className="tw-font-bold tw-text-xl lg:tw-text-4xl ">
            {o("troubles.title")}
          </h3>
          <div className="tw-mt-2 tw-opacity-80 tw-text-sm lg:tw-text-lg">
            {o("troubles.subtitle")}
          </div>
        </div>
        <div className="tw-mt-8 tw-grid tw-gap-4 lg:tw-gap-6 lg:tw-flex-1">
          <div className="tw-grid lg:tw-grid-cols-2 tw-gap-4 lg:tw-gap-6">
            <div className="tw-grid tw-grid-cols-2 tw-gap-4 lg:tw-grid-cols-1">
              <div
                className={clsx(
                  "tw-py-4 tw-px-3 lg:tw-py-7 lg:tw-px-5 tw-border tw-border-[rgba(225,234,251,0.20)] tw-rounded-lg hover:tw-border-white ",
                  " hover:tw-shadow-[0px_0px_16px_0px_rgba(72,112,172,0.70)] lg:tw-flex lg:tw-gap-5 tw-items-center",
                )}
              >
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/Frame_19998_78bd173dbf.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="tw-mx-auto lg:tw-min-w-[56px] lg:tw-mx-0"
                />
                <div className="tw-text-sm tw-mt-4 lg:tw-mt-0 tw-text-center lg:tw-text-base lg:tw-text-start">
                  {o("troubles.complex")}
                </div>
              </div>
              <div
                className={clsx(
                  "tw-py-4 tw-px-3 lg:tw-py-7 lg:tw-px-5 tw-border tw-border-[rgba(225,234,251,0.20)] tw-rounded-lg hover:tw-border-white ",
                  " hover:tw-shadow-[0px_0px_16px_0px_rgba(72,112,172,0.70)] lg:tw-flex lg:tw-gap-5 tw-items-center",
                )}
              >
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/Frame_19998_1_9387889a6d.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="tw-mx-auto lg:tw-min-w-[56px] lg:tw-mx-0"
                />
                <div className="tw-text-sm tw-mt-4 lg:tw-mt-0 tw-text-center lg:tw-text-base lg:tw-text-start">
                  {o("troubles.limited")}
                </div>
              </div>
            </div>
            <div
              className={clsx(
                "tw-py-4 tw-px-3 lg:tw-py-7 lg:tw-px-5 tw-border tw-border-[rgba(225,234,251,0.20)] tw-rounded-lg hover:tw-border-white ",
                " hover:tw-shadow-[0px_0px_16px_0px_rgba(72,112,172,0.70)]",
              )}
            >
              <div className="tw-flex tw-gap-4 lg:tw-grid lg:tw-gap-5 tw-items-center lg:tw-items-center lg:tw-justify-center">
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/Frame_19998_2_10e0d45dda.svg"
                  alt=""
                  width={60}
                  height={60}
                  className="lg:tw-w-20 lg:tw-mx-auto"
                />
                <div className="tw-text-sm lg:tw-text-base lg:tw-text-center
                ">{o("troubles.difficulty")}</div>
              </div>
            </div>
          </div>

          <div
            className={clsx(
              "tw-pt-4 tw-px-3 lg:tw-pt-7 lg:tw-px-5 tw-rounded-lg tw-bg-[rgba(24,35,61,0.60)] hover:tw-shadow-[0px_0px_16px_0px_rgba(72,112,172,0.70)]",
              "lg:tw-flex lg:tw-gap-20 lg:tw-items-center"
            )}
          >
            <div className="tw-text-sm tw-mb-5 tw-text-center lg:tw-text-base lg:tw-hidden">
              {o("troubles.traditional")}
            </div>
            <Image
              src="https://cms-strapi.ichiba.net/uploads/image_5_868b8a0884.svg"
              alt=""
              width={154}
              height={114}
              className="tw-mx-auto lg:tw-min-w-[266px]"
            />
             <div className="tw-text-base tw-hidden lg:tw-block lg:tw-text-start">
              {o("troubles.traditional")}
            </div>
          </div>
          <div className="tw-grid tw-gap-4 lg:tw-gap-6 lg:tw-grid-cols-2">
          <div
            className={clsx(
              "tw-py-4 tw-px-3 lg:tw-py-7 lg:tw-px-5 tw-border tw-border-[rgba(225,234,251,0.20)] tw-rounded-lg hover:tw-border-white ",
              " hover:tw-shadow-[0px_0px_16px_0px_rgba(72,112,172,0.70)]",
            )}
          >
            <div className="tw-flex tw-gap-4 tw-items-center lg:tw-text-base lg:tw-grid lg:tw-gap-5">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_19999_d538edacf4.svg"
                alt=""
                width={40}
                height={40}
                className="lg:tw-mx-auto lg:tw-w-14"
              />
              <div className="tw-text-sm lg:tw-text-base lg:tw-text-center">{o("troubles.cost")}</div>
            </div>
          </div>
          <div
            className={clsx(
              "tw-py-4 tw-px-3 lg:tw-py-7 lg:tw-px-5 tw-border tw-border-[rgba(225,234,251,0.20)] tw-rounded-lg hover:tw-border-white ",
              " hover:tw-shadow-[0px_0px_16px_0px_rgba(72,112,172,0.70)]",
            )}
          >
            <div className="tw-flex tw-gap-4 tw-items-center lg:tw-text-base lg:tw-grid lg:tw-gap-5">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_19999_d4642fd819.svg"
                alt=""
                width={40}
                height={40}
                className="lg:tw-mx-auto lg:tw-w-14"
              />
              <div className="tw-text-sm lg:tw-text-base lg:tw-text-center">{o("troubles.limit")}</div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Troubles;
