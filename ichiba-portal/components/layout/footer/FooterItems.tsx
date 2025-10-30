/* eslint-disable @next/next/link-passhref */
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const FooterItems = () => {
  const { t } = useTranslation("footerv2");

  return (
    <div className="tw-grid tw-gap-10 lg:tw-mb-10 tw-mb-6">
      <div className="tw-grid lg:tw-grid-cols-12 tw-gap-6">
        <div className="lg:tw-col-span-2 tw-col-span-10">
          <div className="tw-text-[#00194F] tw-font-bold tw-pb-2 tw-border-b-[#ddd] tw-border">
            {t("ichiba.title")}
          </div>
          <div className="tw-grid tw-gap-3 tw-mt-3 lg:tw-mt-4">
            {(
              t(`ichiba.item`, {
                returnObjects: true,
              }) as string[]
            )?.map((value: any, index: number) => (
              <Link
                prefetch={false}
                key={index}
                href={value.link}
                rel="noindex"
                className="tw-no-underline  hover:tw-underline tw-text-[#333] tw-block tw-text-sm"
              >
                {value.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="tw-col-span-10">
          <div className="tw-text-[#00194F] tw-font-bold tw-pb-2 tw-border-b-[#ddd] tw-border">
            {t("product.title")}
          </div>
          <div className="tw-grid tw-col lg:tw-grid-cols-10 lg:tw-col tw-gap-3 tw-mt-3 lg:tw-mt-4">
            <div className="tw-col-span-4">
              <div className="tw-text-[#666] tw-uppercase tw-font-bold tw-text-xs">
                {t("product.items.0.label")}
              </div>
              <div className="tw-grid tw-gap-3 tw-mt-3 lg:tw-mt-4">
                {(
                  t(`product.items.0.itemslv2`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <Link
                    prefetch={false}
                    key={index}
                    href={value.link}
                    rel="noindex"
                    className={clsx(
                      "tw-no-underline  hover:tw-underline tw-text-[#333] tw-block tw-text-sm",
                      value?.link
                        ? "hover:tw-bg-[#F0F5FF]"
                        : "tw-pointer-events-none tw-opacity-80",
                    )}
                  >
                    {value.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="tw-col-span-3">
              <div className="tw-text-[#666] tw-uppercase tw-font-bold tw-text-xs">
                {t("product.items.1.label")}
              </div>
              <div className="tw-grid tw-gap-3 tw-mt-3 lg:tw-mt-4">
                {(
                  t(`product.items.1.itemslv2`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <Link
                    prefetch={false}
                    key={index}
                    href={value.link}
                    rel="noindex"
                    className={clsx(
                      "tw-no-underline  hover:tw-underline tw-text-[#333] tw-block tw-text-sm",
                      value?.link
                        ? "hover:tw-bg-[#F0F5FF]"
                        : "tw-pointer-events-none tw-opacity-80",
                    )}
                  >
                    {value.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="tw-col-span-3">
              <div className="tw-text-[#666] tw-uppercase tw-font-bold tw-text-xs">
                {t("product.items.2.label")}
              </div>
              <div className="tw-grid tw-gap-3 tw-mt-3 lg:tw-mt-4">
                {(
                  t(`product.items.2.itemslv2`, {
                    returnObjects: true,
                  }) as string[]
                ).map((value: any, index: number) => (
                  <Link
                    prefetch={false}
                    key={index}
                    href={value.link}
                    rel="noindex"
                    className={clsx(
                      "tw-no-underline  hover:tw-underline tw-text-[#333] tw-block tw-text-sm",
                      value?.link
                        ? "hover:tw-bg-[#F0F5FF]"
                        : "tw-pointer-events-none tw-opacity-80",
                    )}
                  >
                    {value.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tw-grid lg:tw-grid-cols-12 tw-gap-6">
        <div className="lg:tw-col-span-2">
          {/* <div className="tw-text-[#00194F] tw-font-bold tw-pb-2 tw-border-b-[#ddd] tw-border">
            {t("solution.title")}
          </div>
          <div className="tw-grid tw-gap-3 tw-mt-3 lg:tw-mt-4">
            {(
              t(`solution.item`, {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <Link
                prefetch={false}
                key={index}
                href={value.link}
                rel="noindex"
                className="tw-no-underline  hover:tw-underline tw-text-[#333] tw-block tw-text-sm"
              >
                {value.title}
              </Link>
            ))}
          </div> */}
        </div>
        <div className="lg:tw-col-span-4">
          <div className="tw-text-[#00194F] tw-font-bold tw-pb-2 tw-border-b-[#ddd] tw-border">
            {t("useCase.title")}
          </div>
          <div className="tw-grid tw-gap-3 tw-mt-3 lg:tw-mt-4">
            {(
              t(`useCase.item`, {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <Link
                prefetch={false}
                key={index}
                href={value.link}
                rel="noindex nofollow"
                className={clsx(
                  "tw-no-underline  hover:tw-underline tw-text-[#333] tw-block tw-text-sm",
                  value?.link
                    ? "hover:tw-bg-[#F0F5FF]"
                    : "tw-pointer-events-none tw-opacity-80",
                )}
              >
                {value.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:tw-col-span-3">
          <div className="tw-text-[#00194F] tw-font-bold tw-pb-2 tw-border-b-[#ddd] tw-border">
            {t("industries.title")}
          </div>
          <div className="tw-grid tw-grid-cols-2 tw-gap-3 tw-mt-3 lg:tw-mt-4">
            {(
              t(`industries.item`, {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <Link
                prefetch={false}
                key={index}
                href={value.link}
                rel="noindex"
                className="tw-no-underline  hover:tw-underline tw-text-[#333] tw-block tw-text-sm"
              >
                {value.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:tw-col-span-3">
          <div className="tw-text-[#00194F] tw-font-bold tw-pb-2 tw-border-b-[#ddd] tw-border">
            {t("resources.title")}
          </div>
          <div className="tw-grid tw-gap-3 tw-mt-3 lg:tw-mt-4">
            {(
              t(`resources.item`, {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <Link
                prefetch={false}
                key={index}
                href={value.link}
                rel="noindex"
                className="tw-no-underline  hover:tw-underline tw-text-[#333] tw-block tw-text-sm"
              >
                {value.title}
              </Link>
            ))}
            <Link
              prefetch={false}
              target="_blank"
              href="https://ichibaone-status.com"
              className="tw-no-underline  hover:tw-underline tw-text-[#333] tw-flex tw-items-center tw-text-sm tw-gap-2"
            >
              Status{" "}
              <div className="tw-bg-green-7 tw-w-2 tw-h-2 tw-rounded-full"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterItems;
