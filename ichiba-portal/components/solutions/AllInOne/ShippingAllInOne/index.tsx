import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const Shipping = () => {
  const a = useTranslation("all-in-one").t;

  return (
    <div
      className={clsx(
        "tw-mx-4 tw-bg-[#091A3E] tw-py-6 tw-px-3 lg:tw-pt-[60px] lg:tw-pb-[80px] lg:tw-px-[100px]",
        "tw-text-white lg:tw-max-w-[1400px] lg:tw-mx-auto",
        "lg:tw-rounded-3xl tw-rounded-lg "
      )}
    >
      <h2 className="tw-px-[50px] tw-font-bold tw-text-2xl tw-text-center lg:tw-text-4xl lg:tw-max-w-[600px] lg:tw-mx-auto">
        {a("shipping.title")}
      </h2>
      <div className="tw-mt-5 lg:tw-mt-10 tw-grid tw-gap-3 lg:tw-gap-6 lg:tw-grid-cols-3">
        <div className="tw-border tw-border-[rgba(255,255,255,0.40)] tw-px-4 tw-pt-3 tw-rounded-lg lg:tw-p-[40px_0_0_32px]">
          <div className="tw-mx-4 tw-text-sm lg:tw-text-base">{a("shipping.confusion")}</div>
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Seller_Command_Center_1_2f02459e59.png"
            }
            alt=""
            width={401}
            height={225}
            className="tw-mt-4 tw-max-w-[330px] tw-w-full lg:tw-hidden"
          />
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Seller_Command_Center_1_bee23b52b7.png"
            }
            alt=""
            width={529}
            height={396}
            className="tw-mt-4 tw-w-full tw-hidden lg:tw-block"
          />
        </div>
        <div className="tw-pt-3 lg:tw-pt-10 lg:tw-pl-8 tw-bg-[rgba(255,255,255,0.08)] tw-rounded-lg">
          <div className="tw-mx-4 tw-text-sm lg:tw-text-base">{a("shipping.difficulty")}</div>
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Frame_1171276005_c0d577771e.svg"
            }
            className="tw-float-right lg:tw-w-[305px]"
            alt=""
            width={211}
            height={211}
          />
        </div>
        <div className="tw-grid tw-gap-3">
          <div className="tw-rounded-lg tw-border tw-border-[rgba(255,255,255,0.40)] tw-px-4 tw-py-3 lg:tw-py-6 lg:tw-px-7">
            <div className="tw-flex lg:tw-grid tw-gap-3 lg:tw-gap-5 tw-items-center">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Frame_1171276237_869adb994a.svg"
                }
                className="lg:tw-w-[74px] lg:tw-h-[60px]"
                alt=""
                height={44}
                width={54}
              />
              <div className="tw-text-sm lg:tw-text-base">{a("shipping.incident")}</div>
            </div>
          </div>
          <div className="tw-rounded-lg tw-border tw-border-[rgba(255,255,255,0.40)] tw-px-4 tw-py-3 lg:tw-py-6 lg:tw-px-7">
            <div className="tw-flex lg:tw-grid tw-gap-3 lg:tw-gap-5 tw-items-center">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Frame_1171276002_4ed0cdcdc4.svg"
                }
                alt=""
                className="lg:tw-w-[72px] lg:tw-h-[72px]"
                height={44}
                width={54}
              />
              <div className="tw-text-sm lg:tw-text-base">{a("shipping.shipping")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shipping;
