import { useTranslation } from "next-i18next";
import Image from "next/image";

const PaymentProcessing = () => {
  const p = useTranslation("proxy-shopping").t;

  return (
    <div className="tw-py-6 tw-px-4 lg:tw-p-0 lg:tw-pt-15 lg:tw-pb-[120px]">
      <div className="lg:tw-container">
        <h2 className="tw-text-lg tw-font-bold lg:tw-text-3xl tw-mb-4 lg:tw-mb-[30px]">
          {p("payment.title")}
        </h2>
        <Image
          src={"https://cms-strapi.ichiba.net/uploads/aa_4473a5cda0.png"}
          className="tw-w-full lg:tw-hidden"
          alt="uploads"
          width={358}
          height={175}
        />
        <div className="lg:tw-flex lg:tw-gap-12">
          <Image
            src={"https://cms-strapi.ichiba.net/uploads/w_96385399bc.png"}
            className="lg:tw-block tw-hidden"
            alt="uploads"
            width={409}
            height={447}
          />
          <div className="tw-grid tw-gap-2 tw-mt-4 lg:tw-mt-0 lg:tw-gap-6">
            <div className="tw-grid lg:tw-grid-cols-2 lg:tw-gap-6 tw-gap-2">
              <div className="tw-border tw-border-[#DDD] tw-rounded-lg tw-px-4 tw-py-3 lg:tw-px-6 lg:tw-py-5  ">
                <div className="tw-flex lg:tw-grid tw-items-center tw-gap-2 ">
                  <Image
                    src={
                      "https://cms-strapi.ichiba.net/uploads/60e8a1599394e82d62d6d4e5_Conversion_1_aa1f950198.svg"
                    }
                    alt="uploads"
                    className="lg:tw-w-[48px]"
                    width={32}
                    height={32}
                  />
                  <h3 className="tw-font-bold lg:tw-mt-2 lg:tw-text-2xl">
                    {p("payment.multi.title")}
                  </h3>
                </div>
                <div className="tw-mt-3 lg:tw-mt-4">
                  {p("payment.multi.content")}
                </div>
              </div>
              <div className="tw-border tw-border-[#DDD] tw-rounded-lg tw-px-4 tw-py-3 lg:tw-px-6 lg:tw-py-5">
                <div className="tw-flex lg:tw-grid tw-items-center tw-gap-2 ">
                  <Image
                    src={
                      "https://cms-strapi.ichiba.net/uploads/60772bcea6d9cc3f1c700520_Drag_drop_icon_1_001ac9611a.svg"
                    }
                    alt="uploads"
                    className="lg:tw-w-[48px]"
                    width={32}
                    height={32}
                  />
                  <h3 className="tw-font-bold lg:tw-mt-4 lg:tw-text-2xl">
                    {p("payment.sercure.title")}
                  </h3>
                </div>
                <div className="tw-mt-3 lg:tw-mt-2">
                  {p("payment.sercure.content")}
                </div>
              </div>
            </div>
            <div className="tw-border tw-border-[#DDD] tw-rounded-lg tw-px-4 tw-py-3 lg:tw-px-6 lg:tw-py-5  ">
              <div className="tw-flex lg:tw-grid tw-items-center tw-gap-2 ">
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/6176fd192c9aa66ba04117c9_test_1_c90352db42.svg"
                  }
                  alt="uploads"
                  className="lg:tw-w-[48px]"
                  width={32}
                  height={32}
                />
                <h3 className="tw-font-bold lg:tw-mt-2 lg:tw-text-2xl">
                  {p("payment.tax.title")}
                </h3>
              </div>
              <div className="tw-mt-3 lg:tw-mt-4">
                {p("payment.tax.content")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentProcessing;
