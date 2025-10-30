/* eslint-disable @next/next/link-passhref */
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
export default function ForTeam() {
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
    <div className="tw-mt-6 " ref={elementRef}>
      <div className={clsx( "tw-transition-all tw-duration-500 tw-delay-400", isVisible
              ? "tw-translate-y-0 tw-opacity-100"
              : "tw-opacity-0 tw-translate-y-14",)}>
        <div className="tw-bg-[#05102A] tw-px-4 tw-py-6 tw-bg-[url(https://cms-strapi.ichiba.net/uploads/dd_8ce142ab01.png)] tw-bg-cover tw-text-white">
          <div className="tw-flex tw-gap-2 tw-items-center">
            <div className="tw-w-[10px] tw-h-[10px] tw-bg-[#F57C00]"></div>
            <div className="">
              <div className="tw-text-xl tw-font-bold">
                {n("forTeam.forTeam.label")}
              </div>
            </div>
          </div>
          <div className="tw-ml-5 tw-text-sm tw-mt-1 tw-opacity-80">
            {n("forTeam.forTeam.content")}
          </div>
        </div>
        <div className="tw-my-5 tw-mx-4">
          <div className="tw-grid tw-grid-cols-2 tw-gap-4 tw-justify-center">
            <div className="tw-grid tw-gap-4 tw-mb-5">
              <Link href="/" className="tw-text-white tw-relative tw-no-underline">
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/Frame_2_f1fac13edd.png"
                  }
                  className="tw-border-[2px] tw-borer-[#E0EDFA] tw-rounded-lg tw-max-w-[315px] tw-w-full "
                  alt=""
                  width={315}
                  height={395}
                />
                <div className="tw-absolute tw-top-3 tw-left-3">
                  <div className="tw-w-8 tw-h-8 tw-p-[10px] tw-font-bold tw-bg-[#F57C00] tw-flex tw-items-center tw-justify-center tw-rounded-lg">
                    01
                  </div>
                  <div className="tw-mt-1 tw-font-bold ">
                    {" "}
                    {n("forTeam.forTeam.business")}
                  </div>
                </div>
                <div className={clsx("tw-absolute tw-opacity-80 tw-text-xs tw-rotate-[270deg] tw-bottom-8 tw-right-[-10px] tw-font-medium",router?.locale === 'vi' ? 'tw-hidden' : '')}>
                  {n("forTeam.forTeam.label")}
                </div>
              </Link>
              <Link href="/" className="tw-text-white tw-relative tw-no-underline">
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/as_bb9db5234f.png"
                  }
                  className="tw-border-[2px] tw-borer-[#E0EDFA] tw-rounded-lg tw-max-w-[315px] tw-w-full"
                  alt=""
                  width={315}
                  height={395}
                />
                <div className="tw-absolute tw-top-3 tw-left-3">
                  <div className="tw-w-8 tw-h-8 tw-p-[10px] tw-font-bold tw-bg-[#F57C00] tw-flex tw-items-center tw-justify-center tw-rounded-lg">
                    03
                  </div>
                  <div className="tw-mt-1 tw-font-bold ">
                    {" "}
                    {n("forTeam.forTeam.technical")}
                  </div>
                </div>
                <div className={clsx("tw-absolute tw-opacity-80 tw-text-xs tw-rotate-[270deg] tw-bottom-8 tw-right-[-10px] tw-font-medium",router?.locale === 'vi' ? 'tw-hidden' : '')}>
                  {n("forTeam.forTeam.label")}
                </div>
              </Link>
            </div>
            <div className="tw-grid tw-gap-4 tw-mt-5">
              <Link href="/" className="tw-text-white tw-relative tw-no-underline">
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/dd_2_b11b72f5bd.png"
                  }
                  className="tw-border-[2px] tw-borer-[#E0EDFA] tw-rounded-lg tw-max-w-[315px] tw-w-full "
                  alt=""
                  width={315}
                  height={395}
                />
                <div className="tw-absolute tw-top-3 tw-left-3">
                  <div className="tw-w-8 tw-h-8 tw-p-[10px] tw-font-bold tw-bg-[#F57C00] tw-flex tw-items-center tw-justify-center tw-rounded-lg">
                    02
                  </div>
                  <div className="tw-mt-1 tw-font-bold ">
                    {" "}
                    {n("forTeam.forTeam.marketing")}
                  </div>
                </div>
                <div className={clsx("tw-absolute tw-opacity-80 tw-text-xs tw-rotate-[270deg] tw-bottom-8 tw-right-[-10px] tw-font-medium",router?.locale === 'vi' ? 'tw-hidden' : '')}>
                  {n("forTeam.forTeam.label")}
                </div>
              </Link>
              <Link href="/" className="tw-text-white tw-relative tw-no-underline">
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/dd_3_52be26ffaf.png"
                  }
                  className="tw-border-[2px] tw-borer-[#E0EDFA] tw-rounded-lg tw-max-w-[315px] tw-w-full "
                  alt=""
                  width={315}
                  height={395}
                />
                <div className="tw-absolute tw-top-3 tw-left-3">
                  <div className="tw-w-8 tw-h-8 tw-p-[10px] tw-font-bold tw-bg-[#F57C00] tw-flex tw-items-center tw-justify-center tw-rounded-lg">
                    03
                  </div>
                  <div className="tw-mt-1 tw-font-bold ">
                    {" "}
                    {n("forTeam.forTeam.operation")}
                  </div>
                </div>
                <div className={clsx("tw-absolute tw-opacity-80 tw-text-xs tw-rotate-[270deg] tw-bottom-8 tw-right-[-10px] tw-font-medium",router?.locale === 'vi' ? 'tw-hidden' : '')}>
                  {n("forTeam.forTeam.label")}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
