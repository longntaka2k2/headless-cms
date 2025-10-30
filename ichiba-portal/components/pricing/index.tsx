import { useTranslation } from "next-i18next";
import Link from "next/link";
import PriceTableStoreFrontLayer from "@/components/pricing/store-front-layer";
import PriceTableCommerceLayer from "@/components/pricing/commere-layer";
import PriceTableWMS from "@/components/pricing/wms";
import PriceTableShip4P from "@/components/pricing/ship4p";
import PriceTableInvoiceBilling from "@/components/pricing/invoice-billing";
import clsx from "clsx";
import { useState, useEffect } from "react";

export default function PricingComponent() {
  const { t } = useTranslation("pricing");
  const listTablePrice = t(`listTablePrice`, {
    returnObjects: true,
  }) as any[];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [currentTable, setCurrentTable] = useState(0);

  const handleButtonClick = (index: number) => {
    if (index === activeIndex) return;

    setIsVisible(false);

    // Đợi animation kết thúc rồi mới đổi bảng giá
    setTimeout(() => {
      setActiveIndex(index);
      setCurrentTable(index);

      // Hiển thị bảng giá mới sau khi đã thay đổi
      setTimeout(() => {
        setIsVisible(true);
      }, 50);
    }, 300);
  };

  // Set active mặc định cho phần tử đầu tiên khi component mount
  useEffect(() => {
    setIsVisible(true);
    setCurrentTable(0);
  }, []);

  const renderPriceTable = () => {
    switch (currentTable) {
      case 0:
        return <PriceTableCommerceLayer />;
      case 1:
        return <PriceTableWMS />;
      case 2:
        return <PriceTableShip4P />;
      case 3:
        return <PriceTableStoreFrontLayer />;
      case 4:
        return <PriceTableInvoiceBilling />;
      default:
        return <PriceTableCommerceLayer />;
    }
  };

  return (
    <section className="tw-container tw-bg-white tw-px-3 tw-py-6 lg:tw-py-10">
      <h1 className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mb-[10px] lg:tw-text-center">
        {t("heading")}
      </h1>
      <p className="tw-text-sm lg:tw-text-base tw-mb-0 lg:tw-text-center lg:tw-w-[80%] tw-mx-auto">
        {t("subHeading")}
      </p>
      <div className="tw-flex tw-justify-center tw-mt-4">
        <Link
          className={clsx(
            "tw-py-3 tw-text-center tw-px-5 lg:tw-px-7 tw-font-medium tw-text-sm lg:tw-text-base tw-rounded-lg",
            "tw-bg-brand-primary tw-text-white tw-no-underline",
          )}
          href="/contact-sales"
          target="_blank"
        >
          {t("contactSales")}
        </Link>
      </div>

      <div
        className={clsx(
          "tw-sticky tw-top-[65px] sm:tw-top-[70px] lg:tw-top-[72px] tw-py-3 md:tw-py-4 tw-bg-white tw-z-10",
          "tw-flex tw-overflow-x-scroll tw-no-scrollbar tw-gap-3 tw-mt-2 lg:tw-justify-center tw-px-2",
        )}
      >
        {listTablePrice.map((value: any, index: number) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={clsx(
              "tw-py-2 tw-px-5 tw-rounded-xl tw-whitespace-nowrap tw-border-2 tw-border-brand-primary",
              "tw-text-sm lg:tw-text-base tw-transition-all tw-duration-300 tw-ease-in-out tw-cursor-pointer",
              activeIndex === index
                ? "tw-bg-brand-primary tw-text-white"
                : "tw-bg-white tw-text-brand-primary hover:tw-bg-brand-primary hover:tw-text-white",
            )}
          >
            {value.title}
          </button>
        ))}
      </div>

      <div
        className={clsx(
          "tw-transition-opacity tw-duration-300 tw-ease-in-out",
          isVisible ? "tw-opacity-100" : "tw-opacity-0",
        )}
      >
        {renderPriceTable()}
      </div>
    </section>
  );
}
