import SvgIcon from "@/components/common/SvgIcon";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const EmployeeManagement = () => {
  const { t } = useTranslation("pos");
  return (
    <div className="tw-container tw-mt-6 lg:tw-mt-15">
      <div className="lg:tw-w-[90%] tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-5 lg:tw-gap-0">
        <div className="lg:tw-w-[55%]">
          <h2 className="tw-mb-4 lg:tw-mb-6 tw-text-xl lg:tw-text-3xl tw-font-bold">
            {t("feature.employeeManagement.title")}
          </h2>
          {(
            t("feature.employeeManagement.items", {
              returnObjects: true,
            }) as any
          ).map((item: any, index: number) => {
            return (
              <div
                className="tw-flex tw-items-center tw-gap-3 tw-py-3 lg:tw-py-5 lg:tw-pl-10 lg:tw-pr-6 hover:tw-bg-[#F3F7FE]"
                key={index}
              >
                <div>
                  <SvgIcon icon={item.icon} />
                </div>
                <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                  {item.content}
                </p>
              </div>
            );
          })}
        </div>
        <div className="lg:tw-w-[45%] lg:-tw-translate-x-4">
          <div className="tw-w-full tw-h-full">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Frame_1171276114_4eb7bf8d3f.png"
              alt="#"
              width={1065}
              height={612}
              className="tw-w-full tw-h-full tw-object-container"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;
