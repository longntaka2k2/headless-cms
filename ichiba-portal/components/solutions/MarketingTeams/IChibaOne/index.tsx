import clsx from "clsx";
import { useTranslation } from "next-i18next";

const IChibaOne = () => {
  const b = useTranslation("marketing-teams").t;

  return (
    <div className="tw-py-6 tw-px-4 lg:tw-container lg:tw-flex tw-gap-[126px] lg:tw-pt-20 lg:tw-pb-15">
      <h2 className="tw-text-2xl tw-font-bold lg:tw-text-4xl lg:tw-max-w-[384px]">
        {b("ichibaGlobal.title")}
      </h2>
      <div className="tw-grid tw-gap-3 lg:tw-gap-6 tw-mt-4 lg:tw-flex-1">
        <div
          className={clsx(
            "tw-py-8 tw-px-5 tw-rounded-lg lg:tw-py-15 lg:tw-px-10",
            `tw-bg-[linear-gradient(112deg,#E6F3FF_28.86%,rgba(235,241,254,0.79)_64.16%)]`,
          )}
        >
          <div className="tw-text-lg tw-font-bold lg:tw-text-2xl">
            {b("ichibaGlobal.items.0.title")}
          </div>
          <div className="tw-text-sm tw-mt-2 lg:tw-text-base">
            {b("ichibaGlobal.items.0.content")}
          </div>
        </div>
        <div
          className={clsx(
            "tw-py-8 tw-px-5 tw-rounded-lg lg:tw-py-15 lg:tw-px-10",
            `tw-bg-[linear-gradient(276deg,#F1F5FE_2.49%,#D7D9FC_104.45%)]`,
          )}
        >
          <div className="tw-text-lg tw-font-bold lg:tw-text-2xl">
            {b("ichibaGlobal.items.1.title")}
          </div>
          <div className="tw-text-sm tw-mt-2 lg:tw-text-base">
            {b("ichibaGlobal.items.1.content")}
          </div>
        </div>
        <div
          className={clsx(
            "tw-py-8 tw-px-5 tw-rounded-lg lg:tw-py-15 lg:tw-px-10",
            `tw-bg-[linear-gradient(276deg,#FEF8F1_2.49%,#FAE7DD_104.45%)]`,
          )}
        >
          <div className="tw-text-lg tw-font-bold lg:tw-text-2xl">
            {b("ichibaGlobal.items.2.title")}
          </div>
          <div className="tw-text-sm tw-mt-2 lg:tw-text-base">
            {b("ichibaGlobal.items.2.content")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IChibaOne;
