/* eslint-disable @next/next/link-passhref */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const Ready = () => {
  const p = useTranslation("proxy-shopping").t;

  return (
    <div className="tw-my-6 tw-mx-4 lg:tw-my-[60px] lg:tw-mx-0">
      <div
        className={clsx(
          "lg:tw-py-10 lg:tw-px-[80px]",
          "tw-py-6 tw-px-4 tw-rounded-2xl tw-bg-[url(https://cms-strapi.ichiba.net/uploads/s_a55bdf95d1.png)]",
          "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/23_350887328d.png)] tw-bg-cover lg:tw-container tw-text-center",
        )}
      >
        <div className="tw-font-bold tw-text-xl lg:tw-text-3xl">
          {p("haveQuestion.title")}
        </div>
        <Link
          href={"/contact-sales"}
          target="_blank"
          rel="noreferrer noopener canonical"
          className="tw-font-medium tw-text-sm tw-inline-block tw-rounded-lg tw-p-3 tw-mt-5 tw-text-white tw-no-underline tw-bg-[#F57C00]"
        >
          {p("haveQuestion.contact")}{" "}
          <FontAwesomeIcon icon={faArrowRight} size="sm" className="tw-ml-3" />
        </Link>
      </div>
    </div>
  );
};
export default Ready;
