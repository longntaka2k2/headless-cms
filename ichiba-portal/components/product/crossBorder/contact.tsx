import clsx from "clsx";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ContactNow = () => {
  const { t } = useTranslation("common");
  return (
    <section
      className={clsx(
        "tw-container tw-py-6 md:tw-py-16 tw-min-h-[336px]",
        "tw-text-white",
      )}
    >
      <div
        className={clsx(
          "tw-rounded-xl tw-flex tw-flex-col tw-p-5 md:tw-py-15 md:tw-px-[136px] tw-gap-6",
          "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/bg_mobile_89036951ff.png')]",
          "md:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/image_20_672485c3ec.png')]",
          "tw-bg-cover",
          "md:tw-items-center",
        )}
      >
        <div className="md:tw-max-w-[80%] md:tw-text-center">
          <h3 className="tw-font-bold md:tw-max-w-[95%]">
            {t("solutions.cbe.contactNow.heading")}
          </h3>
          <p>{t("solutions.cbe.contactNow.subHeading")}</p>
        </div>
        <Link
          href={"/contact-sales"}
          rel="canonical"
          className={clsx(
            "tw-bg-brand-primary tw-p-3 tw-no-underline tw-rounded-lg tw-text-white",
            "tw-min-w-[170px] md:tw-min-w-[200px] tw-text-center",
            "tw-self-start md:tw-self-auto",
          )}
          passHref
        >
          {t("contactNow")} <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </section>
  );
};
export default ContactNow;
