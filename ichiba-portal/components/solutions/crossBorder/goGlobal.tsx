import Link from "next/link";
import { useTranslation } from "next-i18next";

const GoGlobal = () => {
  const { t } = useTranslation("common");
  return (
    <section
      className="tw-py-[40px] tw-sm:tw-py-[24px]
      tw-bg-[url('/icons/solutions/crossBorderEcommerce/bg-goglobal.png')]
      tw-bg-cover tw-bg-center
      tw-bg-no-repeat
      md:tw-h-[500px]"
    >
      <div className="tw-container tw-text-center tw-text-white tw-h-full">
        <div className=" tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center ">
          <h2 className="tw-font-bold tw-text-2xl md:tw-text-4xl">
            {t("solutions.cbe.goGlobal.heading")}
          </h2>
          <p>{t("solutions.cbe.goGlobal.subHeading")}</p>
          <Link
            href="/contact-sales"
            rel="canonical"
            className="tw-p-3 tw-bg-brand-primary tw-rounded-lg tw-min-w-[94px] md:tw-min-w-[176px] tw-text-white"
          >
            {t("contactSale")}
          </Link>
        </div>
      </div>
    </section>
  );
};
export default GoGlobal;
