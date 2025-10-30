import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const HelpBuild = () => {
    const { t } = useTranslation("digital-landingpage");
    const strapiDomain = "https://cms-strapi.ichiba.net";
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
        <section className="container tw-translate-y-[-32%] lg:tw-translate-y-[-30%]" ref={elementRef}>
            <div className={clsx(
                "lg:tw-text-center lg:tw-w-[80%] tw-mx-auto ",
                isVisible
                ? "tw-scale-100 tw-opacity-100"
                : "tw-opacity-0 tw-scale-75",
            )}>
                <p className="tw-text-2xl lg:tw-text-4xl tw-mb-0 tw-font-bold ">
                    {t("helpBuild.letIchiBaOne")} <span className="tw-text-[#F57C00]">{t("helpBuild.storeFont")}</span>{t("helpBuild.helpYouBuild")}
                </p>
                <div className="tw-h-1 tw-w-full tw-my-5 lg:tw-mt-7 lg:tw-mb-10
                            tw-bg-gradient-to-l tw-from-[#FDE9D3] tw-via-[#e8e2e2] "></div>
            </div>

            <div className={clsx(
                "tw-grid lg:tw-grid-cols-3 tw-gap-4 tw-animate-showOn tw-transition-all tw-duration-300",
                isVisible
                ? "tw-scale-100 tw-opacity-100"
                : "tw-opacity-0 tw-scale-75",
            )}>
                <div className="tw-flex lg:tw-grid tw-gap-4">
                    <Image
                        src={`${strapiDomain}` + t("helpBuild.omnichannel.icon")}
                        alt={`${strapiDomain}` + t("helpBuild.omnichannel.icon")}
                        width={32}
                        height={32}
                        quality={100}
                        className="tw-max-w-[32px] tw-max-h-[32px] lg:tw-max-w-[48px] lg:tw-max-h-[48px] tw-w-full tw-h-full"
                    />
                    <div className="">
                        <p className="tw-text-lg lg:tw-text-2xl tw-mb-2 tw-font-bold line-clamp-1">
                            {t("helpBuild.omnichannel.title")}
                        </p>
                        <p className="tw-text-sm lg:tw-text-base">
                            {t("helpBuild.omnichannel.content")}
                        </p>
                    </div>
                </div>
                <div className="tw-flex lg:tw-grid tw-gap-4">
                    <Image
                        src={`${strapiDomain}` + t("helpBuild.dataSecurity.icon")}
                        alt={`${strapiDomain}` + t("helpBuild.dataSecurity.icon")}
                        width={32}
                        height={32}
                        quality={100}
                        className="tw-max-w-[32px] tw-max-h-[32px] lg:tw-max-w-[48px] lg:tw-max-h-[48px] tw-w-full tw-h-full"
                    />
                    <div className="">
                        <p className="tw-text-lg lg:tw-text-2xl tw-mb-2 tw-font-bold line-clamp-1">
                            {t("helpBuild.dataSecurity.title")}
                        </p>
                        <p className="tw-text-sm lg:tw-text-base">
                            {t("helpBuild.dataSecurity.content")}
                        </p>
                    </div>
                </div>
                <div className="tw-flex lg:tw-grid tw-gap-4">
                    <Image
                        src={`${strapiDomain}` + t("helpBuild.optimized.icon")}
                        alt={`${strapiDomain}` + t("helpBuild.optimized.icon")}
                        width={32}
                        height={32}
                        quality={100}
                        className="tw-max-w-[32px] tw-max-h-[32px] lg:tw-max-w-[48px] lg:tw-max-h-[48px] tw-w-full tw-h-full"
                    />
                    <div className="">
                        <p className="tw-text-lg lg:tw-text-2xl tw-mb-2 tw-font-bold line-clamp-1">
                            {t("helpBuild.optimized.title")}
                        </p>
                        <p className="tw-text-sm lg:tw-text-base">
                            {t("helpBuild.optimized.content")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HelpBuild;