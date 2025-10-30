import SvgIcon from "@/components/common/SvgIcon";
import bgSupport from "@/public/images/products/bg-support.svg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Contact() {
  const { t } = useTranslation("retail");

  return (
    <div className="tw-container tw-py-6 lg:tw-py-15">
      <div
        style={{
          backgroundImage: `url(${bgSupport.src})`,
          objectFit: "cover",
        }}
        className={clsx(
          "tw-w-full tw-rounded-lg tw-text-white tw-pt-5 tw-px-5 tw-pb-10",
          "lg:tw-rounded-xl lg:tw-py-10 lg:tw-px-14 lg:tw-items-center tw-bg-cover",
        )}
      >
        <div>
          <h2 className="tw-mb-3 lg:tw-mb-4 tw-text-2xl lg:tw-text-4xl tw-font-bold lg:tw-w-[70%]">
            {t("iChiba.title")}
          </h2>

          <p className="tw-text-sm lg:tw-text-base tw-text-ic-white-5 tw-mb-6 lg:tw-mb-8">
            {t("iChiba.content")}
          </p>

          <Link
            href={"/contact-sales"}
            target="_blank"
            rel="nofollow"
            className="tw-text-white"
          >
            <button className="tw-bg-[#F57C00] tw-py-3 tw-px-3 tw-w-[200px] tw-text-sm tw-font-medium tw-rounded-lg">
              {t("iChiba.contact")}
              <FontAwesomeIcon icon={faArrowRight} className="tw-ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
