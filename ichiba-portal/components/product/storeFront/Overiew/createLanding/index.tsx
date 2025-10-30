import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Stickybar from "./StickyBar";
import LiveChat from "./LiveChat";
const CreateLandingPage = () => {
  const b = useTranslation("build-store-front").t;
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
    <div className="container" ref={elementRef}>
      <div className="lg:tw-flex lg:tw-justify-between tw-grid tw-gap-5 tw-items-center tw-mb-4">
        <div
          className={clsx(
            "lg:tw-max-w-[60%]",
            isVisible ? "tw-animate-leftShow" : "tw-opacity-0",
          )}
        >
          <h2 className="lg:tw-text-4xl tw-text-2xl tw-font-bold">
            {b("createLandingpages.title")}
          </h2>
          <div className="tw-mt-2 lg:tw-text-lg tw-text-sm tw-text-[#666]">
            {b("createLandingpages.subtitle")}
          </div>
        </div>
        <div
          className={clsx(
            "tw-no-underline lg:tw-text-base tw-text-sm",
            isVisible ? "tw-animate-rightShow" : "tw-opacity-0",
          )}
        >
          <Link
            target="_blank"
            href="https://org.ichiba.net"
            className="tw-no-underline  tw-px-6 tw-py-3 tw-rounded-lg tw-bg-[#F57C00] tw-border tw-border-[#F57C00] tw-font-medium tw-text-white"
          >
            {b("createLandingpages.tryforfree")}
          </Link>
        </div>
      </div>
      <div className={clsx("tw-grid lg:tw-grid-cols-2 lg:tw-gap-6 tw-gap-4 ")}>
        <div
          className={clsx(
            "lg:tw-rounded-2xl tw-rounded-lg tw-border tw-border-[#ddd] lg:tw-p-6 lg:tw-pb-10 tw-px-3 tw-py-4 tw-transition-all tw-duration-300",
            isVisible
              ? "tw-translate-y-0 tw-opacity-100"
              : "tw-translate-y-10 tw-opacity-0",
            "hover:tw-bg-[linear-gradient(270deg,rgba(235,238,250,0.00),rgba(172,190,255,0.30)_99%)] hover:tw-shadow-1",
          )}
        >
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Frame_427318572_f10cac736b.png"
            }
            alt="build-store-front"
            width={540}
            height={379}
            quality={100}
          />
          <div className="lg:tw-mt-10 tw-mt-4">
            <div className="lg:tw-text-2xl tw-text-lg tw-font-bold">
              {b("createLandingpages.landingPage.title")}
            </div>
            <div className="lg:tw-text-base tw-text-sm tw-mt-2">
              {b("createLandingpages.landingPage.content")}
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "tw-grid lg:tw-gap-6 tw-gap-4 lg:tw-grid-rows-2 tw-transition-all tw-duration-300",
            "",
            isVisible
              ? "tw-translate-x-0 tw-opacity-100"
              : "tw-translate-x-10 tw-opacity-0",
          )}
        >
          <div
            className={clsx(
              "tw-transition-all tw-duration-300 ",
              "lg:tw-rounded-2xl tw-rounded-lg tw-border tw-border-[#ddd] lg:tw-px-6 tw-px-3 tw-py-4 lg:tw-flex tw-items-center lg:tw-gap-10 tw-gap-4",
              "hover:tw-bg-[linear-gradient(360deg,rgba(235,238,250,0.00)_0,rgba(172,190,255,0.30)_99%)] hover:tw-shadow-1 hover:tw-translate-y-[-5px]",
            )}
          >
            <div className="lg:tw-mb-0 tw-mb-4">
              <div className="lg:tw-text-2xl tw-text-lg tw-font-bold">
                {b("createLandingpages.popup.title")}
              </div>
              <div className="lg:tw-text-base tw-text-sm tw-mt-2">
                {b("createLandingpages.popup.content")}
              </div>
            </div>
            <Image
              src="https://cms-strapi.ichiba.net/uploads/6193fb412822413e1ca0e467_popup_free_shipping_c_2_7e39467e4e.svg"
              alt="popup"
              width={258}
              height={145}
            />
          </div>
          <div
            className={clsx(
              "tw-transition-all tw-duration-300 ",
              "lg:tw-rounded-2xl tw-rounded-lg tw-border tw-border-[#ddd] lg:tw-px-6 tw-px-3 tw-py-4 lg:tw-flex tw-items-center lg:tw-gap-10 tw-gap-4",
              "hover:tw-bg-[linear-gradient(360deg,rgba(235,238,250,0.00)_0,rgba(172,190,255,0.30)_99%)] hover:tw-shadow-1 hover:tw-translate-y-[-5px]",
            )}
          >
            <div>
              <div className="lg:tw-text-2xl tw-text-lg tw-font-bold">
                {b("createLandingpages.form.title")}
              </div>
              <div className="lg:tw-text-base tw-text-sm tw-mt-2">
                {b("createLandingpages.form.content")}
              </div>
            </div>
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Frame_427318572_914b90ecac.svg"
              alt="form"
              width={228}
              height={208}
              className="lg:tw-max-w-[228px] tw-max-w-[116px]"
            />
          </div>
        </div>
      </div>
      <Stickybar />
      <LiveChat />
    </div>
  );
};
export default CreateLandingPage;
