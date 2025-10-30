import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
const Stickybar = () => {
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
  return(
    <div ref={elementRef}
        className={clsx(
          "lg:tw-mt-6 tw-mt-3 lg:tw-px-6 tw-pt-4 tw-px-3 lg:tw-flex lg:tw-justify-between lg:tw-items-center lg:tw-rounded-2xl tw-rounded-lg",
          "lg:tw-bg-[linear-gradient(270deg,_rgba(235,_238,_250,_0.00)_0.05%,_rgba(172,_190,_255,_0.50)_99.96%)]",
          "tw-bg-[linear-gradient(328deg,_rgba(235,_238,_250,_0.00)_12.25%,_rgba(172,_190,_255,_0.50)_92.7%)]",
          "tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)] tw-transition-all tw-duration-500 tw-delay-200",
          isVisible
            ? "tw-translate-y-0 tw-opacity-100"
            : "tw-translate-y-10 tw-opacity-0",
        )}
      >
        <div className="lg:tw-max-w-[336px]">
          <div className="lg:tw-text-2xl tw-text-lg tw-font-bold">
            {b("createLandingpages.stickybar.title")}
          </div>
          <div className="lg:tw-text-base tw-text-sm tw-mt-2">
            {b("createLandingpages.stickybar.content")}
          </div>
        </div>
        <Image
          src="https://cms-strapi.ichiba.net/uploads/5b844403765ae0792973aa9b_stickybar_mobile_img_mini_p_1600_1_f0113a7175.svg"
          className="tw-w-full"
          alt="stickybar"
          width={619}
          height={270}
        />
      </div>
  )
}
export default Stickybar
