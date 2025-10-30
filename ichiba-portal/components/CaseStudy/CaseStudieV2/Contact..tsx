import bgContact from "@/public/images/caseStudies/bg-contact.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "next-i18next";

export default function Contact() {
  const { t } = useTranslation("case-studies");

  return (
    <div className="container tw-py-6 lg:tw-py-15 tw-text-white">
      <div
        style={{
          backgroundImage: `url(${bgContact.src})`,
        }}
        className="tw-container tw-py-15 tw-px-5 lg:tw-px-14 tw-rounded-xl tw-overflow-hidden"
      >
        <p className="tw-mb-6 tw-text-2xl lg:tw-text-4xl tw-font-bold">
          {t("contact.title")}
        </p>
        <button className="tw-bg-[#F57C00] tw-text-sm tw-font-medium tw-w-[200px] tw-py-3 tw-rounded-lg">
          {t("contact.btnText")}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="tw-w-4 tw-h-4 tw-text-white"
          />
        </button>
      </div>
    </div>
  );
}
