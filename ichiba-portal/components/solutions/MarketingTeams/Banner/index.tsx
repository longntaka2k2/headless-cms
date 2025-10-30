import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

const BannerMarketingTeam = () => {
  const m = useTranslation("marketing-teams").t;

  return (
    <div className="">
      <div
        className={clsx(
          "tw-py-6 tw-px-4 tw-bg-cover lg:tw-py-[90px] lg:tw-px-0",
          "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/dddd_ae0edf8546.png)]",
          "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Group_1171275907_1_e9c29dcca0.png)]",
        )}
      >
        <div className="lg:tw-container">
          <div className="tw-text-xs tw-text-[#1135A8] tw-font-bold lg:tw-text-sm tw-uppercase">
            {m("banner.label")}
          </div>
          <h1 className="tw-text-2xl tw-font-bold tw-my-2 lg:tw-text-5xl lg:tw-pr-40 lg:tw-mt-4">
            {m("banner.title")}
          </h1>
          <div className="tw-text-sm tw-text-[#666] lg:tw-hidden">
            {m("banner.content")}
          </div>
          <Link
            href={"/contact-sales"}
            target="_blank"
            rel="noreferrer noopener canonical"
            className="tw-block tw-text-white tw-font-medium tw-py-3 tw-px-5 tw-rounded-lg tw-bg-[#F57C00] tw-w-max tw-no-underline tw-text-sm tw-mt-4 lg:tw-hidden"
          >
            {m("banner.contact")}
          </Link>
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Image_27929382ad.png"
            alt="banner"
            width={537}
            height={496}
            className="tw-mt-4 lg:tw-hidden"
          />
          <div className="tw-hidden lg:tw-block tw-relative tw-mt-6">
            <div className="tw-flex tw-gap-16">
              <div className="tw-max-w-[339px]">
                <div className="tw-text-base tw-text-[#666] ">
                  {m("banner.content")}
                </div>
                <Link
                  href={"/contact-sales"}
                  target="_blank"
                  rel="noreferrer noopener canonical"
                  className="tw-block tw-text-white tw-font-medium tw-py-4 tw-px-12 tw-rounded-lg tw-bg-[#F57C00] tw-no-underline tw-mt-10 tw-w-max"
                >
                  {m("banner.contact")}
                </Link>
              </div>
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_1171275909_6ab0b8158f.png"
                alt="banner"
                width={790}
                height={475}
                className=""
              />
            </div>
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Fulfillment_process_58bf65b04d.png"
              alt="banner"
              width={399}
              height={263}
              className="tw-absolute tw-left-[8%] tw-bottom-[-12%]"
            />
          </div>
        </div>
      </div>
      <div className="tw-mt-8 tw-mb-6 lg:tw-my-20 tw-px-4 lg:tw-flex tw-justify-between tw-items-center lg:tw-container">
        <div>
          <div className="tw-text-sm tw-text-[#F57C00] tw-font-bold lg:tw-text-lg">
            {m("byTheNumber.label")}
          </div>
          <h2 className="tw-mt-1 tw-font-bold tw-text-2xl lg:tw-text-4xl">
            {m("byTheNumber.title")}
          </h2>
        </div>
        <div className="tw-grid tw-grid-cols-2 tw-mt-5 tw-gap-2 lg:tw-gap-6">
          {(
            m("byTheNumber.items", {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              className={clsx(
                "tw-p-3 tw-rounded-xl lg:tw-flex tw-gap-5 lg:tw-p-5 lg:tw-pr-15",
                `tw-bg-[${value.bg}]`,
              )}
              key={index}
            >
              <Image
                src={value.icon}
                alt={value.title}
                width={44}
                height={44}
                className="tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)] lg:tw-w-[80px] tw-rounded-lg"
              />
              <div>
                <div className="tw-font-bold tw-mt-4 lg:tw-text-3xl">
                  {value.title}
                </div>
                <div className="tw-mt-1 tw-text-sm tw-font-medium lg:tw-text-base">
                  {value.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerMarketingTeam;
