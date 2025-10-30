import { useTranslation } from "next-i18next";
import clsx from "clsx";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Support() {
  const { t } = useTranslation("digital");

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
        <div className="tw-flex tw-flex-col lg:tw-items-center ">
          <h2 className="lg:tw-text-center tw-font-bold tw-text-2xl lg:tw-text-4xl lg:tw-mb-10 tw-mb-6 lg:tw-mx-auto lg:tw-w-3/5 tw-text-white">
            {t("support.heading")}
          </h2>
          <Link
            role="button"
            href={"/contact-sales"}
            className="tw-cta tw-cta-primary tw-p-3 tw-w-[176px] tw-border-brand-primary tw-pb-4"
            passHref
          >
            {t("support.cta")}
            <FontAwesomeIcon icon={faArrowRight} className="tw-ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
