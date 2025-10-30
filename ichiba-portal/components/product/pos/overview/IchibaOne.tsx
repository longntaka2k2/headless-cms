import { useTranslation } from "next-i18next";
import Image from "next/image";
const IchibaOnePOS = () => {
  const p = useTranslation("pos").t;

  return (
    <div className="tw-overflow-hidden">
      <div className="tw-pt-6 tw-pb-12 tw-px-4 lg:tw-container lg:tw-px-0 lg:tw-pt-20 lg:tw-pb-36 tw-relative ">
        <div className="lg:tw-flex lg:tw-items-center lg:tw-gap-20">
          <div className="tw-mt-5 lg:tw-block tw-hidden lg:tw-flex-1">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Fulfillment_process_95de2e8b30.png"
              }
              width={930}
              height={570}
              alt="posSoftware"
              className="tw-w-full"
            />
          </div>
          <div className="tw-max-w-[500px]">
            <h2 className="tw-text-2xl tw-font-bold lg:tw-text-3xl">
              {p("posSoftware.title")}
            </h2>
            <div className="tw-mt-2 tw-text-sm lg:tw-mt-6">
              {p("posSoftware.subtitle")}
            </div>
          </div>
          <div className="tw-mt-5 lg:tw-hidden tw-block">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Fulfillment_process_95de2e8b30.png"
              }
              width={930}
              height={570}
              alt="posSoftware"
              className="tw-w-full"
            />
          </div>
        </div>
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Background_e8c283da3a.png"
          }
          alt=""
          width={783}
          height={363}
          className="tw-absolute tw-bottom-6 tw-z-[-1] tw-right-[-30%] lg:tw-bottom-[10%] lg:tw-right-[60%] "
        />
      </div>
    </div>
  );
};
export default IchibaOnePOS;
