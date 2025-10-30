import SvgIcon from "@/components/common/SvgIcon";
import { useTranslation } from "next-i18next";

const APIsAndIntegrations = () => {
  const { t } = useTranslation("technical-teams");
  return (
    <div>
      <h3 className="tw-mb-4 lg:tw-mb-5 tw-text-xl lg:tw-text-2xl tw-font-bold">
        {t("integrations.title")}
      </h3>
      <div className="tw-grid tw-gap-2 lg:tw-gap-5">
        <div className="tw-py-3 tw-px-4 lg:tw-p-5 tw-flex tw-flex-col lg:tw-flex-row tw-gap-3 lg:tw-gap-6 tw-bg-[#F9F9F9] tw-rounded-lg">
          <div>
            <SvgIcon
              icon="svg-product-sec"
              width={40}
              height={40}
              className="lg:tw-hidden"
            />
            <SvgIcon
              icon="svg-product-sec"
              width={48}
              height={48}
              className="tw-hidden lg:tw-block"
            />
          </div>
          <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
            {t("integrations.content.0")}
          </p>
        </div>

        <div className="tw-py-3 tw-px-4 lg:tw-p-5 tw-flex tw-flex-col lg:tw-flex-row tw-gap-3 lg:tw-gap-6 tw-bg-[#F9F9F9] tw-rounded-lg">
          <div>
            <SvgIcon
              icon="svg-product-sec"
              width={40}
              height={40}
              className="lg:tw-hidden"
            />
            <SvgIcon
              icon="svg-product-sec"
              width={48}
              height={48}
              className="tw-hidden lg:tw-block"
            />
          </div>
          <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
            {t("integrations.content.1")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default APIsAndIntegrations;
