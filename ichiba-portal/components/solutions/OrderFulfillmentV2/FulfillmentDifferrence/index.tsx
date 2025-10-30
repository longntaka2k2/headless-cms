import efex from "@/public/solutions/efex.svg";
import uncheckedCircle from "@/public/solutions/uncheckedCircle.svg";
import checkedCircle from "@/public/solutions/checkedCircle.svg";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const FulfillmentDifference = () => {
  const { t } = useTranslation("order-fulfillment-by-efex");
  const FBM = [
    {
      title: t(
        "fulfillmentDifferent.fbm.content.0.title",
      ),
      description: t(
        "fulfillmentDifferent.fbm.content.0.description",
      ),
    },
    {
      title: t(
        "fulfillmentDifferent.fbm.content.1.title",
      ),
      description: t(
        "fulfillmentDifferent.fbm.content.1.description",
      ),
    },
    {
      title: t(
        "fulfillmentDifferent.fbm.content.2.title",
      ),
      description: t(
        "fulfillmentDifferent.fbm.content.2.description",
      ),
    },
  ];

  const FBE = [
    {
      title: t(
        "fulfillmentDifferent.fbe.content.0.title",
      ),
      children: (
        <p className="tw-mt-1 tw-text-sm lg:tw-text-base">
          {t(
            "fulfillmentDifferent.fbe.content.0.description.first",
          )}{" "}
          <span className="tw-text-[#0F62FE] tw-font-medium">
            {t(
              "fulfillmentDifferent.fbe.content.0.description.second",
            )}
          </span>{" "}
          {t(
            "fulfillmentDifferent.fbe.content.0.description.third",
          )}{" "}
          <span className="tw-text-brand-primary tw-font-bold">
            {t(
              "fulfillmentDifferent.fbe.content.0.description.fourth",
            )}
          </span>
        </p>
      ),
    },
    {
      title: t(
        "fulfillmentDifferent.fbe.content.1.title",
      ),
      children: (
        <p className="tw-mt-1 tw-text-sm lg:tw-text-base">
          {t(
            "fulfillmentDifferent.fbe.content.1.description.first",
          )}
          <span className="tw-text-[#0F62FE] tw-font-medium">
            {" "}
            {t(
              "fulfillmentDifferent.fbe.content.1.description.second",
            )}
          </span>
        </p>
      ),
    },
    {
      title: t(
        "fulfillmentDifferent.fbe.content.2.title",
      ),
      children: (
        <p className="tw-mt-1 tw-text-sm lg:tw-text-base">
          {t(
            "fulfillmentDifferent.fbe.content.2.description.first",
          )}
          <span className="tw-text-[#0F62FE] tw-font-medium">
            {t(
              "fulfillmentDifferent.fbe.content.2.description.second",
            )}
          </span>
          {t(
            "fulfillmentDifferent.fbe.content.2.description.third",
          )}
        </p>
      ),
    },
  ];
  return (
    <section className="tw-container tw-px-4 tw-py-6 lg:tw-py-[60px] lg:tw-px-0">
      <div className="tw-text-center">
        <h2 className="tw-text-2xl tw-font-bold tw-text-center lg:tw-text-4xl">
          {t("fulfillmentDifferent.title.first")}
          <span className="tw-inline-flex tw-items-center">
            <Image
              src={efex}
              alt="efex"
              width={120}
              height={37}
              className="tw-w-[79.083px] tw-h-[24.0974px] tw-mx-2 lg:tw-mx-4 lg:tw-w-[117px] lg:tw-h-[37px] tw-inline"
              quality={100}
            />
          </span>
          {t(
            "fulfillmentDifferent.title.second",
          )}
        </h2>
        <p className="tw-mt-1 tw-text-sm tw-text-ic-ink-5 lg:tw-text-lg lg:tw-leading-6">
          {t(
            "fulfillmentDifferent.subTitle",
          )}
        </p>
      </div>

      <div className="tw-mt-5 tw-flex tw-flex-col tw-gap-3 lg:tw-mt-10 lg:tw-flex-row lg:tw-gap-6">
        <div className="lg:tw-flex lg:tw-flex-col lg:tw-w-[40%]">
          <div className="tw-rounded-t-[20px] tw-bg-ic-ink-2 tw-py-3 lg:tw-flex-1 lg:tw-py-7">
            <h3 className="tw-font-bold tw-text-lg tw-leading-6 tw-text-center lg:tw-text-2xl">
              {t(
                "fulfillmentDifferent.fbm.title",
              )}
            </h3>
          </div>
          <div className="tw-rounded-b-[19.7px] tw-bg-ic-ink-1 tw-p-4 tw-flex tw-flex-col tw-gap-5 lg:tw-px-10 lg:tw-py-7 lg:tw-gap-10 lg:tw-flex-1">
            {FBM.map((item, index) => (
              <div key={index} className="tw-flex">
                <Image
                  src={uncheckedCircle}
                  alt="uncheckedCircle"
                  width={32}
                  height={32}
                  className="tw-w-6 tw-h-6 tw-mt-[2px] lg:tw-w-8 lg:tw-h-8"
                  quality={100}
                />
                <div className="tw-ml-3 lg:tw-ml-4">
                  <h4 className="tw-font-bold lg:tw-text-lg lg:tw-leading-6">
                    {item.title}
                  </h4>
                  <p className="tw-mt-1 tw-text-sm lg:tw-text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:tw-flex lg:tw-flex-col lg:tw-w-[60%]">
          <div className="tw-rounded-t-[20px] tw-bg-[#001033] tw-bg-[url('https://strapi-efex.ichiba.net/uploads/FBE_lg_e91ceb16ca.webp')] tw-bg-cover tw-py-3 lg:tw-py-7">
            <h3 className="tw-font-bold tw-text-lg tw-leading-6 tw-text-center tw-text-white lg:tw-text-2xl">
              {t(
                "fulfillmentDifferent.fbe.title",
              )}
            </h3>
          </div>
          <div className="tw-rounded-b-[19.7px] tw-bg-[#EEF5FB] tw-p-4 tw-flex tw-flex-col tw-gap-5 lg:tw-px-10 lg:tw-py-7 lg:tw-gap-10 lg:tw-flex-1">
            {FBE.map((item, index) => (
              <div key={index} className="tw-flex">
                <Image
                  src={checkedCircle}
                  alt="checkedCircle"
                  width={32}
                  height={32}
                  className="tw-w-6 tw-h-6 tw-mt-[2px] lg:tw-w-8 lg:tw-h-8"
                  quality={100}
                />
                <div className="tw-ml-3 lg:tw-ml-4">
                  <h4 className="tw-font-bold tw-text-brand-secondary lg:tw-text-lg lg:tw-leading-6">
                    {item.title}
                  </h4>
                  {item.children}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FulfillmentDifference;
