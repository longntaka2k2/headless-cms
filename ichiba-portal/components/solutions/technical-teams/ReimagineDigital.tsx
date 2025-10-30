import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const ReimagineDDigital = () => {
  const a = useTranslation("operation-teams").t;
  return (
    <div className="tw-container">
      <div
        className={clsx(
          "lg:tw-py-10 lg:tw-px-[200px]",
          "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/s_a55bdf95d1.png)] tw-bg-cover",
          "tw-py-6 tw-px-5 tw-rounded-2xl tw-text-center",
        )}
      >
        <h2 className="tw-mb-5 lg:tw-mb-6 tw-font-bold tw-text-xl lg:tw-text-3xl">
          {a("joinTheRanks.title")}
        </h2>
        <div className="tw-flex tw-gap-3 lg:tw-gap-4 tw-justify-center">
          <Link
            href={"/contact-sales"}
            className="tw-font-medium tw-text-sm tw-inline-block tw-rounded-lg tw-p-3 tw-text-white tw-no-underline tw-bg-[#F57C00]"
          >
            {a("joinTheRanks.contactSales")}
            <FontAwesomeIcon
              icon={faArrowRight}
              size="sm"
              className="tw-ml-3"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReimagineDDigital;
