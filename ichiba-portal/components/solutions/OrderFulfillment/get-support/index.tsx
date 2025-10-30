import { LocaleNamespace } from "@/const/locale";
import clsx from "clsx";
import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import SvgIcon from "@/components/common/SvgIcon";
import Image from "next/image";
import { useRouter } from "next/router";

const GetSupport = () => {
  const { t } = useTranslation(LocaleNamespace.OrderFulfillment);
  const router = useRouter();
  const items = t(`getSupport.items`, {
    returnObjects: true,
  }) as { value: string; label: string }[];

  const icons = ["phone-call", "message-chat-like-heart", "time-clock"];

  const images = [
    "https://cms-strapi.ichiba.net/uploads/banner_group_1_a8155008b4.png",
    "https://cms-strapi.ichiba.net/uploads/banner_group_2_86ddd5d7c6.png",
  ];

  return (
    <div
      className={clsx(
        "tw-relative",
        "before:tw-absolute before:tw-inset-0 before:tw-content-empty before:-tw-z-1 before:tw-rotate-180 before:tw-bg-center",
        "before:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/get_support_bg_436fd589b3.png')]",
      )}
    >
      <div className="container tw-text-white">
        <div className="tw-py-6 xl:tw-py-10">
          <div
            className={clsx(
              "tw-flex tw-flex-col tw-gap-6",
              "lg:tw-grid lg:tw-grid-cols-2",
            )}
          >
            <div className="tw-flex tw-flex-col tw-gap-8">
              <div className={clsx("tw-text-center", "lg:tw-text-left")}>
                <h3 className="tw-mb-2 tw-text-2xl xl:tw-text-4xl tw-font-bold">
                  {t("getSupport.title")}
                </h3>
                <span
                  dangerouslySetInnerHTML={{ __html: t("getSupport.content") }}
                />
              </div>
              <div className="tw-flex tw-items-stretch tw-gap-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className={clsx(
                      "tw-flex tw-flex-col tw-flex-1 tw-items-center",
                      "lg:tw-flex-row lg:tw-gap-4 lg:tw-items-start",
                      {
                        "lg:tw-border-r lg:tw-border-white":
                          index !== items.length - 1,
                      },
                    )}
                  >
                    <div
                      className="tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-rounded-lg"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.40)" }}
                    >
                      <SvgIcon icon={icons[index]} />
                    </div>
                    <div
                      className={clsx(
                        "tw-flex tw-flex-col tw-mt-4",
                        "lg:tw-mt-0",
                      )}
                    >
                      <span className="tw-font-bold lg:tw-text-left tw-text-center">
                        {item.value}
                      </span>
                      <span
                        className={clsx(
                          "tw-mt-1 tw-text-xs tw-text-center",
                          "lg:tw-text-left",
                        )}
                        dangerouslySetInnerHTML={{ __html: item.label }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div
                className={clsx(
                  "tw-flex tw-items-center tw-gap-4 tw-justify-center",
                  "lg:tw-justify-start",
                )}
              >
                <Link
                  className="tw-no-underline tw-text-white tw-bg-brand-primary tw-w-max tw-px-3  tw-py-3.5 tw-rounded-lg tw-font-medium"
                  href="/contact-sales"
                  passHref
                  target="_blank"
                >
                  {t("getInTouchNow")}
                </Link>
                <Link
                  className="tw-no-underline tw-text-brand-primary tw-bg-orange-1 tw-w-max tw-px-3  tw-py-3.5 tw-rounded-lg tw-font-medium"
                  href={`/support-portal${router?.locale}/`}
                  passHref
                  target="_blank"
                >
                  {t("readUserGuide")}
                </Link>
              </div>
            </div>
            <div className="tw-overflow-hidden">
              <div
                className={clsx(
                  "tw-grid tw-grid-cols-2 tw-w-max tw-gap-6",
                  "lg:tw-grid-cols-1",
                )}
              >
                {images.map((image, index) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={index}
                    src={image}
                    alt=""
                    className="tw-w-full tw-h-auto"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetSupport;
