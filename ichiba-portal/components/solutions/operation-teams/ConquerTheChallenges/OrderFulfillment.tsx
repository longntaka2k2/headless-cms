import SvgIcon from "@/components/common/SvgIcon";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const OrderFulfillment = () => {
  const { t } = useTranslation("operation-teams");
  return (
    <div className="tw-mt-4 lg:tw-mt-10">
      <h3 className="tw-mb-3 tw-text-lg lg:tw-text-2xl tw-font-bold">
        {t("conquer.orderfulfillment.title")}
      </h3>
      <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-6 lg:tw-gap-15 lg:tw-items-center">
        <div className="lg:tw-w-[50%] lg:tw-h-[274px]">
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Frame_1171275991_24ae837ae5.svg"
            alt="payPer"
            width={564}
            height={342}
            className="tw-mx-auto"
          />
        </div>
        <div className="lg:tw-w-[50%] tw-grid tw-gap-4 lg:tw-gap-10">
          <div className="tw-flex tw-items-center tw-gap-3 lg:tw-gap-5">
            <div>
              <SvgIcon
                icon="svg-automation"
                width={40}
                height={40}
                className="lg:tw-hidden"
              />
              <SvgIcon
                icon="svg-automation"
                width={48}
                height={48}
                className="tw-hidden lg:tw-block"
              />
            </div>
            <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
              {t("conquer.orderfulfillment.content.0")}
            </p>
          </div>
          <div className="tw-flex tw-items-center tw-gap-3 lg:tw-gap-5">
            <div>
              <SvgIcon
                icon="svg-automation"
                width={40}
                height={40}
                className="lg:tw-hidden"
              />
              <SvgIcon
                icon="svg-automation"
                width={48}
                height={48}
                className="tw-hidden lg:tw-block"
              />
            </div>
            <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
              {t("conquer.orderfulfillment.content.1")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFulfillment;
