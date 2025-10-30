import { useTranslation } from "next-i18next";
import BoostSale from "./boostSale";
import BrandDevelopment from "./brandDevelopment";
import LeadsGathering from "./leadsGathering";
import OtherGoals from "./otherGoals";
import ProductIntroduction from "./productIntroduction";
import Promotions from "./promotions";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const FlexiblyCustomize = () => {
    const { t } = useTranslation("digital-landingpage");
    // const flexiblyCustomize = (
    //     t("flexiblyCustomize.items", {
    //         returnObjects: true,
    //     }) as string[]
    // )

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const listItems = [
        {
            title: t("flexiblyCustomize.boostSale.title"),
            key: 1,
        },
        {
            title: t("flexiblyCustomize.brandDevelopment.title"),
            key: 2,
        },
        {
            title: t("flexiblyCustomize.promotions.title"),
            key: 6,
        },
        {
            title: t("flexiblyCustomize.productIntroduction.title"),
            key: 5,
        },
        {
            title: t("flexiblyCustomize.leadsGathering.title"),
            key: 3,
        },
        {
            title: t("flexiblyCustomize.ortherGoals.title"),
            key: 4,
        },
    ];
    const [typeItem, setType] = useState(listItems[0].key as number);

    useEffect(() => {
        let selectedProductIndex = listItems.findIndex(
            (item) => item.key === typeItem
        );

        if (selectedProductIndex === -1) {
            selectedProductIndex = 0; // Nếu không tìm thấy, đặt lại về phần tử đầu tiên
        } else {
            selectedProductIndex++;
            if (selectedProductIndex === listItems.length) {
                selectedProductIndex = 0; // Nếu đã đạt cuối danh sách, quay lại phần tử đầu tiên
            }
        }

        const timeoutID = setTimeout(() => {
            setType(listItems[selectedProductIndex]?.key);
        }, 7000);

        return () => {
            clearTimeout(timeoutID);
        };
    }, [typeItem, listItems]);
    const RenderCPN = () => {
        switch (typeItem) {
            case 1:
                return <BoostSale />;
            case 2:
                // code block
                return <BrandDevelopment />;
            case 3:
                // code block\
                return <LeadsGathering />;
            case 4:
                // code block
                return <OtherGoals />;
            case 5:
                // code block
                return <ProductIntroduction />;
            case 6:
                // code block
                return <Promotions />;
            default:
                // code block
                return <BoostSale />;
        }
    };
    const [isVisible, setVisible] = useState(false);
    const [showOn, setShowOn] = useState("");
    const elementRef = useRef(null);

    useEffect(() => {
        setShowOn("tw-opacity-0");
        const timeout = setTimeout(() => {
          setShowOn("tw-animate-showOn");
        }, 50);
    
        return () => clearTimeout(timeout); // Clear timeout nếu active thay đổi trước khi timeout được kích hoạt
      }, [typeItem]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 1 / 6 });

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
            className="tw-bg-[linear-gradient(0deg,_rgba(213,_219,_235,_0.00)_2.61%,_#F2F3F7_99.7%);] tw-py-6 lg:tw-py-[60px]"
            ref={elementRef}
        >
            <div className="container tw-px-4 tw-lg:px-0">
                <div
                    className={clsx(
                        "tw-transition-all tw-duration-200 tw-delay-200",
                    )}
                >
                    <div className="tw-text-2xl tw-font-bold tw-text-center lg:tw-text-4xl">
                        {t("flexiblyCustomize.heading")}
                    </div>
                </div>
                <div
                    className={clsx(
                        "tw-flex lg:tw-flex-wrap lg:tw-items-center lg:tw-justify-center",
                        "tw-pt-6 tw-overflow-x-scroll tw-w-full lg:tw-w-[70%] lg:tw-mx-auto",
                        "lg:tw-overflow-auto tw-pb-3 lg:tw-pb-[34px] tw-gap-3",
                        "tw-transition-all tw-duration-400 tw-delay-200",
                    )}
                >
                    {listItems.map((value, index) => (
                        <div
                            key={index}
                            className={`tw-flex tw-items-center tw-cursor-pointer`}
                            onClick={() => setType(value.key)}
                        >
                            <div
                                className={clsx(
                                    `tw-text-sm lg:tw-text-lg tw-w-max tw-py-2 tw-px-3 lg:tw-py-3 lg:tw-px-5 tw-rounded-lg tw-transition-colors tw-duration-500 tw-ease ${value.key === typeItem
                                        ? "tw-text-[#fff] tw-relatives tw-bg-black"
                                        : "tw-bg-[#FFF]"
                                        }`,
                                        isVisible
                                        ? "tw-animate-showOn"
                                        : "tw-opacity-0 ",
                                )}
                            >
                                {value.title}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={clsx("tw-mt-2 lg:tw-max-h-[603px] tw-max-h-[1006px]", showOn)}>
                    <RenderCPN />
                </div>
            </div>
        </div>
    );
};
export default FlexiblyCustomize;
