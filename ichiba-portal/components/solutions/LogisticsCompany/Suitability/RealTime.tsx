import { clsx } from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const RealTime = () => {
  const l = useTranslation("logistics-company").t;

  return (
    <div
      className={clsx(
        "tw-py-6 tw-px-4 lg:tw-px-0 lg:tw-py-15 tw-bg-cover",
        "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171275982_67fc47f225.png)] tw-text-white",
        "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171275982_1_88a318099c.png)]"
      )}
    >
      <div className="tw-grid lg:tw-grid-cols-2 tw-gap-6 lg:tw-container">
        <div className="tw-px-4 tw-py-5 lg:tw-pt-8 lg:tw-px-6 lg:tw-pb-0 tw-rounded-xl tw-bg-[rgba(75,75,80,0.25)]">
          <h3 className="tw-text-lg tw-font-bold lg:tw-text-2xl">
            {l("suitability.realTime.title")}
          </h3>
          <div className="tw-text-sm tw-opacity-80 tw-mt-2 lg:tw-text-base">
            {l("suitability.realTime.content")}
          </div>
          <Image
            src={"https://cms-strapi.ichiba.net/uploads/Object_20e14fd805.svg"}
            alt=""
            className="tw-mt-6 tw-w-full"
            width={320}
            height={209}
          />
        </div>
        <div className="tw-px-4 tw-py-5 lg:tw-pt-8 lg:tw-px-6 lg:tw-pb-0 tw-rounded-xl tw-bg-[rgba(75,75,80,0.25)]">
          <h3 className="tw-text-lg tw-font-bold lg:tw-text-2xl">
            {l("suitability.analysis.title")}
          </h3>
          <div className="tw-text-sm tw-opacity-80 tw-mt-2 lg:tw-text-base">
            {l("suitability.analysis.content")}
          </div>
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Group_1171275973_de85519a76.svg"
            }
            alt=""
            className="tw-mt-6 tw-w-full"
            width={320}
            height={222}
          />
        </div>
      </div>
    </div>
  );
};

export default RealTime;
