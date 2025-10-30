import Button from "@/components/core/button";
import Image from "next/image";
import React from "react";
import { contentItems } from "./dataset";
import { useTranslation } from "next-i18next";
import { Language } from "@/const/language";

const SourceOfTrust = () => {
  const { t, i18n } = useTranslation("pim");

  const lang = i18n.language as Language;

  return (
    <div className="tw-relative tw-text-sm lg:tw-text-base">
      <div className="tw-text-white tw-bg-[#00194F] tw-pt-6 lg:tw-pt-15">
        <div className="container">
          <div className="tw-flex tw-flex-col">
            <h4 className="tw-mb-0 tw-text-2xl lg:tw-text-4xl tw-text-center tw-font-bold">
              {t("sourceOfTrustTitle")}
            </h4>
            <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-6 tw-mt-12 lg:tw-mt-20 tw-mb-8">
              {contentItems[lang].map((item, index) => (
                <div
                  className="tw-px-0.5 tw-pt-0.5 tw-shadow-10 tw-rounded-t-2xl"
                  key={index}
                  style={{
                    background:
                      "linear-gradient(0deg, #00194F 0%, #294583 100%)",
                  }}
                >
                  <div className="tw-flex tw-flex-col tw-px-[26px] tw-pt-[18px] tw-pb-8 tw-text-center tw-items-center tw-relative tw-bg-[#00194F] tw-h-full tw-rounded-t-2xl">
                    <div className="tw-w-10 tw-h-10 sm:tw-w-14 sm:tw-h-14 lg:tw-w-20 lg:tw-h-20 tw-rounded-full tw-absolute tw-top-0 -tw-translate-y-1/2">
                      <div className="tw-relative tw-w-full tw-h-full">
                        <Image fill src={item.icon} alt="sourceOfTrustTitle" />
                      </div>
                    </div>
                    <span className="tw-mt-9 tw-text-xl tw-font-bold">
                      {item.title}
                    </span>
                    <span className="tw-mt-3">{item.content}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="tw-relative">
        <div className="container tw-relative tw-z-1">
          <div
            style={{
              boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.11)",
            }}
            className="tw-py-5 lg:tw-py-10 tw-px-4 lg:tw-pr-10 lg:tw-pl-[100px] tw-bg-white tw-rounded-3xl tw-overflow-hidden tw-gap-1.5 tw-flex tw-flex-col lg:tw-flex-row tw-items-start lg:tw-items-center tw-relative"
          >
            <div className="tw-flex-1 tw-overflow-hidden tw-w-full">
              <div className="tw-flex tw-flex-col tw-gap-4 tw-w-max tw-max-w-full">
                <div className="tw-w-max tw-max-w-full">
                  <span className="tw-text-base lg:tw-text-2xl tw-font-bold tw-break-words">
                    {t("sourceOfTrustSubtitle")}
                  </span>
                </div>
                <div className="tw-flex-1 tw-flex lg:tw-w-min tw-min-w-full">
                  {t("sourceOfTrustDesc")}
                </div>
              </div>
            </div>
            <div className="tw-flex tw-justify-end tw-mt-5 lg:tw-mt-0">
              <a
                target="_blank"
                rel="noreferrer nofollow"
                href="https://org.ichiba.net/"
                className=" tw-min-w-[160px] lg:tw-min-w-[200px] tw-font-medium tw-rounded-lg tw-mt-6 tw-text-white tw-py-2.5 lg:tw-py-3 tw-bg-brand-primary tw-no-underline tw-text-center"
              >
                {t("startFreeTrial")}
              </a>
            </div>
            <div className="tw-absolute lg:tw-left-[-18px] lg:tw-bottom-auto lg:tw-right-auto -tw-bottom-3 -tw-right-4">
              <div className="tw-relative tw-w-15 lg:tw-w-24 tw-h-15 lg:tw-h-24">
                <Image
                  className=""
                  alt="pim.ichiba.net"
                  src="/icons/pim/logo.svg"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
        <div className="tw-absolute tw-top-0 tw-inset-x-0 tw-h-1/2 tw-bg-[#00194F]" />
      </div>
    </div>
  );
};

export default SourceOfTrust;
