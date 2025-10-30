import Image from "next/image";
import CardItems from "./CardItems";
import { useTranslation } from "next-i18next";
const ReturnManagement = () => {
  const { t } = useTranslation("pos");
  return (
    <div className="container tw-mt-6 lg:tw-mt-15">
      <h2 className="tw-mb-3 lg:tw-mb-[30px] tw-text-xl lg:tw-text-3xl tw-font-bold">
        {t("feature.returnManagement.title")}
      </h2>
      <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-3 lg:tw-gap-12">
        <Image
          src="https://cms-strapi.ichiba.net/uploads/shutterstock_2044257446_1_311d2064e0.svg"
          alt="3"
          width={503}
          height={358}
          className="tw-w-[358] tw-h-[307px] lg:tw-w-[503] lg:tw-h-[358px] tw-mx-auto"
        />
        <div className="tw-grid tw-gap-4 lg:tw-gap-6">
          <div className="tw-grid tw-grid-cols-2 tw-gap-4 lg:tw-gap-6">
            <CardItems
              image="https://cms-strapi.ichiba.net/uploads/60e8a1599394e82d62d6d4e5_Conversion_1_98b755b2e7.svg"
              content={t("feature.returnManagement.contentCard.0")}
            />
            <CardItems
              image="https://cms-strapi.ichiba.net/uploads/60772bcea6d9cc3f1c700520_Drag_drop_icon_1_4c4ddd0499.svg"
              content={t("feature.returnManagement.contentCard.1")}
            />
          </div>
          <CardItems
            image="https://cms-strapi.ichiba.net/uploads/6176fd192c9aa66ba04117c9_test_1_afbc71f50c.svg"
            content={t("feature.returnManagement.contentCard.2")}
          />
        </div>
      </div>
    </div>
  );
};

export default ReturnManagement;
