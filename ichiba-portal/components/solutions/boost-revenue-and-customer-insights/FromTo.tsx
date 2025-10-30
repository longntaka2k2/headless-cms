/* eslint-disable @next/next/link-passhref */
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const FromTo = () => {
  const { t } = useTranslation("boost-and-customer");
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

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
      { threshold: 1 / 3 },
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
        "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Frame_1171276039_1_9e6535b344.svg')]",
        "lg:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Frame_1171276039_7a8bd40bb4.svg')]",
        "tw-bg-cover tw-bg-no-repeat tw-py-6 lg:tw-pt-10 lg:tw-pb-20 tw-overflow-hidden",
        isVisible ? "tw-animate-showOn" : "tw-opacity-0",
      )}
    >
      <div className="tw-container">
        <h2 className="tw-text-2xl lg:tw-text-[40px] tw-font-bold tw-leading-8 lg:tw-leading-[48px] tw-mb-6 lg:tw-mb-10 tw-text-center">
          {t("fromTo.heading.0")}
          <br />
          <span className="tw-text-brand-primary">{t("fromTo.heading.1")}</span>
        </h2>

        <div className="tw-overflow-x-scroll tw-hidden lg:tw-block tw-no-scrollbar">
          <div className="tw-relative tw-w-[1175px] tw-h-[585px] tw-mx-auto">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Group_1171276399_1_081fe042c9.svg"
              width={1176}
              height={585}
              alt="ichiba"
              className="tw-w-full tw-h-full"
            />

            {(
              t(`fromTo.contents`, {
                returnObjects: true,
              }) as string[]
            ).map((item: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  "tw-bg-white tw-px-5 tw-py-4 tw-rounded-xl tw-flex tw-gap-4 tw-items-center",
                  index === 0
                    ? "tw-absolute tw-top-0 tw-left-0 tw-w-[565px]"
                    : "",
                  index === 1
                    ? "tw-absolute tw-bottom-[210px] tw-left-[44px] tw-w-[477px]"
                    : "",
                  index === 2
                    ? "tw-absolute tw-top-[40px] tw-right-0 tw-w-[450px] tw-h-[128px]"
                    : "",
                )}
              >
                <Image
                  src={item.icon}
                  width={40}
                  height={40}
                  alt="icon"
                  className="tw-w-10 tw-h-10"
                />
                <p className="tw-mb-0 tw-text-base">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="tw-overflow-x-scroll lg:tw-hidden tw-no-scrollbar">
          <div className="tw-relative tw-w-[350px] tw-h-[1035px] tw-mx-auto">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Group_1171276399_4169ccd665.svg"
              width={358}
              height={1035}
              alt="ichiba"
              className="tw-w-full tw-h-full"
            />
            {(
              t(`fromTo.contents`, {
                returnObjects: true,
              }) as string[]
            ).map((item: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  "tw-bg-white tw-px-5 tw-py-4 tw-rounded-xl tw-flex tw-gap-4 tw-items-center",
                  index === 0
                    ? "tw-absolute tw-top-0 tw-right-0 tw-w-[350px]"
                    : "",
                  index === 1
                    ? "tw-absolute tw-top-[270px] tw-right-0 tw-w-[320px]"
                    : "",
                  index === 2
                    ? "tw-absolute tw-bottom-[310px] tw-right-0 tw-w-[310px] tw-h-[112px]"
                    : "",
                )}
              >
                <Image
                  src={item.icon}
                  width={40}
                  height={40}
                  alt="icon-close"
                  className="tw-w-10 tw-h-10"
                />
                <p className="tw-mb-0 tw-text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromTo;
