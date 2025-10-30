import brandWebsite from "@/public/images/icons/solutions/brandWebsite.svg";
import customers from "@/public/images/icons/solutions/customers.svg";
import ecomPlatform from "@/public/images/icons/solutions/ecomPlatform.svg";
import socialMediaStore from "@/public/images/icons/solutions/socialMediaStore.svg";
import xIcon from "@/public/images/icons/solutions/xIcon.svg";
import clsx from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

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
        "relative overflow-hidden",
        "before:absolute before:bg-[#D9D9D9] before:w-[2px] before:h-full before:left-[15px] before:-z-0"
      )}
    >
      <ul className="flex flex-col gap-4 pb-8 relative">
        {list.map((item, index) => (
          <li key={index}>
            <div className="flex items-center gap-3">
              <div className="rounded-full border-2 border-primary-5 bg-white flex justify-center items-center w-8 h-8">
                <p className="text-brand-secondary text-sm font-bold text-center">
                  {index + 1}
                </p>
              </div>
              <p className="text-sm font-medium text-white">{item.title}</p>
            </div>
            <div className="mt-3 flex gap-3">
              <div className="w-8 self-end flex justify-center items-center">
                <div className="flex justify-center items-center w-8">
                  <div className="rounded-full bg-[linear-gradient(180deg,#FFF_0%,#B40000_100%)] w-3 h-3 " />
                </div>
              </div>
              <div className="w-full">{item.content}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DesktopProcessList = ({ list }: ProcessListType) => {
  return (
    <ul className="mt-[60px] relative flex justify-between overflow-hidden">
      <div
        className={clsx(
          "absolute h-[2px] w-[calc(100%-12px)] bg-[#D9D9D9] bottom-2 right-0",
          "after:absolute after:h-1 after:w-1 after:bg-[#D9D9D9] after:rounded-full after:right-0 after:bottom-1/2 after:translate-y-1/2"
        )}
      />
      {list.map((item, index) => (
        <li key={index} className="flex max-w-[360px] h-[79px] gap-5">
          <div
            className={clsx(
              "flex flex-col justify-between items-center relative",
              "before:absolute before:h-1/2 before:w-[2px] before:bg-[#D9D9D9] before:bottom-2 before:-z-0"
            )}
          >
            <div className="relative rounded-full border-2 border-primary-5 bg-white flex justify-center items-center w-10 h-10">
              <p className="text-brand-secondary font-bold text-center">
                {index + 1}
              </p>
            </div>
            <div className="relative flex justify-center">
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-[linear-gradient(180deg,#FFF_0%,#B40000_100%)] w-4 h-4" />
              </div>
            </div>
          </div>
          <p className="mt-1 font-medium text-white w-4/5">{item.title}</p>
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
    <ul className="flex flex-col gap-3 lg:gap-5">
      {channels.map((channel) => (
        <li
          key={channel.name}
          className={clsx(
            "flex items-center gap-3 px-4 py-2 bg-[rgba(255, 255, 255, 0.08)] rounded-lg border border-[#586A9A]",
            "lg:gap-5 lg:px-6 lg:py-4 lg:w-[340px] lg:h-[100px]"
          )}
        >
          <Image
            src={channel.icon}
            alt={channel.name}
            className="w-8 h-8 lg:w-12 lg:h-12"
            quality={100}
          />
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold text-white lg:text-lg lg:leading-6">
              {channel.name}
            </p>
            {channel.subName && (
              <p className="text-xs text-ic-white-5 lg:text-sm">
                {channel.subName}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

const FulfillmentProcess = ({ lang }: { lang: any }) => {
  return (
    <div className="h-[126px] flex items-end">
      <div
        className={clsx(
          "bg-[linear-gradient(114deg,rgba(67,81,109,0.78)_3.87%,rgba(41,56,86,0.33)_86.56%,rgba(7,18,40,0.47)_99.44%)] backdrop-blur-[27.5px]",
          "relative px-5 pt-9 pb-4 rounded-2xl border-2 border-[#365393] w-full",
          "lg:pt-10 lg:pb-5"
        )}
      >
        <p className="text-ic-white-6 text-center text-lg leading-6 font-bold lg:text-xl">
          {lang.fulfillmentProcess.efex}
          <br />
          {lang.fulfillmentProcess.multiChannel}
        </p>
        <div
          className={clsx(
            "bg-[linear-gradient(89deg,#959DB9_0%,#AF0000_100.62%)] shadow-[0px_0px_16.25px_0px_rgba(0,0,0,0.11)]",
            "absolute bottom-full translate-y-1/2 right-1/2 translate-x-1/2 ",
            "flex justify-center items-center rounded-full w-[52px] h-[52px] p-[16.25px] lg:w-16 lg:h-16 lg:p-4"
          )}
        >
          <Image
            src={xIcon}
            alt="EFEX"
            className="w-full h-full"
            quality={100}
          />
        </div>
        <div
          className={clsx(
            "absolute rounded-full -bottom-6 right-1/2 translate-x-1/2 w-40 h-40 lg:w-[203px] lg:h-[203px]",
            "opacity-30 blur-[60px] bg-[rgba(175,0,0,0.51)]"
          )}
        />
      </div>
    </div>
  );
};

const Customers = ({ lang }: { lang: any }) => {
  return (
    <>
      {/** mobile */}
      <div className="lg:hidden flex justify-center items-center gap-5 py-4 px-6 rounded-xl bg-[#1C2C4D]">
        <Image
          src={customers}
          alt="Customer"
          width={64}
          height={64}
          className="w-16 h-16"
          quality={100}
        />
        <div className="flex items-center">
          <p className="text-sm font-bold ">{lang.customers}</p>
        </div>
      </div>
      {/** desktop */}
      <div className="hidden lg:flex flex-col gap-5 justify-center items-center rounded-xl bg-[#1C2C4D] py-4 px-6 w-[221px] h-[207px]">
        <Image
          src={customers}
          alt="Customer"
          width={100}
          height={100}
          quality={100}
          className="w-[100px] h-[100px]"
        />
        <p className="font-bold text-lg">{lang.customers}</p>
      </div>
    </>
  );
};

const MultiChannel = ({ lang }: { lang: any }) => {
  const channels = [
    { icon: brandWebsite, name: lang.channels.web },
    {
      icon: ecomPlatform,
      name: lang.channels.platforms,
      subName: lang.channels.platformsEg,
    },
    {
      icon: socialMediaStore,
      name: lang.channels.stores,
      subName: lang.channels.storesEg,
    },
  ];

  const processList = [
    {
      title: lang.step[0],
      content: <SaleChannels channels={channels} />,
    },
    {
      title: lang.step[1],
      content: <FulfillmentProcess lang={lang} />,
    },
    {
      title: lang.step[2],
      content: <Customers lang={lang} />,
    },
  ];

  return (
    <section className="bg-brand-secondary text-white">
      <div className="container px-4 pt-8 lg:py-20">
        <div className="text-center">
          <h2 className="text-2xl lg:text-4xl lg:leading-[48px] font-bold">
            {lang.title}
          </h2>
          <p className="mt-1 text-sm lg:text-lg text-ic-white-5">
            {lang.subTitle}
          </p>
        </div>
        {/** mobile */}
        <div className="container lg:hidden">
          <div className="mt-6">
            <MobileProcessList list={processList} />
          </div>
        </div>

        {/** desktop */}
        <div className="container hidden lg:block">
          <DesktopProcessList list={processList} />
          <div className="mt-[60px] flex items-center">
            <SaleChannels channels={channels} />
            <div className="self-center">
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
            <FulfillmentProcess lang={lang} />
            <div className="self-center">
              <Image
                src={
                  "https://strapi-efex.ichiba.net/uploads/Path_cd79c6a674.svg"
                }
                alt="Path"
                width={121}
                height={16}
                quality={100}
              />
            </div>
            <Customers lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiChannel;
