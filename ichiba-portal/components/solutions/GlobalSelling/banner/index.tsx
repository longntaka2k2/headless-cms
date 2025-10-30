/* eslint-disable @next/next/link-passhref */
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
const BannerGlobalSelling = () => {
  const g = useTranslation("global-selling").t;

  return (
    <div
      className="lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/sda_43b6b101dc.png)] tw-py-6 lg:tw-py-[50px] tw-bg-no-repeat tw-bg-right"
      style={{ backgroundPositionX: "105%" }}
    >
      <div className="lg:tw-flex tw-gap-[100px] lg:tw-container lg:tw-items-center">
        <div className="tw-px-4 lg:tw-max-w-[510px]">
          <h1 className="tw-font-bold tw-text-2xl lg:tw-text-5xl tw-mb-0">
            {g("banner.title")}
          </h1>
          <div className="tw-grid tw-gap-3 tw-my-5 lg:tw-my-6">
            {(
              g(`banner.conent`, {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <div key={index} className="tw-flex tw-gap-2 lg:tw-gap-4 ">
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/Group_98d9079556.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                <div className="tw-text-sm lg:tw-text-base">{value}</div>
              </div>
            ))}
          </div>
          <div className="tw-flex tw-justify-center tw-gap-4 lg:tw-mt-10 lg:tw-justify-start">
            <Link
              href={"/contact-sales"}
              className="tw-no-underline tw-border tw-border-[#F57C00] tw-rounded-lg tw-bg-[#F57C00] tw-py-3 tw-text-white tw-max-w-[170px] tw-text-center tw-w-full lg:tw-max-w-[200px]"
            >
              {" "}
              {g("banner.contactSales")}
            </Link>
            <Link
              href={"/"}
              className="tw-no-underline tw-flex tw-items-center tw-border tw-rounded-lg tw-border-[#F57C00] tw-py-3 tw-bg-white tw-text-[#F57C00] tw-gap-2 tw-max-w-[170px] lg:tw-max-w-[200px] tw-w-full tw-justify-center"
            >
              <div className="tw-flex tw-gap-3">
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/Vector_8_28d03b7b11.png"
                  alt=""
                  width={17}
                  height={22}
                />
                {g("banner.watch")}
              </div>
            </Link>
          </div>
        </div>
        <div
          className={clsx(
            "tw-relative tw-pt-3 tw-py-[70px] lg:tw-py-0 lg:tw-ml-0 tw-ml-6 tw-mt-6 tw-bg-no-repeat tw-bg-right tw-mb-[71px] lg:tw-mb-0",
            "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/sda_43b6b101dc.png)] lg:tw-bg-none",
          )}
          style={{ backgroundPositionX: "-10%" }}
        >
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Image_d82e4d19de.png"
            alt=""
            width={701}
            height={541}
            className=""
          />
          <div
            className={clsx(
              "tw-absolute tw-p-3 tw-rounded tw-border tw-border-white tw-backdrop-blur-lg tw-bottom-[-70px] lg:tw-bottom-[-120px] lg:tw-left-[-100px]",
              "tw-bg-[linear-gradient(114deg,rgba(255,255,255,0.60)_3.87%,rgba(243,245,247,0.68)_99.44%,rgba(252,252,252,0.50)_100.62%);]",
            )}
          >
            <Image
              src="https://cms-strapi.ichiba.net/uploads/image_600_b64c8253d5.png"
              alt=""
              width={223}
              height={224}
              className="tw-max-w-[138px] lg:tw-max-w-[223px] lg:tw-shadow-1 tw-rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BannerGlobalSelling;
