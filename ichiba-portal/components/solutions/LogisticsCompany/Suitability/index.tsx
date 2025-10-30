import { useTranslation } from "next-i18next";
import Image from "next/image";
import RealTime from "./RealTime";
import Inventory from "./Inventory";
import Scalable from "./Scalable";

const Suitability = () => {
  const l = useTranslation("logistics-company").t;

  return (
    <div className=" tw-py-6 lg:tw-py-15">
      <div className="tw-px-4 lg:tw-container lg:tw-px-0">
        <div className="lg:tw-text-center lg:tw-max-w-[900px] lg:tw-mx-auto">
          <div className="tw-rounded-full tw-text-[#0F62FE] tw-bg-[#E6F3FF] tw-px-5 tw-w-max lg:tw-mx-auto">
            {l("suitability.label")}
          </div>
          <h2 className="tw-text-2xl tw-font-bold tw-mt-2 lg:tw-text-4xl">
            {l("suitability.title")}
          </h2>
        </div>
        <div className="tw-py-6 tw-mt-3 lg:tw-mt-0 lg:tw-py-10 lg:tw-flex lg:tw-gap-10 lg:tw-items-center">
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Frame_1171276324_1_d2e344a875.png"
            alt=""
            className="tw-w-full lg:tw-block tw-hidden"
            width={690}
            height={319}
          />
          <div className="lg:tw-max-w-[470px]">
            <h3 className="tw-font-bold tw-text-lg lg:tw-text-2xl tw-mb-0">
              {l("suitability.multi.title")}
            </h3>
            <div className="tw-text-sm lg:tw-text-base lg:tw-mt-4">
              {l("suitability.multi.content")}
            </div>
          </div>
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Frame_1171275977_1_0d3f3c745a.png"
            alt=""
            className="tw-w-full tw-mt-6 lg:tw-hidden"
            width={358}
            height={166}
          />
        </div>
      </div>
      <RealTime />
      <Inventory />
      <Scalable />
    </div>
  );
};

export default Suitability;
