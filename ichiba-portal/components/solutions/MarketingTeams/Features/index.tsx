import { clsx } from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const Features = () => {
  const m = useTranslation("marketing-teams").t;

  return (
    <div
      className={clsx(
        "tw-bg-[linear-gradient(97deg,#031525_0.27%,#141416_100.92%)] tw-pt-6 tw-pb-10 tw-text-white tw-px-4 lg:tw-pt-[68px] lg:tw-pb-24",
        "lg:tw-relative",
      )}
    >
      <Image
        src={
          "https://cms-strapi.ichiba.net/uploads/goy_Y_Vj_PCY_1z_Tk_Rclg1_K_Kds_CDI_2_409e3decb2.png"
        }
        alt="features"
        width={701}
        height={963}
        className="tw-absolute tw-top-0 tw-right-0 lg:tw-block tw-hidden"
      />
      <Image
        src={
          "https://cms-strapi.ichiba.net/uploads/goy_Y_Vj_PCY_1z_Tk_Rclg1_K_Kds_CDI_1_5915af12df.png"
        }
        alt="features"
        width={474}
        height={1079}
        className="tw-absolute tw-bottom-0 tw-left-0 lg:tw-block tw-hidden"
      />

      <h2 className="tw-text-2xl tw-font-bold tw-text-center lg:tw-text-4xl">
        {m("features.title")}
      </h2>

      <div className="tw-grid tw-mt-6 tw-gap-4 lg:tw-gap-6 lg:tw-container lg:tw-mt-15">
        <div className="lg:tw-flex tw-grid tw-gap-4 lg:tw-gap-6">
          <div className="tw-border lg:tw-border-[2px] tw-border-[rgba(255,255,255,0.20)] tw-rounded-lg lg:tw-rounded-2xl  tw-w-full tw-overflow-hidden lg:tw-max-w-[486px]">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/dd_f1809b761e.svg"
              alt="features"
              width={358}
              height={205}
              className="tw-w-full"
            />
            <div className="tw-my-4 tw-px-4 lg:tw-px-10 lg:tw-mt-4 lg:tw-mb-10">
              <div className="tw-font-bold lg:tw-text-2xl">
                {m("features.marketing.title")}
              </div>
              <div className="tw-text-[rgba(255, 255,255,0.80)] tw-mt-2 lg:tw-mt-5 tw-text-sm lg:tw-text-base">
                {m("features.marketing.content")}
              </div>
            </div>
            <div className="">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Image_1c9a96a1f8.png"
                }
                alt="features"
                width={344}
                height={196}
                className="tw-w-full"
              />
            </div>
          </div>
          <div className="tw-grid tw-gap-4 lg:tw-gap-6">
            <div className="tw-border lg:tw-border-[2px] tw-py-4 lg:tw-py-10 lg:tw-pl-10 tw-border-[rgba(255,255,255,0.20)] tw-rounded-lg lg:tw-rounded-2xl tw-w-full tw-overflow-hidden lg:tw-flex lg:tw-gap-15 lg:tw-items-center">
              <div className="tw-px-4 lg:tw-px-0 lg:tw-mb-0 tw-mb-5 lg:tw-max-w-[306px]">
                <div className="tw-font-bold lg:tw-text-2xl">
                  {m("features.multidevice.title")}
                </div>
                <div className="tw-text-[rgba(255, 255,255,0.80)] tw-mt-2 lg:tw-mt-5 tw-text-sm lg:tw-text-base">
                  {m("features.multidevice.content")}
                </div>
              </div>
              <div className="lg:tw-flex-1">
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/dd_01e82faa43.png"
                  }
                  alt="features"
                  width={344}
                  height={196}
                  className="tw-w-full tw-ml-[15%] lg:tw-ml-0 "
                />
              </div>
            </div>
            <div className="tw-border lg:tw-border-[2px] tw-py-4 lg:tw-pt-10 lg:tw-pb-0 tw-border-[rgba(255,255,255,0.20)] tw-rounded-lg lg:tw-rounded-2xl tw-w-full tw-overflow-hidden">
              <div className="tw-mb-5 tw-px-4 lg:tw-px-10">
                <div className="tw-font-bold lg:tw-text-2xl">
                  {m("features.campaign.title")}
                </div>
                <div className="tw-text-[rgba(255, 255,255,0.80)] tw-mt-2 lg:tw-mt-5 tw-text-sm lg:tw-text-base">
                  {m("features.campaign.content")}
                </div>
              </div>
              <div>
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/Image_6b053b97d0.svg"
                  }
                  alt="features"
                  width={344}
                  height={196}
                  className="tw-w-full tw-ml-3 lg:tw-max-w-[553px] lg:tw-float-right"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "tw-border lg:tw-border-[2px] tw-border-[rgba(255,255,255,0.20)] tw-rounded-lg lg:tw-rounded-2xl tw-w-full tw-overflow-hidden ",
            "lg:tw-pt-4 tw-bg-[rgba(255,255,255,0.08)] lg:tw-flex lg:tw-justify-between lg:tw-gap-20 lg:tw-items-center",
          )}
        >
          <div className="tw-mb-5 tw-px-4 tw-pt-4 lg:tw-w-[394px] lg:tw-pl-10">
            <div className="tw-font-bold lg:tw-text-2xl">
              {m("features.multiChannel.title")}
            </div>
            <div className="tw-text-[rgba(255, 255,255,0.80)] tw-mt-2 tw-text-sm lg:tw-text-base">
              {m("features.multiChannel.content")}
            </div>
          </div>
          <div className="lg:tw-flex-1">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Frame_1171276503_f57cc1a586.png"
              }
              alt=""
              width={537}
              height={368}
              className="tw-w-full lg:tw-hidden"
            />
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Group_1171275908_31da5550e1.png"
              }
              alt=""
              width={736}
              height={398}
              className="tw-w-full lg:tw-block tw-hidden "
            />
          </div>
        </div>
        <div className="tw-grid lg:tw-grid-cols-2 tw-gap-4 lg:tw-gap-6">
          <div className="tw-border lg:tw-border-[2px] tw-py-4 lg:tw-py-10 lg:tw-px-10 tw-border-[rgba(255,255,255,0.20)] tw-rounded-lg lg:tw-rounded-2xl tw-w-full tw-overflow-hidden">
            <div className="tw-mb-5 tw-px-4 lg:tw-px-0">
              <div className="tw-font-bold lg:tw-text-2xl">
                {m("features.seo.title")}
              </div>
              <div className="tw-text-[rgba(255, 255,255,0.80)] tw-mt-2 lg:tw-mt-5 tw-text-sm lg:tw-text-base">
                {m("features.seo.content")}
              </div>
            </div>
            <div>
              <Image
                src={"https://cms-strapi.ichiba.net/uploads/ddd_b917a03231.png"}
                alt=""
                width={294}
                height={380}
                className="tw-float-right tw-mt-1 tw-w-[60%] lg:tw-mt-5 lg:tw-max-w-[267px]"
              />
            </div>
          </div>
          <div className="tw-border lg:tw-border-[2px] tw-border-[rgba(255,255,255,0.20)] tw-rounded-lg lg:tw-rounded-2xl tw-w-full tw-overflow-hidden">
            <div className="tw-mb-5 lg:tw-mb-10 tw-px-4 tw-pt-4 lg:tw-pt-10 lg:tw-px-10">
              <div className="tw-font-bold lg:tw-text-2xl">
                {m("features.customer.title")}
              </div>
              <div className="tw-text-[rgba(255, 255,255,0.80)] tw-mt-2 tw-text-sm lg:tw-mt-5 lg:tw-text-base">
                {m("features.customer.content")}
              </div>
            </div>
            <div>
              <Image
                src={"https://cms-strapi.ichiba.net/uploads/Img_72f233276c.png"}
                alt=""
                width={537}
                height={345}
                className="tw-w-full lg:tw-max-w-[90%] tw-float-right"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
