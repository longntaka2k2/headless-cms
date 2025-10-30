/* eslint-disable @next/next/link-passhref */
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ForTeamPC = () => {
  const n = useTranslation("new-home-page").t;
  const [active, setActive] = useState(0);

  const [isVisible, setVisible] = useState(false);

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
      { threshold: 1 / 8 },
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

  useEffect(() => {
    const handleScroll = () => {
      // const component1 = document.getElementById("for-team");
      const component1 = document.getElementById("use-case");
      const component2 = document.getElementById("industries");

      const rect1: any = component1?.getBoundingClientRect();
      const rect2: any = component2?.getBoundingClientRect();
      // const rect3: any = component3?.getBoundingClientRect();

      const isComponent1Visible =
        rect1.top < window.innerHeight && rect1.bottom >= 0;
      const isComponent2Visible =
        rect2.top < window.innerHeight && rect2.bottom >= 0;
      // const isComponent3Visible =
      //   rect3.top < window.innerHeight && rect3.bottom >= 0;

      if (isComponent1Visible) {
        setActive(0);
      } else if (isComponent2Visible) {
        setActive(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={elementRef}>
      <div
        className={clsx(
          "tw-transition-all tw-duration-500 tw-delay-200",
          isVisible
            ? "tw-translate-y-0 tw-opacity-100"
            : "tw-opacity-0 tw-translate-y-14",
        )}
      >
        <div className="tw-flex tw-text-white lg:tw-container tw-gap-15">
          <ul
            className={clsx(
              "tw-sticky tw-top-[72px] tw-flex tw-flex-col tw-max-w-[500px] tw-h-[calc(100vh-72px)]",
            )}
          >
            {/* <li
              className={clsx(
                " tw-relative tw-pt-[60px] tw-pr-[60px] tw-transition-all tw-ease-in-out tw-duration-1000",
                "after:tw-absolute after:tw-top-0 after:tw-right-0 after:tw-z-[-1] after:tw-w-[100vh] after:tw-h-[100%] after:tw-bg-[#05102A] after:tw-rounded-t-[40px]",
                "after:tw-will-change-auto after:tw-transition-all after:tw-ease-in-out after:tw-duration-1000",
                active === 0
                  ? "after:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/ddaas_a539184276.png)] after:tw-bg-cover tw-h-[calc(100vh-360px)]"
                  : "tw-h-[180px]",
              )}
              style={{ willChange: "height" }}
            >
              <div className="tw-flex tw-gap-2 tw-items-center">
                <div className="tw-w-[10px] tw-h-[10px] tw-bg-[#F57C00]"></div>
                <div className="">
                  <div className="tw-text-3xl tw-font-bold">
                    {n("forTeam.forTeam.label")}
                  </div>
                </div>
              </div>
              <div
                className={clsx(
                  active === 0
                    ? " tw-text-lg tw-opacity-80 tw-animate-fade-in tw-delay-500 tw-duration-500"
                    : "tw-opacity-0 ",
                )}
              >
                <div className="tw-ml-5 tw-mt-1 ">
                  {n("forTeam.forTeam.content")}
                </div>
              </div>
            </li> */}
            <li
              className={clsx(
                " tw-relative tw-pt-[60px] tw-pr-[60px] tw-transition-all tw-ease-in-out tw-duration-1000",
                "after:tw-absolute after:tw-top-0 after:tw-right-0 after:tw-z-[-1] after:tw-w-[100vh] after:tw-h-[100%] after:tw-bg-[#05102A]",
                "after:tw-will-change-auto after:tw-transition-all after:tw-ease-in-out after:tw-duration-1000",
                active === 0
                  ? "after:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/ddaas_a539184276.png)] after:tw-bg-cover tw-h-[calc(100vh-360px)] "
                  : "tw-h-[180px]",
              )}
              style={{ willChange: "height" }}
            >
              <div className="tw-flex tw-gap-2 tw-items-center">
                <div className="tw-w-[10px] tw-h-[10px] tw-bg-[#1E88E5]"></div>
                <div className="">
                  <div className="tw-text-3xl tw-font-bold">
                    {n("forTeam.useCases.label")}
                  </div>
                </div>
              </div>
              <div
                className={clsx(
                  active === 0
                    ? " tw-text-lg tw-opacity-80 tw-animate-fade-in tw-delay-500 tw-duration-500"
                    : "tw-opacity-0 ",
                )}
              >
                <div className="tw-ml-5  tw-mt-1">
                  {n("forTeam.useCases.content")}
                </div>
              </div>
            </li>
            <li
              className={clsx(
                " tw-relative tw-pt-[60px] tw-pr-[60px] tw-transition-all tw-ease-in-out tw-duration-1000",
                "after:tw-absolute after:tw-top-0 after:tw-right-0 after:tw-z-[-1] after:tw-w-[100vh] after:tw-h-[100%] after:tw-bg-[#05102A] ",
                "after:tw-will-change-auto after:tw-transition-all after:tw-ease-in-out after:tw-duration-1000",
                active === 1
                  ? "after:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/ddaas_a539184276.png)] after:tw-bg-cover tw-h-[calc(100vh-360px)]"
                  : "tw-h-[180px]",
              )}
              style={{ willChange: "height" }}
            >
              <div className="tw-flex tw-gap-2 tw-items-center">
                <div className="tw-w-[10px] tw-h-[10px] tw-bg-[#7D54F3]"></div>
                <div className="">
                  <div className="tw-text-3xl tw-font-bold">
                    {n("forTeam.industries.label")}
                  </div>
                </div>
              </div>
              <div
                className={clsx(
                  active === 1
                    ? "tw-text-lg tw-opacity-80 tw-animate-fade-in tw-delay-500 tw-duration-500"
                    : "tw-opacity-0 ",
                )}
              >
                <div className="tw-ml-5 tw-mt-1">
                  {n("forTeam.industries.content")}
                </div>
              </div>
            </li>
          </ul>
          <div>
            {/* <ForTeam /> */}
            <UseCase />
            <Industries />
          </div>
        </div>
      </div>
    </div>
  );
};

const ForTeam = () => {
  const router = useRouter();
  const n = useTranslation("new-home-page").t;
  const [isVisible, setVisible] = useState(false);
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
      { threshold: 1 / 8 },
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
    <div id="for-team" className="tw-mt-10 " ref={elementRef}>
      <div className="tw-grid tw-grid-cols-2 tw-gap-6 tw-justify-center">
        <div className={clsx("tw-grid tw-gap-6 tw-mb-20")}>
          <Link
            href="/"
            className={clsx(
              "tw-text-white tw-no-underline tw-relative tw-transition-all tw-duration-500 tw-delay-400",
              isVisible
                ? "tw-translate-y-0 "
                : "tw-translate-y-10 tw-opacity-0",
            )}
          >
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Frame_2_f1fac13edd.png"
              }
              className="tw-border-[2px] tw-borer-[#E0EDFA] tw-rounded-2xl tw-max-w-[315px] tw-w-full "
              alt=""
              width={315}
              height={395}
            />
            <div className="tw-absolute tw-top-6 tw-left-6">
              <div className="tw-w-10 tw-h-10 tw-text-lg tw-p-[10px] tw-font-bold tw-bg-[#F57C00] tw-flex tw-items-center tw-justify-center tw-rounded-2xl">
                01
              </div>
              <div className="tw-mt-3 tw-font-bold tw-text-xl ">
                {n("forTeam.forTeam.business")}
              </div>
            </div>
            <div
              className={clsx(
                "tw-absolute tw-opacity-80  tw-rotate-[270deg] tw-bottom-12 tw-right-[-10px] tw-font-medium",
                router?.locale === "vi" ? "tw-hidden" : "",
              )}
            >
              {n("forTeam.forTeam.label")}
            </div>
          </Link>
          <Link
            href="/"
            className={clsx(
              "tw-text-white tw-no-underline tw-relative tw-transition-all tw-duration-500 tw-delay-1000",
              isVisible
                ? "tw-translate-y-0 "
                : "tw-translate-y-10 tw-opacity-0",
            )}
          >
            <Image
              src={"https://cms-strapi.ichiba.net/uploads/as_bb9db5234f.png"}
              className="tw-border-[2px] tw-borer-[#E0EDFA] tw-rounded-2xl tw-max-w-[315px] tw-w-full"
              alt=""
              width={315}
              height={395}
            />
            <div className="tw-absolute tw-top-6 tw-left-6">
              <div className="tw-w-10 tw-h-10 tw-text-lg tw-p-[10px] tw-font-bold tw-bg-[#F57C00] tw-flex tw-items-center tw-justify-center tw-rounded-2xl">
                03
              </div>
              <div className="tw-mt-3 tw-font-bold tw-text-xl ">
                {n("forTeam.forTeam.technical")}
              </div>
            </div>
            <div
              className={clsx(
                "tw-absolute tw-opacity-80  tw-rotate-[270deg] tw-bottom-12 tw-right-[-10px] tw-font-medium",
                router?.locale === "vi" ? "tw-hidden" : "",
              )}
            >
              {n("forTeam.forTeam.label")}
            </div>
          </Link>
        </div>
        <div className="tw-grid tw-gap-6 tw-mt-20">
          <Link
            href="/"
            className={clsx(
              "tw-text-white tw-no-underline tw-relative tw-transition-all tw-duration-500 tw-delay-700",
              isVisible
                ? "tw-translate-y-0 "
                : "tw-translate-y-10 tw-opacity-0",
            )}
          >
            <Image
              src={"https://cms-strapi.ichiba.net/uploads/dd_2_b11b72f5bd.png"}
              className="tw-border-[2px] tw-borer-[#E0EDFA] tw-rounded-2xl tw-max-w-[315px] tw-w-full "
              alt=""
              width={315}
              height={395}
            />
            <div className="tw-absolute tw-top-6 tw-left-6">
              <div className="tw-w-10 tw-h-10 tw-text-lg tw-p-[10px] tw-font-bold tw-bg-[#F57C00] tw-flex tw-items-center tw-justify-center tw-rounded-2xl">
                02
              </div>
              <div className="tw-mt-3 tw-font-bold tw-text-xl ">
                {n("forTeam.forTeam.marketing")}
              </div>
            </div>
            <div
              className={clsx(
                "tw-absolute tw-opacity-80  tw-rotate-[270deg] tw-bottom-12 tw-right-[-10px] tw-font-medium",
                router?.locale === "vi" ? "tw-hidden" : "",
              )}
            >
              {n("forTeam.forTeam.label")}
            </div>
          </Link>
          <Link
            href="/"
            className={clsx(
              "tw-text-white tw-no-underline tw-relative tw-transition-all tw-duration-500 tw-delay-[1200ms]",
              isVisible
                ? "tw-translate-y-0 "
                : "tw-translate-y-10 tw-opacity-0",
            )}
          >
            <Image
              src={"https://cms-strapi.ichiba.net/uploads/dd_3_52be26ffaf.png"}
              className="tw-border-[2px] tw-borer-[#E0EDFA] tw-rounded-2xl tw-max-w-[315px] tw-w-full "
              alt=""
              width={315}
              height={395}
            />
            <div className="tw-absolute tw-top-6 tw-left-6">
              <div className="tw-w-10 tw-h-10 tw-text-lg tw-p-[10px] tw-font-bold tw-bg-[#F57C00] tw-flex tw-items-center tw-justify-center tw-rounded-2xl">
                03
              </div>
              <div className="tw-mt-3 tw-font-bold tw-text-xl ">
                {n("forTeam.forTeam.operation")}
              </div>
            </div>
            <div
              className={clsx(
                "tw-absolute tw-opacity-80  tw-rotate-[270deg] tw-bottom-12 tw-right-[-10px] tw-font-medium",
                router?.locale === "vi" ? "tw-hidden" : "",
              )}
            >
              {n("forTeam.forTeam.label")}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
const UseCase = () => {
  const router = useRouter();

  const n = useTranslation("new-home-page").t;
  return (
    <div id="use-case" className="tw-mt-10 ">
      <div className="tw-grid tw-grid-cols-2 tw-gap-6">
        <div className="tw-grid tw-gap-6">
          <Link
            href="/solutions/global-selling"
            className="tw-no-underline tw-rounded-2xl tw-border-[2px] tw-border-[#E0EDFA] tw-bg-[#EAF3F9] tw-p-6 tw-relative"
          >
            <div>
              <div className="tw-w-10 tw-h-10 tw-text-lg tw-p-[10px] tw-font-bold tw-bg-[#1E88E5] tw-text-white tw-flex tw-items-center tw-justify-center tw-rounded-2xl">
                01
              </div>
              <div className=" lg:tw-mt-3 tw-font-bold tw-text-xl tw-text-[#333]">
                {n("forTeam.useCases.global")}
              </div>
            </div>
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Image_4_a345495417.png"
              }
              className="tw-mt-8 tw-pr-6"
              alt=""
              width={273}
              height={212}
            />
            <div
              className={clsx(
                "tw-absolute tw-opacity-80  tw-rotate-[270deg] tw-bottom-12 tw-right-[-10px] tw-font-medium tw-text-[#666]",
                router?.locale === "vi" ? "tw-hidden" : "",
              )}
            >
              {n("forTeam.useCases.label")}
            </div>
          </Link>
          <Link
            href="/solutions/all-in-one-shipping-management"
            className="tw-no-underline tw-rounded-2xl tw-border-[2px] tw-border-[#E0EDFA] tw-bg-[#EAF3F9] tw-p-6 tw-relative"
          >
            <div>
              <div className="tw-w-10 tw-h-10 tw-text-lg tw-p-[10px] tw-font-bold tw-bg-[#1E88E5] tw-text-white tw-flex tw-items-center tw-justify-center tw-rounded-2xl">
                03
              </div>
              <div className="tw-mt-1 lg:tw-mt-3 tw-font-bold tw-text-xl tw-text-[#333]">
                {n("forTeam.useCases.allInOne")}
              </div>
            </div>
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Rectangle_6690_eaf9914c42.svg"
              }
              className="tw-mt-10 tw-pr-6"
              alt=""
              width={263}
              height={201}
            />
            <div
              className={clsx(
                "tw-absolute tw-opacity-80  tw-rotate-[270deg] tw-bottom-12 tw-right-[-10px] tw-font-medium tw-text-[#666]",
                router?.locale === "vi" ? "tw-hidden" : "",
              )}
            >
              {n("forTeam.useCases.label")}
            </div>
          </Link>
        </div>
        <div className="tw-grid tw-gap-6 tw-mt-5">
          <Link
            href="/solutions/omnichannel-selling"
            className="tw-no-underline tw-rounded-2xl tw-border-[2px] tw-border-[#E0EDFA] tw-bg-[#EAF3F9] tw-p-6 tw-relative"
          >
            <div>
              <div className="tw-w-10 tw-h-10 tw-text-lg tw-p-[10px] tw-font-bold tw-bg-[#1E88E5] tw-text-white tw-flex tw-items-center tw-justify-center tw-rounded-2xl">
                02
              </div>
              <div className="tw-mt-1 lg:tw-mt-3 tw-font-bold tw-text-xl tw-text-[#333]">
                {n("forTeam.useCases.omnichannel")}
              </div>
            </div>
            <Image
              src={"https://cms-strapi.ichiba.net/uploads/daa_3a409f4702.png"}
              className="tw-mt-15 tw-pr-6"
              alt=""
              width={273}
              height={212}
            />
            <div
              className={clsx(
                "tw-absolute tw-opacity-80  tw-rotate-[270deg] tw-bottom-12 tw-right-[-10px] tw-font-medium tw-text-[#666]",
                router?.locale === "vi" ? "tw-hidden" : "",
              )}
            >
              {n("forTeam.useCases.label")}
            </div>
          </Link>
          <Link
            href="/solutions/multichannel-fulfillment"
            className="tw-no-underline tw-rounded-2xl tw-border-[2px] tw-border-[#E0EDFA] tw-bg-[#EAF3F9] tw-py-3 tw-relative"
          >
            <div className="tw-mx-3">
              <div className="tw-w-10 tw-h-10 tw-text-lg tw-p-[10px] tw-font-bold tw-bg-[#1E88E5] tw-text-white tw-flex tw-items-center tw-justify-center tw-rounded-2xl">
                04
              </div>
              <div className="tw-mt-1 lg:tw-mt-3 tw-font-bold tw-text-xl tw-text-[#333]">
                {n("forTeam.useCases.multichannel")}
              </div>
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Multi_channel_fulfillment_1_9c4765d2b6.png"
                }
                className="tw-mt-5 tw-w-full"
                alt=""
                width={501}
                height={212}
              />
            </div>
            <div
              className={clsx(
                "tw-absolute tw-opacity-80  tw-rotate-[270deg] tw-bottom-12 tw-right-[-10px] tw-font-medium tw-text-[#666]",
                router?.locale === "vi" ? "tw-hidden" : "",
              )}
            >
              {n("forTeam.useCases.label")}
            </div>
          </Link>
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-2 tw-gap-6 tw-mt-6">
        <Link
          href="/#"
          className="tw-no-underline tw-rounded-2xl tw-border-[2px] tw-border-[#E0EDFA] tw-bg-[#EAF3F9] tw-relative"
        >
          <div className=" tw-p-6">
            <div className="tw-w-10 tw-h-10 tw-text-lg tw-p-[10px] tw-font-bold tw-bg-[#1E88E5] tw-text-white tw-flex tw-items-center tw-justify-center tw-rounded-2xl">
              05
            </div>
            <div className="tw-mt-1 lg:tw-mt-3 tw-font-bold tw-text-xl tw-text-[#333]">
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
              "tw-absolute tw-opacity-80  tw-rotate-[270deg] tw-bottom-12 tw-right-[-10px] tw-font-medium tw-text-[#666]",
              router?.locale === "vi" ? "tw-hidden" : "",
            )}
          >
            {n("forTeam.useCases.label")}
          </div>
        </Link>
        <Link
          href="/solutions/performance-marketing-growth-solution"
          className="tw-no-underline tw-rounded-2xl tw-border-[2px] tw-border-[#E0EDFA] tw-bg-[#EAF3F9] tw-relative"
        >
          <div className=" tw-p-6">
            <div className="tw-w-10 tw-h-10 tw-text-lg tw-p-[10px] tw-font-bold tw-bg-[#1E88E5] tw-text-white tw-flex tw-items-center tw-justify-center tw-rounded-2xl">
              06
            </div>
            <div className="tw-mt-1 lg:tw-mt-3 tw-font-bold tw-text-xl tw-text-[#333]">
              {n("forTeam.useCases.performance")}
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
              "tw-absolute tw-opacity-80  tw-rotate-[270deg] tw-bottom-12 tw-right-[-10px] tw-font-medium tw-text-[#666]",
              router?.locale === "vi" ? "tw-hidden" : "",
            )}
          >
            {n("forTeam.useCases.label")}
          </div>
        </Link>
      </div>
    </div>
  );
};

const Industries = () => {
  const n = useTranslation("new-home-page").t;
  const router = useRouter();

  return (
    <div id="industries" className="tw-my-10 ">
      <div className="tw-grid tw-grid-cols-2 tw-gap-6 tw-justify-center">
        <div className="tw-grid tw-gap-6 tw-mb-20">
          <Link
            href="/solutions/retails"
            className="tw-text-white tw-relative tw-no-underline"
          >
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/asian_young_woman_sell_clothes_entrepreneur_working_home_startup_small_business_owner_sme_1_cf059a1ec9.png"
              }
              className="tw-border-[2px] tw-borer-[#E0EDFA] tw-rounded-2xl tw-max-w-[315px] tw-w-full "
              alt=""
              width={315}
              height={395}
            />
            <div className="tw-absolute tw-top-6 tw-left-6">
              <div className="tw-w-10 tw-h-10 tw-text-lg tw-p-[10px] tw-font-bold tw-bg-[#7D54F3] tw-flex tw-items-center tw-justify-center tw-rounded-2xl">
                01
              </div>
              <div className="tw-mt-3 tw-font-bold tw-text-xl ">
                {n("forTeam.industries.retail")}
              </div>
            </div>
            <div
              className={clsx(
                "tw-absolute tw-opacity-80  tw-rotate-[270deg] tw-bottom-12 tw-right-[-10px] tw-font-medium",
                router?.locale === "vi" ? "tw-hidden" : "",
              )}
            >
              {n("forTeam.industries.label")}
            </div>
          </Link>
          <Link
            href="/solutions/mother-baby"
            className="tw-text-white tw-relative tw-no-underline"
          >
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/bibo_mart_1086360_1_db129d0b4c.png"
              }
              className="tw-border-[2px] tw-borer-[#E0EDFA] tw-rounded-2xl tw-max-w-[315px] tw-w-full"
              alt=""
              width={315}
              height={395}
            />
            <div className="tw-absolute tw-top-6 tw-left-6">
              <div className="tw-w-10 tw-h-10 tw-text-lg tw-p-[10px] tw-font-bold tw-bg-[#7D54F3] tw-flex tw-items-center tw-justify-center tw-rounded-2xl">
                03
              </div>
              <div className="tw-mt-3 tw-font-bold tw-text-xl ">
                {n("forTeam.industries.mother")}
              </div>
            </div>
            <div
              className={clsx(
                "tw-absolute tw-opacity-80  tw-rotate-[270deg] tw-bottom-12 tw-right-[-10px] tw-font-medium",
                router?.locale === "vi" ? "tw-hidden" : "",
              )}
            >
              {n("forTeam.industries.label")}
            </div>
          </Link>
          <Link
            href="/solutions/logistics-company"
            className="tw-text-white tw-relative tw-no-underline"
          >
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/warehouse_worker_looking_shelves_with_packages_walking_through_large_warehouse_storage_distribution_area_1_6928003e62.png"
              }
              className="tw-border-[2px] tw-borer-[#E0EDFA] tw-rounded-2xl tw-max-w-[315px] tw-w-full"
              alt=""
              width={315}
              height={395}
            />
            <div className="tw-absolute tw-top-6 tw-left-6">
              <div className="tw-w-10 tw-h-10 tw-text-lg tw-p-[10px] tw-font-bold tw-bg-[#7D54F3] tw-flex tw-items-center tw-justify-center tw-rounded-2xl">
                05
              </div>
              <div className="tw-mt-3 tw-font-bold tw-text-xl ">
                {n("forTeam.industries.logistic")}
              </div>
            </div>
            <div
              className={clsx(
                "tw-absolute tw-opacity-80  tw-rotate-[270deg] tw-bottom-12 tw-right-[-10px] tw-font-medium",
                router?.locale === "vi" ? "tw-hidden" : "",
              )}
            >
              {n("forTeam.industries.label")}
            </div>
          </Link>
        </div>
        <div className="tw-grid tw-gap-6 tw-mt-20">
          <Link
            href="/solutions/fashion-beauty"
            className="tw-text-white tw-relative tw-no-underline"
          >
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/online_fashion_shopping_collage_1_d770248bcd.png"
              }
              className="tw-border-[2px] tw-borer-[#E0EDFA] tw-rounded-2xl tw-max-w-[315px] tw-w-full "
              alt=""
              width={315}
              height={395}
            />
            <div className="tw-absolute tw-top-6 tw-left-6">
              <div className="tw-w-10 tw-h-10 tw-text-lg tw-p-[10px] tw-font-bold tw-bg-[#7D54F3] tw-flex tw-items-center tw-justify-center">
                02
              </div>
              <div className="tw-mt-3 tw-font-bold tw-text-xl ">
                {n("forTeam.industries.fashion")}
              </div>
            </div>
            <div
              className={clsx(
                "tw-absolute tw-opacity-80  tw-rotate-[270deg] tw-bottom-12 tw-right-[-10px] tw-font-medium",
                router?.locale === "vi" ? "tw-hidden" : "",
              )}
            >
              {n("forTeam.industries.label")}
            </div>
          </Link>
          <Link
            href="/solutions/electronics"
            className="tw-text-white tw-relative tw-no-underline"
          >
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/seller_man_mobile_phone_professional_consultant_tech_store_shop_1_1_9344b042dd.png"
              }
              className="tw-border-[2px] tw-borer-[#E0EDFA] tw-rounded-2xl tw-max-w-[315px] tw-w-full "
              alt=""
              width={315}
              height={395}
            />
            <div className="tw-absolute tw-top-6 tw-left-6">
              <div className="tw-w-10 tw-h-10 tw-text-lg tw-p-[10px] tw-font-bold tw-bg-[#7D54F3] tw-flex tw-items-center tw-justify-center tw-rounded-2xl">
                04
              </div>
              <div className="tw-mt-3 tw-font-bold tw-text-xl ">
                {n("forTeam.industries.electronics")}
              </div>
            </div>
            <div
              className={clsx(
                "tw-absolute tw-opacity-80  tw-rotate-[270deg] tw-bottom-12 tw-right-[-10px] tw-font-medium",
                router?.locale === "vi" ? "tw-hidden" : "",
              )}
            >
              {n("forTeam.industries.label")}
            </div>
          </Link>
          <Link
            href="/solutions/dropshipping"
            className="tw-text-white tw-relative tw-no-underline"
          >
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/business_owner_working_home_office_packaging_1_e79168f5b9.png"
              }
              className="tw-border-[2px] tw-borer-[#E0EDFA] tw-rounded-2xl tw-max-w-[315px] tw-w-full "
              alt=""
              width={315}
              height={395}
            />
            <div className="tw-absolute tw-top-6 tw-left-6">
              <div className="tw-w-10 tw-h-10 tw-text-lg tw-p-[10px] tw-font-bold tw-bg-[#7D54F3] tw-flex tw-items-center tw-justify-center tw-rounded-2xl">
                06
              </div>
              <div className="tw-mt-3 tw-font-bold tw-text-xl ">
                {n("forTeam.industries.drop")}
              </div>
            </div>
            <div
              className={clsx(
                "tw-absolute tw-opacity-80  tw-rotate-[270deg] tw-bottom-12 tw-right-[-10px] tw-font-medium",
                router?.locale === "vi" ? "tw-hidden" : "",
              )}
            >
              {n("forTeam.industries.label")}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ForTeamPC;
