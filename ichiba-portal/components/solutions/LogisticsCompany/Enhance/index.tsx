import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
const Enhance = () => {
  const l = useTranslation("logistics-company").t;

  return (
    <div className="tw-py-6 tw-px-4">
      <div
        className={clsx(
          "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Rectangle_7189_ad83a3086e.png)]",
          "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Rectangle_7189_1_ed99952d9c.png)]",
          "lg:tw-container tw-py-10 tw-px-4 tw-text-left tw-rounded-xl lg:tw-px-[56px] lg:tw-pt-15 lg:tw-pb-[90px] tw-bg-cover",
        )}
      >
        <h2 className="tw-text-2xl tw-font-bold tw-text-white lg:tw-max-w-[800px] lg:tw-text-4xl">
          {l("enhance.title")}
        </h2>
        <Link
          href={"/contact-sales"}
          className={clsx(
            "tw-text-white tw-font-medium tw-py-3 tw-px-8 tw-text-sm lg:tw-text-base lg:tw-mt-6",
            "tw-max-w-[200px] tw-text-center tw-mt-4 tw-bg-[#F57C00] tw-rounded-lg tw-no-underline tw-block",
          )}
        >
          {l("banner.contact")}
          <FontAwesomeIcon icon={faArrowRight} size="sm" className="tw-ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default Enhance;
