import { useTranslation } from "next-i18next";
import multi from "@/public/icons/crossBorder/flexible/multi.svg";
import monti from "@/public/icons/crossBorder/flexible/monti.svg";
import pci from "@/public/icons/crossBorder/flexible/pci.svg";
import secure from "@/public/icons/crossBorder/flexible/secure.svg";
import iso from "@/public/icons/crossBorder/flexible/iso.svg";
import committed from "@/public/icons/crossBorder/flexible/committed.svg";

import Image from "next/image";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import clsx from "clsx";

export default function Committed() {
  const { t } = useTranslation("common");

  const flexible = [
    { title: "multi", img: committed },
    { title: "monitor", img: monti },
    { title: "committed", img: multi },
  ];
  return (
    <>
      <div className={clsx()}>
        <div
          className={clsx(
            "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/BG_a0873f049a.png')]",
            "lg:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/BG_desktop_c6773bcb7f.png')]",
            "tw-bg-cover tw-bg-no-repeat tw-bg-center",
            "tw-py-6 lg:tw-py-16",
          )}
        >
          <div className="tw-container">
            <div className="container-child mx-auto">
              <h2 className="tw-font-bold tw-text-2xl lg:tw-text-4xl pb-5 text-center px-md-5">
                {t("crossBorder.committed.title")}
              </h2>
            </div>

            <div className="tw-flex tw-flex-wrap lg:tw-flex-nowrap pt-4 tw-gap-6">
              {flexible.map((value, index) => (
                <article
                  className={clsx(
                    "lg:tw-border-0 tw-border-[1px] tw-border-pending-2 tw-rounded-2xl",
                    "text-center tw-py-6 tw-px-4",
                  )}
                  key={index}
                >
                  <Image
                    src={value.img}
                    alt={value.title}
                    className="tw-mx-auto tw-mb-6"
                  />
                  <h3 className="tw-py-2 fw-5 tw-text-base tw-font-medium">
                    {t(`crossBorder.committed.${value.title}.title`)}
                  </h3>
                  <p className="tw-text-sm tw-mb-0">
                    {t(`crossBorder.committed.${value.title}.content`)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="tw-container text-center tw-py-6  lg:tw-py-16">
          <div className="tw-py-4 lg:tw-py-8 tw-text-2xl lg:tw-text-4xl tw-font-bold">
            {t("crossBorder.committed.certi")}
          </div>
          <div className="tw-pb-6 lg:tw-pb-8 tw-flex tw-gap-4 lg:tw-gap-6 tw-justify-center mx-auto">
            <Image className="tw-w-1/3 lg:tw-w-min" src={pci} alt="pci" />
            <Image className="tw-w-1/3 lg:tw-w-min" src={secure} alt="secure" />
            <Image className="tw-w-1/3 lg:tw-w-min" src={iso} alt="iso" />
          </div>
          <div className="text-center">
            <Link
              role="button"
              href="/trust-security"
              className="tw-no-underline hover:tw-underline"
              rel="nofollow"
              passHref
            >
              {t("crossBorder.committed.learnMore")}{" "}
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
