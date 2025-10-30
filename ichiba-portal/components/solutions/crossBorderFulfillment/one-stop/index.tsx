import { useTranslation } from "next-i18next";
import sync from "@/public/icons/solutions/CB-Fulfilment/oneStop/sync.svg";
import store from "@/public/icons/solutions/CB-Fulfilment/oneStop/store.svg";
import warehouse from "@/public/icons/solutions/CB-Fulfilment/oneStop/warehouse.svg";
import picking from "@/public/icons/solutions/CB-Fulfilment/oneStop/picking.svg";
import value from "@/public/icons/solutions/CB-Fulfilment/oneStop/value.svg";
import strategize from "@/public/icons/solutions/CB-Fulfilment/oneStop/strategize.svg";
import international from "@/public/icons/solutions/CB-Fulfilment/oneStop/international.svg";
import lastMile from "@/public/icons/solutions/CB-Fulfilment/oneStop/lastMile.svg";
import returni from "@/public/icons/solutions/CB-Fulfilment/oneStop/return.svg";
import left from "@/public/icons/solutions/CB-Fulfilment/oneStop/vectorLeft.svg";
import right from "@/public/icons/solutions/CB-Fulfilment/oneStop/vectorRight.svg";
import bgOneTop from "@/public/icons/solutions/CB-Fulfilment/oneStop/bgOneTop.jpg";
import arrow from "@/public/icons/solutions/CB-Fulfilment/oneStop/arrow.svg";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function OneStop() {
  const { t } = useTranslation("common");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const oneTop = [
    { title: "sync", icon: sync, key: 1 },
    { title: "store", icon: store, key: 2 },
    { title: "warehouse", icon: warehouse, key: 3 },
    { title: "picking", icon: picking, key: 4 },
    { title: "value", icon: value, key: 5 },
    { title: "strategize", icon: strategize, key: 6 },
    { title: "international", icon: international, key: 7 },
    { title: "lastMile", icon: lastMile, key: 8 },
    { title: "return", icon: returni, key: 9 },
  ];
  const [activeProduct, setActiveProduct] = useState(oneTop[0]);
  useEffect(() => {
    let selectedProductIndex = oneTop.findIndex(
      (item) => item.key === activeProduct.key,
    );

    if (selectedProductIndex === -1) {
      selectedProductIndex = 0; // Nếu không tìm thấy, đặt lại về phần tử đầu tiên
    } else {
      selectedProductIndex++;
      if (selectedProductIndex === oneTop.length) {
        selectedProductIndex = 0; // Nếu đã đạt cuối danh sách, quay lại phần tử đầu tiên
      }
    }
    const timeoutID = setTimeout(() => {
      setActiveProduct(oneTop[selectedProductIndex]);
    }, 7000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [activeProduct, oneTop]);
  return (
    <div
      className="one-stop color-white"
      style={{
        backgroundImage: `url(${bgOneTop.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="text-center">
          <div className="fs-36 fs-md-24 fw-7 color-white">
            {t("crossFulfill.oneTop.title")}
          </div>
          <div className="fs-md-14 tw-max-w-[792px] tw-mx-auto">
            {t("crossFulfill.oneTop.content")}
          </div>
        </div>
        <div className="oneTop_items d-none d-md-block">
          {oneTop.map((value, index) =>
            index % 2 == 0 ? (
              <div key={`${value.title}_${index}`}>
                <div className="d-flex align-items-center">
                  <div className="pe-3">
                    <div className="fs-20 fw-7">
                      {t(`crossFulfill.oneTop.${value.title}.title`)}
                    </div>
                    <div>{t(`crossFulfill.oneTop.${value.title}.content`)}</div>
                  </div>
                  <Image src={value.icon} alt="crossFulfill" />
                </div>
                <div
                  className={`${
                    index === oneTop.length - 1 ? "d-none" : ""
                  } my-4`}
                >
                  <Image src={left} alt="crossFulfill" className="mx-auto" />
                </div>
              </div>
            ) : (
              <div key={`${value.title}_${index}`}>
                <div className="d-flex align-items-center">
                  <Image src={value.icon} alt="crossFulfill" />
                  <div className="ps-3">
                    <div className="fs-20 fw-7">
                      {t(`crossFulfill.oneTop.${value.title}.title`)}
                    </div>
                    <div>{t(`crossFulfill.oneTop.${value.title}.content`)}</div>
                  </div>
                </div>
                <div
                  className={`${
                    index === oneTop.length - 1 ? "d-none" : ""
                  } my-4`}
                >
                  <Image src={right} alt="crossFulfill" className="mx-auto" />
                </div>
              </div>
            ),
          )}
        </div>
        <div className="oneTop_items-mobile d-md-none">
          <div className="d-flex justify-content-between">
            {oneTop.map((value, index) => (
              <div
                className={`d-flex list-number ${
                  activeProduct.key < index + 1 ? "" : "active"
                }`}
                key={`${value.title}_${index}`}
              >
                <div className="fs-14 number">{index + 1}</div>
                <Image
                  className={`${
                    index === oneTop.length - 1 ? "d-none" : ""
                  } arrow`}
                  width={9}
                  src={arrow}
                  alt="oneTop_items-mobile"
                  onClick={() => setActiveProduct(value)}
                />
              </div>
            ))}
            <div></div>
          </div>
          <div className="text-center">
            {oneTop.map((value, index) => (
              <div
                className={`${
                  activeProduct.title === value.title ? "" : "d-none"
                }  fadein_items`}
                key={`${value.title}_${index}`}
              >
                <div className="my-4">
                  <Image
                    src={value?.icon}
                    alt={value.title}
                    className="mx-auto"
                  />
                </div>
                <div className="fs-18 fw-7 mb-2">
                  {t(`crossFulfill.oneTop.${value?.title}.title`)}
                </div>
                <div className="fs-14">
                  {t(`crossFulfill.oneTop.${value?.title}.content`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
