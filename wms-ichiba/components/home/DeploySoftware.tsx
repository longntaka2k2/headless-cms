/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import clsx from "clsx";
import logo from "@/public/icons/Logo.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DeploySoftware() {
  const steps = [
    {
      title: "Tìm hiểu nhu cầu và khó khăn",
      subTitle:
        "Ghi nhận mục tiêu và yêu cầu cụ thể của doanh nghiệp và phần mềm.",
    },
    {
      title: "Phân tích và tư vấn giải pháp",
      subTitle:
        "Chuyên gia của IChiba phân tích các vấn đề mà khách hàng gặp phải và đưa ra bộ giải pháp phù hợp.",
    },
    {
      title: "Demo giải pháp",
      subTitle:
        "Đội ngũ triển khai thực hiện demo giải pháp phần mềm với doanh nghiệp và trao đổi thêm thông tin.",
    },
    {
      title: "Thực hiện triển khai",
      subTitle:
        "Hỗ trợ cài đặt phần mềm và đào tạo chuyên sâu về sử dụng phần mềm.",
    },
    {
      title: "Hỗ trợ lâu dài",
      subTitle:
        "IChiba WMS sẽ liên tục cập nhật phần mềm định kỳ để đảm bảo phục vụ tốt nhất cho khách hàng.",
    },
  ];

  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFocusIndex((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="tw-bg-[linear-gradient(180deg,_#FFF_44.17%,_rgba(164,_203,_255,_0.50)_167.32%)] tw-px-4 lg:tw-px-0 tw-pt-6 tw-pb-10 lg:tw-pt-15 lg:tw-pb-20 tw-overflow-hidden">
        <div className="tw-container">
          <h2 className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-text-center tw-mb-6 lg:tw-mb-[73px]">
            Yên tâm triển khai phần mềm với sự hỗ trợ 1-1 từ chuyên gia
          </h2>
          <div className="xl:tw-hidden">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Frame_1171276795_b4a36750ca.png"
              }
              width={390}
              height={487}
              alt="IChiba"
              className="tw-mx-auto"
            />
            <div className="tw-relative tw-grid tw-gap-4">
              {steps.map((item, idx) => (
                <div
                  key={idx}
                  className="tw-flex tw-items-center tw-gap-15 tw-z-1"
                >
                  <div
                    className={clsx(
                      "tw-w-full tw-max-w-[48px] tw-h-12 tw-bg-white tw-border-[6px] tw-rounded-full",
                      "tw-text-2xl tw-font-bold tw-flex tw-items-center tw-justify-center",
                      idx === focusIndex
                        ? "tw-border-brand-primary tw-text-brand-primary"
                        : "tw-border-[#DDD] tw-text-gray-400",
                    )}
                  >
                    {idx + 1}
                  </div>
                  <div>
                    <h3
                      className={clsx(
                        "tw-text-base tw-font-bold tw-mb-2",
                        idx === focusIndex
                          ? "tw-text-brand-primary"
                          : "tw-text-gray-800",
                      )}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={clsx(
                        "tw-text-sm tw-mb-0",
                        idx === focusIndex
                          ? "tw-font-medium"
                          : "tw-font-normal",
                      )}
                    >
                      {item.subTitle}
                    </p>
                  </div>
                </div>
              ))}

              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Line_36_3a3f76d9fd.svg"
                }
                width={2}
                height={478}
                alt="dashed"
                className="tw-absolute tw-top-0 tw-left-6 tw-h-full tw-z-0"
              />
            </div>
          </div>

          <div className="tw-hidden xl:tw-flex">
            <div className="tw-relative">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Group_1171276347_0537b3eae8.png"
                }
                width={748}
                height={750}
                alt="IChiba"
                className="tw-mr-auto"
              />
              <div
                className={clsx(
                  "tw-absolute -tw-right-[40%] 2xl:-tw-right-[42%] tw-top-0",
                  "tw-flex tw-items-center tw-gap-15 tw-z-1",
                )}
              >
                <div
                  className={clsx(
                    "tw-w-full tw-max-w-[80px] tw-h-20 tw-bg-white tw-border-[10px] tw-rounded-full",
                    "tw-text-[30px] tw-font-bold tw-flex tw-items-center tw-justify-center",
                    focusIndex === 0
                      ? "tw-border-brand-primary tw-text-brand-primary"
                      : "tw-border-[#DDD] tw-text-gray-400",
                  )}
                >
                  {1}
                </div>
                <div className="tw-w-[400px] 2xl:tw-w-[420px]">
                  <h3
                    className={clsx(
                      "tw-text-2xl tw-font-bold tw-mb-2",
                      focusIndex === 0
                        ? "tw-text-brand-primary"
                        : "tw-text-gray-800",
                    )}
                  >
                    {steps[0].title}
                  </h3>
                  <p
                    className={clsx(
                      "tw-text-base tw-mb-0",
                      focusIndex === 1 ? "tw-font-medium" : "tw-font-normal",
                    )}
                  >
                    {steps[0].subTitle}
                  </p>
                </div>
              </div>

              <div
                className={clsx(
                  "tw-absolute -tw-right-[55%] 2xl:-tw-right-[58%] tw-top-[17%]",
                  "tw-flex tw-items-center tw-gap-15 tw-z-1",
                )}
              >
                <div
                  className={clsx(
                    "tw-w-full tw-max-w-[80px] tw-h-20 tw-bg-white tw-border-[10px] tw-rounded-full",
                    "tw-text-[30px] tw-font-bold tw-flex tw-items-center tw-justify-center",
                    focusIndex === 1
                      ? "tw-border-brand-primary tw-text-brand-primary"
                      : "tw-border-[#DDD] tw-text-gray-400",
                  )}
                >
                  {2}
                </div>
                <div className="tw-w-[400px] 2xl:tw-w-[420px]">
                  <h3
                    className={clsx(
                      "tw-text-2xl tw-font-bold tw-mb-2",
                      focusIndex === 1
                        ? "tw-text-brand-primary"
                        : "tw-text-gray-800",
                    )}
                  >
                    {steps[1].title}
                  </h3>
                  <p
                    className={clsx(
                      "tw-text-base tw-mb-0",
                      focusIndex === 1 ? "tw-font-medium" : "tw-font-normal",
                    )}
                  >
                    {steps[1].subTitle}
                  </p>
                </div>
              </div>

              <div
                className={clsx(
                  "tw-absolute -tw-right-[60%] 2xl:-tw-right-[63%] tw-top-[44%] tw-translate-y-[-44%]",
                  "tw-flex tw-items-center tw-gap-15 tw-z-1",
                )}
              >
                <div
                  className={clsx(
                    "tw-w-full tw-max-w-[80px] tw-h-20 tw-bg-white tw-border-[10px] tw-rounded-full",
                    "tw-text-[30px] tw-font-bold tw-flex tw-items-center tw-justify-center",
                    focusIndex === 2
                      ? "tw-border-brand-primary tw-text-brand-primary"
                      : "tw-border-[#DDD] tw-text-gray-400",
                  )}
                >
                  {3}
                </div>
                <div className="tw-w-[400px] 2xl:tw-w-[420px]">
                  <h3
                    className={clsx(
                      "tw-text-2xl tw-font-bold tw-mb-2",
                      focusIndex === 2
                        ? "tw-text-brand-primary"
                        : "tw-text-gray-800",
                    )}
                  >
                    {steps[2].title}
                  </h3>
                  <p
                    className={clsx(
                      "tw-text-base tw-mb-0",
                      focusIndex === 2 ? "tw-font-medium" : "tw-font-normal",
                    )}
                  >
                    {steps[2].subTitle}
                  </p>
                </div>
              </div>

              <div
                className={clsx(
                  "tw-absolute -tw-right-[56%] 2xl:-tw-right-[58%] tw-bottom-[27%]",
                  "tw-flex tw-items-center tw-gap-15 tw-z-1",
                )}
              >
                <div
                  className={clsx(
                    "tw-w-full tw-max-w-[80px] tw-h-20 tw-bg-white tw-border-[10px] tw-rounded-full",
                    "tw-text-[30px] tw-font-bold tw-flex tw-items-center tw-justify-center",
                    focusIndex === 3
                      ? "tw-border-brand-primary tw-text-brand-primary"
                      : "tw-border-[#DDD] tw-text-gray-400",
                  )}
                >
                  {4}
                </div>
                <div className="tw-w-[400px] 2xl:tw-w-[420px]">
                  <h3
                    className={clsx(
                      "tw-text-2xl tw-font-bold tw-mb-2",
                      focusIndex === 3
                        ? "tw-text-brand-primary"
                        : "tw-text-gray-800",
                    )}
                  >
                    {steps[3].title}
                  </h3>
                  <p
                    className={clsx(
                      "tw-text-base tw-mb-0",
                      focusIndex === 3 ? "tw-font-medium" : "tw-font-normal",
                    )}
                  >
                    {steps[3].subTitle}
                  </p>
                </div>
              </div>

              <div
                className={clsx(
                  "tw-absolute -tw-right-[40%] 2xl:-tw-right-[42%] tw-bottom-11",
                  "tw-flex tw-items-center tw-gap-15 tw-z-1",
                )}
              >
                <div
                  className={clsx(
                    "tw-w-full tw-max-w-[80px] tw-h-20 tw-bg-white tw-border-[10px] tw-rounded-full",
                    "tw-text-[30px] tw-font-bold tw-flex tw-items-center tw-justify-center",
                    focusIndex === 4
                      ? "tw-border-brand-primary tw-text-brand-primary"
                      : "tw-border-[#DDD] tw-text-gray-400",
                  )}
                >
                  {5}
                </div>
                <div className="tw-w-[400px] 2xl:tw-w-[420px]">
                  <h3
                    className={clsx(
                      "tw-text-2xl tw-font-bold tw-mb-2",
                      focusIndex === 4
                        ? "tw-text-brand-primary"
                        : "tw-text-gray-800",
                    )}
                  >
                    {steps[4].title}
                  </h3>
                  <p
                    className={clsx(
                      "tw-text-base tw-mb-0",
                      focusIndex === 4 ? "tw-font-medium" : "tw-font-normal",
                    )}
                  >
                    {steps[4].subTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
