/* eslint-disable @next/next/link-passhref */
import { clsx } from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";

export default function Industries() {
  const n = useTranslation("new-home-page").t;
  const [isVisible, setVisible] = useState(false);
  const router = useRouter()
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
      className={clsx(
        "tw-mt-6 tw-transition-all tw-duration-500 tw-delay-400",
        isVisible
          ? "tw-translate-y-0 tw-opacity-100"
          : "tw-opacity-0 tw-translate-y-14",
      )}
      ref={elementRef}
    >
      <div className="tw-bg-[#05102A] tw-px-4 tw-py-6 tw-bg-[url(https://cms-strapi.ichiba.net/uploads/dd_8ce142ab01.png)] tw-bg-cover tw-text-white">
        <div className="tw-flex tw-gap-2 tw-items-center">
          <div className="tw-w-[10px] tw-h-[10px] tw-bg-[#F57C00]"></div>
          <div className="">
            <div className="tw-text-xl tw-font-bold">
              {n("forTeam.industries.label")}
            </div>
          </div>
        </div>
        <div className="tw-ml-5 tw-text-sm tw-mt-1 tw-opacity-80">
          {n("forTeam.industries.content")}
        </div>
      </div>
      <div className="tw-my-5 tw-mx-4">
        <div className="tw-grid tw-grid-cols-2 tw-gap-4 tw-justify-center">
          <div className="tw-grid tw-gap-4 tw-mb-5">
            <Link href="/solutions/retails" className="tw-text-white tw-relative tw-no-underline">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/asian_young_woman_sell_clothes_entrepreneur_working_home_startup_small_business_owner_sme_1_cf059a1ec9.png"
                }
                className="tw-border-[2px] tw-borer-[#E0EDFA] tw-rounded-lg tw-max-w-[315px] tw-w-full "
                alt=""
                width={315}
                height={395}
              />
              <div className="tw-absolute tw-top-3 tw-left-3">
                <div className="tw-w-8 tw-h-8 tw-p-[10px] tw-font-bold tw-bg-[#7D54F3] tw-flex tw-items-center tw-justify-center tw-rounded-lg">
                  01
                </div>
                <div className="tw-mt-1 tw-font-bold ">
                  {" "}
                  {n("forTeam.industries.retail")}
                </div>
              </div>
              <div className={clsx("tw-absolute tw-opacity-80 tw-text-xs tw-rotate-[270deg] tw-bottom-8 tw-right-[-10px] tw-font-medium",router?.locale === 'vi' ? 'tw-hidden' : '')}>
                {n("forTeam.industries.label")}
              </div>
            </Link>
            <Link href="/solutions/mother-baby" className="tw-text-white tw-relative tw-no-underline">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/bibo_mart_1086360_1_db129d0b4c.png"
                }
                className="tw-border-[2px] tw-borer-[#E0EDFA] tw-rounded-lg tw-max-w-[315px] tw-w-full"
                alt=""
                width={315}
                height={395}
              />
              <div className="tw-absolute tw-top-3 tw-left-3">
                <div className="tw-w-8 tw-h-8 tw-p-[10px] tw-font-bold tw-bg-[#7D54F3] tw-flex tw-items-center tw-justify-center tw-rounded-lg">
                  03
                </div>
                <div className="tw-mt-1 tw-font-bold ">
                  {" "}
                  {n("forTeam.industries.mother")}
                </div>
              </div>
              <div className={clsx("tw-absolute tw-opacity-80 tw-text-xs tw-rotate-[270deg] tw-bottom-8 tw-right-[-10px] tw-font-medium",router?.locale === 'vi' ? 'tw-hidden' : '')}>
                {n("forTeam.industries.label")}
              </div>
            </Link>
            <Link href="/solutions/logistics-company" className="tw-text-white tw-relative tw-no-underline">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/warehouse_worker_looking_shelves_with_packages_walking_through_large_warehouse_storage_distribution_area_1_6928003e62.png"
                }
                className="tw-border-[2px] tw-borer-[#E0EDFA] tw-rounded-lg tw-max-w-[315px] tw-w-full"
                alt=""
                width={315}
                height={395}
              />
              <div className="tw-absolute tw-top-3 tw-left-3">
                <div className="tw-w-8 tw-h-8 tw-p-[10px] tw-font-bold tw-bg-[#7D54F3] tw-flex tw-items-center tw-justify-center tw-rounded-lg">
                  05
                </div>
                <div className="tw-mt-1 tw-font-bold ">
                  {" "}
                  {n("forTeam.industries.logistic")}
                </div>
              </div>
              <div className={clsx("tw-absolute tw-opacity-80 tw-text-xs tw-rotate-[270deg] tw-bottom-8 tw-right-[-10px] tw-font-medium",router?.locale === 'vi' ? 'tw-hidden' : '')}>
                {n("forTeam.industries.label")}
              </div>
            </Link>
          </div>
          <div className="tw-grid tw-gap-4 tw-mt-5">
            <Link href="/solutions/fashion-beauty" className="tw-text-white tw-relative tw-no-underline">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/online_fashion_shopping_collage_1_d770248bcd.png"
                }
                className="tw-border-[2px] tw-borer-[#E0EDFA] tw-rounded-lg tw-max-w-[315px] tw-w-full "
                alt=""
                width={315}
                height={395}
              />
              <div className="tw-absolute tw-top-3 tw-left-3">
                <div className="tw-w-8 tw-h-8 tw-p-[10px] tw-font-bold tw-bg-[#7D54F3] tw-flex tw-items-center tw-justify-center">
                  02
                </div>
                <div className="tw-mt-1 tw-font-bold ">
                  {" "}
                  {n("forTeam.industries.fashion")}
                </div>
              </div>
              <div className={clsx("tw-absolute tw-opacity-80 tw-text-xs tw-rotate-[270deg] tw-bottom-8 tw-right-[-10px] tw-font-medium",router?.locale === 'vi' ? 'tw-hidden' : '')}>
                {n("forTeam.industries.label")}
              </div>
            </Link>
            <Link href="/solutions/electronics" className="tw-text-white tw-relative tw-no-underline">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/seller_man_mobile_phone_professional_consultant_tech_store_shop_1_1_9344b042dd.png"
                }
                className="tw-border-[2px] tw-borer-[#E0EDFA] tw-rounded-lg tw-max-w-[315px] tw-w-full "
                alt=""
                width={315}
                height={395}
              />
              <div className="tw-absolute tw-top-3 tw-left-3">
                <div className="tw-w-8 tw-h-8 tw-p-[10px] tw-font-bold tw-bg-[#7D54F3] tw-flex tw-items-center tw-justify-center tw-rounded-lg">
                  04
                </div>
                <div className="tw-mt-1 tw-font-bold ">
                  {" "}
                  {n("forTeam.industries.electronics")}
                </div>
              </div>
              <div className={clsx("tw-absolute tw-opacity-80 tw-text-xs tw-rotate-[270deg] tw-bottom-8 tw-right-[-10px] tw-font-medium",router?.locale === 'vi' ? 'tw-hidden' : '')}>
                {n("forTeam.industries.label")}
              </div>
            </Link>
            <Link href="/solutions/dropshipping" className="tw-text-white tw-relative tw-no-underline">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/business_owner_working_home_office_packaging_1_e79168f5b9.png"
                }
                className="tw-border-[2px] tw-borer-[#E0EDFA] tw-rounded-lg tw-max-w-[315px] tw-w-full "
                alt=""
                width={315}
                height={395}
              />
              <div className="tw-absolute tw-top-3 tw-left-3">
                <div className="tw-w-8 tw-h-8 tw-p-[10px] tw-font-bold tw-bg-[#7D54F3] tw-flex tw-items-center tw-justify-center tw-rounded-lg">
                  06
                </div>
                <div className="tw-mt-1 tw-font-bold ">
                  {" "}
                  {n("forTeam.industries.drop")}
                </div>
              </div>
              <div className={clsx("tw-absolute tw-opacity-80 tw-text-xs tw-rotate-[270deg] tw-bottom-8 tw-right-[-10px] tw-font-medium",router?.locale === 'vi' ? 'tw-hidden' : '')}>
                {n("forTeam.industries.label")}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
