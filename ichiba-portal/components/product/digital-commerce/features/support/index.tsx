import { useTranslation } from "next-i18next";
import clsx from "clsx";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { getRegisterLink } from "@/utils/utils";

export default function Support() {
  const { t } = useTranslation("digital-features");

  return (
    <section
      className={clsx(
        "tw-m-2 lg:tw-m-0 lg:tw-p-0 ",
        "tw-rounded-lg lg:tw-rounded-none",

        "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/bg_mobile_508932857f.svg')]",
        "lg:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Frame_2608924_fbcf974e31.svg')]",
        "tw-bg-cover lg:tw-bg-cover tw-bg-center tw-bg-no-repeat",
      )}
    >
      <div className={clsx("lg:tw-py-16 tw-py-4 tw-container")}>
        <div className="tw-flex tw-flex-col lg:tw-flex-row lg:tw-justify-between tw-items-start lg:tw-items-center ">
          <div className="lg:tw-mb-0 tw-mb-6 lg:tw-w-[70%]">
            <h2 className="tw-font-bold tw-text-2xl lg:tw-text-4xl  tw-text-white tw-mb-3: lg:tw-mb-4">
              {t("support.heading")}
            </h2>
            <Link
              href={"/products/digital-commerce/pricing"}
              className="tw-text-brand-primary tw-no-underline hover:tw-underline"
              passHref
            >
              {t("support.listPricing")}
              <FontAwesomeIcon icon={faArrowRight} className="tw-ml-2" />
            </Link>
          </div>
          <Link
            role="button"
            href={getRegisterLink()}
            className="tw-cta tw-cta-primary tw-p-3 tw-border-brand-primary tw-pb-4"
            passHref
          >
            {t("support.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
