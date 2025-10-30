import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const BuildOptimized = () => {
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
        <section className={clsx(
            "tw-relative"
        )} 
            ref={elementRef}
            style={{
                backgroundImage: `url(${strapiDomain}/uploads/Rectangle_7244_4c4a69c27f.png)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>
            <div className="tw-py-6 lg:tw-py-[60px] tw-text-[#fff] container">
                <div className={clsx(
                    "text-center tw-animate-showOn tw-transition-all tw-duration-300",
                    isVisible
                        ? "tw-scale-100 tw-opacity-100"
                        : "tw-opacity-0 tw-scale-75",
                )}>
                    <p className="tw-text-2xl tw-font-bold tw-mb-0 lg:tw-text-4xl">
                        {t("buildOptimized.heading")}
                    </p>
                    <p className="text-sm lg:tw-text-lg tw-mt-2 tw-mb-6 lg:tw-mb-10"
                        style={{
                            color: "rgba(255, 255, 255, 0.80)"
                        }}>
                        {t("buildOptimized.subHeading")}
                    </p>
                </div>

                <div className="tw-grid tw-gap-3 tw-pb-72" ref={elementRef}>
                    <div className="lg:tw-grid lg:tw-grid-cols-5 tw-gap-3">
                        <div className={clsx(
                            "tw-col-span-3 tw-pt-4 tw-px-4 lg:tw-pt-8 lg:tw-px-9 tw-border tw-border-[#F5F5F5] tw-rounded-2xl",
                            isVisible ? "tw-animate-showOn lg:tw-animate-leftShow" : "tw-opacity-0",
                        )}>
                            <div className="tw-w-[70%]">
                                <p className="tw-text-lg lg:tw-text-2xl tw-mb-0 tw-font-bold">
                                    {t("buildOptimized.boxGather.heading")}
                                </p>
                                <p className="tw-text-sm lg:tw-text-base tw-mt-2 tw-mb-5"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.80)"
                                    }}>
                                    {t("buildOptimized.boxGather.subHeading")}
                                </p>
                            </div>
                            <div className="tw-rounded-t-xl tw-overflow-hidden lg:tw-translate-x-[20%] tw-max-w-[532px] tw-max-h-[428px] tw-w-full tw-h-full">
                                <Image
                                    src={`${strapiDomain}` + t("buildOptimized.boxGather.image")}
                                    alt={`${strapiDomain}` + t("buildOptimized.boxGather.image")}
                                    className="tw-max-w-[532px] tw-max-h-[428px] tw-w-full tw-h-full"
                                    width={532}
                                    height={428}
                                    quality={100}
                                />
                            </div>
                        </div>
                        <div className={clsx(
                            "tw-col-span-2 tw-rounded-2xl tw-py-4 tw-px-4 lg:tw-py-6 lg:tw-px-9 tw-mt-3 lg:tw-mt-0",
                            isVisible ? "tw-animate-showOn lg:tw-animate-rightShow" : "tw-opacity-0",
                        )}
                            style={{
                                background: "rgba(212, 237, 255, 0.20)"
                            }}>
                            <div>
                                <p className="tw-text-lg lg:tw-text-2xl tw-font-bold">
                                    {t("buildOptimized.boxImprove.heading")}
                                </p>
                                <p className="tw-text-sm lg:tw-text-base"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.80)"
                                    }}>
                                    {t("buildOptimized.boxImprove.subHeading")}
                                </p>
                            </div>
                            <div className="tw-mt-6 lg:tw-mt-[60px]">
                                <Image
                                    src={`${strapiDomain}` + t("buildOptimized.boxImprove.image")}
                                    alt={`${strapiDomain}` + t("buildOptimized.boxImprove.image")}
                                    width={268}
                                    height={281}
                                    quality={100}
                                    className="tw-max-w-[268px] tw-max-h-[281px] tw-w-full tw-h-full tw-mx-auto"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={clsx(
                        "tw-pt-4 tw-px-4 lg:tw-pt-10 lg:tw-px-9 text-center tw-rounded-2xl tw-overflow-hidden tw-animate-showOn tw-transition-all tw-duration-300",
                        isVisible
                        ? "tw-scale-100 tw-opacity-100"
                        : "tw-opacity-0 tw-scale-75",
                    )}
                        style={{
                            backgroundImage: `url(${strapiDomain}/uploads/Frame_1171275823_1083a7140a.png)`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                        }}>
                        <div>
                            <p className="tw-text-lg lg:tw-text-2xl tw-font-bold">
                                {t("buildOptimized.boxCompatible.heading")}
                            </p>
                            <p className="tw-text-sm lg:tw-text-base"
                                style={{
                                    color: "rgba(255, 255, 255, 0.80)"
                                }}>
                                {t("buildOptimized.boxCompatible.subHeading")}
                            </p>
                        </div>
                        <div className="tw-pt-6 lg:tw-pt-10">
                            <Image
                                src={`${strapiDomain}` + t("buildOptimized.boxCompatible.image")}
                                alt={`${strapiDomain}` + t("buildOptimized.boxCompatible.image")}
                                width={877}
                                height={414}
                                quality={100}
                                className="tw-max-w-[877px] tw-max-h-[414px] tw-w-full tw-h-full tw-mx-auto"
                            />
                        </div>
                    </div>

                    <div className="tw-grid lg:tw-grid-cols-2 tw-gap-3">
                        <div className={clsx(
                            "tw-border tw-border-[#F5F5F5] tw-rounded-2xl tw-overflow-hidden",
                            "tw-pt-4 tw-pl-4 lg:tw-pt-8 lg:tw-pl-9 lg:tw-pr-9 tw-grid lg:tw-grid-cols-2 tw-gap-3 tw-items-center",
                            isVisible ? "tw-animate-showOn lg:tw-animate-leftShow" : "tw-opacity-0",
                        )}>
                            <div>
                                <p className="tw-text-lg lg:tw-text-2xl tw-font-bold">
                                    {t("buildOptimized.boxSEO.heading")}
                                </p>
                                <p className="tw-text-sm lg:tw-text-base"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.80)"
                                    }}>
                                    {t("buildOptimized.boxSEO.subHeading")}
                                </p>
                            </div>

                            <div className="tw-rounded-lg tw-overflow-hidden
                                        tw-grid tw-justify-end">
                                <Image
                                    src={`${strapiDomain}` + t("buildOptimized.boxSEO.image")}
                                    alt={`${strapiDomain}` + t("buildOptimized.boxSEO.image")}
                                    width={242}
                                    height={179}
                                    quality={100}
                                    className="tw-max-w-[246px] tw-max-h-[183px] lg:tw-max-w-[242px] lg:tw-max-h-[179px] tw-w-full tw-h-full tw-mx-auto"
                                />
                            </div>
                        </div>
                        <div className={clsx(
                            "tw-border tw-border-[#F5F5F5] tw-rounded-2xl",
                            "tw-pt- tw-pl-4 lg:tw-pt-8 lg:tw-pl-9 tw-overflow-hidden",
                            isVisible ? "tw-animate-showOn lg:tw-animate-rightShow" : "tw-opacity-0",
                        )}>
                            <div>
                                <p className="tw-text-lg lg:tw-text-2xl tw-font-bold">
                                    {t("buildOptimized.boxCustomizable.heading")}
                                </p>
                                <p className="tw-text-sm lg:tw-text-base"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.80)"
                                    }}>
                                    {t("buildOptimized.boxCustomizable.subHeading")}
                                </p>
                            </div>
                            <div className="tw-grid tw-justify-end tw-rounded-2xl-2xl tw-overflow-hidden">
                                <Image
                                    src={`${strapiDomain}` + t("buildOptimized.boxCustomizable.image")}
                                    alt={`${strapiDomain}` + t("buildOptimized.boxCustomizable.image")}
                                    width={521}
                                    height={219}
                                    quality={100}
                                    className="tw-max-w-[521px] tw-max-h-[219px] tw-w-full tw-h-full tw-mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BuildOptimized