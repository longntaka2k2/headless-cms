import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SeeWhatRetailers() {
  const { t } = useTranslation("retail");

  const items = [
    {
      avatar: t("seeWhat.items.0.avatar"),
      nameUser: t("seeWhat.items.0.name"),
      content: t("seeWhat.items.0.content"),
      career: t("seeWhat.items.0.bio"),
      img: t("seeWhat.items.0.image"),
    },
    {
      avatar: t("seeWhat.items.1.avatar"),
      nameUser: t("seeWhat.items.1.name"),
      content: t("seeWhat.items.1.content"),
      career: t("seeWhat.items.1.bio"),
      img: t("seeWhat.items.1.image"),
    },
    {
      avatar: t("seeWhat.items.2.avatar"),
      nameUser: t("seeWhat.items.2.name"),
      content: t("seeWhat.items.2.content"),
      career: t("seeWhat.items.2.bio"),
      img: t("seeWhat.items.2.image"),
    },
  ];
  const [itemDetail, setItem] = useState(items[0] as any);
  return (
    <div className="tw-relative tw-py-6 lg:tw-py-15">
      <div
        className={clsx(
          "tw-absolute tw-right-[5%] tw-top-[30%] -tw-z-1",
          "tw-w-[783px] tw-h-[363px] tw-hidden lg:tw-block",
        )}
      >
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Background_e7a2d542d9.svg"
          alt="background"
          width={783}
          height={364}
          className="tw-h-full tw-w-full tw-object-cover"
        />
      </div>
      <div className="tw-container tw-grid tw-gap-4 lg:tw-gap-15">
        <h2
          className={clsx(
            "lg:tw-w-[60%] tw-text-center tw-mx-auto",
            "tw-mb-0 tw-text-2xl tw-leading-8 lg:tw-text-4xl lg:tw-leading-[48px] tw-font-bold",
          )}
        >
          {t("seeWhat.title")}
        </h2>

        <div className="tw-flex tw-flex-col lg:tw-flex-row lg:tw-justify-between tw-gap-4 lg:tw-gap-15">
          <div className="lg:tw-w-[50%] tw-flex tw-flex-col lg:tw-gap-3">
            {items.map((item, index) =>
              itemDetail.nameUser === item.nameUser ? (
                <div key={index}>
                  <div
                    style={{
                      background:
                        "linear-gradient(to bottom, #F57C003D, #0246AF3D)",
                    }}
                    className="tw-relative tw-h-[190px] sm:tw-h-[150px] lg:tw-h-[192px] tw-rounded-lg tw-p-[2px] lg:tw-mr-2"
                  >
                    <div className="tw-relative tw-w-full tw-h-full">
                      <div
                        style={{
                          borderRadius: "8px",
                          boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.05)",
                        }}
                        className={clsx(
                          "tw-absolute tw-w-full tw-h-full",
                          "tw-rounded-lg tw-bg-white tw-flex tw-flex-col tw-justify-between",
                          "tw-px-4 tw-py-3 lg:tw-p-6 tw-mb-4 lg:tw-mb-0",
                        )}
                      >
                        <p className="tw-mb-0 lg:tw-mb-5 tw-text-sm lg:tw-text-base tw-font-medium">
                          {item.content}
                        </p>
                        <div className="tw-flex tw-gap-5 tw-items-center">
                          <div className="tw-w-16 tw-h-16 tw-rounded-full tw-overflow-hidden">
                            <Image
                              src={item.img}
                              alt={item.img}
                              width={64}
                              height={64}
                              className="tw-h-full tw-w-full tw-object-cover"
                            />
                          </div>
                          <div className="">
                            <p className="tw-mb-0 tw-text-sm lg:tw-text-base tw-font-bold">
                              {item.nameUser}
                            </p>
                            <p className="tw-mb-0 tw-text-xs lg:tw-text-sm tw-font-medium">
                              {item.career}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.11)",
                      }}
                      className={clsx(
                        "tw-absolute tw-right-[46%] tw-translate-x-[-46%] tw-bottom-[-14px] tw-bg-white",
                        "lg:tw-top-[45%] lg:tw-translate-x-[-45%] lg:tw-right-[-26px]",
                        "tw-w-8 tw-h-8 tw-flex tw-items-center tw-justify-center tw-rounded-full",
                      )}
                    >
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="tw-w-[10px] tw-h-[10px] tw-text-ic-black-6 lg:-tw-rotate-90"
                      />
                    </div>
                  </div>

                  <div className="lg:tw-w-[70%] lg:tw-hidden tw-mt-6 tw-mb-4">
                    <div
                      className={clsx(
                        "tw-relative tw-max-w-[358px] tw-max-h-[307px] tw-h-full tw-w-full",
                        "lg:tw-max-w-[574px] lg:tw-max-h-[493px] w-rounded-lg lg:tw-rounded-2xl tw-overflow-hidden tw-mx-auto",
                      )}
                    >
                      <Image
                        src={itemDetail.img}
                        alt={itemDetail.img}
                        width={598}
                        height={519}
                        className="tw-w-full tw-h-full"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  style={{
                    boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.05)",
                  }}
                  className={clsx(
                    "tw-cursor-pointer tw-border tw-border-ic-black-1",
                    "tw-px-4 tw-pt-3 lg:tw-p-6 tw-mb-3 lg:tw-mb-0 tw-rounded-lg",
                  )}
                  onClick={() => setItem(item)}
                >
                  <div className="tw-flex tw-gap-5 tw-items-center">
                    <div className="tw-w-16 tw-h-16 tw-rounded-full tw-overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.img}
                        width={64}
                        height={64}
                        className="tw-h-full tw-w-full tw-object-cover"
                      />
                    </div>
                    <div className="">
                      <p className="tw-mb-0 tw-text-sm lg:tw-text-base tw-font-bold">
                        {item.nameUser}
                      </p>
                      <p className="tw-mb-0 tw-text-xs lg:tw-text-sm tw-font-medium">
                        {item.career}
                      </p>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
          <div
            style={{
              boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.11)",
            }}
            className="lg:tw-w-[40%] tw-rounded-lg lg:tw-rounded-3xl tw-hidden lg:tw-block"
          >
            <div className={clsx("tw-w-full tw-h-full")}>
              <div className="tw-relative lg:tw-min-w-[280px] tw-h-full tw-w-full tw-rounded-lg lg:tw-rounded-2xl tw-overflow-hidden tw-mx-auto">
                <Image
                  src={itemDetail.img}
                  alt={itemDetail.img}
                  width={598}
                  height={519}
                  className="tw-h-full tw-w-full tw-object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
