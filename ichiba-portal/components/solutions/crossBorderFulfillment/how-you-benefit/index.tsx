import { useTranslation } from "next-i18next";
import automation from "@/public/icons/solutions/CB-Fulfilment/benefit/automation.svg";
import capability from "@/public/icons/solutions/CB-Fulfilment/benefit/capability.svg";
import cbfulfill from "@/public/icons/solutions/CB-Fulfilment/benefit/cbfulfill.svg";
import cutdown from "@/public/icons/solutions/CB-Fulfilment/benefit/cutdown.svg";
import expedited from "@/public/icons/solutions/CB-Fulfilment/benefit/expedited.svg";
import retrun from "@/public/icons/solutions/CB-Fulfilment/benefit/retrun.svg";
import same from "@/public/icons/solutions/CB-Fulfilment/benefit/same.svg";
import suprise from "@/public/icons/solutions/CB-Fulfilment/benefit/suprise.svg";
import tight from "@/public/icons/solutions/CB-Fulfilment/benefit/tight.svg";
import automationmb from "@/public/icons/solutions/CB-Fulfilment/benefit/automationmb.svg";
import capabilitymb from "@/public/icons/solutions/CB-Fulfilment/benefit/capabilitymb.svg";
import cbfulfillmb from "@/public/icons/solutions/CB-Fulfilment/benefit/cbfulfillmb.svg";
import cutdownmb from "@/public/icons/solutions/CB-Fulfilment/benefit/cutdownmb.svg";
import expeditedmb from "@/public/icons/solutions/CB-Fulfilment/benefit/expeditedmb.svg";
import retrunmb from "@/public/icons/solutions/CB-Fulfilment/benefit/retrunmb.svg";
import samemb from "@/public/icons/solutions/CB-Fulfilment/benefit/samemb.svg";
import suprisemb from "@/public/icons/solutions/CB-Fulfilment/benefit/suprisemb.svg";
import tightmb from "@/public/icons/solutions/CB-Fulfilment/benefit/tightmb.svg";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Benefit() {
  const { t } = useTranslation("common");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const benefit = [
    { title: "sameAday", icon: same, iconmb: samemb, key: 1 },
    { title: "fulfillment", icon: capability, iconmb: capabilitymb, key: 2 },
    { title: "cross-border", icon: cbfulfill, iconmb: cbfulfillmb, key: 3 },
    { title: "expedited", icon: expedited, iconmb: expeditedmb, key: 4 },
    { title: "tight", icon: tight, iconmb: tightmb, key: 5 },
    {
      title: "fulfillmentAutomation",
      icon: automation,
      iconmb: automationmb,
      key: 6,
    },
    { title: "cutdown", icon: cutdown, iconmb: cutdownmb, key: 7 },
    { title: "surprise", icon: suprise, iconmb: suprisemb, key: 8 },
    { title: "return", icon: retrun, iconmb: retrunmb, key: 9 },
  ];
  const [selectedProduct, setSelectedProduct] = useState(benefit[0]);
  const [activeProduct, setActiveProduct] = useState(0);
  const containerRef = useRef(null);
  useEffect(() => {
    let selectedProductIndex = benefit.findIndex(
      (item) => item.key === selectedProduct.key,
    );

    if (selectedProductIndex === -1) {
      selectedProductIndex = 0; // Nếu không tìm thấy, đặt lại về phần tử đầu tiên
    } else {
      selectedProductIndex++;
      if (selectedProductIndex === benefit.length) {
        selectedProductIndex = 0; // Nếu đã đạt cuối danh sách, quay lại phần tử đầu tiên
      }
    }

    const timeoutID = setTimeout(() => {
      setSelectedProduct(benefit[selectedProductIndex]);
      // Tính toán khoảng cách cần cuộn
      const container: any = containerRef.current;
      if (container) {
        const productElement = container.childNodes[selectedProductIndex];
        if (productElement) {
          const containerRect = container.getBoundingClientRect();
          const productRect = productElement.getBoundingClientRect();

          // Kiểm tra xem sản phẩm có nằm bên phải hoặc bên trái khỏi tầm nhìn
          if (productRect.left < containerRect.left) {
            container.scrollLeft += productRect.left - containerRect.left;
          } else if (productRect.right > containerRect.right) {
            container.scrollLeft += productRect.right - containerRect.right;
          }
        }
      }
    }, 7000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [selectedProduct, benefit]);
  return (
    <div className="benefit">
      <div className="container-child mx-auto text-center">
        <div className="fs-36 fs-md-24 fw-7">
          {t("crossFulfill.benefit.title")}
        </div>
        <div className="fs-md-14 ">{t("crossFulfill.benefit.content")}</div>
      </div>
      <div className="d-md-flex benefit_card d-none " ref={containerRef}>
        {benefit.map((value, index) => (
          <div
            className={`d-flex benefit_items cursor ${
              value.title === selectedProduct?.title
                ? "benefit_items_active"
                : ""
            }`}
            key={`${value.title}_${index}`}
            onClick={() => setSelectedProduct(value)}
          >
            <Image src={value?.icon} alt="benefit_items" className="me-2" />
            <div className="benefit_items-content">
              <div className="fw-7 fs-md-14 benefit_items-title">
                {t(`crossFulfill.benefit.${value.title}.title`)}
              </div>
              <div className="fs-md-14">
                {t(`crossFulfill.benefit.${value.title}.content`)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="benefit_card-mobile d-md-none ">
        {benefit.map((value, index) => (
          <div
            className={`solution ${
              value.title === selectedProduct?.title ? "" : "none-active"
            }`}
            key={`${value.title}_${index}`}
          >
            <div className={`d-flex benefit-mobile_items align-items-start `}>
              <Image
                onClick={() => setSelectedProduct(value)}
                src={value?.iconmb}
                alt="benefit_items"
                width={44}
                height={44}
              />
              <div className={`benefit_items-content ps-2 `}>
                <div className="fw-7 fs-md-14 benefit_items-title">
                  {t(`crossFulfill.benefit.${value.title}.title`)}
                </div>
                <div
                  className={`fs-md-14 ${
                    value.title === selectedProduct?.title ? "" : "d-none"
                  }`}
                >
                  {t(`crossFulfill.benefit.${value?.title}.content`)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
