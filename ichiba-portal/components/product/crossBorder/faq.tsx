/* eslint-disable @next/next/link-passhref */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

export default function FAQs() {
  const { t } = useTranslation("common");

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleToggle1 = () => {
    setIsOpen1(!isOpen1);
  };
  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };
  return (
    <>
      <div
        className={clsx(
          "FAQs user-select-none ",
          "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/BG_Platform_c44b1cd870.png')]",
          "tw-bg-cover  tw-bg-center",
        )}
      >
        <div className="container">
          <div className="frequently mx-auto" style={{ maxWidth: "790px" }}>
            <div className="text-center fw-7 fs-36 ">
              {" "}
              <span>{t("crossBorder.faqs.title")}</span>
            </div>
            <div className="py-4 ">
              <div
                className="d-flex justify-content-between fs-16 fw-7 pb-3 cursor "
                onClick={handleToggle}
              >
                <div>{t("crossBorder.faqs.ifRecive")}</div>
                <div className="toggle">
                  {isOpen ? (
                    <span className="minus">-</span>
                  ) : (
                    <span className="plus">+</span>
                  )}
                </div>
              </div>
              <div className={isOpen ? "contentOpen" : "contentClosed"}>
                <div className="fs-16">{t("crossBorder.faqs.whenReceive")}</div>
                <div className="fs-16">
                  {t("crossBorder.faqs.pleaseContact")}
                </div>
                <ul>
                  <li className="fs-16">{t("crossBorder.faqs.li1")}</li>
                  <li className="fs-16">{t("crossBorder.faqs.li2")}</li>
                  <li className="fs-16">{t("crossBorder.faqs.li3")}</li>
                </ul>
              </div>
            </div>
            <div className="py-4 border-top">
              <div
                className="d-flex justify-content-between fs-16 fw-7 pb-3 cursor"
                onClick={handleToggle1}
              >
                <div>{t("crossBorder.faqs.isAction")}</div>
                <div className="toggle">
                  {isOpen1 ? (
                    <span className="minus">-</span>
                  ) : (
                    <span className="plus">+</span>
                  )}
                </div>
              </div>
              <div className={isOpen1 ? "contentOpen" : "contentClosed"}>
                <div className="fs-16">{t("crossBorder.faqs.yahooAution")}</div>
                <div className="fs-16">
                  {t("crossBorder.faqs.onlinePurchases")}
                </div>
              </div>
            </div>
            <div className="py-4 border-top">
              <div
                className="d-flex justify-content-between fs-16 fw-7 pb-3 cursor"
                onClick={handleToggle2}
              >
                <div>{t("crossBorder.faqs.isItPosible")}</div>
                <div className="toggle">
                  {isOpen2 ? (
                    <span className="minus">-</span>
                  ) : (
                    <span className="plus">+</span>
                  )}
                </div>
              </div>
              <div className={isOpen2 ? "contentOpen" : "contentClosed"}>
                <div className="fs-16">{t("crossBorder.faqs.whenYou")}</div>
                <div className="fs-16">{t("crossBorder.faqs.however")}</div>
              </div>
            </div>
            <div>
              <Link
                href="/support/faq"
                className="text-decoration-none"
                rel="canonical"
              >
                {t("ship.features.faqs.viewMore")}{" "}
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
