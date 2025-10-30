/* eslint-disable @next/next/link-passhref */
import { clsx } from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";

export default function UseCase() {
  const n = useTranslation("new-home-page").t;
  const [isVisible, setVisible] = useState(false);
  const router = useRouter();
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 / 5 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  return (
    <div
      ref={elementRef}
      className={clsx(
        "tw-transition-all tw-duration-500 tw-delay-400",
        isVisible
          ? "tw-translate-y-0 tw-opacity-100"
          : "tw-opacity-0 tw-translate-y-14",
      )}
    >
      <div className="tw-bg-[#05102A] tw-px-4 tw-py-6 tw-bg-[url(https://cms-strapi.ichiba.net/uploads/dd_8ce142ab01.png)] tw-bg-cover tw-text-white">
        <div className="tw-flex tw-gap-2 tw-items-center">
          <div className="tw-w-[10px] tw-h-[10px] tw-bg-[#1E88E5]"></div>
          <div className="">
            <div className="tw-text-xl tw-font-bold">
              {n("forTeam.useCases.label")}
            </div>
          </div>
        </div>
        <div className="tw-ml-5 tw-text-sm tw-mt-1 tw-opacity-80">
          {n("forTeam.useCases.content")}
        </div>
      </div>
      <div className="tw-mt-6 tw-mx-4">
        <div className="tw-grid tw-grid-cols-2 tw-gap-4">
          <div className="tw-grid tw-gap-4">
            <Link
              href="/solutions/global-selling"
              className="tw-rounded-lg tw-border-[2px] tw-border-[#E0EDFA] tw-text-[#333] tw-no-underline tw-bg-[#EAF3F9] tw-p-3 tw-relative"
            >
              <div>
                <div className="tw-w-8 tw-h-8 tw-p-[10px] tw-font-bold tw-bg-[#1E88E5] tw-text-white tw-flex tw-items-center tw-justify-center tw-rounded-lg">
                  01
                </div>
                <div className="tw-mt-1 lg:tw-mt-3 tw-font-bold ">
                  {" "}
                  {n("forTeam.useCases.global")}
                </div>
              </div>
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Image_4_a345495417.png"
                }
                className="tw-mt-3 tw-pr-6"
                alt=""
                width={273}
                height={212}
              />
              <div
                className={clsx(
                  "tw-absolute tw-opacity-80 tw-text-xs tw-rotate-[270deg] tw-bottom-8 tw-right-[-10px] tw-font-medium tw-text-[#666]",
                  router?.locale === "vi" ? "tw-hidden" : "",
                )}
              >
                {n("forTeam.useCases.label")}
              </div>
            </Link>
            <Link
              href="/solutions/all-in-one-shipping-management"
              className="tw-rounded-lg tw-border-[2px] tw-border-[#E0EDFA] tw-text-[#333] tw-no-underline tw-bg-[#EAF3F9] tw-p-3 tw-relative"
            >
              <div>
                <div className="tw-w-8 tw-h-8 tw-p-[10px] tw-font-bold tw-bg-[#1E88E5] tw-text-white tw-flex tw-items-center tw-justify-center tw-rounded-lg">
                  03
                </div>
                <div className="tw-mt-1 lg:tw-mt-3 tw-font-bold ">
                  {" "}
                  {n("forTeam.useCases.allInOne")}
                </div>
              </div>
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Rectangle_6690_eaf9914c42.svg"
                }
                className="tw-mt-3 tw-pr-6"
                alt=""
                width={263}
                height={201}
              />
              <div
                className={clsx(
                  "tw-absolute tw-opacity-80 tw-text-xs tw-rotate-[270deg] tw-bottom-8 tw-right-[-10px] tw-font-medium tw-text-[#666]",
                  router?.locale === "vi" ? "tw-hidden" : "",
                )}
              >
                {n("forTeam.useCases.label")}
              </div>
            </Link>
          </div>
          <div className="tw-grid tw-gap-4 tw-mt-5">
            <Link
              href="/solutions/omnichannel-selling"
              className="tw-rounded-lg tw-border-[2px] tw-border-[#E0EDFA] tw-text-[#333] tw-no-underline tw-bg-[#EAF3F9] tw-p-3 tw-relative"
            >
              <div>
                <div className="tw-w-8 tw-h-8 tw-p-[10px] tw-font-bold tw-bg-[#1E88E5] tw-text-white tw-flex tw-items-center tw-justify-center tw-rounded-lg">
                  02
                </div>
                <div className="tw-mt-1 lg:tw-mt-3 tw-font-bold ">
                  {" "}
                  {n("forTeam.useCases.omnichannel")}
                </div>
              </div>
              <Image
                src={"https://cms-strapi.ichiba.net/uploads/daa_3a409f4702.png"}
                className="tw-mt-3 tw-pr-6"
                alt=""
                width={273}
                height={212}
              />
              <div
                className={clsx(
                  "tw-absolute tw-opacity-80 tw-text-xs tw-rotate-[270deg] tw-bottom-8 tw-right-[-10px] tw-font-medium tw-text-[#666]",
                  router?.locale === "vi" ? "tw-hidden" : "",
                )}
              >
                {n("forTeam.useCases.label")}
              </div>
            </Link>
            <Link
              href="/solutions/multichannel-fulfillment"
              className="tw-rounded-lg tw-border-[2px] tw-border-[#E0EDFA] tw-text-[#333] tw-no-underline tw-bg-[#EAF3F9] tw-py-3 tw-relative"
            >
              <div className="tw-mx-3">
                <div className="tw-w-8 tw-h-8 tw-p-[10px] tw-font-bold tw-bg-[#1E88E5] tw-text-white tw-flex tw-items-center tw-justify-center tw-rounded-lg">
                  04
                </div>
                <div className="tw-mt-1 lg:tw-mt-3 tw-font-bold ">
                  {" "}
                  {n("forTeam.useCases.multichannel")}
                </div>
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/Multi_channel_fulfillment_1_9c4765d2b6.png"
                  }
                  className="tw-mt-5 tw-w-full"
                  alt=""
                  width={263}
                  height={201}
                />
              </div>
              <div
                className={clsx(
                  "tw-absolute tw-opacity-80 tw-text-xs tw-rotate-[270deg] tw-bottom-8 tw-right-[-10px] tw-font-medium tw-text-[#666]",
                  router?.locale === "vi" ? "tw-hidden" : "",
                )}
              >
                {n("forTeam.useCases.label")}
              </div>
            </Link>
          </div>
        </div>

        <div className="tw-grid tw-grid-cols-2 tw-gap-4 tw-mt-4">
          <Link
            href="/#"
            className="tw-rounded-lg tw-border-[2px] tw-border-[#E0EDFA] tw-text-[#333] tw-no-underline tw-bg-[#EAF3F9] tw-relative"
          >
            <div className=" tw-p-3">
              <div className="tw-w-8 tw-h-8 tw-p-[10px] tw-font-bold tw-bg-[#1E88E5] tw-text-white tw-flex tw-items-center tw-justify-center tw-rounded-lg">
                05
              </div>
              <div className="tw-mt-1 lg:tw-mt-3 tw-font-bold ">
                {" "}
                {n("forTeam.useCases.boostRevenue")}
              </div>
            </div>
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Frame_1171276292_e88a1c9c18.png"
              }
              className="tw-pr-6 tw-left-0 tw-bottom-0"
              alt=""
              width={273}
              height={212}
            />
            <div
              className={clsx(
                "tw-absolute tw-opacity-80 tw-text-xs tw-rotate-[270deg] tw-bottom-8 tw-right-[-10px] tw-font-medium tw-text-[#666]",
                router?.locale === "vi" ? "tw-hidden" : "",
              )}
            >
              {n("forTeam.useCases.label")}
            </div>
          </Link>
          <Link
            href="/solutions/performance-marketing-growth-solution"
            className="tw-rounded-lg tw-border-[2px] tw-border-[#E0EDFA] tw-text-[#333] tw-no-underline tw-bg-[#EAF3F9] tw-relative"
          >
            <div className=" tw-p-3">
              <div className="tw-w-8 tw-h-8 tw-p-[10px] tw-font-bold tw-bg-[#1E88E5] tw-text-white tw-flex tw-items-center tw-justify-center tw-rounded-lg">
                06
              </div>
              <div className="tw-mt-1 lg:tw-mt-3 tw-font-bold ">
                {" "}
                {n("forTeam.useCases.performance")}
              </div>
            </div>
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Frame_1171276292_e88a1c9c18.png"
              }
              className="tw-pr-6 tw-absolute tw-left-0 tw-bottom-0"
              alt=""
              width={273}
              height={212}
            />
            <div
              className={clsx(
                "tw-absolute tw-opacity-80 tw-text-xs tw-rotate-[270deg] tw-bottom-8 tw-right-[-10px] tw-font-medium tw-text-[#666]",
                router?.locale === "vi" ? "tw-hidden" : "",
              )}
            >
              {n("forTeam.useCases.label")}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
