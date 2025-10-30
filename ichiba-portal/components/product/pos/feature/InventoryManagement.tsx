import { useTranslation } from "next-i18next";
import Image from "next/image";

const InventoryManagement = () => {
  const { t } = useTranslation("pos");
  return (
    <div className="tw-mt-6 lg:tw-mt-15">
      <h2 className="tw-mb-3 lg:tw-mb-6 tw-text-xl lg:tw-text-3xl tw-font-bold">
        {t("feature.inventory.title")}
      </h2>

      <div className="tw-grid tw-gap-3 lg:tw-gap-5">
        {(
          t("feature.inventory.items", {
            returnObjects: true,
          }) as any
        ).map((item: any, index: number) => {
          return (
            <div
              className="tw-flex lg:tw-flex-col tw-gap-3 lg:tw-gap-4 tw-py-3 tw-px-4 lg:tw-py-5 lg:tw-px-6 tw-border tw-border-ic-black-2 tw-rounded-lg"
              key={index}
            >
              <Image
                src={item.image}
                alt="#"
                width={32}
                height={32}
                quality={100}
                className="tw-max-w-[32px] tw-max-h-[32px] lg:tw-max-w-[48px] lg:tw-max-h-[48px] tw-w-full tw-h-full"
              />
              <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                {item.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InventoryManagement;
