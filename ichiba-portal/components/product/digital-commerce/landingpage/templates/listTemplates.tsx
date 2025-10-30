import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";

const ListTemplates = () => {
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

    const listTemplates1 = [
        { image: "/uploads/b8a493384fae2d22c0ede8c8726c70bc_a2134b61c1.jpg" },
        { image: "/uploads/ee0c39cf9d83eb9e24c02946fa09dbf6_a834315321.jpg" },
        { image: "/uploads/3472e346367bba0378c2c397cd38cacc_68e992c497.jpg" },
        { image: "/uploads/245aef5f11cf9138f1ce75e3336798b0_97c3da2b3a.jpg" },
        { image: "/uploads/b8a493384fae2d22c0ede8c8726c70bc_a2134b61c1.jpg" },
        { image: "/uploads/ee0c39cf9d83eb9e24c02946fa09dbf6_a834315321.jpg" }
    ]
    const listTemplates2 = [
        { image: "/uploads/18fae36ad4985cf723a54898429a37b1_1c6bbb86c4.jpg" },
        { image: "/uploads/319dbb6955ab9cc2372c9e1dcaa00b88_2b2a8956ca.jpg" },
        { image: "/uploads/478a88b95b3cf9a9d21fc94f5648bbdb_2922c03062.jpg" },
        { image: "/uploads/029e5647369bb6db355c1ebada22318a_73721a7a6e.jpg" },
        { image: "/uploads/37a8b2784d4bd7b178bc826f9c0c32d0_c82c472d4c.jpg" },
        { image: "/uploads/18fae36ad4985cf723a54898429a37b1_1c6bbb86c4.jpg" }
    ]

    return (
        <section className="tw-py-6 lg:tw-py-16 scroll-smooth" ref={elementRef}>
            <div className="tw-text-center tw-container">
                <p className="tw-text-2xl tw-font-bold lg:tw-text-4xl tw-pb-1 lg:tw-pb-2 ">
                    {t("templates.heading")}
                </p>
                <p className="text-sm lg:tw-text-lg tw-pb-4 lg:tw-pb-0">
                    {t("templates.subHeading")}
                </p>
                <button
                    // onClick={handleContactSale}
                    className="tw-text-ic-white-6 tw-w-[200px] tw-py-3 tw-px-3 tw-rounded-lg tw-bg-brand-primary tw-mb-6 lg:tw-my-10"
                >
                    {t("templates.textButton")}
                </button>
            </div>

            <div className={clsx(
                "tw-overflow-x-hidden tw-animate-showOn tw-transition-all tw-duration-300",
                isVisible
                ? "tw-scale-100 tw-opacity-100"
                : "tw-opacity-0 tw-scale-75",
            )}>
                <div className="tw-flex tw-gap-4 tw-pb-4 tw-justify-center list-template-right">
                    {
                        listTemplates1.map((item: any, index: number) => {
                            return (
                                <>
                                    <div className="tw-min-w-[310px] tw-min-h-[174px] lg:tw-min-w-[514px] lg:tw-min-h-[288px] tw-rounded-2xl"
                                        style={{
                                            backgroundImage: `url(${strapiDomain}${item.image})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center",
                                            backgroundSize: "cover",
                                        }}>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="tw-flex tw-gap-4 tw-justify-center list-template-left">
                    {
                        listTemplates2.map((item: any, index: number) => {
                            return (
                                <>
                                    <div className="tw-min-w-[310px] tw-min-h-[174px] lg:tw-min-w-[514px] lg:tw-min-h-[288px] tw-rounded-2xl"
                                        style={{
                                            backgroundImage: `url(${strapiDomain}${item.image})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center",
                                            backgroundSize: "cover",
                                        }}>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>

        </section>
    )
}

export default ListTemplates;