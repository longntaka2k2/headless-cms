import { clsx } from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

const International = () => {
  const g = useTranslation("global-selling").t;

  return (
    <div className="tw-mt-4 tw-grid tw-gap-3 lg:tw-flex lg:tw-gap-5 lg:tw-container lg:tw-mt-[100px] ">
      <div className="tw-rounded-lg lg:tw-rounded-2xl tw-bg-[#182A50] tw-text-white tw-px-4 tw-py-6 lg:tw-p-10 lg:tw-flex lg:tw-items-center">
        <div>
          <h3 className="tw-font-bold lg:tw-text-2xl tw-mb-3">
            {g("interational.title")}
          </h3>
          <div className="tw-grid tw-gap-3 tw-my-5 lg:tw-my-6">
            {(
              g(`interational.content`, {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <div
                key={index}
                className="tw-flex tw-gap-2 lg:tw-gap-4 tw-items-start"
              >
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/Group_5964dedac1.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="tw-min-w-[28px]"
                />
                <div className="tw-text-sm lg:tw-text-base tw-opacity-80">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Image
        src="https://cms-strapi.ichiba.net/uploads/image_601_1ea886e3d8.png"
        alt=""
        width={547}
        height={372}
        className="tw-rounded-lg lg:tw-rounded-2xl"
      />
    </div>
  );
};
export default International;
