import SvgIcon from "@/components/common/SvgIcon";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const ImproveSystem = () => {
  const p = useTranslation("technical-teams").t;
  return (
    <div className="tw-relative tw-container tw-mt-6 tw-mb-[30px] lg:tw-mt-15 lg:tw-mb-[105px]">
      <Image
        src="https://cms-strapi.ichiba.net/uploads/breakline_white_2_67cf5798a9.svg"
        alt="#"
        width={144}
        height={25}
        className="tw-w-[100px] tw-h-[16px] lg:tw-w-[144px] lg:tw-h-[25px] tw-absolute tw-left-[50%] tw-translate-x-[-50%] tw-top-0"
      />
      <Image
        src="https://cms-strapi.ichiba.net/uploads/breakline_white_3_962cc69d48.svg"
        alt="#"
        width={144}
        height={25}
        className="tw-w-[100px] tw-h-[16px] lg:tw-w-[144px] lg:tw-h-[25px] tw-absolute tw-left-[50%] tw-translate-x-[-50%] tw-bottom-[-16px] lg:tw-bottom-[-25px]"
      />
      <div
        className={clsx(
          "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Ship_strategically_ed6f11f224.svg)] tw-bg-cover",
          "tw-rounded-lg lg:tw-rounded-2xl tw-py-6 tw-px-4 lg:tw-py-15 lg:tw-px-[100px]",
          "tw-flex tw-flex-col lg:tw-flex-row tw-gap-10 lg:tw-justify-between tw-items-center",
        )}
      >
        <div className="lg:tw-w-[52%] tw-text-center lg:tw-text-left">
          <h2 className="tw-mb-2 tw-text-2xl tw-font-bold lg:tw-text-4xl">
            {p("improveSystem.title")}
          </h2>
          <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
            {p("improveSystem.subTitle")}
          </p>
        </div>
        <div className="lg:tw-w-[45%]">
          <div className="tw-grid tw-gap-3 lg:tw-gap-6">
            {(
              p(`improveSystem.items`, {
                returnObjects: true,
              }) as string[]
            )?.map((value: any, index: number) => (
              <div
                key={index}
                className="tw-flex tw-gap-4 tw-bg-ic-white-4 tw-rounded-lg lg:tw-rounded-2xl tw-p-4 lg:tw-p-7 tw-items-center"
              >
                <div>
                  <SvgIcon
                    icon={value.icon}
                    width={26}
                    height={24}
                    className="lg:tw-hidden"
                  />
                  <SvgIcon
                    icon={value.icon}
                    width={26}
                    height={24}
                    className="tw-hidden lg:tw-block"
                  />
                </div>
                <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
                  {value.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImproveSystem;
