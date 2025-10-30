import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const PowerUp = () => {
  const p = useTranslation("technical-teams").t;
  return (
    <div
      className={clsx(
        "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Power_your_business_to_expand_46d42bbb92.svg)] tw-bg-cover",
        "tw-py-10 lg:tw-pt-20 lg:tw-pb-[100px] tw-mt-20 sm:tw-mt-5 md:tw-mt-28 lg:tw-mt-0",
      )}
    >
      <div className="tw-container">
        <h2 className="tw-mb-6 lg:tw-mb-10 tw-text-2xl tw-font-bold lg:tw-text-4xl tw-text-center tw-text-white">
          {p("powerUp.title")}
        </h2>
        <div className="tw-flex tw-gap-6 tw-flex-col lg:tw-flex-row">
          <div className="lg:tw-w-[40%]">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/6267c2ed51bc4c9ad5d0d4b2_Frame_13297_p_500_1_3ef19900d6.svg"
              alt="#"
              width={486}
              height={401}
              className="tw-rounded-xl lg:tw-rounded-2xl tw-mx-auto"
            />
          </div>
          <div className="lg:tw-w-[60%] tw-flex tw-gap-6 tw-flex-col lg:tw-flex-col-reverse tw-justify-between">
            <div className="tw-p-5 lg:tw-px-9 tw-bg-ic-white-1 tw-rounded-lg lg:tw-rounded-2xl lg:tw-h-full tw-flex tw-items-center">
              <p className="tw-mb-0 tw-text-sm lg:tw-text-base tw-text-white">
                {p("powerUp.content")}
              </p>
            </div>
            <div className="tw-flex tw-gap-6 lg:tw-justify-between tw-mx-auto">
              <div className="lg:tw-w-[45%]">
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/Frame_1171276515_409f15e383.svg"
                  alt="#"
                  width={282}
                  height={145}
                  className="tw-rounded-xl lg:tw-rounded-2xl tw-w-full tw-h-full tw-object-cover"
                />
              </div>
              <div className="lg:tw-w-[55%]">
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/meeting_developers_1_d5996b0f67.svg"
                  alt="#"
                  width={384}
                  height={145}
                  className="tw-rounded-xl lg:tw-rounded-2xl tw-w-full tw-h-full tw-object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerUp;
