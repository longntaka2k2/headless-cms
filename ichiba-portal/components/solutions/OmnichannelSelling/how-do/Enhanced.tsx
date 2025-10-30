import { useTranslation } from "next-i18next";
import Image from "next/image";
const Enhanced = () => {
  const o = useTranslation("omnichannel-selling").t;

  return (
    <div className="tw-mx-4 tw-grid tw-gap-10 lg:tw-container lg:tw-grid-cols-2 lg:tw-gap-15 tw-mt-4 lg:tw-rounded-2xl lg:tw-mt-15 ">
      <div className="tw-border tw-border-[#DDD] tw-px-4 tw-pt-4 lg:tw-px-10 lg:tw-pt-10 tw-rounded-lg">
        <h3 className="tw-text-lg tw-font-bold lg:tw-text-2xl">
          {o("howdo.enhanced.title")}
        </h3>{" "}
        <div className="tw-text-sm lg:tw-text-base tw-mt-2 lg:tw-mt-4">
          {o("howdo.enhanced.content")}
        </div>
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Frame_4e3f8046d3.svg"
          alt=""
          width={468}
          height={317}
          className="tw-mx-auto lg:tw-mt-10"
        />
      </div>
      <div className="tw-border tw-border-[#DDD] tw-px-4 tw-pb-4 lg:tw-px-10 lg:tw-pb-10 tw-rounded-lg lg:tw-rounded-2xl lg:tw-mt-15">
        <div className="lg:tw-h-[257px]">
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Frame_1171276156_0a860647f9.png"
            alt=""
            width={468}
            height={317}
            className="tw-mx-auto tw-relative tw-bottom-6 lg:tw-bottom-15"
          />
        </div>
        <h3 className="tw-text-lg tw-font-bold lg:tw-text-2xl">
          {o("howdo.order.title")}
        </h3>
        <div className="tw-text-sm lg:tw-text-base tw-mt-2 lg:tw-mt-4">
          {o("howdo.order.content")}
        </div>
      </div>
    </div>
  );
};

export default Enhanced;
