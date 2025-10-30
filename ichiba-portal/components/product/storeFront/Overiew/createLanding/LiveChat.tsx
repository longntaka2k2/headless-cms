import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Stickybar from "./StickyBar";
const LiveChat = () => {
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
    <div className="" ref={elementRef}>
      <div
        className={clsx(
          "lg:tw-mt-6 tw-mt-3 tw-grid lg:tw-grid-cols-2 lg:tw-gap-6 tw-gap-4 ",
        )}
      >
        <div
          className={clsx(
            "lg:tw-rounded-2xl tw-rounded-lg tw-border tw-border-[#ddd] lg:tw-px-6 tw-px-3 tw-py-4 tw-flex tw-items-center lg:tw-gap-10 tw-gap-4 ",
            "tw-transition-all tw-duration-300",
            isVisible
              ? "tw-translate-x-[0px] tw-opacity-100"
              : "tw-translate-x-[-40px] tw-opacity-0",
          )}
        >
          <div className="lg:tw-mb-0 tw-mb-4">
            <div className="lg:tw-text-2xl tw-text-lg tw-font-bold">
              {b("createLandingpages.liveChat.title")}
            </div>
            <div className="lg:tw-text-base tw-text-sm tw-mt-2">
              {b("createLandingpages.liveChat.content")}
            </div>
          </div>
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Frame_427318590_bafa8e6e64.svg"
            alt="popup"
            width={250}
            height={158}
            className="lg:tw-max-w-[250px] tw-max-w-[118px]"
          />
        </div>
        <div
          className={clsx(
            "lg:tw-rounded-2xl tw-rounded-lg tw-border tw-border-[#ddd] lg:tw-px-6 tw-px-3 tw-py-4 tw-flex tw-items-center lg:tw-gap-10 tw-gap-4",
            "tw-transition-all tw-duration-300",
            isVisible
              ? "tw-translate-x-[0px] tw-opacity-100"
              : "tw-translate-x-[40px] tw-opacity-0",
          )}
        >
          <div>
            <div className="lg:tw-text-2xl tw-text-lg tw-font-bold">
              {b("createLandingpages.bannerAds.title")}
            </div>
            <div className="lg:tw-text-base tw-text-sm tw-mt-2">
              {b("createLandingpages.bannerAds.content")}
            </div>
          </div>
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Frame_427318588_a3957647b5.svg"
            alt="form"
            width={139}
            height={176}
            className="lg:tw-max-w-[139px] tw-max-w-[105px]"
          />
        </div>
      </div>
      <div className={clsx("lg:tw-mt-6 tw-mt-3 tw-grid lg:tw-grid-cols-12 lg:tw-gap-6 tw-gap-4 ","tw-transition-all tw-duration-500",
            isVisible
              ? "tw-translate-y-[0px] tw-opacity-100"
              : "tw-translate-y-[60px] tw-opacity-0",
          )}>
        <div className="lg:tw-col-span-5 lg:tw-rounded-2xl tw-rounded-lg tw-border tw-border-[#ddd]  lg:tw-pt-6 tw-pt-4 lg:tw-gap-10 tw-gap-4 tw-overflow-hidden">
          <div className=" tw-max-w-[336px] lg:tw-px-6 tw-px-3">
            <div className="lg:tw-text-2xl tw-text-lg tw-font-bold">
              {b("createLandingpages.email.title")}
            </div>
            <div className="lg:tw-text-base tw-text-sm tw-mt-2">
              {b("createLandingpages.email.content")}
            </div>
          </div>
          <Image
            src="https://cms-strapi.ichiba.net/uploads/6193f8f9ea45b181080c8c23_popup_list_building_c_1_d1fa9c35eb.png"
            alt="popup"
            width={380}
            height={230}
            className="md:tw-max-w-[380px] tw-max-w-[280px] tw-float-right lg:tw-mt-9 tw-mt-4"
          />
        </div>
        <div className="lg:tw-rounded-2xl lg:tw-col-span-7 tw-rounded-lg tw-border tw-border-[#ddd]  lg:tw-pt-6 tw-pt-4 lg:tw-gap-10 tw-gap-4 tw-overflow-hidden">
          <div className="lg:tw-max-w-[520px] tw-max-w-[336px] lg:tw-px-6 tw-px-3">
            <div className="lg:tw-text-2xl tw-text-lg tw-font-bold">
              {b("createLandingpages.personal.title")}
            </div>
            <div className="lg:tw-text-base tw-text-sm tw-mt-2">
              {b("createLandingpages.personal.content")}
            </div>
          </div>
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Frame_1171275769_1_915a39bfda.png"
            alt="form"
            width={595}
            height={255}
            className="md:tw-max-w-[595px] tw-float-right lg:tw-mt-6 tw-mt-4"
          />
        </div>
      </div>
    </div>
  );
};
export default LiveChat;
