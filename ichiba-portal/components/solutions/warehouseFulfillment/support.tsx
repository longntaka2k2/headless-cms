/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

const Support = () => {
  const { t } = useTranslation("common");
  return (
    <section className="tw-py-6 md:tw-py-10">
      <div className="tw-container">
        <div
          className=" 
                tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6"
        >
          <div className="tw-hidden md:tw-block">
            <img
              className="md:tw-w-[589px] md:tw-h-[457px] "
              src={
                "https://cms-strapi.ichiba.net/uploads/customer_service_c05df4d465.webp"
              }
              alt="customer_service"
            />
          </div>
          <div className="tw-w-full tw-max-w-[98vw] tw-text-center md:tw-text-start tw-flex tw-flex-col tw-gap-6 tw-justify-start md:tw-justify-center ">
            <h2 className="tw-font-bold tw-text-2xl md:tw-text-4xl">
              {t("solutions.warehouseFulfillment.support.heading")}
            </h2>
            <img
              className="md:tw-hidden "
              src={
                "https://cms-strapi.ichiba.net/uploads/customer_service_c05df4d465.webp"
              }
              alt="customer_service"
            />
            <div>
              <p>{t("solutions.warehouseFulfillment.support.subHeading1")}</p>
              <p>{t("solutions.warehouseFulfillment.support.subHeading2")}</p>
            </div>
            <Link
              href={"/contact-sales"}
              rel="canonical"
              className="tw-flex tw-min-w-[160px] tw-p-3 tw-flex-none tw-bg-brand-primary tw-rounded-lg tw-justify-center tw-self-center md:tw-self-start tw-no-underline tw-text-white"
              passHref
            >
              {t("requestSupport")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Support;
