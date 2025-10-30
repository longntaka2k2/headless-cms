import { useTranslation } from "next-i18next";
import Image from "next/image";

const Streamline = () => {
  const s = useTranslation("multichannel-fulfill").t;

  return (
    <div className="tw-mt-6 lg:tw-my-15 lg:tw-container">
      <h3 className="tw-font-bold tw-text-xl lg:tw-text-2xl">
        {s("simplify.steamline.title")}
      </h3>
      <div className="tw-grid lg:tw-grid-cols-2 tw-gap-10 lg:tw-gap-6 tw-mt-10">
        <div className="tw-px-3 lg:tw-px-5 lg:tw-pb-0 tw-pb-3 tw-rounded-lg tw-bg-[#F9F5EF] lg:tw-flex tw-gap-6 tw-items-center">
          <div className="tw-h-[135px] lg:tw-h-full">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Frame_427318745_1_833c1d138f.png"
              }
              alt="steamline"
              width={238}
              height={240}
              className="tw-rounded-lg tw-relative tw-bottom-6 tw-shadow-[0px_4.9px_9.8px_0px_rgba(0,0,0,0.05)] tw-max-w-[146px] lg:tw-max-w-[238px]"
            />
          </div>
          <div className="tw-text-sm lg:tw-text-base">
            {s("simplify.steamline.manage")}
          </div>
        </div>
        <div className="tw-px-3 lg:tw-px-5 lg:tw-pb-0 tw-pb-3 tw-rounded-lg tw-bg-[#F9F5EF] lg:tw-flex tw-gap-6 tw-items-center">
          <div className="tw-h-[135px] lg:tw-h-full">
            <Image
              src={"https://cms-strapi.ichiba.net/uploads/Image_6563134ff7.png"}
              alt="steamline"
              width={238}
              height={240}
              className="tw-rounded-lg tw-relative tw-bottom-6 tw-shadow-[0px_4.9px_9.8px_0px_rgba(0,0,0,0.05)] tw-max-w-[146px] lg:tw-max-w-[238px]"
            />
          </div>
          <div className="tw-text-sm lg:tw-text-base">
            {s("simplify.steamline.leverage")}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Streamline;
