import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const { t } = useTranslation("dropshipping");
  return (
    <div className="tw-container tw-py-6 lg:tw-py-15">
      <div
        className={clsx(
          "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Rectangle_7189_405efb6289.svg)]",
          "tw-w-full tw-rounded-lg tw-text-white tw-pt-12 tw-px-4 tw-pb-[72px] tw-bg-cover tw-bg-no-repeat",
          "lg:tw-rounded-xl lg:tw-pt-[70px] lg:tw-pb-[140px] lg:tw-px-14 lg:tw-items-center",
        )}
      >
        <div>
          <h2 className="tw-mb-6 tw-text-2xl lg:tw-text-4xl tw-font-bold lg:tw-w-[70%]">
            {t("contact.title")}
          </h2>
          <Link
            href={"/contact-sales"}
            target="_blank"
            className="tw-text-white"
          >
            <button className="tw-bg-[#F57C00] tw-py-3 tw-px-3 tw-w-[200px] tw-text-sm tw-font-medium tw-rounded-lg">
              {t("contact.contactSales")}
              <FontAwesomeIcon icon={faArrowRight} className="tw-ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
