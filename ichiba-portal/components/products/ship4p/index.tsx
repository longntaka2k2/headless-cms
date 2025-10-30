import SvgIcon from "@/components/common/SvgIcon";
import clsx from "clsx";
import Image from "next/image";
import imgShip4P from "@/public/images/products/imgShip4P.svg";
import { useTranslation } from "next-i18next";
import BoxContentEcosystem from "../boxContentEcosystem";

export default function Ship4P() {
  const { t } = useTranslation("products");

  const listShip4P = [
    { title: t("ship4P.list.0") },
    { title: t("ship4P.list.1") },
    { title: t("ship4P.list.2") },
  ];

  return (
    <div className="tw-container">
      <div
        className={clsx(
          "tw-grid tw-bg-[#F3F7FE] tw-rounded-xl tw-w-full tw-h-full tw-py-5 tw-px-4",
          "lg:tw-justify-items-center lg:tw-rounded-xl lg:tw-pt-8 lg:tw-px-[50px] lg:tw-pb-5",
        )}
      >
        <div className="tw-flex tw-gap-3 lg:tw-gap-4 tw-items-center tw-mb-4 lg:tw-mb-6">
          <Image
            src="https://cms-strapi.ichiba.net/uploads/ship4_P_3a74082c65.svg"
            width={64}
            height={64}
            alt=""
            className="tw-w-10 tw-h-10 lg:tw-w-16 lg:tw-h-16"
          />
          <div>
            <h2 className="tw-mb-0 tw-text-xl lg:tw-text-3xl tw-font-bold">
              {t("ship4P.heading")}
            </h2>
            <p className="tw-text-sm lg:tw-text-base tw-mb-0">
              {t("ship4P.subHeading")}
            </p>
          </div>
        </div>

        <p className="tw-text-sm lg:tw-text-base tw-text-ic-black-5 tw-mb-4 lg:tw-mb-10">
          {t("ship4P.subTitle")}
        </p>

        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-w-full tw-justify-between">
          <div className="lg:tw-w-[50%]">
            <div
              style={{
                boxShadow:
                  "5.152px 1.03px 10.304px 0px #FFF inset, -1.03px -5.152px 10.304px 0px rgba(147, 185, 221, 0.40) inset, 20.609px 30.913px 41.217px 0px rgba(68, 111, 195, 0.15)",
              }}
              className="tw-bg-[#F9FDFF] tw-w-full tw-max-h-[333px] tw-h-full tw-py-2 tw-px-[10px] tw-rounded-[15px]"
            >
              <Image
                src={imgShip4P}
                alt="imgShip4P"
                className="tw-w-full tw-h-full"
              />
            </div>
          </div>

          <div className="lg:tw-w-[45%]">
            <BoxContentEcosystem
              list={listShip4P as []}
              link="/products/ship4p/overview"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
