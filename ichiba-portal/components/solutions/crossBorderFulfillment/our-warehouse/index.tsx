import { useTranslation } from "next-i18next";

import bg from "@/public/icons/solutions/CB-Fulfilment/ourwh.png";
import Image from "next/image";

export default function OurWarehouse() {
  const { t } = useTranslation("common");

  return (
    <div className="our-warehouse">
      <div className="container text-center">
        <div className="fs-36 fs-md-24 fw-7 mb-md-4 mb-1">
          {t("crossFulfill.ourWareHouse.title")}
        </div>
        <div className="fs-md-14 container-child mx-auto">
          {t("crossFulfill.ourWareHouse.content")}
        </div>
        <Image
          src={bg}
          alt="ourWareHouse"
          className="mt-4"
          width={600}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}
