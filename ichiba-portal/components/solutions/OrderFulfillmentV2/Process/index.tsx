import brandWebsite from "@/public/solutions/brandWebsite.svg";
import customers from "@/public/solutions/customers.svg";
import ecomPlatform from "@/public/solutions/ecomPlatform.svg";
import socialMediaStore from "@/public/solutions/socialMediaStore.svg";
import xIcon from "@/public/solutions/xIcon.svg";
import clsx from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";

interface ProcessListType {
  list: {
    title: string;
    content: React.ReactNode;
  }[];
}

const MobileProcessList = ({ list }: ProcessListType) => {
  return (
    <div
      className={clsx(
        "tw-relative",
        "before:tw-absolute before:tw-bg-[#D9D9D9] before:tw-w-[2px] before:tw-h-full before:tw-left-[15px] before:-tw-z-0",
      )}
    >
      <ul className="tw-flex tw-flex-col tw-gap-4 tw-pb-8 tw-relative tw-px-0">
        {list.map((item, index) => (
          <li key={index}>
            <div className="tw-flex tw-gap-3">
              <div className="tw-rounded-full tw-border-2 tw-border-primary-5 tw-bg-white tw-flex tw-justify-center tw-w-8 tw-h-8">
                <p className="tw-text-brand-secondary tw-text-sm tw-font-bold tw-mb-0">
                  {index + 1}
                </p>
              </div>
              <h3 className="tw-text-sm tw-font-medium tw-text-white">{item.title}</h3>
            </div>
            <div className="tw-mt-3 tw-flex tw-gap-3">
              <div className="tw-w-8 tw-self-end tw-flex">
                <div className="tw-flex tw-justify-center tw-w-8">
                  <div className="tw-rounded-full tw-bg-[linear-gradient(180deg,#FFF_0%,#B40000_100%)] tw-w-3 tw-h-3 " />
                </div>
              </div>
              <div className="tw-w-full">{item.content}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DesktopProcessList = ({ list }: ProcessListType) => {
  return (
    <ul className="tw-mt-[60px] tw-relative tw-flex tw-justify-between tw-overflow-hidden">
      <div
        className={clsx(
          "tw-absolute tw-h-[2px] tw-w-[calc(100%-12px)] tw-bg-[#D9D9D9] tw-bottom-2 tw-right-0",
          "after:tw-absolute after:tw-h-1 after:tw-w-1 after:tw-bg-[#D9D9D9] after:tw-rounded-full after:tw-right-0 after:tw-bottom-1/2 after:tw-translate-y-1/2",
        )}
      />
      {list.map((item, index) => (
        <li key={index} className="tw-flex tw-max-w-[360px] tw-h-[79px] tw-gap-5">
          <div
            className={clsx(
              "tw-flex tw-flex-col tw-justify-between tw-items-center tw-relative",
              "before:tw-absolute before:tw-h-1/2 before:tw-w-[2px] before:tw-bg-[#D9D9D9] before:tw-bottom-2 before:-tw-z-0",
            )}
          >
            <div className="tw-relative tw-rounded-full tw-border-2 tw-border-primary-5 tw-bg-white tw-flex tw-justify-center tw-items-center tw-w-10 tw-h-10">
              <p className="tw-text-brand-secondary tw-font-bold tw-text-center tw-mb-0">
                {index + 1}
              </p>
            </div>
            <div className="tw-relative tw-flex tw-justify-center">
              <div className="tw-flex tw-justify-center tw-items-center">
                <div className="tw-rounded-full tw-bg-[linear-gradient(180deg,#FFF_0%,#B40000_100%)] tw-w-4 tw-h-4" />
              </div>
            </div>
          </div>
          <h3 className="tw-mt-1 tw-font-medium tw-text-white tw-w-4/5 tw-text-base">{item.title}</h3>
        </li>
      ))}
    </ul>
  );
};

const SaleChannels = ({
  channels,
}: {
  channels: {
    icon: string | StaticImport;
    name: string;
    subName?: string;
  }[];
}) => {
  return (
    <ul className="tw-flex tw-flex-col tw-gap-3 lg:tw-gap-5">
      {channels.map((channel) => (
        <li
          key={channel.name}
          className={clsx(
            "tw-flex tw-items-center tw-gap-3 tw-px-4 tw-py-2 tw-bg-[rgba(255, 255, 255, 0.08)] tw-rounded-lg tw-border tw-border-[#586A9A]",
            "lg:tw-gap-5 lg:tw-px-6 lg:tw-py-4 lg:tw-w-[340px] lg:tw-h-[100px]",
          )}
        >
          <Image
            src={channel.icon}
            alt={channel.name}
            className="tw-w-8 tw-h-8 lg:tw-w-12 lg:tw-h-12"
            quality={100}
          />
          <div className="tw-flex tw-flex-col tw-justify-center">
            <p className="tw-text-sm tw-font-bold tw-text-white lg:tw-text-lg lg:tw-leading-6">
              {channel.name}
            </p>
            {channel.subName && (
              <p className="tw-text-xs tw-text-ic-white-5 lg:tw-text-sm">
                {channel.subName}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

const FulfillmentProcess = () => {
  const { t } = useTranslation("order-fulfillment-by-efex");
  return (
    <div className="tw-h-[126px] tw-flex tw-items-end">
      <div
        className={clsx(
          "tw-bg-[linear-gradient(114deg,rgba(67,81,109,0.78)_3.87%,rgba(41,56,86,0.33)_86.56%,rgba(7,18,40,0.47)_99.44%)] backdrop-blur-[27.5px]",
          "tw-relative tw-px-5 tw-pt-9 tw-pb-4 tw-rounded-2xl tw-border-2 tw-border-[#365393] tw-w-full",
          "lg:tw-pt-10 lg:tw-pb-5",
        )}
      >
        <p className="tw-text-ic-white-6 tw-text-center tw-text-lg tw-leading-6 tw-font-bold lg:tw-text-xl">
          {t("process.fulfillmentEfex")}
          <br />
          {t("process.fbe")}
        </p>
        <div
          className={clsx(
            "tw-bg-[linear-gradient(89deg,#959DB9_0%,#AF0000_100.62%)] tw-shadow-[0px_0px_16.25px_0px_rgba(0,0,0,0.11)]",
            "tw-absolute tw-bottom-full tw-translate-y-1/2 tw-right-1/2 tw-translate-x-1/2 ",
            "tw-flex tw-justify-center tw-items-center tw-rounded-full tw-w-[52px] tw-h-[52px] tw-p-[16.25px] lg:tw-w-16 lg:tw-h-16 lg:tw-p-4",
          )}
        >
          <Image
            src={xIcon}
            alt="EFEX"
            className="tw-w-full tw-h-full"
            quality={100}
          />
        </div>
        <div
          className={clsx(
            "tw-absolute tw-rounded-full -tw-bottom-6 tw-right-1/2 tw-translate-x-1/2 tw-w-40 tw-h-40 lg:tw-w-[203px] lg:tw-h-[203px]",
            "tw-opacity-30 tw-blur-[60px] tw-bg-[rgba(175,0,0,0.51)]",
          )}
        />
      </div>
    </div>
  );
};

const Customers = () => {
  const { t } = useTranslation("order-fulfillment-by-efex");
  return (
    <>
      {/** mobile */}
      <div className="lg:tw-hidden tw-flex tw-justify-center tw-items-center tw-gap-5 tw-py-4 tw-px-6 tw-rounded-xl tw-bg-[#1C2C4D]">
        <Image
          src={customers}
          alt="Customer"
          width={64}
          height={64}
          className="tw-w-16 tw-h-16"
          quality={100}
        />
        <div className="tw-flex tw-items-center">
          <p className="tw-text-sm tw-font-bold ">
            {t("process.customers")}
          </p>
        </div>
      </div>
      {/** desktop */}
      <div className="tw-hidden lg:tw-flex tw-flex-col tw-gap-5 tw-justify-center tw-items-center tw-rounded-xl tw-bg-[#1C2C4D] tw-py-4 tw-px-6 tw-w-[221px] tw-h-[207px]">
        <Image
          src={customers}
          alt="Customer"
          width={100}
          height={100}
          quality={100}
          className="tw-w-[100px] tw-h-[100px]"
        />
        <p className="tw-font-bold tw-text-lg">
          {t("process.customers")}
        </p>
      </div>
    </>
  );
};

const Process = () => {
  const { t } = useTranslation("order-fulfillment-by-efex");
  const channels = [
    { icon: brandWebsite, name: t("process.channels.web") },
    {
      icon: ecomPlatform,
      name: t("process.channels.platforms"),
      subName: t("process.channels.platformsEg"),
    },
    {
      icon: socialMediaStore,
      name: t("process.channels.stores"),
      subName: t("process.channels.storesEg"),
    },
  ];

  const processList = [
    {
      title: t("process.step.0"),
      content: <SaleChannels channels={channels} />,
    },
    {
      title: t("process.step.1"),
      content: <FulfillmentProcess />,
    },
    {
      title: t("process.step.2"),
      content: <Customers />,
    },
  ];

  return (
    <section className="tw-text-white" style={{
      background: "linear-gradient(90deg, rgba(1,27,48,1) 0%, rgba(55,44,46,1) 49%, rgba(1,27,48,1) 100%)"
    }}>
      {/** mobile */}
      <div className="tw-container tw-px-4 tw-pt-8 lg:tw-hidden">
        <div className="tw-w-full tw-flex tw-flex-col tw-items-center tw-text-center">
          <h2 className="tw-text-2xl tw-font-bold">{t("process.title")}</h2>
          <p className="tw-text-sm tw-text-ic-white-5">{t("process.subTitle")}</p>
        </div>
        <div className="tw-mt-6">
          <MobileProcessList list={processList} />
        </div>
      </div>

      {/** desktop */}
      <div className="tw-container tw-py-20 tw-hidden lg:tw-block">
        <div className="text-center">
          <h2 className="tw-text-4xl tw-leading-[48px] tw-font-bold">{t("process.title")}</h2>
          <p className="tw-mt-1 tw-text-lg tw-text-ic-white-5">{t("process.subTitle")}</p>
        </div>
        <DesktopProcessList list={processList} />
        <div className="tw-mt-[60px] tw-flex tw-items-center">
          <SaleChannels channels={channels} />
          <div className="tw-self-center">
            <Image
              src={
                "https://strapi-efex.ichiba.net/uploads/Path_3_02d45349cb.svg"
              }
              alt="Path"
              width={148}
              height={255}
              quality={100}
            />
          </div>
          <FulfillmentProcess />
          <div className="tw-self-center">
            <Image
              src={"https://strapi-efex.ichiba.net/uploads/Path_cd79c6a674.svg"}
              alt="Path"
              width={121}
              height={16}
              quality={100}
            />
          </div>
          <Customers />
        </div>
      </div>
    </section>
  );
};

export default Process;
