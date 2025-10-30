import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

const BannerLogistics = () => {
  const l = useTranslation("logistics-company").t;

  return (
    <div className="">
      <div
        className={clsx(
          " tw-bg-cover tw-center tw-py-6 tw-px-4 lg:tw-pt-[96px]",
          "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171276459_1_00569c9bfa.png)]",
          "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171275922_2154ae50b1.png)]"
        )}
      >
        <div className="lg:tw-max-w-[1092px] tw-mx-auto lg:tw-text-center">
          <h1 className="tw-text-2xl tw-font-bold lg:tw-text-5xl ">
            {l("banner.title.0")}
            <span className="tw-text-[#F57C00]">{l("banner.title.1")}</span>
            {l("banner.title.2")}
          </h1>
          <div className="tw-mt-4 lg:tw-mt-10 tw-text-sm lg:tw-text-base">{l("banner.content")}</div>
          <Link
            href={"/contact-sales"}
            className="tw-text-white tw-font-medium tw-py-3 tw-px-8 tw-text-sm lg:tw-text-base tw-max-w-[200px] tw-text-center tw-mt-4 tw-bg-[#F57C00] tw-rounded-lg tw-no-underline tw-block lg:tw-mx-auto"
          >
            {l("banner.contact")}
          </Link>
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Frame_427318531_e747558b23.png"
            }
            alt=""
            className="tw-mt-[137px] lg:tw-hidden"
            width={537}
            height={249}
          />
           <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Frame_427318530_2e954bc0d5.png"
            }
            alt=""
            className="tw-mt-10 lg:tw-block tw-hidden"
            width={1092}
            height={492}
          />
        </div>
      </div>
        <div className="tw-grid tw-grid-cols-2 tw-gap-5 tw-pb-6 lg:tw-pb-15 tw-px-4 lg:tw-grid-cols-4 lg:tw-container">
          {(
            l("banner.items", {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div className="tw-flex tw-gap-3" key={index}>
              <div className="tw-h-full tw-w-1 tw-bg-[linear-gradient(180deg,#1369FE_0%,#47C4FF_100%)]"></div>
              <div>
                <div className="tw-text-lg tw-font-bold lg:tw-text-3xl">{value.title}</div>
                <div className="tw-text-sm tw-font-medium lg:tw-text-base lg:tw-mt-2">
                  {(
                    l(`banner.items.${index}.content`, {
                      returnObjects: true,
                    }) as string[]
                  ).map((item: any, i: number) => (
                    <div className="tw-text-sm" key={i}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default BannerLogistics;
