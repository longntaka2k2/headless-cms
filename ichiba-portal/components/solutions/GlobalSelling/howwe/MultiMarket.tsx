import { clsx } from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const MultiMarket = () => {
  const g = useTranslation("global-selling").t;

  return (
    <div className="tw-rounded-lg lg:tw-rounded-2xl tw-bg-[#F2F4F8] tw-p-4 tw-mt-5 lg:tw-container lg:tw-p-10 lg:tw-mt-10">
      <h3 className="tw-font-bold lg:tw-text-2xl ">{g("multiMarket.title")}</h3>
      <div className="lg:tw-flex lg:tw-gap-[100px]">
        <div className="tw-grid tw-my-4 tw-gap-1 lg:tw-max-w-[644px]">
          {(
            g(`multiMarket.content`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-py-3 lg:tw-py-7 lg:tw-px-5 tw-px-4 tw-rounded-lg tw-border tw-border-[#F2F4F8] tw-text-sm lg:tw-text-base",
                "hover:tw-bg-white hover:tw-border hover:tw-border-[#0F62FE]",
              )}
            >
              {value}
            </div>
          ))}
        </div>
        <Image
          src="https://cms-strapi.ichiba.net/uploads/language_new_4263fb692d_1_c64995c772.svg"
          alt=""
          width={276}
          height={280}
          className="tw-mx-auto lg:tw-min-w-[336px]"
        />
      </div>
    </div>
  );
};
export default MultiMarket;
