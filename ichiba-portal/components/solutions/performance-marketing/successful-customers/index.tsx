import successfulCustomers from "@/public/solutions/performance-marketing/successful-customers.png";
import avatar from "@/public/solutions/performance-marketing/avatar.png";
import clsx from "clsx";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export const SuccessfulCustomers = () => {
  const { t } = useTranslation("performance-marketing");
  const opinions = [
    {
      title: "IChiba OnePlatform completely solved my worry named “Delivery”. ",
      colorText: "tw-text-blue-6",
      content: [
        t("successfulCustomers.items.0.content.0"),
        t("successfulCustomers.items.0.content.1"),
      ],
      avatar: avatar,
      author: t("successfulCustomers.items.0.author"),
      career: t("successfulCustomers.items.0.career"),
    },
    {
      title: "IChiba OnePlatform completely solved my worry named “Delivery”. ",
      colorText: "tw-text-green-6",
      content: [
        t("successfulCustomers.items.1.content.1"),
        t("successfulCustomers.items.1.content.1"),
      ],
      avatar: avatar,
      author:  t("successfulCustomers.items.1.author"),
      career:  t("successfulCustomers.items.1.career"),
    },
  ];

  return (
    <section className="tw-container tw-mb-6 lg:tw-mb-20">
      <h2 className="tw-mb-4 lg:tw-mb-10 tw-text-2xl lg:tw-text-4xl tw-font-bold">
        {t("successfulCustomers.title")}
      </h2>

      <div className="tw-grid lg:tw-grid-cols-2 tw-gap-4 lg:tw-gap-0">
        <div className="lg:tw-pr-15 tw-max-w-[632px] tw-w-full lg:tw-max-h-[632px] tw-h-full tw-mx-auto">
          <div className="tw-relative tw-rounded-lg lg:tw-rounded-2xl tw-overflow-hidden tw-w-full">
            <Image
              src={successfulCustomers}
              alt="successfulCustomers"
              className="tw-w-full tw-h-full"
            />
            <div
              className={clsx(
                "tw-pt-4 tw-px-6 lg:tw-pt-8 lg:tw-px-10",
                "tw-absolute tw-top-0 lef tw-w-full tw-h-full",
                "tw-bg-gradient-to-b tw-from-[#000000]",
              )}
            >
              <p className="tw-mb-0 tw-text-sm lg:tw-text-lg tw-text-ic-white-5">
                Our awesome customers have benefited from IChiba's
                hyper-scalability to connect to some game-changing tools. Check
                out some examples below – and get inspired about what you could
                achieve.
              </p>
            </div>
          </div>
        </div>

        <div className="tw-w-full tw-flex tw-flex-col lg:tw-justify-between">
          {opinions.map((item, index) => {
            return (
              <div key={index}>
                <div>
                  <div className="tw-mb-4 lg:tw-mb-5">
                    <p
                      className={clsx(
                        item.colorText,
                        "tw-mb-2 tw-text-base tw-font-bold lg:tw-text-lg",
                      )}
                    >
                      {item.title}
                    </p>
                    <p className="tw-mb-0 tw-text-sm lg:tw-text-base lg:tw-pb-4">
                      {item.content[0]}
                    </p>
                    <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
                      {item.content[1]}
                    </p>
                  </div>
                  <div className="tw-flex tw-gap-3 lg:tw-gap-4 tw-items-center">
                    <div className="tw-w-9 tw-h-9 lg:tw-w-11 lg:tw-h-tw-w-11 tw-rounded-full tw-overflow-hidden">
                      <Image
                        src={item.avatar}
                        alt="avatar"
                        className="tw-w-full tw-h-full"
                      />
                    </div>
                    <div>
                      <p className="tw-mb-0 tw-text-sm lg:tw-text-base tw-font-bold">
                        {item.author}
                      </p>
                      <p className="tw-mb-0 tw-text-ic-black-5 tw-text-xs lg:tw-text-sm">
                        {item.career}
                      </p>
                    </div>
                  </div>
                </div>

                <hr
                  className={clsx(
                    "tw-my-4",
                    index === opinions.length - 1 ? "tw-hidden" : "",
                  )}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
