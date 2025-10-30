import { useTranslation } from "next-i18next";
import Image from "next/image";
import Print from "./Print";
import Automatically from "./Automatically";
import Provide from "./Provide";
const IChibaBring = () => {
  const a = useTranslation("all-in-one").t;

  return (
    <div>
      <div className="tw-mt-6 tw-mx-4 lg:tw-container lg:tw-mt-16 tw-pb-[50px]  tw-relative">
        <h2 className="tw-font-bold tw-text-2xl tw-text-center lg:tw-text-4xl lg:tw-max-w-[750px] lg:tw-text-left">
          {a("iChibaBring.title")}
        </h2>
        <div className="lg:tw-flex lg:tw-justify-between tw-items-center lg:tw-mt-10">
          <div className="lg:tw-max-w-[588px]">
            <div className="">
              <div>
                <h3 className="tw-text-lg tw-font-bold lg:tw-text-2xl">
                  {a("iChibaBring.offer.title")}
                </h3>
                <div className="tw-pl-3 lg:tw-pl-6 lg:tw-mt-8">
                  <div className="tw-text-sm lg:tw-text-base">
                    {a("iChibaBring.offer.subtitle")}
                  </div>
                  <div className="tw-flex tw-gap-3 tw-mt-2 lg:tw-mt-6">
                    <div className="tw-min-w-[6px] tw-bg-[linear-gradient(180deg,#1369FE_0%,#47C4FF_100%)]"></div>
                    <div className="tw-text-sm lg:tw-text-base">
                      {a("iChibaBring.offer.content")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Frame_1171276254_adf966ab38.svg"
            }
            alt=""
            width={309}
            height={311}
            className="tw-mt-5 lg:tw-w-[429px]"
          />
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Background_a5dcb8a920.svg"
            }
            alt=""
            width={370}
            height={219}
            className="tw-absolute tw-right-0 tw-bottom-0 tw-z-[-1] lg:tw-hidden"
          />
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Background_a5dcb8a920.svg"
            }
            alt=""
            width={633}
            height={299}
            className="tw-absolute tw-right-0 tw-bottom-0 tw-z-[-1] tw-block lg:tw-hidden"
          />
        </div>
      </div>
      <Print />
      <Automatically />
      <Provide />
    </div>
  );
};

export default IChibaBring;
