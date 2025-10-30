import bgSupport from "@/public/images/electronics/bgContactSales.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function ContactSales() {
  const { t } = useTranslation("electronics");

  return (
    <div className="tw-container tw-py-6 lg:tw-py-15 lg:tw-px-4">
      <div
        style={{
          backgroundImage: `url(${bgSupport.src})`,
        }}
        className={clsx(
          "tw-w-full tw-rounded-lg tw-text-white tw-pt-5 tw-px-5 tw-pb-10",
          "lg:tw-rounded-xl lg:tw-py-10 lg:tw-px-14 lg:tw-items-center",
        )}
      >
        <div>
          <h2 className="tw-mb-6 tw-text-2xl lg:tw-text-4xl tw-font-bold lg:tw-w-[70%]">
            {t("contact.heading")}
          </h2>

          <Link href={"/contact-sales"} target="_blank" className="tw-text-white">
            <button className="tw-bg-[#F57C00] tw-py-3 tw-px-3 tw-w-[200px] tw-text-sm tw-font-medium tw-rounded-lg">
              {t("contactSales")}
              <FontAwesomeIcon icon={faArrowRight} className="tw-ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
