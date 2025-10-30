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
import clsx from "clsx";
import { useEffect } from "react";
import Link from "next/link";

interface Props {
  currentLang: string;
}
export default function Committed({ currentLang }: Props) {
  const { t } = useTranslation("common");
  let host = typeof window !== "undefined" ? window.location.origin : "";

  const flexible = [
    { title: "multi", img: committed },
    { title: "monitor", img: monti },
    { title: "committed", img: multi },
  ];

  return (
    <>
      <div className="tw-py-6 md:tw-py-16 committed">
        <div className="container">
          <div className="container-child mx-auto">
            <h2 className="fw-7 fs-40 tw-pb-6 text-center">
              {t("crossBorder.committed.title")}
            </h2>
          </div>

          <div className="tw-grid tw-grid-cols-3 tw-gap-6">
            {flexible.map((value, index) => (
              <div
                key={index}
                className={clsx(
                  "tw-flex tw-flex-col tw-items-center",
                  "tw-col-span-1 md:tw-col-span-1 text-center",
                )}
              >
                <Image src={value.img} alt={value?.title} />
                <div className="py-3 tw-font-bold">
                  {t(`crossBorder.committed.${value.title}.title`)}
                </div>
                <div className="fs-14">
                  {t(`crossBorder.committed.${value.title}.content`)}
                </div>
              </div>
            ))}
          </div>

          <div className="tw-flex tw-flex-col tw-items-center">
            <div className="py-5 fs-24">{t("crossBorder.committed.certi")}</div>
            <div className="pb-4 tw-grid tw-grid-cols-3">
              <Image src={pci} alt="pci" />
              <Image src={secure} alt="secure" />
              <Image src={iso} alt="iso" />
            </div>
          </div>
          <div className="text-center">
            <Link
              href={"/trust-security"}
              className=" text-decoration-none"
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
