import { clsx } from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const PowerYour = () => {
  const b = useTranslation("business-owner").t;

  return (
    <div
      className={clsx(
        "tw-py-6 tw-px-4 lg:tw-px-0 lg:tw-py-20  tw-bg-[url(https://cms-strapi.ichiba.net/uploads/bg_343aac6ef1.png)] tw-bg-cover tw-text-white",
        " lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/dddd_cfb59c5fa0.png)] ",
      )}
    >
      <div className="lg:tw-container lg:tw-flex lg:tw-justify-between tw-items-center">
        <div className="lg:tw-max-w-[570px]">
          <div className="tw-font-bold tw-text-xl lg:tw-text-3xl">
            {b("power.title")}
          </div>
          <div className="tw-mt-2 tw-text-sm lg:tw-mt-4 lg:tw-text-base">
            {b("power.content")}
          </div>
        </div>
        <Link
          href={"/contact-sales"}
          target="_blank"
          rel="noreferrer noopener canonical"
          className={clsx(
            "tw-py-3 tw-px-6 tw-text-sm tw-w-max tw-mt-4 lg:tw-mt-6 lg:tw-text-base ",
            "tw-no-underline tw-bg-[#F57C00] tw-text-white tw-block tw-rounded-lg lg:tw-py-4 lg:tw-px-8",
          )}
        >
          {b("power.contact")}
        </Link>
      </div>
    </div>
  );
};

export default PowerYour;
