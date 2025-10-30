import { useTranslation } from "next-i18next";
import Image from "next/image";

const Scalable = () => {
  const l = useTranslation("logistics-company").t;

  return (
    <div className="tw-px-4 tw-mt-3 tw-grid tw-gap-8 lg:tw-container lg:tw-grid-cols-2">
      <div className="">
        <div className="lg:tw-hidden">
          <h3 className="tw-text-lg tw-font-bold">
            {l("suitability.scalable.title")}
          </h3>
          <div className="tw-mt-2 tw-text-sm">
            {l("suitability.scalable.content")}
          </div>
        </div>
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Frame_1171276408_db9e6ed84e.svg"
          }
          alt=""
          className="tw-mt-6 lg:tw-mb-6 lg:tw-mt-0"
          width={580}
          height={394}
        />
        <div className="lg:tw-block tw-hidden tw-text-center tw-px-6">
          <h3 className="tw-text-2xl tw-font-bold">
            {l("suitability.scalable.title")}
          </h3>
          <div className="tw-mt-4">
            {l("suitability.scalable.content")}
          </div>
        </div>
      </div>
      <div className="tw-bg-[#F6F6F6] tw-px-4 tw-py-6 tw-rounded-xl lg:tw-p-6">
        <div className="tw-text-center">
          <h3 className="tw-text-lg tw-font-bold lg:tw-text-2xl">
            {l("suitability.scalable.title")}
          </h3>
          <div className="tw-mt-2 tw-text-sm lg:tw-mt-4 lg:tw-text-base">
            {l("suitability.scalable.content")}
          </div>
        </div>
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Layer_1_faa7fcc49e.svg"
          }
          className="tw-mt-6"
          alt=""
          width={550}
          height={343}
        />
      </div>
    </div>
  );
};

export default Scalable;
