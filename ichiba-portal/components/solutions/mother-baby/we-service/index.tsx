import bgWeService from "@/public/images/mother-baby/bgWeService.svg";
import imgVid from "@/public/images/mother-baby/imgVid.svg";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import SvgIcon from "@/components/common/SvgIcon";
import { useTranslation } from "next-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WeService() {
  const { t } = useTranslation("mother-baby");

  const items = [
    {
      title: t("weService.content.0.title"),
      content: [
        {
          icon: "svg-icon-users",
          itemContent: [
            t("weService.content.0.items.0.contentItem.0"),
            t("weService.content.0.items.0.contentItem.1"),
          ],
        },
        {
          icon: "svg-icon-items",
          itemContent: [
            t("weService.content.0.items.1.contentItem.0"),
            t("weService.content.0.items.1.contentItem.1"),
          ],
        },
      ],
      des: t("weService.content.0.des"),
      nameUser: "Mr. Nam Tran",
      career: t("weService.content.0.career"),
      img: imgVid,
    },
    {
      title: "Shopforme",
      content: [
        {
          icon: "svg-icon-users",
          itemContent: [
            t("weService.content.1.items.0.contentItem.0"),
            t("weService.content.1.items.0.contentItem.1"),
          ],
        },
        {
          icon: "svg-icon-items",
          itemContent: [
            t("weService.content.1.items.1.contentItem.0"),
            t("weService.content.1.items.1.contentItem.1"),
          ],
        },
      ],
      des: t("weService.content.1.des"),
      nameUser: "Mr. Nam Tran",
      career: t("weService.content.1.career"),
      img: imgVid,
    },
  ];
  const [itemDetail, setItem] = useState(items[0] as any);
  const [rotateChevron, setRotateChevron] = useState(false);
  const rotate = rotateChevron === true ? "rotate(0deg)" : "rotate(180deg)";

  return (
    <div
      style={{
        backgroundImage: `url(${bgWeService.src})`,
      }}
      className="tw-py-6 lg:tw-pt-15 lg:tw-pb-20 tw-bg-no-repeat tw-object-cover"
    >
      <div className="tw-container tw-grid tw-gap-4 lg:tw-gap-15">
        <div className="lg:tw-w-[60%] tw-text-center tw-mx-auto">
          <h2 className="tw-mb-2 tw-text-2xl tw-leading-8 lg:tw-text-4xl lg:tw-leading-[48px] tw-font-bold">
            {t("weService.heading")}
          </h2>
          <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
            {t("weService.subHeading")}
          </p>
        </div>

        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-4 lg:tw-gap-15">
          <div className="lg:tw-w-[30%]">
            {items.map((item: any, index: number) =>
              itemDetail.title === item.title ? (
                <div key={index}>
                  <div className="tw-px-4 tw-py-3 lg:tw-p-6 tw-rounded-lg tw-border tw-border-[#F57C00] tw-bg-white tw-overflow-hidden tw-mb-4 lg:tw-mb-0">
                    <div className="tw-flex tw-items-center tw-justify-between">
                      <div className="tw-flex tw-items-center">
                        <div
                          className={clsx(
                            "tw-text-base tw-leading-6 tw-font-bold tw-text-contact",
                            "lg:tw-text-xl lg:tw-leading-7 tw-uppercase tw-text-[#F57C00]",
                          )}
                        >
                          {item.title}
                        </div>
                      </div>
                      <div>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="tw-w-3 tw-h-3 lg:tw-w-5 lg:tw-h-5 tw-text-[#F57C00]"
                          style={{
                            transform: rotate,
                            transition: "all 0.2s linear",
                          }}
                        />
                      </div>
                    </div>
                    <div className="">
                      <p className="tw-mb-3 lg:tw-mb-5 tw-text-xs lg:tw-text-sm">
                        {item.title}
                      </p>
                      <div className="tw-flex tw-flex-row lg:tw-flex-col tw-gap-5">
                        {item.content.map((value: any, index: number) => (
                          <div
                            key={index}
                            className="tw-flex tw-gap-2 lg:tw-gap-4 "
                          >
                            <div
                              className={clsx(
                                "tw-w-9 tw-h-9 lg:tw-w-12 lg:tw-h-12",
                                "tw-flex tw-items-center tw-justify-center tw-bg-ic-black-1 tw-rounded-lg",
                              )}
                            >
                              <SvgIcon
                                icon={value.icon}
                                width={20}
                                height={20}
                                className="lg:tw-hidden"
                              />
                              <SvgIcon
                                icon={value.icon}
                                width={24}
                                height={24}
                                className="tw-hidden lg:tw-block"
                              />
                            </div>
                            <div>
                              <p className="tw-mb-0 tw-text-sm lg:tw-text-lg tw-font-bold">
                                {value.itemContent[0]}
                              </p>
                              <p className="tw-mb-0 tw-text-xs lg:tw-text-sm">
                                {value.itemContent[1]}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.11)",
                    }}
                    className="lg:tw-w-[70%] tw-rounded-lg lg:tw-rounded-3xl lg:tw-hidden"
                  >
                    <div
                      className={clsx(
                        "tw-flex tw-flex-col lg:tw-flex-row tw-gap-5 lg:tw-gap-10",
                        "tw-w-full tw-h-full tw-rounded-lg lg:tw-rounded-3xl",
                        "tw-pt-3 tw-px-4 tw-pb-4 lg:tw-px-7 lg:tw-py-6 tw-bg-white",
                      )}
                    >
                      <div className="tw-flex tw-flex-col tw-gap-4 lg:tw-gap-5">
                        <p className="tw-mb-0">{itemDetail.des}</p>
                        <div className="tw-border-l-[2px] tw-border-[#333] tw-pl-2 lg:tw-pl-4 tw-rounded-[1px]">
                          <p className="tw-mb-0 tw-text-sm lg:tw-text-base tw-font-bold">
                            {itemDetail.nameUser}
                          </p>
                          <p className="tw-mb-0 tw-text-xs lg:tw-text-sm tw-font-medium">
                            {itemDetail.career}
                          </p>
                        </div>
                      </div>
                      <div className="tw-relative lg:tw-min-w-[280px] tw-h-full tw-w-full tw-rounded-lg lg:tw-rounded-2xl tw-overflow-hidden">
                        <Image
                          src={itemDetail.img}
                          alt={itemDetail.img}
                          className="tw-h-full tw-w-full tw-object-cover"
                        />
                        <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-[#00000066]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className={clsx(
                    "tw-flex tw-items-center tw-justify-between tw-px-4 tw-pt-3 lg:tw-p-6 tw-cursor-pointer tw-mb-3 lg:tw-mb-0",
                    items.indexOf(itemDetail) !== (index + 1 || index - 1) &&
                      "tw-border-b tw-border-[#ddd]",
                  )}
                  onClick={() => setItem(item)}
                >
                  <div className="tw-flex tw-items-center">
                    <div
                      className={clsx(
                        "tw-text-base tw-leading-6 tw-font-bold tw-text-contact",
                        "lg:tw-text-xl lg:tw-leading-7 tw-uppercase",
                      )}
                    >
                      {item.title}
                    </div>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="tw-w-3 tw-h-3 lg:tw-w-5 lg:tw-h-5"
                    />
                  </div>
                </div>
              ),
            )}
          </div>
          <div
            style={{
              boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.11)",
            }}
            className="lg:tw-w-[70%] tw-rounded-lg lg:tw-rounded-3xl tw-hidden lg:tw-block"
          >
            <div
              className={clsx(
                "tw-flex tw-flex-col lg:tw-flex-row tw-gap-5 lg:tw-gap-10",
                "tw-w-full tw-h-full tw-rounded-lg lg:tw-rounded-3xl",
                "tw-pt-3 tw-px-4 tw-pb-4 lg:tw-px-7 lg:tw-py-6 tw-bg-white",
              )}
            >
              <div className="tw-flex tw-flex-col tw-gap-4 lg:tw-gap-5">
                <p className="tw-mb-0">{itemDetail.des}</p>
                <div className="tw-border-l-[2px] tw-border-[#333] tw-pl-2 lg:tw-pl-4 tw-rounded-[1px]">
                  <p className="tw-mb-0 tw-text-sm lg:tw-text-base tw-font-bold">
                    {itemDetail.nameUser}
                  </p>
                  <p className="tw-mb-0 tw-text-xs lg:tw-text-sm tw-font-medium">
                    {itemDetail.career}
                  </p>
                </div>
              </div>
              <div className="tw-relative lg:tw-min-w-[280px] tw-h-full tw-w-full tw-rounded-lg lg:tw-rounded-2xl tw-overflow-hidden">
                <Image
                  src={itemDetail.img}
                  alt={itemDetail.img}
                  className="tw-h-full tw-w-full tw-object-cover"
                />
                <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-[#00000066]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
