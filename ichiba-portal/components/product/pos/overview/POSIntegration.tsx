import { clsx } from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const POSIntegration = () => {
  const p = useTranslation("pos").t;

  return (
    <div className="tw-overflow-hidden">
      <div className="tw-bg-[#07122C] tw-pt-6 tw-pb-10 tw-px-4 lg:tw-hidden">
        <div className="tw-text-white">
          <div className="tw-text-center">
            <h2 className="tw-text-2xl tw-font-bold">
              {p("posIntegration.title")}
            </h2>
            <div className="tw-text-sm tw-opacity-80">
              {p("posIntegration.subtitle")}
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="tw-relative tw-mt-10 tw-w-[359px] tw-mx-auto">
          <div className="tw-relative">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Group_1171275970_2ef1575eaa.svg"
              }
              alt=""
              width={112}
              height={394}
              className="tw-mx-auto"
            />
            <div
              className={clsx(
                "tw-absolute tw-top-[-16px] tw-left-0",
                "tw-flex tw-items-center tw-bg-[#07122C]",
              )}
            >
              <div
                className={clsx(
                  "tw-w-[52px] tw-h-[52px] tw-items-center tw-justify-center tw-flex tw-rounded-full",
                  "tw-left-4 tw-border tw-border-[rgba(225,234,251,0.69)] tw-relative tw-z-1 tw-bg-[#07122C]",
                )}
              >
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/cash_banknote_computer_fast_pay_84d545a00c.svg"
                  }
                  width={28}
                  height={28}
                  alt=""
                />
              </div>
              <div className="tw-px-7 tw-py-3 tw-text-[#ddd] tw-border tw-border-[rgba(225,234,251,0.69)] tw-rounded-e-full tw-text-sm">
                {p("posIntegration.orderFulfillment")}
              </div>
            </div>
            <div
              className={clsx(
                "tw-absolute tw-top-[4%] tw-right-0",
                "tw-flex tw-items-center tw-justify-end tw-mt-6 tw-bg-[#07122C]",
              )}
            >
              <div className="tw-px-7 tw-py-3 tw-text-[#ddd] tw-border tw-border-[rgba(225,234,251,0.69)] tw-rounded-s-full tw-text-sm">
                {p("posIntegration.eCommerce")}
              </div>
              <div
                className={clsx(
                  "tw-w-[52px] tw-h-[52px] tw-items-center tw-justify-center tw-flex tw-rounded-full",
                  "tw-right-4 tw-border tw-border-[rgba(225,234,251,0.69)] tw-relative tw-z-1 tw-bg-[#07122C]",
                )}
              >
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/cash_banknote_computer_fast_pay_84d545a00c.svg"
                  }
                  width={28}
                  height={28}
                  alt=""
                />
              </div>
            </div>
            <div
              className={clsx(
                "tw-absolute tw-top-[18%]",
                "tw-flex tw-items-center tw-mt-6 tw-bg-[#07122C]",
              )}
            >
              <div
                className={clsx(
                  "tw-w-[52px] tw-h-[52px] tw-items-center tw-justify-center tw-flex tw-rounded-full",
                  "tw-border tw-border-[rgba(225,234,251,0.69)] tw-relative tw-z-1 tw-bg-[#07122C]",
                )}
              >
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/cash_banknote_computer_fast_pay_84d545a00c.svg"
                  }
                  width={28}
                  height={28}
                  alt=""
                />
              </div>
              <div className="tw-px-7 tw-py-3 tw-text-[#ddd] tw-border tw-border-[rgba(225,234,251,0.69)] tw-rounded-e-full tw-relative tw-right-4 tw-z-[0] tw-text-sm">
                {p("posIntegration.marketing")}
              </div>
            </div>
            <div
              className={clsx(
                "tw-absolute tw-top-[45%] tw-translate-y-[-45%] tw-right-0",
                "tw-flex tw-items-center tw-justify-end tw-mt-6 tw-bg-[#07122C]",
              )}
            >
              <div className="tw-px-7 tw-py-3 tw-text-[#ddd] tw-border tw-border-[rgba(225,234,251,0.69)] tw-rounded-s-full tw-text-sm">
                {p("posIntegration.wareHouse")}
              </div>
              <div
                className={clsx(
                  "tw-right-4 tw-w-[52px] tw-h-[52px] tw-items-center tw-justify-center tw-flex tw-rounded-full",
                  "tw-border tw-border-[rgba(225,234,251,0.69)] tw-relative tw-z-1 tw-bg-[#07122C]",
                )}
              >
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/cash_banknote_computer_fast_pay_84d545a00c.svg"
                  }
                  width={28}
                  height={28}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="tw-relative">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Group_19791_a3db138569.svg"
              }
              alt=""
              width={112}
              height={394}
              className="tw-mx-auto"
            />
            <div
              className={clsx(
                "tw-absolute tw-top-[45%] tw-left-0",
                "tw-flex tw-items-center tw-bg-[#07122C]",
              )}
            >
              <div
                className={clsx(
                  "tw-left-4 tw-w-[52px] tw-h-[52px] tw-items-center tw-justify-center tw-flex tw-bg-[#07122C]",
                  "tw-rounded-full tw-border tw-border-[rgba(225,234,251,0.69)] tw-relative tw-z-1",
                )}
              >
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/cash_banknote_computer_fast_pay_84d545a00c.svg"
                  }
                  width={28}
                  height={28}
                  alt=""
                />
              </div>
              <div className="tw-px-7 tw-py-3 tw-text-[#ddd] tw-border tw-border-[rgba(225,234,251,0.69)] tw-rounded-e-full tw-text-sm">
                {p("posIntegration.shipping")}
              </div>
            </div>
            <div
              className={clsx(
                "tw-absolute tw-bottom-[26%] tw-right-0",
                "tw-flex tw-items-center tw-justify-end tw-mt-6 tw-bg-[#07122C]",
              )}
            >
              <div className="tw-px-7 tw-py-3 tw-text-[#ddd] tw-border tw-border-[rgba(225,234,251,0.69)] tw-rounded-s-full tw-text-sm">
                {p("posIntegration.employee")}
              </div>
              <div
                className={clsx(
                  "tw-right-4 tw-w-[52px] tw-h-[52px] tw-items-center tw-justify-center tw-flex tw-rounded-full",
                  "tw-border tw-border-[rgba(225,234,251,0.69)] tw-relative tw-z-1 tw-bg-[#07122C]",
                )}
              >
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/cash_banknote_computer_fast_pay_84d545a00c.svg"
                  }
                  width={28}
                  height={28}
                  alt=""
                />
              </div>
            </div>
            <div
              className={clsx(
                "tw-absolute tw-bottom-[10%] tw-left-[-5%]",
                "tw-flex tw-items-center tw-mt-6 tw-bg-[#07122C]",
              )}
            >
              <div
                className={clsx(
                  "tw-left-4 tw-w-[52px] tw-h-[52px] tw-items-center tw-justify-center tw-flex tw-rounded-full",
                  "tw-border tw-border-[rgba(225,234,251,0.69)] tw-relative tw-z-1 tw-bg-[#07122C]",
                )}
              >
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/cash_banknote_computer_fast_pay_84d545a00c.svg"
                  }
                  width={28}
                  height={28}
                  alt=""
                />
              </div>
              <div className="tw-px-7 tw-py-3 tw-text-[#ddd] tw-border tw-border-[rgba(225,234,251,0.69)] tw-rounded-e-full tw-text-sm">
                {p("posIntegration.account")}
              </div>
            </div>
            <div
              className={clsx(
                "tw-absolute tw-bottom-[-5%] tw-right-0",
                "tw-flex tw-items-center tw-justify-end tw-mt-6 tw-bg-[#07122C]",
              )}
            >
              <div className="tw-px-7 tw-py-3 tw-text-[#ddd] tw-border tw-border-[rgba(225,234,251,0.69)] tw-rounded-s-full tw-text-sm">
                {p("posIntegration.payment")}
              </div>
              <div
                className={clsx(
                  "tw-right-4 tw-w-[52px] tw-h-[52px] tw-items-center tw-justify-center tw-flex tw-rounded-full",
                  "tw-border tw-border-[rgba(225,234,251,0.69)] tw-relative tw-z-1 tw-bg-[#07122C]",
                )}
              >
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/cash_banknote_computer_fast_pay_84d545a00c.svg"
                  }
                  width={28}
                  height={28}
                  alt=""
                />
              </div>
            </div>
          </div>

          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Group_1171275899_73b51bb0fd.png"
            }
            alt=""
            width={585}
            height={594}
            className="tw-absolute tw-top-[40%] tw-translate-y-[-40%] tw-left-[50%] tw-translate-x-[-50%]"
          />
        </div>
      </div>

      {/* desktop */}
      <div
        className={clsx(
          "tw-bg-[#07122C] tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Light_Background_2_1_afd7b01233.png)]",
          "tw-pt-[60px] tw-pb-[80px] lg:tw-block tw-hidden",
        )}
      >
        <div className="tw-text-white lg:tw-max-w-[500px] tw-mx-auto">
          <div className="tw-text-center">
            <h2 className="tw-text-4xl tw-font-bold">
              {p("posIntegration.title")}
            </h2>
            <div className=" tw-opacity-80">{p("posIntegration.subtitle")}</div>
          </div>
        </div>

        <div className="tw-mt-10 tw-container">
          <div className="tw-relative">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Group_1171275899_051d9dce34.png"
              }
              alt=""
              width={700}
              height={700}
              className="tw-mx-auto "
            />
            <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 ">
              <div className="tw-flex tw-justify-between  tw-mt-6">
                <div className="tw-flex tw-items-center tw-justify-end tw-relative tw-left-[15%]">
                  <div className="tw-px-10 tw-py-5 tw-text-[#ddd] tw-border tw-border-[rgba(225,234,251,0.69)] tw-rounded-s-full tw-relative tw-left-4 tw-z-[0] tw-text-lg">
                    {p("posIntegration.shipping")}
                  </div>
                  <div className="tw-w-[88px] tw-h-[88px] hover:tw-shadow-[0px_0px_16px_0px_rgba(72,112,172,0.70)] tw-items-center tw-justify-center tw-flex tw-rounded-full tw-border tw-border-[rgba(225,234,251,0.69)] tw-relative tw-z-1 tw-bg-[#07122C]">
                    <Image
                      src={
                        "https://cms-strapi.ichiba.net/uploads/cash_banknote_computer_fast_pay_84d545a00c.svg"
                      }
                      width={44}
                      height={44}
                      alt=""
                      className=""
                    />
                  </div>
                </div>
                <div className="tw-flex tw-items-center tw-relative tw-right-[13%]">
                  <div className="tw-w-[88px] tw-h-[88px] hover:tw-shadow-[0px_0px_16px_0px_rgba(72,112,172,0.70)] tw-items-center tw-justify-center tw-flex tw-rounded-full tw-border tw-border-[rgba(225,234,251,0.69)] tw-relative tw-z-1 tw-bg-[#07122C]">
                    <Image
                      src={
                        "https://cms-strapi.ichiba.net/uploads/cash_banknote_computer_fast_pay_84d545a00c.svg"
                      }
                      width={44}
                      height={44}
                      alt=""
                    />
                  </div>
                  <div className="tw-px-10 tw-py-5 tw-text-[#ddd] tw-border tw-border-[rgba(225,234,251,0.69)] tw-rounded-e-full tw-relative tw-right-4 tw-z-[0] tw-text-lg">
                    {p("posIntegration.orderFulfillment")}
                  </div>
                </div>
              </div>
              <div className="tw-flex tw-justify-between  tw-mt-[77px]">
                <div className="tw-flex tw-items-center tw-justify-end tw-relative tw-left-[-1%]">
                  <div className="tw-px-10 tw-py-5 tw-text-[#ddd] tw-border tw-border-[rgba(225,234,251,0.69)] tw-rounded-s-full tw-relative tw-left-4 tw-z-[0] tw-text-lg">
                    {p("posIntegration.employee")}
                  </div>
                  <div className="tw-w-[88px] tw-h-[88px] hover:tw-shadow-[0px_0px_16px_0px_rgba(72,112,172,0.70)] tw-items-center tw-justify-center tw-flex tw-rounded-full tw-border tw-border-[rgba(225,234,251,0.69)] tw-relative tw-z-1 tw-bg-[#07122C]">
                    <Image
                      src={
                        "https://cms-strapi.ichiba.net/uploads/cash_banknote_computer_fast_pay_84d545a00c.svg"
                      }
                      width={44}
                      height={44}
                      alt=""
                    />
                  </div>
                </div>
                <div className="tw-flex tw-items-center tw-relative tw-right-[3%]">
                  <div className="tw-w-[88px] tw-h-[88px] hover:tw-shadow-[0px_0px_16px_0px_rgba(72,112,172,0.70)] tw-items-center tw-justify-center tw-flex tw-rounded-full tw-border tw-border-[rgba(225,234,251,0.69)] tw-relative tw-z-1 tw-bg-[#07122C]">
                    <Image
                      src={
                        "https://cms-strapi.ichiba.net/uploads/cash_banknote_computer_fast_pay_84d545a00c.svg"
                      }
                      width={44}
                      height={44}
                      alt=""
                    />
                  </div>
                  <div className="tw-px-10 tw-py-5 tw-text-[#ddd] tw-border tw-border-[rgba(225,234,251,0.69)] tw-rounded-e-full tw-relative tw-right-4 tw-z-[0] tw-text-lg">
                    {p("posIntegration.eCommerce")}
                  </div>
                </div>
              </div>
              <div className="tw-flex tw-justify-between  tw-mt-[77px]">
                <div className="tw-flex tw-items-center tw-justify-end tw-relative tw-left-[2%]">
                  <div className="tw-px-10 tw-py-5 tw-text-[#ddd] tw-border tw-border-[rgba(225,234,251,0.69)] tw-rounded-s-full tw-relative tw-left-4 tw-z-[0] tw-text-lg">
                    {p("posIntegration.account")}
                  </div>
                  <div className="tw-w-[88px] tw-h-[88px] hover:tw-shadow-[0px_0px_16px_0px_rgba(72,112,172,0.70)] tw-items-center tw-justify-center tw-flex tw-rounded-full tw-border tw-border-[rgba(225,234,251,0.69)] tw-relative tw-z-1 tw-bg-[#07122C]">
                    <Image
                      src={
                        "https://cms-strapi.ichiba.net/uploads/cash_banknote_computer_fast_pay_84d545a00c.svg"
                      }
                      width={44}
                      height={44}
                      alt=""
                    />
                  </div>
                </div>
                <div className="tw-flex tw-items-center tw-relative tw-right-[2%]">
                  <div className="tw-w-[88px] tw-h-[88px] hover:tw-shadow-[0px_0px_16px_0px_rgba(72,112,172,0.70)] tw-items-center tw-justify-center tw-flex tw-rounded-full tw-border tw-border-[rgba(225,234,251,0.69)] tw-relative tw-z-1 tw-bg-[#07122C]">
                    <Image
                      src={
                        "https://cms-strapi.ichiba.net/uploads/cash_banknote_computer_fast_pay_84d545a00c.svg"
                      }
                      width={44}
                      height={44}
                      alt=""
                    />
                  </div>
                  <div className="tw-px-10 tw-py-5 tw-text-[#ddd] tw-border tw-border-[rgba(225,234,251,0.69)] tw-rounded-e-full tw-relative tw-right-4 tw-z-[0] tw-text-lg">
                    {p("posIntegration.marketing")}
                  </div>
                </div>
              </div>
              <div className="tw-flex tw-justify-between  tw-mt-[77px]">
                <div className="tw-flex tw-items-center tw-justify-end tw-relative tw-left-[2%]">
                  <div className="tw-px-10 tw-py-5 tw-text-[#ddd] tw-border tw-border-[rgba(225,234,251,0.69)] tw-rounded-s-full tw-relative tw-left-4 tw-z-[0] tw-text-lg">
                    {p("posIntegration.payment")}
                  </div>
                  <div className="tw-w-[88px] tw-h-[88px] hover:tw-shadow-[0px_0px_16px_0px_rgba(72,112,172,0.70)] tw-items-center tw-justify-center tw-flex tw-rounded-full tw-border tw-border-[rgba(225,234,251,0.69)] tw-relative tw-z-1 tw-bg-[#07122C]">
                    <Image
                      src={
                        "https://cms-strapi.ichiba.net/uploads/cash_banknote_computer_fast_pay_84d545a00c.svg"
                      }
                      width={44}
                      height={44}
                      alt=""
                    />
                  </div>
                </div>
                <div className="tw-flex tw-items-center tw-relative tw-right-[-1%]">
                  <div className="tw-w-[88px] tw-h-[88px] hover:tw-shadow-[0px_0px_16px_0px_rgba(72,112,172,0.70)] tw-items-center tw-justify-center tw-flex tw-rounded-full tw-border tw-border-[rgba(225,234,251,0.69)] tw-relative tw-z-1 tw-bg-[#07122C]">
                    <Image
                      src={
                        "https://cms-strapi.ichiba.net/uploads/cash_banknote_computer_fast_pay_84d545a00c.svg"
                      }
                      width={44}
                      height={44}
                      alt=""
                    />
                  </div>
                  <div className="tw-px-10 tw-py-5 tw-text-[#ddd] tw-border tw-border-[rgba(225,234,251,0.69)] tw-rounded-e-full tw-relative tw-right-4 tw-z-[0] tw-text-lg">
                    {p("posIntegration.wareHouse")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default POSIntegration;
