import { useTranslation } from "next-i18next";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Link from "next/link";

const Outstanding = () => {

    const { t } = useTranslation("digital-landingpage");
    const whyChoose = (
        t("whyChoose.items", {
            returnObjects: true,
        }) as string[]
    )
    const [rotateChevron, setRotateChevron] = useState(false);
    const rotate = rotateChevron === true ? "rotate(0deg)" : "rotate(180deg)";
    const [itemDetail, setItem] = useState(whyChoose[0] as any);

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
        <section className="container tw-pb-6 lg:tw-pb-20" ref={elementRef}>
            <div className={clsx(
                "tw-animate-showOn tw-transition-all tw-duration-300",
                isVisible
                ? "tw-scale-100 tw-opacity-100"
                : "tw-opacity-0 tw-scale-75",
            )}>
                <p className="tw-text-2xl tw-font-bold lg:tw-text-4xl tw-mb-0">
                    {t("contactUs.heading")}
                </p>
                <p className="text-sm lg:tw-text-lg tw-text-[#666] tw-mt-2 tw-mb-6 lg:tw-mb-10">
                    {t("contactUs.subHeading")}
                </p>
            </div>

            <div className="lg:tw-pt-10 tw-grid lg:tw-grid-cols-2 lg:tw-gap-20 tw-justify-center">
                <div className={clsx(
                    isVisible ? "tw-animate-showOn lg:tw-animate-leftShow" : "tw-opacity-0",
                )}>
                    {whyChoose.map((value: any, index: number) =>
                        itemDetail.title === value.title ? (
                            <div className="" key={index}>
                                <div className="tw-pb-4 lg:tw-pb-7 tw-rounded-[20px] tw-overflow-hidden
                                                tw-shadow-[0px_17px_30px_0px_rgba(0,_0,_0,_0.07)]">
                                    <div className="tw-h-1 tw-w-full tw-bg-gradient-to-l tw-from-[#FDE9D3] tw-via-[#e8e2e2] "></div>
                                    <div className="tw-flex tw-items-center tw-justify-between tw-px-3 tw-pt-3 lg:tw-px-7 lg:tw-pt-6">
                                        <div className="tw-flex tw-gap-2 tw-items-center">
                                            <div>
                                                <Image
                                                    src={"https://cms-strapi.ichiba.net" + value.icon}
                                                    alt={"https://cms-strapi.ichiba.net" + value.icon}
                                                    className="tw-max-w-[24px] tw-max-h-[24px] lg:tw-max-w-[32px] lg:tw-max-h-[32px] tw-w-full tw-h-full"
                                                    width={32}
                                                    height={32}
                                                />
                                            </div>
                                            <div className="tw-font-bold tw-text-contact tw-lg:text-lg tw-text-base tw-text-[#F57C00]">
                                                {value.title}
                                            </div>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faChevronDown}
                                                className="tw-w-3 tw-h-3 lg:tw-w-5 lg:tw-h-5"
                                                style={{
                                                    transform: rotate,
                                                    transition: "all 0.2s linear",
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="tw-px-3 tw-pt-3 tw-pb-5">
                                        <div className="tw-text-sm tw-ml-[36px] tw-pt-1" key={index}>
                                            {value.content}
                                        </div>
                                        <div className="lg:tw-hidden tw-mt-4 tw-w-full tw-h-full tw-max-w-[532px] tw-max-h-[428px]">
                                            <Image
                                                src={"https://cms-strapi.ichiba.net" + value.img}
                                                alt={value.content}
                                                className="tw-rounded-xl tw-w-full tw-h-full tw-max-w-[532px] tw-max-h-[428px]"
                                                width={532}
                                                height={428}
                                                quality={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div
                                key={index}
                                className={clsx(
                                    "tw-flex tw-items-center tw-justify-between tw-px-3 tw-py-4 lg:tw-px-7 lg:tw-py-7 tw-cursor-pointer tw-mt-2",
                                    t("whyChoose.items").indexOf(itemDetail) !== (index + 1 || index - 1) &&
                                    "tw-border-t tw-border-[#ddd]"
                                )}
                                onClick={() => setItem(value)}
                            >
                                <div className="tw-flex tw-gap-2 tw-items-center">
                                    <div>
                                        <Image
                                            src={"https://cms-strapi.ichiba.net" + value.icon}
                                            alt={"https://cms-strapi.ichiba.net" + value.icon}
                                            className="tw-max-w-[24px] tw-max-h-[24px] lg:tw-max-w-[32px] lg:tw-max-h-[32px] tw-w-full tw-h-full"
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                    <div className="tw-font-bold lg:tw-text-lg tw-text-base">
                                        {value.title}
                                    </div>
                                </div>
                                <div>
                                    <FontAwesomeIcon
                                        icon={faChevronDown}
                                        className="tw-w-3 tw-h-3 lg:tw-w-5 lg:tw-h-5"
                                    />
                                </div>
                            </div>
                        )
                    )}
                </div>

                <div className={clsx(
                    "tw-rounded-[20px] tw-overflow-hidden tw-w-full tw-h-full tw-max-w-[532px] tw-max-h-[428px]",
                    isVisible ? "tw-animate-showOn lg:tw-animate-rightShow" : "tw-opacity-0",
                )}>
                    <Image
                        src={"https://cms-strapi.ichiba.net" + itemDetail.img}
                        alt={"https://cms-strapi.ichiba.net" + itemDetail.title}
                        className="tw-hidden lg:tw-block tw-w-full tw-h-full tw-max-w-[532px] tw-max-h-[428px]"
                        width={532}
                        height={428}
                        quality={100}
                    />
                </div>
            </div>
        </section>
    )
}

export default Outstanding;