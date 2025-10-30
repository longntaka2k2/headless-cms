import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "next-i18next";

const background =
  "https://cms-strapi.ichiba.net/uploads/Selling_Background_30b1fd49d0.svg";

const SellingMore = () => {
  const { t } = useTranslation("pim");
  const router = useRouter();

  const handleContactSales = () => router.push("/contact-sales");

  return (
    <div
      className="tw-py-10 tw-bg-[#00194F] tw-bg-origin-content tw-bg-cover tw-text-ic-white-6"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="tw-flex tw-px-4 lg:tw-px-10 tw-w-full tw-max-w-[1200px] tw-mx-auto tw-justify-between sm:tw-items-center tw-flex-col-reverse lg:tw-flex-row tw-gap-6">
        <div>
          <h3 className="mb-0">{t("sellingMoreTitle")}</h3>
          <p className="mb-0 mt-4">{t("sellingMoreDesc")}</p>
          <button
            onClick={handleContactSales}
            className="tw-bg-brand-primary tw-p-3 tw-rounded-lg tw-min-w-[200px] tw-mt-8"
          >
            {t("contactSales")}
          </button>
        </div>
        <Image
          width="372"
          className="tw-mx-auto"
          height="276"
          src="https://cms-strapi.ichiba.net/uploads/Selling_more_48e35e703b.svg"
          alt="Selling_more"
        />
      </div>
    </div>
  );
};

export default SellingMore;
