import SvgIcon from "@/components/common/SvgIcon";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const DataCentralization = () => {
  const { t } = useTranslation("technical-teams");
  return (
    <div className="tw-container tw-mt-6 lg:tw-mt-10">
      <div className="tw-bg-[#FBF5EB] tw-grid lg:tw-grid-cols-2 tw-gap-6 tw-rounded-lg lg:tw-rounded-2xl tw-items-center">
        <div className="tw-grid tw-gap-4 tw-pt-5 tw-px-4 lg:tw-pl-10">
          <h3 className="tw-mb-0 tw-text-xl lg:tw-text-2xl tw-font-bold">
            {t("dataCentralization.title")}
          </h3>
          <div className="tw-flex tw-gap-4 tw-items-center">
            <div>
              <SvgIcon
                icon="svg-icon-build"
                width={20}
                height={22}
                className="lg:tw-hidden"
              />
              <SvgIcon
                icon="svg-icon-build"
                width={26}
                height={28}
                className="tw-hidden lg:tw-block"
              />
            </div>
            <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
              {t("dataCentralization.content.0")}
            </p>
          </div>
          <div className="tw-flex tw-gap-4 tw-items-center">
            <div>
              <SvgIcon
                icon="svg-icon-build"
                width={20}
                height={22}
                className="lg:tw-hidden"
              />
              <SvgIcon
                icon="svg-icon-build"
                width={26}
                height={28}
                className="tw-hidden lg:tw-block"
              />
            </div>
            <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
              {t("dataCentralization.content.1")}
            </p>
          </div>
        </div>
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Illus4_56187652bd.svg"
          alt="#"
          width={358}
          height={483}
          className="lg:tw-hidden tw-mx-auto"
        />
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Illus_f91fb7d1b8.svg"
          alt="#"
          width={681}
          height={400}
          className="tw-hidden lg:tw-block tw-mx-auto"
        />
      </div>
    </div>
  );
};

export default DataCentralization;
