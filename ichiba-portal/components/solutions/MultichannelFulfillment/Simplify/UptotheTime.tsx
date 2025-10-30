import { useTranslation } from "next-i18next";
import Image from "next/image";
const UptotheTime = () => {
  const s = useTranslation("multichannel-fulfill").t;

  return (
    <div className="tw-mt-6 tw-px-4 lg:tw-px-0 lg:tw-container">
      <h3 className="tw-font-bold tw-text-xl lg:tw-text-2xl tw-mb-4 lg:tw-mb-6">
        {s("simplify.upTo.title")}
      </h3>
      <div className="tw-grid lg:tw-grid-cols-2 tw-gap-3 lg:tw-gap-6">
        <div className="tw-rounded-lg tw-border-[#ddd] tw-border tw-overflow-hidden">
          <div className="tw-bg-[#F8F8FB] tw-flex tw-justify-end">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Macbook_Pro_FREE_6c4559bdc8.png"
              alt="s"
              width={569}
              height={248}
              className="tw-max-w-[316px] lg:tw-max-w-[542px] lg:tw-h-[257px]"
            />
          </div>
          <div className="tw-pt-4 tw-px-3 tw-pb-3 tw-text-sm lg:tw-text-base lg:tw-px-7 lg:tw-pt-8 lg:tw-pb-10">
            {s("simplify.upTo.getInformed")}
          </div>
        </div>
        <div className="tw-rounded-lg tw-border-[#ddd] tw-border tw-overflow-hidden">
          <div className="tw-bg-[#F8F8FB] tw-flex tw-justify-center tw-overflow-hidden">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Frame_7a3ffedfe3.png"
              alt="s"
              width={460}
              height={257}
              className="tw-max-w-[260px] lg:tw-max-w-[460px] lg:tw-h-[257px]"
            />
          </div>
          <div className="tw-pt-4 tw-px-3 tw-pb-3 tw-text-sm lg:tw-text-base lg:tw-px-7 lg:tw-pt-8 lg:tw-pb-10">
            {s("simplify.upTo.strong")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UptotheTime;
