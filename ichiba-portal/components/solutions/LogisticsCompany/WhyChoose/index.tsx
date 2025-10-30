import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const WhyChoose = () => {
  const l = useTranslation("logistics-company").t;

  return (
    <div
      className={clsx(
        "tw-py-6 tw-px-4 tw-bg-cover lg:tw-px-0 lg:tw-py-15",
        "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171276123_d581362c0a.png)]",
        " lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171276123_d581362c0a.png)]",
      )}
    >
      <div className="lg:tw-container">
        <h2 className="tw-text-2xl tw-font-bold lg:tw-text-4xl tw-text-center">{l("whyChoose.title")}</h2>
        <div className="tw-mt-6 tw-grid tw-gap-6 lg:tw-grid-cols-3 lg:tw-mt-10">
          <div className="tw-bg-white tw-rounded-xl tw-py-5 tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)]">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/deploy_svgrepo_com_1_465779983e.svg"
              }
              className="tw-mx-auto"
              alt=""
              width={40}
              height={40}
            />
            <div className="tw-font-bold tw-text-[#1D39C4] tw-mt-2 tw-text-center">
              {l("whyChoose.instant")}
            </div>
          </div>
          <div className="tw-bg-white tw-rounded-xl tw-py-5 tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)]">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/route_start_svgrepo_com_1_d7381dede6.svg"
              }
              className="tw-mx-auto"
              alt=""
              width={40}
              height={40}
            />
            <div className="tw-font-bold tw-text-[#1D39C4] tw-mt-2 tw-text-center">
              {l("whyChoose.route")}
            </div>
          </div>
          <div className="tw-bg-white tw-rounded-xl tw-py-5 tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)]">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Layer_1_fba665bb06.svg"
              }
              className="tw-mx-auto"
              alt=""
              width={40}
              height={40}
            />
            <div className="tw-font-bold tw-text-[#1D39C4] tw-mt-2 tw-text-center">
              {l("whyChoose.actionable")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyChoose;
