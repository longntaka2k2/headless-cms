import Image from "next/image";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import BoxContentEcosystem from "../boxContentEcosystem";

export default function ProductsInvoiceBillings() {
  const { t } = useTranslation("products");

  const listCDXP = [
    { title: t("invoice.list.0") },
    { title: t("invoice.list.1") },
    { title: t("invoice.list.2") },
  ];

  return (
    <div
      className={clsx(
        "tw-container tw-flex tw-flex-col tw-gap-5 tw-overflow-hidden",
        "lg:tw-gap-0 lg:tw-flex-row lg:tw-justify-between lg:tw-items-center",
      )}
    >
      <div className="lg:tw-w-[40%]">
        <BoxContentEcosystem
          icon="https://cms-strapi.ichiba.net/uploads/CDXP_a976633509.svg"
          heading={t("invoice.heading").toString()}
          title={t("invoice.title").toString()}
          subTitle={t("invoice.subTitle").toString()}
          list={listCDXP as []}
          link="/products/invoice-and-billing"
        />
      </div>

      <div className="lg:tw-w-[49%]">
        <div className="tw-w-full tw-h-[254px] lg:tw-max-h-[441px] lg:tw-h-full tw-rounded-xl tw-overflow-hidden">
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Frame_427318604_1fc076dbb3.svg"
            }
            width={709}
            height={503}
            alt="IChiba Sensei"
            className="tw-mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
