import { LocaleNamespace } from "@/const/locale";
import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import clsx from "clsx";

const Integrations = () => {
  const { t } = useTranslation(LocaleNamespace.OrderFulfillment);

  return (
    <div
      className={clsx(
        "tw-bg-cover tw-bg-no-repeat tw-bg-center tw-text-white",
        "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/integrations_bg_7b0caff2cd.webp')]",
      )}
    >
      <div className="container">
        <div className="tw-py-6 xl:tw-py-10">
          <div className={clsx("tw-max-w-[792px] tw-mx-auto tw-text-center")}>
            <h3 className="tw-mb-2 tw-text-2xl xl:tw-text-4xl tw-font-bold">
              {t("integrations.title")}
            </h3>
            <span
              dangerouslySetInnerHTML={{ __html: t("integrations.content") }}
            />
          </div>
          <div className="tw-py-6 tw-flex tw-justify-center">
            <Link
              className="tw-no-underline tw-text-white tw-bg-brand-primary tw-w-max tw-p-3 tw-rounded-lg tw-font-medium tw-min-w-[174px] tw-flex tw-items-center tw-justify-center tw-gap-2"
              href="/products/integrations"
              passHref
              target="_blank"
            >
              {t("viewAllIntegrations")}
            </Link>
          </div>
          <div
            className={clsx(
              "tw-w-full tw-max-w-[900px] tw-h-[300px] md:tw-h-[400px] xl:tw-h-[500px] tw-mx-auto tw-rounded-lg",
              // "tw-bg-[url('/icons/pim/empty-img-bg.svg')] tw-bg-no-repeat tw-bg-center tw-bg-cover",
              "tw-bg-ic-black-7",
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Integrations;
