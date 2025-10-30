import clsx from "clsx";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const Customized = () => {
  const s = useTranslation("multichannel-fulfill").t;

  return (
    <div className="tw-mt-6 lg:tw-my-[60px]">
      <div className="tw-relative lg:tw-container tw-mx-4 lg:tw-px-0 tw-rounded-lg lg:tw-rounded-xl lg:tw-pb-[60px] tw-pb-[100px] lg:tw-flex">
        <div
          className={clsx(
            "tw-p-2 lg:tw-p-3 tw-bg-[linear-gradient(114deg,rgba(255,255,255,0.60)_3.87%,rgba(243,245,247,0.68)_99.44%,rgba(252,252,252,0.50)_100.62%)]",
            " backdrop-blur-xl tw-w-max tw-border tw-border-x-white tw-rounded-xl",
            "tw-absolute tw-bottom-[0px] tw-right-3  lg:tw-right-[223px]"
          )}
        >
          <Image
            src="https://cms-strapi.ichiba.net/uploads/boxme_warehouse_22_1_5b38958df0.png"
            alt=""
            width={330}
            height={203}
            className="tw-max-w-[254px] lg:tw-max-w-[328px] tw-shadow-[0px_5.305px_10.611px_0px_rgba(0,0,0,0.05)]"
          />
        </div>
        <div className="tw-px-4 tw-pt-4 tw-pb-6 lg:tw-py-11 lg:tw-pl-10 lg:tw-pr-[100px] tw-bg-[#182A50] lg:tw-px-0 tw-text-white tw-rounded-t-lg lg:tw-rounded-l-xl lg:tw-rounded-tr-none">
          <h3 className="tw-font-bold tw-text-xl lg:tw-text-2xl tw-mb-4 lg:tw-mb-6">
            {s("simplify.customized.title")}
          </h3>
          <div className="tw-mt-4 tw-grid tw-gap-4 tw-ml-6">
            <div className="tw-flex tw-gap-4 tw-items-start">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Group_71372082ee.svg"
                alt="customized"
                width={28}
                height={28}
                className="tw-w-[20px] lg:tw-min-w-[28px]"
              />
              <div className="tw-text-sm lg:tw-text-base tw-opacity-80">
                {s("simplify.customized.content.0")}
              </div>
            </div>
            <div className="tw-flex tw-gap-4 tw-items-start">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Group_71372082ee.svg"
                alt="customized"
                width={28}
                height={28}
                className="tw-w-[20px] lg:tw-min-w-[28px]"
              />
              <div className="tw-text-sm lg:tw-text-base tw-opacity-80">
                {s("simplify.customized.content.1")}
              </div>
            </div>
          </div>
        </div>
        <div className=" ">
          <Image
            src="https://cms-strapi.ichiba.net/uploads/fulfillment2_2_q86ngf2fkf8rz9fw8jpuedug2kfjmqoons5kc0kzj4_1_ca37878b72.png"
            alt="customized"
            width={521}
            height={403}
            className="tw-h-[220px] lg:tw-h-full tw-w-full lg:tw-min-w-[515px] tw-object-cover tw-object-top tw-rounded-b-lg lg:tw-rounded-r-xl"
          />
        </div>
      </div>
    </div>
  );
};
export default Customized;
