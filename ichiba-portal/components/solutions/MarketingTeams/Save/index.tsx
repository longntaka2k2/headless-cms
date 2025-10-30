import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

const Save = () => {
  const m = useTranslation("marketing-teams").t;

  return (
    <div
      className={clsx(
        "tw-mx-4 tw-py-6 tw-px-5 tw-rounded-2xl tw-bg-[#F3F5F8] tw-grid lg:tw-items-center",
        "tw-gap-10 lg:tw-flex lg:tw-container lg:tw-justify-between lg:tw-px-20 lg:tw-py-10",
      )}
    >
      <div className="lg:tw-max-w-[581px]">
        <h3 className="tw-text-xl tw-font-bold lg:tw-text-3xl">
          {m("saveEffort.title")}
        </h3>
        <div className="tw-mt-3 tw-text-sm lg:tw-mt-4 lg:tw-text-base">
          {m("saveEffort.content")}
        </div>
        <Link
          href={"/contact-sales"}
          className="tw-mt-5 lg:tw-mt-4 tw-rounded-lg tw-px-5 tw-py-2 tw-bg-[#F57C00] tw-text-white tw-block tw-w-max tw-no-underline tw-text-sm lg:tw-text-base"
        >
          {m("saveEffort.contact")}
        </Link>
      </div>
      <Image
        src={"https://cms-strapi.ichiba.net/uploads/Group_9a7e5f7eef.svg"}
        alt="saveEffort"
        width={334}
        height={203}
      /> 
    </div>
  );
};

export default Save;
