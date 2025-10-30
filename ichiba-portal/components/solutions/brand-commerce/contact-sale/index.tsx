import clsx from "clsx";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ContactNow = () => {
  const { t } = useTranslation("brand-commerce");
  return (
    <section
      className={clsx(
        "tw-container tw-py-6 md:tw-py-16 tw-min-h-[336px]",
        "tw-text-white",
      )}
    >
      <div
        className={clsx(
          "tw-rounded-xl tw-flex tw-flex-col tw-px-5 tw-py-10  md:tw-px-[55px] tw-gap-6",
          "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/bg_mobile_89036951ff.png')]",
          "md:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/image_20_672485c3ec.png')]",
          "tw-bg-cover",
          "",
        )}
      >
        <div className="">
          <div className="tw-uppercase tw-text-sm lg:tw-text-base">
            {t("theSecret.tag")}
          </div>
          <h3 className="tw-font-bold tw-text-2xl lg:tw-text-4xl tw-my-4 ">
            {t("theSecret.title")}
          </h3>
          <div className="tw-text-sm lg:tw-text-base">
            {t("theSecret.subtitle")}
          </div>
        </div>
        <Link
          href={"/contact-sales"}
          rel="canonical"
          className={clsx(
            "tw-bg-brand-primary tw-py-3 tw-px-8 tw-no-underline tw-rounded-lg tw-text-white",
            "tw-w-max",
            "",
          )}
          passHref
        >
          {t("theSecret.contact")}
        </Link>
      </div>
    </section>
  );
};
export default ContactNow;
