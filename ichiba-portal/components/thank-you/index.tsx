/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import { useTranslation } from "next-i18next";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import CustomerStory from "./customer-story";

export default function ThankYouComponent() {
  const router = useRouter();
  const { t } = useTranslation("thank-you");
  return (
    <div>
      <div
        className={clsx(
          "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Hero2_67a2efdbaa.svg')]",
          "lg:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Hero_8c9dc91c24.svg')] tw-bg-cover",
          "tw-w-full tw-h-screen tw-flex tw-items-center tw-text-center",
        )}
      >
        <div className="tw-container tw-px-10">
          <h1 className="tw-text-2xl lg:tw-text-5xl lg:tw-leading-[58px] tw-font-bold tw-gradient-text">
            {t("banner.heading")}
          </h1>
          <p className="tw-text-base tw-mb-6">{t("banner.subHeading")}</p>

          <div className="tw-flex tw-justify-center tw-text-sm tw-font-medium">
            <Link
              className={clsx(
                "tw-bg-brand-primary tw-px-4 tw-py-2 tw-text-white tw-text-sm lg:tw-text-base",
                "tw-font-medium lg:tw-py-[14px] lg:tw-px-8 tw-rounded-lg tw-no-underline",
              )}
              href={`/${router.locale}`}
            >
              {t("banner.textBtn")}
              <FontAwesomeIcon
                icon={faArrowRight}
                width={24}
                height={24}
                className="tw-ml-1 tw-group-hover:tw-translate-x-2 tw-transition-all"
              />
            </Link>
          </div>
        </div>
      </div>
      <CustomerStory />
    </div>
  );
}
