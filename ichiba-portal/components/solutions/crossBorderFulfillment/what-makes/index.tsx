import { useTranslation } from "next-i18next";
import Image from "next/image";
import whatMakes from "./dataset";
import { useEffect, useState } from "react";

export default function WhatMakes() {
  const [activeProduct, setActiveProduct] = useState(
    whatMakes.whatMakesItems[0],
  );
  useEffect(() => {
    let selectedProductIndex = whatMakes.whatMakesItems?.findIndex(
      (item) => item.key === activeProduct.key,
    );

    if (selectedProductIndex === -1) {
      selectedProductIndex = 0; // Nếu không tìm thấy, đặt lại về phần tử đầu tiên
    } else {
      selectedProductIndex++;
      if (selectedProductIndex === whatMakes.whatMakesItems?.length) {
        selectedProductIndex = 0; // Nếu đã đạt cuối danh sách, quay lại phần tử đầu tiên
      }
    }
    const timeoutID = setTimeout(() => {
      setActiveProduct(whatMakes.whatMakesItems[selectedProductIndex]);
    }, 7000);

    return () => {
      clearTimeout(timeoutID);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProduct, whatMakes.whatMakesItems]);
  const { t } = useTranslation("common");
  return (
    <div className="whatMakes">
      <div className="container">
        <div className="container-child mx-auto text-center">
          <div className="fs-36 fs-md-24 fw-7">
            {t("crossFulfill.whatMakes.title")}
          </div>
        </div>
        <div className="d-none d-md-block">
          <div className="whatMakes_item">
            <div className="list_logo d-flex mx-auto">
              {whatMakes.whatMakesItems.map((value, index) => (
                <div
                  key={`${value.title}_${index}`}
                  className={`logo  ${
                    activeProduct?.title === value.title ? "active" : ""
                  }`}
                  onClick={() => setActiveProduct(value)}
                >
                  <Image
                    src={value.icons}
                    alt="list_logo"
                    className={`logo${index}`}
                  />
                </div>
              ))}
            </div>
            <div className="whatMakes_content text-center">
              {whatMakes.whatMakesItems.map((value, index) => (
                <div
                  key={`${value.title}_${index}`}
                  className={` ${
                    activeProduct?.title === value.title
                      ? "fadein_items"
                      : "d-none"
                  }`}
                >
                  <div className="fs-24 fw-7">
                    {t(`crossFulfill.whatMakes.${value.title}.title`)}
                  </div>
                  <div className="fs-16 mx-auto" style={{ maxWidth: "548px" }}>
                    {t(`crossFulfill.whatMakes.${value.title}.content`)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="whatMakes-mobile d-md-none">
          <div className="list_logo-mobile d-flex mx-auto">
            {whatMakes.whatMakesItems.map((value, index) => (
              <div
                key={`${value.title}_${index}`}
                className={`logo  ${
                  activeProduct?.title === value.title ? "active" : ""
                }`}
                onClick={() => setActiveProduct(value)}
              >
                <Image
                  src={value.icons}
                  alt="list_logo"
                  className={`logo${index}`}
                />
              </div>
            ))}
          </div>
          <div className="whatMakes_content-mobile text-center">
            {whatMakes.whatMakesItems.map((value, index) => (
              <div
                key={`${value.title}_${index}`}
                className={` ${
                  activeProduct?.title === value.title
                    ? "fadein_items"
                    : "d-none"
                }`}
              >
                <div className="fs-24 fw-7">
                  {t(`crossFulfill.whatMakes.${value.title}.title`)}
                </div>
                <div className="fs-16 mx-auto" style={{ maxWidth: "548px" }}>
                  {t(`crossFulfill.whatMakes.${value.title}.content`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
