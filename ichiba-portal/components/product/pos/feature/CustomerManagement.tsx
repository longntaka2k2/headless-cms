import SvgIcon from "@/components/common/SvgIcon";
import Image from "next/image";
import clsx from "clsx";
import { useTranslation } from "next-i18next";

const CustomerManagement = () => {
  const { t } = useTranslation("pos");
  return (
    <div className="tw-container tw-mt-6 lg:tw-mt-15">
      <div className="tw-flex tw-flex-col-reverse lg:tw-flex-row tw-items-center tw-gap-4 lg:tw-gap-10">
        <div className="lg:tw-w-[60%] tw-rounded-lg lg:tw-rounded-2xl tw-overflow-hidden">
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Frame_1171275977_fd1b144d0f.svg"
            alt="#"
            width={690}
            height={438}
            className="tw-w-full tw-h-full -tw-translate-x-1 lg:-tw-translate-x-0"
          />
        </div>

        <div className="lg:tw-w-[40%]">
          <div className="tw-grid tw-gap-2 lg:tw-gap-5">
            <h2 className="tw-mb-2 lg:tw-mb-5 tw-text-xl lg:tw-text-3xl tw-font-bold">
              {t("feature.customerManagement.title")}
            </h2>
            <div
              className={clsx(
                "tw-flex lg:tw-flex-col tw-gap-3 lg:tw-gap-4 tw-rounded-lg tw-overflow-hidden",
                "tw-py-3 tw-px-5 lg:tw-py-5 lg:tw-px-6 tw-border tw-relative",
              )}
            >
              <div>
                <SvgIcon
                  icon="svg-icon-build"
                  width={22}
                  height={24}
                  className="lg:tw-hidden"
                />
                <SvgIcon
                  icon="svg-icon-build"
                  width={26}
                  height={28}
                  className="tw-hidden lg:tw-block"
                />
              </div>
              <p className="tw-text-sm lg:tw-text-base tw-mb-0 tw-line-clamp-3">
                {t("feature.customerManagement.contentItems.0")}
              </p>
              <div className="tw-absolute tw-h-full tw-w-[6px] tw-bg-gradient-to-t tw-from-[#3B4DAB] tw-to-[#5DBFDE] tw-top-0 tw-left-0"></div>
            </div>
            <div
              className={clsx(
                "tw-flex lg:tw-flex-col tw-gap-3 lg:tw-gap-4 tw-rounded-lg tw-overflow-hidden",
                "tw-py-3 tw-px-5 lg:tw-py-5 lg:tw-px-6 tw-border tw-relative",
              )}
            >
              <div>
                <SvgIcon
                  icon="svg-icon-build"
                  width={22}
                  height={24}
                  className="lg:tw-hidden"
                />
                <SvgIcon
                  icon="svg-icon-build"
                  width={26}
                  height={28}
                  className="tw-hidden lg:tw-block"
                />
              </div>
              <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                {t("feature.customerManagement.contentItems.1")}
              </p>
              <div className="tw-absolute tw-h-full tw-w-[6px] tw-bg-gradient-to-t tw-from-[#3B4DAB] tw-to-[#5DBFDE] tw-top-0 tw-left-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerManagement;
