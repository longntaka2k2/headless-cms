import { useTranslation } from "next-i18next";
import thePower from "./dataset";
import arrow from "@/public/icons/solutions/CB-Fulfilment/oneStop/arrow.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThePower() {
  const { t } = useTranslation("common");

  const [activeProduct, setActiveProduct] = useState(thePower?.thePowerful[0]);
  useEffect(() => {
    let selectedProductIndex = thePower?.thePowerful.findIndex(
      (item) => item.key === activeProduct.key,
    );

    if (selectedProductIndex === -1) {
      selectedProductIndex = 0; // Nếu không tìm thấy, đặt lại về phần tử đầu tiên
    } else {
      selectedProductIndex++;
      if (selectedProductIndex === thePower?.thePowerful.length) {
        selectedProductIndex = 0; // Nếu đã đạt cuối danh sách, quay lại phần tử đầu tiên
      }
    }
    const timeoutID = setTimeout(() => {
      setActiveProduct(thePower?.thePowerful[selectedProductIndex]);
    }, 7000);

    return () => {
      clearTimeout(timeoutID);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProduct, thePower?.thePowerful]);
  return (
    <div className="thePowerful ">
      <div className="container">
        <div className="container tw-text-center mb-md-5 mb-4 ">
          <div className="fs-36 fs-md-24 fw-7">
            {t("crossFulfill.thePower.title")}{" "}
          </div>
        </div>
        <div className="power d-none d-md-block">
          <div className="row">
            <div className="col-3">
              {thePower?.thePowerful?.map((value, index) => (
                <div
                  className={`cursor power_tab d-flex justify-content-between ${
                    activeProduct.title === value.title ? "active" : ""
                  } `}
                  key={`${value.title}_${index}`}
                  onClick={() => setActiveProduct(value)}
                >
                  <div>{t(`crossFulfill.thePower.${value.title}.tab`)}</div>
                  <Image
                    className={`${
                      activeProduct.title === value.title ? "" : "d-none"
                    }`}
                    width={20}
                    src={arrow}
                    alt="power_tab"
                  />
                </div>
              ))}
            </div>
            <div className="col p-3 ">
              {thePower?.thePowerful?.map((value, index) => (
                <div
                  className={` power_tab-content ${
                    activeProduct.title === value.title
                      ? "fadein_items"
                      : "d-none"
                  } d-flex `}
                  key={`${value.title}_${index}`}
                >
                  <div className="">
                    <div className="fw-7 mb-2">
                      {t(`crossFulfill.thePower.${value.title}.title`)}
                    </div>
                    <div>
                      {t(`crossFulfill.thePower.${value.title}.content`)}
                    </div>
                  </div>
                  <Image
                    className={`mx-4`}
                    width={310}
                    src={value.icons}
                    alt="power_tab-content"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="power-mobile d-md-none">
          <div className="list_tab d-flex">
            {thePower?.thePowerful?.map((value, index) => (
              <div
                className={` power_tab ${
                  activeProduct.title === value.title ? "active" : ""
                } `}
                key={`${value.title}_${index}`}
                onClick={() => setActiveProduct(value)}
              >
                <div>{t(`crossFulfill.thePower.${value.title}.tab`)}</div>
              </div>
            ))}
          </div>
          <div>
            {thePower?.thePowerful?.map((value, index) => (
              <div
                key={`${value.title}_${index}`}
                className={` power_tab-content ${
                  activeProduct.title === value.title
                    ? "fadein_items"
                    : "d-none"
                } `}
              >
                <Image
                  className={`mx-4 mt-2 mb-4`}
                  width={310}
                  src={value.icons}
                  alt="thePower"
                />
                <div className="">
                  <div className="fw-7 mb-1">
                    {t(`crossFulfill.thePower.${value.title}.title`)}
                  </div>
                  <div className="fs-14">
                    {t(`crossFulfill.thePower.${value.title}.content`)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
